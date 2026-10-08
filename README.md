# JAI HIND SPORTS

Production-hardened web application and API service for **JAI HIND SPORTS**, Coimbatore's premier sports goods, gear, and accessories showroom.

---

## 🏛️ Architecture Overview

The repository features a decoupled architecture with dedicated frontend and backend workspaces:

```
jai-hind-sports/
├── api/                          # Vercel Serverless Function entry points (unified deployment)
│   ├── index.ts                  # /api entrypoint delegating to Express app
│   └── [...slug].ts              # Catch-all wildcard handler for /api/* subpaths
├── frontend/                     # React 19 + TypeScript + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/           # Accessible UI components with secure external links
│   │   ├── constants/            # Verified business info, address, hours, contact
│   │   ├── data/                 # Product catalogue and showroom showcase
│   │   ├── pages/                # Pages: HomePage, ShopPage, ShowcasePage, AboutPage
│   │   ├── services/             # API client (health, store info, enquiries)
│   │   └── types.ts              # Core TypeScript interfaces
│   ├── public/                   # Static assets & icons
│   ├── package.json              # Frontend package configuration
│   ├── tsconfig.json             # Frontend TypeScript configuration
│   └── vite.config.ts            # Vite config with API reverse proxy
│
├── backend/                      # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── app.ts                # Express app definition (shared by standalone & serverless)
│   │   ├── config/               # Environment configuration & origin whitelisting
│   │   ├── middleware/           # Helmet, rate limiting, CORS, error handling
│   │   ├── validators/           # Zod schema validation for API requests
│   │   └── server.ts             # Hardened standalone Express REST listener
│   ├── package.json              # Backend package configuration
│   └── tsconfig.json             # Backend TypeScript configuration
│
├── scripts/                      # Automated security test suite
├── package.json                  # Root monorepo workspace runner
├── vercel.json                   # Unified Vercel single-project routing & build config
├── .gitignore                    # Comprehensive secrets & build exclusions
└── README.md
```

---

## 🔒 Security Hardening Summary

1. **HTTP Security Headers**: Powered by `helmet`, enforcing `X-Content-Type-Options: nosniff`, removing `X-Powered-By`, and configuring production HSTS.
2. **CORS Hardening**: Strict origin whitelisting against `ALLOWED_ORIGINS` / `FRONTEND_URL`. Unknown browser origins are rejected with `HTTP 403 Forbidden`.
3. **Payload & Denial of Service Protection**: Request body parsing capped strictly at `10KB`.
4. **Input Validation**: Strict schema validation using `zod` for `POST /api/enquiry` (`.strict()` mode rejecting unexpected fields).
5. **Rate Limiting**: `express-rate-limit` prevents brute force and spam:
   - General API: 100 requests / 15 minutes per IP
   - Enquiry Submissions: 10 requests / 15 minutes per IP
6. **Customer Privacy (Zero PII Logging)**: Only non-sensitive event identifiers and status codes are logged (`[ENQUIRY_EVENT] id=... status=validated`). Customer names, phone numbers, and message bodies are never recorded in logs.
7. **Safe Redirect Construction**: WhatsApp enquiry URLs are constructed solely from the server's trusted constant number (`+91 87547 39973`), fully URL-encoded, preventing open redirects.
8. **Frontend Reverse-Tabnabbing Protection**: All external links (`target="_blank"`) enforce `rel="noopener noreferrer"`.
9. **Zero Vulnerabilities**: All dependencies in root, frontend, and backend audited clean (`0 vulnerabilities`).

---

## 🚀 Quick Start (One Command)

### Prerequisites
- Node.js (v20.19.0+ or v22.12.0+ required by Vite 8; Node 18 is unsupported)
- npm or bun

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Start Entire Application
From the root directory:
```bash
npm run dev
```
This runs both services concurrently:
- **Frontend**: `http://localhost:3000` (React + Vite)
- **Backend API**: `http://localhost:5000` (Express + TypeScript)

---

## ⚡ Unified Vercel Single-Project Deployment

The entire repository deploys seamlessly as **ONE single project** on Vercel from your GitHub repository without requiring separate frontend and backend hosting services.

### How It Works

1. **Build Step**: Vercel executes `npm run build:all` (configured via `vercel.json`), compiling both the backend TypeScript code and the Vite frontend into `frontend/dist`.
2. **Static Frontend Delivery**: Vercel serves the compiled frontend assets directly from `frontend/dist`. Client-side SPA navigation routes (`/`, `/shop`, `/showcase`, `/about`) fallback transparently to `/index.html` on direct URL page refreshes, without intercepting API routes or static assets.
3. **Serverless API Execution**: Requests under `/api/*` are handled by Vercel Serverless Functions in `api/` (`api/index.ts` and `api/[...slug].ts`) which execute the stateless Express app (`backend/src/app.ts`). No persistent HTTP socket listener is started in serverless mode (`app.listen()` is omitted).
4. **Original Route Preservation**: Requests to `/api/health`, `/api/store/info`, and `POST /api/enquiry` reach the serverless handler with their exact original paths and HTTP methods intact.
5. **Same-Origin Requests**: In production on Vercel, the frontend interacts with `/api` under the same domain (`VITE_API_BASE_URL=/api`), eliminating cross-origin CORS latency and preflight overhead while maintaining strict CORS boundaries against unauthorised external domains.
6. **Reverse Proxy Trust**: `TRUST_PROXY` defaults to `1` automatically when deployed on Vercel (`process.env.VERCEL === '1'`), correctly reading the single client-IP hop provided by Vercel's edge reverse proxy network.

### Rate Limiting in Serverless Architecture

- Rate limiting is enforced via `express-rate-limit` in memory per warm container instance (10 enquiries / 15 minutes, 100 general requests / 15 minutes).
- **Serverless Limitations**: Ephemeral serverless containers spin up and down dynamically. While a warm container strictly enforces throttling per client IP, in-memory rate limits are local to each container instance and **not global** across parallel serverless instances or across cold restarts. This design respects the strict requirement of zero unnecessary external databases or paid Redis services while protecting active serverless instances from spam and DoS.

### Deploying to Vercel (Step-by-Step Settings)

1. Connect your GitHub repository to Vercel as a new Project.
2. **Framework Preset**: Other / None (Vercel automatically detects `vercel.json`).
3. **Build Command**: `npm run build:all` (or override with `npm run build`).
4. **Output Directory**: `frontend/dist`.
5. **Node.js Version**: Select `20.x` or `22.x` in Project Settings > General > Node.js Version (Node 18 is not supported by Vite 8).
6. **Environment Variables**:
   - `VITE_API_BASE_URL=/api` (or leave unset to use default same-origin `/api`)
   - `TRUST_PROXY=1` (or leave unset; auto-detected on Vercel)
7. Click **Deploy**. Both the frontend showcase and the `/api` serverless backend will be live immediately under your single `.vercel.app` domain.

---

## 🛠️ Root Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts both Frontend and Backend concurrently |
| `npm run build` | Builds frontend and backend production assets |
| `npm run build:all` | Compiles both backend and frontend builds |
| `npm run install:all` | Installs dependencies for both frontend and backend |
| `npm run lint` | Runs TypeScript type checking across both projects |
| `npm run test` | Executes the automated security test suite |

---

## 🌐 API Endpoints

- `GET /api` — Root API information and available endpoint catalogue
- `GET /api/health` — Minimal health check response (`{ status: 'ok', timestamp: '...' }`)
- `GET /api/store/info` — Verified business address, contact numbers, and real-time IST store hours
- `POST /api/enquiry` — Validated customer enquiry with direct WhatsApp redirection payload

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env.example`)
| Variable | Description | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL (empty uses Vite reverse proxy) | `http://localhost:5000` |

### Backend (`backend/.env.example`)
| Variable | Description | Default |
|---|---|---|
| `PORT` | HTTP server port | `5000` |
| `NODE_ENV` | Environment (`development` or `production`) | `development` |
| `ALLOWED_ORIGINS` | Comma-separated trusted browser origins for CORS | `http://localhost:3000` |
| `RATE_LIMIT_WINDOW_MS` | Rate limiting window in milliseconds | `900000` (15 min) |
| `RATE_LIMIT_MAX` | Max general API requests per window | `100` |
| `ENQUIRY_RATE_LIMIT_MAX` | Max enquiry requests per window | `10` |

---

## 📍 Verified Business Information

- **Business Name**: JAI HIND SPORTS
- **Address**: Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Vilankurichi, Coimbatore, Tamil Nadu - 641035
- **Primary WhatsApp / Phone**: +91 87547 39973
- **Secondary WhatsApp / Phone**: +91 96290 24175
- **Store Hours**:
  - Monday – Saturday: `10:00 AM – 9:00 PM`
  - Sunday: `10:00 AM – 2:00 PM`
- **Google Business Profile**: [https://share.google/UjCuwKuSwDqENkgFW](https://share.google/UjCuwKuSwDqENkgFW)
