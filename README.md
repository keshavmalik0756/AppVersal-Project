# Scratch Card App

An interactive scratch card React application with a beautiful UI and smooth animations.

## Setup

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

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/keshavmalik0756/AppVersal-Project.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Canvas API for scratch effect

## Features

- Interactive scratch card with canvas
- Responsive design
- Mobile touch support
- Smooth animations
- Copy coupon code functionality
