# 🌐 My Portfolio Website

This is my personal portfolio built with **SvelteKit + TypeScript + TailwindCSS**, deployed as a fully static site using GitHub Pages.

The project is designed to be lightweight, fast, and multilingual.

---

## 🌍 Features

- ⚡ Built with SvelteKit (static SPA mode)
- 🌐 Multilingual support (Polish & English)
- 📄 Content driven by JSON files
- 🎨 TailwindCSS styling
- 🚀 Deployed via GitHub Actions to GitHub Pages
- 📱 Fully responsive design

---

## 🌐 Language System

This portfolio uses simple JSON-based internationalization:

- `src/lib/data/pl/cv.json` → Polish content
- `src/lib/data/en/cv.json` → English content

The app dynamically reads data from these files to switch language without a backend.

---

## 🛠️ Commands

### Install Deno (Windows PowerShell)

```
irm https://deno.land/install.ps1 | iex
```

### Check Deno version

```
deno --version
```

### Create new SvelteKit project

```
deno run -A npm:sv create new-portfolio
```

### Enter project folder

```
cd .\new-portfolio\
```

### Start development server (auto-open browser)

```
deno task dev --open
```

### Add static adapter (GitHub Pages support)

```
deno add npm:@sveltejs/adapter-static
```

### Start development server (manual)

```
cd .\new-portfolio\
deno task dev
```
