# Tactical Proposal — Dev Setup

This repo is a simple multi-page presentation built with React via UMD (CDN) and in-browser Babel. Pages are split into multiple HTML files that all share `app.js`.

## Prerequisites
- Node.js >= 16

## Install
```bash
npm install
```

## Develop / Run locally
Option A — live reload (recommended):
```bash
npm run dev
```
This starts `live-server` on http://localhost:5173

Option B — static server (no live reload):
```bash
npm run serve
```
This starts `http-server` on http://localhost:5173

Open any page in your browser:
- http://localhost:5173/index.html (Overview)
- http://localhost:5173/features.html
- http://localhost:5173/process.html
- http://localhost:5173/terms.html
- http://localhost:5173/next.html

## Notes
- No build step is required; JSX is transpiled in the browser using `babel-standalone`.
- If you want to migrate to a bundler (e.g., Vite/Parcel) and remove in-browser Babel, a small refactor is needed (convert to ESM imports and remove CDN scripts). For now, this setup focuses on minimal changes to make it easy to run and iterate locally.
