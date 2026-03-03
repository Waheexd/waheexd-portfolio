# Personal Developer Portfolio 🚀

A modern, fast, and responsive personal portfolio website built to showcase my skills, experience, and projects as a Software Engineer and Data Analyst. The site is optimized for performance, user experience, and visual appeal, featuring smooth animations, dynamic form handling, and a sleek dark-glass aesthetics.

## 🌟 Live Demo
https://waheexd-portfolio.netlify.app

## ✨ Features

- **Modern UI/UX**: Clean design utilizing glassmorphism, dynamic background shapes, and floating animations.
- **Fully Responsive**: Carefully crafted to look perfect on Desktops, Tablets, and Smartphones. Mobile view features an intuitive hamburger menu and responsive project carousels.
- **Performance Optimized**: Achieves near-perfect Lighthouse scores through:
  - Prevention of Cumulative Layout Shifts (CLS) via precise image sizing constraints.
  - Minified CSS (`style.min.css`) and JavaScript (`script.min.js`) assets for rapid load times.
- **Interactive Project Showcase**: A looping carousel featuring snap-to-card mobile navigation to elegantly display selected work.
- **AJAX Contact Form**: Fully integrated contact form designed for backend compatibility (e.g., Netlify Forms). Includes:
  - Real-time HTML5 form validation.
  - Asynchronous background submission (No page reload).
  - Clean, dynamic UI success/error feedback messages. 
- **Dynamic Content Toggling**: Seamlessly switch between Education and Experience timelines without page redirects.

## 🛠️ Built With

- **HTML5**: Semantic and highly structured.
- **Vanilla CSS3**: Custom-built styling using CSS variables for a consistent theme (Slate/Indigo/Emerald palettes) and keyframe animations. Absolutely zero heavy CSS frameworks like Tailwind or Bootstrap were used.
- **Vanilla JavaScript**: Lightweight ES6+ logic handling scroll tracking, intersection observers (scroll reveal animations), infinite carousels, and AJAX fetch requests.

## 📁 Project Structure

```text
/
├── index.html        # Main HTML structure
├── style.css         # Beautifully formatted source CSS (Development)
├── style.min.css     # Minified production CSS 
├── script.js         # Beautifully formatted source JS (Development)
├── script.min.js     # Minified production JS 
└── resources/        # Image assets (WebP optimized for performance)
```

## 🚀 Local Development

To run this project locally, simply clone the repository and use any local static web server.

```bash
# Clone the repo
git clone https://github.com/Waheexd/your-portfolio-repo-name.git
cd your-portfolio-repo-name

# Run a local server (Requires Node.js installed)
npx serve
```
Then simply navigate to `http://localhost:3000` in your browser.

### Modifying the Code
When making changes, always edit `style.css` and `script.js`. Before pushing modifications to production, minify your changes utilizing [terser](https://github.com/terser/terser) and [minify](https://github.com/coderaiser/minify):

```bash
# Minify CSS
npx minify style.css > style.min.css

# Minify Javascript (mangling disabled for HTML inline calls)
npx terser script.js -o script.min.js
```

## 📬 Contact
**Mohammed Waheed**
- **Email:** mohdwhd3@gmail.com
- **LinkedIn:** [mohammed-waheed-whd3](https://www.linkedin.com/in/mohammed-waheed-whd3/)
- **GitHub:** [@Waheexd](https://github.com/Waheexd)
