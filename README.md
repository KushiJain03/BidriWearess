# Aura Bidri — Static Website

A luxury artisanal jewelry website for Bidriware pieces, built with pure HTML, CSS, and JavaScript.

## 📁 File Structure

```
aura-bidri/
├── index.html       ← Main HTML (all pages)
├── style.css        ← All styles
├── script.js        ← Navigation, interactivity
├── images/          ← Add your product images here
│   ├── hero.jpg
│   ├── eclipse-cuff.jpg
│   ├── lunar-drops.jpg
│   ├── obsidian-signet.jpg
│   ├── shadow-choker.jpg
│   ├── zenith-pendant.jpg
│   ├── dusk-studs.jpg
│   ├── craft.jpg
│   ├── style-chic.jpg
│   ├── style-elegant.jpg
│   ├── style-casual.jpg
│   └── style-bold.jpg
└── README.md
```

## 🖼️ Adding Your Images

1. Create an `images/` folder inside the project
2. Add your photos with the filenames listed above
3. The site uses graceful fallbacks (colored backgrounds) if images are missing

## 🚀 Deploy to GitHub Pages (Free)

1. **Create a GitHub account** at https://github.com if you don't have one

2. **Create a new repository**
   - Go to https://github.com/new
   - Name it `aura-bidri` (or any name you like)
   - Set it to **Public**
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all files from this zip (index.html, style.css, script.js, images/ folder)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to your repository → **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose branch: **main**, folder: **/ (root)**
   - Click **Save**

5. **Your site is live!**
   - After ~1 minute, your site will be at:
   - `https://YOUR-USERNAME.github.io/aura-bidri/`

## ✏️ Customizing Content

- **Product names/descriptions**: Edit the `products` object in `script.js`
- **Hero text**: Edit the `.hero-text` section in `index.html`
- **Colors**: Edit CSS variables at the top of `style.css` (`:root` block)
- **Fonts**: Change the Google Fonts import link in `index.html`

## 🎨 Color Variables (style.css)

```css
--bg:        #f4f3f0   /* Page background */
--bg-warm:   #ece9e3   /* Card backgrounds */
--ink:       #1a1a1a   /* Primary text / buttons */
--ink-light: #8a8a84   /* Muted text */
--border:    #d4d0c9   /* Dividers */
```
