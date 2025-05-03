# 🌐 Jamstack Client Platform Template

This is a reusable, Docker-ready full-stack template built for modern web projects using:

- ✍️ **Sanity Studio** – Headless CMS with custom schemas
- ⚛️ **Frontend (Astro or Next.js)** – Modular, performant site rendering
- 📨 **Form Handler** – Serverless-style function for lead capture & automation
- 📊 **Umami Analytics** – Privacy-focused analytics for you or your clients
- 🐳 **Docker Compose** – For full local dev, testing, and scalable deployment

---

## 📁 Folder Structure

```
client-platform-template/
├── docker-compose.yml
├── .env.example
├── README.md
│
├── sanity-studio/         # CMS – schema definitions & Studio config
│   ├── schemas/
│   ├── sanity.config.ts
│   └── Dockerfile
│
├── frontend/              # Astro or Next.js frontend
│   ├── pages/ or src/pages/
│   ├── public/
│   └── Dockerfile
│
├── form-handler/          # Custom API handler (Netlify-style)
│   ├── index.js
│   └── Dockerfile
│
└── analytics/ (optional)  # Self-hosted Umami dashboard
```

---

## 🚀 Getting Started

1. Clone this template:
   ```bash
   gh repo create my-site --template your-username/client-platform-template
   ```

2. Fill in `.env` based on `.env.example`

3. Run it all locally:
   ```bash
   docker compose up
   ```

4. Visit:
   - Studio: [http://localhost:3333](http://localhost:3333)
   - Frontend: [http://localhost:4321](http://localhost:4321)
   - Umami: [http://localhost:3000](http://localhost:3000)
   - Form handler: [http://localhost:8787](http://localhost:8787)

---

## 🧪 Customization

This template is modular:
- Swap in your own Sanity schemas
- Choose Astro or Next.js as your frontend
- Point form-handler to Supabase, Sanity, or custom destinations
- Deploy services separately or together

---

## 📦 Built For

- Portfolio sites
- Client landing pages
- Headless CMS projects
- Case-study-ready work

---

## 🧠 License

MIT – use freely, build better.
