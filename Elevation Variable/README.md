# Elevation Variable Design System

A modern, token-based CSS/React framework for elevation variables (shadows, opacity, overlays) built from scratch with PostCSS, ECMAScript modules, and Vite.

## 📁 Folder Structure

```
Elevation Variable/
├── components/
│   ├── ShadowDemo.jsx
│   ├── OpacityDemo.jsx
│   ├── OverlayDemo.jsx
│   ├── Modal.jsx
│   └── Card.jsx
├── tokens/
│   └── elevation.css
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## 🧩 Features
- **Design tokens** for all elevation variables (shadows, opacity, overlays)
- **Interactive React demos** for each token variant
- **PostCSS** for processing CSS custom properties
- **Modern ESM and Vite setup**

## 🛠️ Usage
- Use the tokens in `tokens/elevation.css` in your own CSS or React components.
- Copy or import the components for use in your own design system or app.

## 📦 Build & Extend
- Add more tokens to `tokens/elevation.css` as needed.
- Add new demo components to `components/`.
- Update `App.jsx` to showcase new tokens or components.

## 📝 License
MIT 