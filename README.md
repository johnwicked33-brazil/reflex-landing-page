# reflex-landing-page

Next.js landing page project serving a ReflexAI-style experience.

## Run

```bash
npm install
npm run dev
```

## Environment

`ENTERPRISE_LEAD_WEBHOOK_URL` is required for Enterprise lead capture. The
`/api/enterprise-leads` route forwards validated modal submissions to this
webhook and only returns success after the webhook responds with a 2xx status.
