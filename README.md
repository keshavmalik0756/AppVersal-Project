# BigBasket Scratch Card App 🛒

An interactive scratch card React application with BigBasket theme, featuring smooth animations and engaging user experience.

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

3. **Build for production**
   ```bash
   npm run build
   ```

## 📦 Deploy to Vercel

### Automatic Deployment (Recommended)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import: `keshavmalik0756/AppVersal-Project`
   - Framework: **Vite** (auto-detected)
   - Click "Deploy"

2. **Vercel will automatically:**
   - Detect Vite framework
   - Run `npm install`
   - Run `npm run build`
   - Deploy from `dist/` folder

### Manual Deployment (CLI)

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🎨 Features

- ✅ BigBasket themed design with signature green colors
- ✅ Interactive scratch card using Canvas API
- ✅ Real-time scratch progress indicator
- ✅ Confetti animation on win
- ✅ Responsive design (mobile & desktop)
- ✅ Touch support for mobile devices
- ✅ Copy coupon code functionality
- ✅ Smooth animations and transitions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Canvas API** - Scratch effect
- **Vercel** - Deployment platform

## 📁 Project Structure

```
AppVersal/
├── src/
│   ├── App.jsx          # Main scratch card component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind + custom animations
├── public/              # Static assets
├── index.html           # HTML template
├── vercel.json          # Vercel configuration
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎯 Coupon Details

- **Code:** BB200
- **Discount:** Flat ₹200 OFF
- **Min Order:** ₹1000
- **Valid Till:** 31st Dec 2025
- **For:** New Users Only

## 🌐 Live Demo

Deploy your own version on Vercel in minutes!
