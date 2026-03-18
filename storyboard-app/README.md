# 🎬 StoryFlow AI — n8n Storyboard Workflow Website

A full React website for the AI-powered storyboard generation workflow using n8n × Claude × Figma.

## 🚀 Deploy to Vercel in 3 Steps

### Step 1 — Push to GitHub

```bash
# In your terminal, navigate to this folder
cd storyboard-app

# Initialize git
git init
git add .
git commit -m "Initial commit — StoryFlow AI website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/storyboard-app.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Find and select your `storyboard-app` repository
4. Vercel auto-detects Create React App — click **Deploy**
5. ✅ Your site is live in ~60 seconds

### Step 3 — Your Live URL

Vercel gives you: `https://storyboard-app.vercel.app`

---

## 🏗️ Local Development

```bash
npm install
npm start
# Opens at http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
```

---

## 📂 Project Structure

```
storyboard-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Fixed responsive navbar
│   │   └── Footer.js       # 4-column footer
│   ├── sections/
│   │   ├── Hero.js         # Landing with particle canvas
│   │   ├── HowItWorks.js   # 6 interactive step cards
│   │   ├── WorkflowNodes.js # 10 n8n nodes with config
│   │   ├── StoryboardPreview.js # 6 Figma frames with detail panel
│   │   ├── EmotionMusic.js # Emotion arc + YT music list
│   │   ├── JsonExport.js   # Syntax-highlighted JSON + copy/download
│   │   ├── Pricing.js      # 3 plans with monthly/yearly toggle
│   │   └── FAQ.js          # Accordion FAQ + bottom CTA
│   ├── App.js
│   ├── index.js
│   └── index.css
├── vercel.json
├── package.json
└── .gitignore
```

## 🎨 Sections

| Section | Description |
|---|---|
| Hero | Animated particle canvas, headline, stats |
| How It Works | 6 clickable step cards |
| Workflow Nodes | 10 n8n nodes — click to inspect config |
| Storyboard Preview | 6 Figma frames with detail sidebar |
| Emotion × Music | Arc visualiser + free YT music tracks |
| JSON Export | Syntax-highlighted JSON, copy + download |
| Pricing | 3 plans, monthly/yearly toggle |
| FAQ | Accordion with bottom CTA |

## 🔑 Tech Stack

- **React 18** — component architecture
- **CSS-in-JS** — inline styles, no extra libraries
- **Vercel** — zero-config deployment
- **Google Fonts** — DM Mono, Instrument Serif, Plus Jakarta Sans
