# Ineza SmartGrid Website

![Ineza SmartGrid Logo](./public/logo.png)

## 🚀 About Ineza SmartGrid

**Ineza SmartGrid** is a technology company focused on developing innovative digital solutions that connect people, businesses, and communities through smart software systems.

We build scalable and reliable technology solutions including web applications, mobile platforms, intelligent systems, and custom software designed to solve real-world challenges.

Our goal is to use technology, creativity, and engineering to create a smarter and more connected future.

---

## 🌍 Vision

To become a leading technology company creating smart digital solutions that transform businesses and communities.

## 🎯 Mission

To design and deliver secure, efficient, and user-focused software solutions that improve accessibility, productivity, and innovation.

---

## 💡 Services

Ineza SmartGrid provides:

* 💻 Custom Software Development
* 🌐 Web Application Development
* 📱 Mobile Application Development
* ☁️ Cloud & Digital Solutions
* 🗄️ Database Design & Management
* 🤖 AI and Smart Technology Solutions
* 🔧 IT Consulting and System Development

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Next.js
* Vue.js
* Tailwind CSS
* HTML5
* CSS3
* JavaScript / TypeScript

### Backend

* Node.js
* Laravel (PHP)
* Python
* REST APIs

### Databases

* PostgreSQL
* MySQL
* MongoDB
* Supabase

### Tools & Platforms

* Git & GitHub
* Vercel
* Netlify
* Cloudflare
* Docker
* Cloud Services

---

## 📂 Featured Projects

### 🔹 Sheja Cards

A digital student identification and management platform designed to simplify identity verification and student services.

### 🔹 Kora

A driving theory learning platform that helps users prepare for driving exams through interactive digital learning.

### 🔹 INKINGI Rescue

An emergency response platform designed to improve access to help through location-based technology and digital communication.

### 🔹 MindBridge

A digital platform focused on supporting mental wellness through accessible technology solutions.

---

## ✨ Website Features

* Modern responsive design
* Company profile presentation
* Services showcase
* Project portfolio
* Contact system
* SEO optimized pages
* Mobile-friendly interface
* Modern animations and interactions

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/ineza-smartgrid.git
```

Navigate into the project:

```bash
cd ineza-smartgrid
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will run locally at:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

```env
# Resend — transactional email used by the contact form
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
RESEND_EMAIL_FROM=Ineza SmartGrid <hello@inezasmartgrid.com>
CONTACT_EMAIL_TO=hello@inezasmartgrid.com
```

### Setting up email delivery (Resend)

1. Create a free account at [resend.com](https://resend.com) (free tier includes 3,000 emails/month).
2. Generate an API key at [resend.com/api-keys](https://resend.com/api-keys) and set it as `RESEND_API_KEY`.
3. Verify your sending domain so emails appear from your own address (`RESEND_EMAIL_FROM`). Until then, Resend only allows sending from `onboarding@resend.dev`.
4. `CONTACT_EMAIL_TO` is the inbox that receives submissions — leave it empty to default to the address in `src/content/site.ts`.

The contact form posts to `/api/contact`, which validates the input, rate-limits submissions, and delivers the message via Resend.

---

## 📸 Screenshots

Add website screenshots here:

```
/screenshots
```

---

## 🤝 Contribution

We welcome collaboration and partnerships.

If you are interested in working with Ineza SmartGrid, building innovative solutions, or partnering on technology projects, feel free to contact us.

---

## 📞 Contact

**Ineza SmartGrid**

Building smart digital solutions for a connected future.

Website:

```
https://inezasmartgrid.com
```

Email:

```
contact@inezasmartgrid.com
```

---

## 📄 License

© 2026 Ineza SmartGrid. All rights reserved.
