# 🪙 CryptoTracker Frontend

A modern and responsive cryptocurrency tracking application built with **Next.js** and **Tailwind CSS**, designed to display real-time market data, coin trends, and performance stats. The app fetches data from a backend API powered by Express.js and MongoDB, which uses the CoinGecko API and scheduled cron jobs for data updates.

## 🚀 Tech Stack

### Frontend
- **Next.js** – React framework for SSR and static site generation
- **Tailwind CSS** – Utility-first CSS framework
- **Axios** – Promise-based HTTP client
- **Lucide Icons** – Icon set for modern UI

### Backend (for reference)
- **Node.js** & **Express.js**
- **MongoDB** with Mongoose
- **Node-Cron** – For scheduled tasks
- **CoinGecko API** – Source of live cryptocurrency data

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/saurabhkumardev/crypto-tracker-frontend.git
cd crypto-tracker-frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

- Create a .env.local file in the root directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

- Replace with your actual backend deployment URL if not using localhost.

### 4. Run the development server

```
npm run dev
```

- Your app will be running at: http://localhost:3000


## 🌐 Deployment Links
🔗 Frontend: https://your-frontend.vercel.app

🔗 Backend: https://your-backend.onrender.com/api


## 📞 Contact
Have questions or suggestions? Reach out:

💼 linkedin.com/in/saurabhkumardev

📧 saurabhkumarmehto@gmail.com