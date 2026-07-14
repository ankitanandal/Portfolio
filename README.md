# Ankita Nandal Portfolio

A responsive React + Vite portfolio built for deployment on Vercel and use with `ankitanandal.com`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Upload this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New > Project**.
3. Import the repository.
4. Vercel will detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Connect ankitanandal.com

1. Buy `ankitanandal.com` from a domain registrar if it is available.
2. In Vercel, open the deployed project.
3. Go to **Settings > Domains**.
4. Add `ankitanandal.com` and `www.ankitanandal.com`.
5. Follow the DNS records shown by Vercel in your registrar account.
6. Set `ankitanandal.com` as the primary domain.

## Before publishing

Replace these placeholders in `src/main.jsx`:

- LinkedIn URL
- GitHub URL
- `hello@ankitanandal.com` email if you use another address
- Resume file: add `Ankita_Nandal_Resume.pdf` inside the `public` folder
- Refine case-study claims and metrics before making them public

## Contact form

The current form opens the visitor's email application using `mailto:`. For direct submissions later, connect it to Formspree, Resend, EmailJS, or a Vercel serverless function.
