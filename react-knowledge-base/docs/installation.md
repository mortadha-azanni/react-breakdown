---
id: installing
title: Installation
sidebar_label: Installation
---

# ⚙️ Setting Up Your React Environment

Now that you're ready, let’s set up your React development environment the right way.

There are two common ways to create a React project today:

- [Vite](https://vitejs.dev) — **Recommended** for most modern setups.
- [Create React App (CRA)](https://create-react-app.dev) — Still useful for legacy projects or specific needs.

---

## 🚀 Option 1: Using Vite (Recommended)

[Vite](https://vitejs.dev) is a modern frontend build tool that offers:
- Instant startup and fast hot-reloads
- Simpler configuration
- Better developer experience

### 🧱 Step-by-Step: Create a React App with Vite

1. **Install Node.js**  
   Download and install the LTS version from [nodejs.org](https://nodejs.org/).  
   _Verify the install:_

   ```bash
   node -v
   npm -v
   ```

2. **Create your project**

   ```bash
   npm create vite@latest my-react-app -- --template react
   ```

3. **Navigate into your project folder**

   ```bash
   cd my-react-app
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open in your browser**  
   Visit: [http://localhost:5173](http://localhost:5173)

✅ You now have a blazing-fast React setup powered by Vite!

---

## ⚙️ Option 2: Using Create React App (CRA)

Create React App is an older tool that bootstraps React apps with zero configuration. It's widely used in existing codebases but not recommended for new projects due to slower builds and larger bundles.

### 🧱 Set up with CRA

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

You can now start editing your app at `src/App.js`.

---

## 📁 Folder Structure (Vite)

Here’s what the default project looks like with Vite:

```
my-react-app/
├─ public/
├─ src/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
```

**Key folders/files:**
- `src/` — where you write your components, logic, and styles.
- `main.jsx` — the app’s entry point.
- `App.jsx` — your root component.

> 🧠 **Tip:** Stick with Vite for most modern projects unless you're contributing to older codebases using CRA.

---

