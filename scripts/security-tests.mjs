import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendDistFile = path.resolve(__dirname, '../backend/dist/server.js');

// Ensure backend is compiled before importing on fresh checkout
if (!fs.existsSync(backendDistFile)) {
  console.log('[TEST RUNNER] backend/dist/server.js not found. Compiling backend...');
  execSync('npm run build', { cwd: path.resolve(__dirname, '../backend'), stdio: 'inherit' });
}

process.env.NODE_ENV = 'test';
process.env.PORT = '5555';

// Import the compiled backend Express app
const { app } = await import(`file://${backendDistFile}`);

const PORT = 5555;
const server = app.listen(PORT, async () => {
  console.log(`[TEST RUNNER] Test server listening on http://127.0.0.1:${PORT}`);
  
  let passed = 0;
  let failed = 0;

  const assert = (condition, testName) => {
    if (condition) {
      console.log(`  ✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${testName}`);
      failed++;
    }
  };

  const request = (path, options = {}, body = null) => {
    return new Promise((resolve, reject) => {
      const req = http.request({
        hostname: '127.0.0.1',
        port: PORT,
        path,
        method: options.method || 'GET',
        headers: options.headers || {}
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          let json = null;
          try { json = JSON.parse(data); } catch {}
          resolve({ status: res.statusCode, headers: res.headers, raw: data, json });
        });
      });
      req.on('error', reject);
      if (body) {
        req.write(body);
      }
      req.end();
    });
  };

  try {
    console.log('\n--- 1. Testing Health Endpoint & Security Headers ---');
    const rootApiRes = await request('/api');
    assert(rootApiRes.status === 200, 'Root API returns HTTP 200');
    assert(rootApiRes.json?.service === 'JAI HIND SPORTS API', 'Root API service name is correct');

    const healthRes = await request('/api/health');
    assert(healthRes.status === 200, 'Health check returns HTTP 200');
    assert(healthRes.json?.status === 'ok', 'Health check status is "ok"');
    assert(!healthRes.json?.environment && !healthRes.json?.service, 'Health check does not leak environment or service internals');
    assert(healthRes.headers['x-content-type-options'] === 'nosniff', 'Helmet x-content-type-options is nosniff');
    assert(!healthRes.headers['x-powered-by'], 'x-powered-by header is hidden');

    console.log('\n--- 2. Testing Store Information Endpoint ---');
    const storeRes = await request('/api/store/info');
    assert(storeRes.status === 200, 'Store info returns HTTP 200');
    assert(storeRes.json?.name === 'JAI HIND SPORTS', 'Store name is verified JAI HIND SPORTS');
    assert(storeRes.json?.contact?.primaryPhone === '+91 87547 39973', 'Primary phone is +91 87547 39973');
    assert(storeRes.json?.contact?.secondaryPhone === '+91 96290 24175', 'Secondary phone is +91 96290 24175');
    assert(storeRes.json?.address?.pincode === '641035', 'Pincode is 641035');
    assert(typeof storeRes.json?.status?.isOpen === 'boolean', 'Dynamic IST status is computed correctly');

    console.log('\n--- 3. Testing Valid Enquiry Request & WhatsApp Target ---');
    const validEnquiryRes = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({
      name: 'Ramesh Kumar',
      phone: '+91 98765 43210',
      subject: 'Badminton Racket Stringing',
      message: 'What is the stringing availability for Yonex BG65?',
      productId: 'BR-01',
      productName: 'Yonex Astrox 88D'
    }));
    assert(validEnquiryRes.status === 200, 'Valid enquiry returns HTTP 200');
    assert(validEnquiryRes.json?.success === true, 'Enquiry success is true');
    assert(validEnquiryRes.json?.stored === false, 'Enquiry clearly indicates stored: false (no misleading persistence claim)');
    assert(validEnquiryRes.json?.whatsAppDirectUrl?.startsWith('https://wa.me/918754739973'), 'WhatsApp direct URL strictly targets primary number 918754739973');

    console.log('\n--- 4. Testing Primary WhatsApp Destination Integrity ---');
    // Ensure that arbitrary destination cannot be injected by client
    const injectedEnquiryRes = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({
      name: 'Test Customer',
      phone: '+91 98765 43210',
      message: 'Checking cricket bat availability',
      targetPhone: '919999999999', // attempt to inject custom destination
      destination: 'https://evil-site.com'
    }));
    assert(injectedEnquiryRes.status === 400, 'Injected arbitrary destination or phone fields rejected by strict schema');

    console.log('\n--- 5. Testing Invalid Enquiry Payloads ---');
    // Missing required message
    const invalidEnquiry1 = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({
      name: 'Ramesh Kumar',
      phone: '+91 98765 43210'
    }));
    assert(invalidEnquiry1.status === 400, 'Missing message returns HTTP 400');
    assert(invalidEnquiry1.json?.error === 'Validation Error', 'Returns clean Validation Error');

    // Invalid phone number format
    const invalidEnquiry2 = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({
      name: 'Ramesh Kumar',
      phone: 'not-a-phone-number',
      message: 'Need football boots size 9'
    }));
    assert(invalidEnquiry2.status === 400, 'Invalid phone format returns HTTP 400');

    // Unexpected extra fields (strict schema validation)
    const invalidEnquiry3 = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, JSON.stringify({
      name: 'Ramesh Kumar',
      phone: '+91 98765 43210',
      message: 'Need badminton shuttlecocks',
      isAdmin: true,
      injectedRole: 'superuser'
    }));
    assert(invalidEnquiry3.status === 400, 'Unexpected extra fields rejected with HTTP 400');

    console.log('\n--- 6. Testing Malformed JSON Payload ---');
    const malformedJsonRes = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, '{"name": "Broken JSON, missing close quote}');
    assert(malformedJsonRes.status === 400, 'Malformed JSON returns HTTP 400');
    assert(malformedJsonRes.json?.message?.includes('Malformed JSON'), 'Returns safe malformed JSON message without stack trace');
    assert(!malformedJsonRes.raw.includes('node_modules') && !malformedJsonRes.raw.includes('SyntaxError:'), 'No internal stack trace or file path leaked');

    console.log('\n--- 7. Testing Oversized Request Body (> 10KB) ---');
    const largePayload = JSON.stringify({
      name: 'Big Spammer',
      phone: '+91 98765 43210',
      message: 'A'.repeat(15000)
    });
    const oversizedRes = await request('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, largePayload);
    assert(oversizedRes.status === 413, 'Payload > 10KB rejected with HTTP 413 Payload Too Large');

    console.log('\n--- 8. Testing CORS Allowed & Rejected Origins ---');
    const corsAllowedRes = await request('/api/health', {
      headers: { 'Origin': 'http://localhost:3000' }
    });
    assert(corsAllowedRes.status === 200, 'Request from allowed origin returns HTTP 200');
    assert(corsAllowedRes.headers['access-control-allow-origin'] === 'http://localhost:3000', 'CORS header reflects allowed origin');

    const corsRejectedRes = await request('/api/health', {
      headers: { 'Origin': 'https://evil-hacker-site.org' }
    });
    assert(corsRejectedRes.status === 403, 'Request from unapproved origin rejected with HTTP 403');

    console.log('\n--- 9. Testing Consistent 404 & Safe Error Responses ---');
    const notFoundRes = await request('/api/non-existent-endpoint');
    assert(notFoundRes.status === 404, 'Unknown endpoint returns HTTP 404');
    assert(notFoundRes.json?.error === 'Not Found', 'Returns consistent JSON 404');
    assert(!notFoundRes.raw.includes('/app/applet') && !notFoundRes.raw.includes('stack'), '404 does not leak internal server paths or stack trace');

    console.log('\n--- 10. Testing Rate Limiting on Enquiry Endpoint ---');
    // Send calls until threshold is exceeded
    let rateLimited = false;
    for (let i = 0; i < 8; i++) {
      const res = await request('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }, JSON.stringify({
        name: 'Spam Bot',
        phone: '+91 99999 88888',
        message: 'Spam test message'
      }));
      if (res.status === 429) {
        rateLimited = true;
        assert(res.json?.error === 'Too Many Requests', 'Rate limit message returned cleanly on 429');
        break;
      }
    }
    assert(rateLimited, 'Enquiry rate limiting triggers HTTP 429 when threshold exceeded');

    console.log(`\n========================================`);
    console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log(`========================================\n`);

  } catch (err) {
    console.error('Test execution error:', err);
    failed++;
  } finally {
    server.close();
    process.exit(failed > 0 ? 1 : 0);
  }
});
