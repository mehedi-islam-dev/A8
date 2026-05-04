# 🌞 SunCart - Premium Summer Collection

A full-stack Next.js web application built for an e-commerce summer collection. It features a complete authentication system, protected routes, a cloud database, and interactive animations.

## 🚀 Live Demo
** https://suncart-web-app.vercel.app/ **

*(Note: If the Vercel link is experiencing a connection timeout, it might be due to a local ISP block in Bangladesh regarding `.vercel.app` domains. Please try using a VPN or Mobile Data to view the live site.)*

## ✨ Key Features
* **Authentication:** Secure Login and Registration (Google OAuth & Email/Password Credentials) powered by Better-Auth.
* **Protected Routes:** User-specific pages (like Product Details and My Profile) are fully protected and will redirect unauthorized users to the login page.
* **Profile Management:** Logged-in users can view and securely update their profile details (Name & Avatar URL).
* **Cloud Database:** Integrated with Neon PostgreSQL for reliable, persistent data storage on the production environment.
* **Interactive UI:** Smooth, hydration-safe animations using DotLottie React and a fully responsive premium design built with Tailwind CSS.

## 🛠️ Technology Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Authentication:** Better-Auth
* **Database:** Neon (PostgreSQL)
* **Animations:** DotLottie React
* **Deployment:** Vercel

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehedi-islam-dev/A8
   cd suncart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your credentials:
   ```env
   BETTER_AUTH_SECRET=your_secret_key
   BETTER_AUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   DATABASE_URL=your_neon_postgres_url
   ```

4. **Run database migrations (To create necessary tables):**
   ```bash
   npx @better-auth/cli migrate
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` with your browser to see the result.

---
**Developed by:**(https://github.com/mehedi-islam-dev)