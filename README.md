# TinaTwit 

A fully responsive Twitter Timeline clone built as a solo project for the Zaio Full Stack Developer program (iHub Africa initiative). Styled feed, real profile images, dark/light mode, and a themed FYP centered around gospel, styling, football, and the Ngabo Live concert (July 2026).

 **Live demo:** https://tinatwist.netlify.app


---

##  Features

- **Responsive Twitter-style layout** — sidebar nav, tweet compose box, main timeline feed, and a right-hand trends/FYP panel. Fully responsive from 4K monitors down to small Android screens.
- **Login page** *(built with Cursor)* — simple demo auth flow with validation and session persistence via `localStorage`.
- **Compose Tweet popup modal** *(built with Cursor)* — click the Tweet button to open a modal composer with a live character counter.
- **Dark / Light mode toggle** *(built manually, no AI assistance)* — theme preference saved across sessions using CSS variables and `localStorage`.
- **Interactive feed** — like, retweet, and reply counters that persist via `localStorage`.
- **Nav filtering** — clicking Football or Gospel in the sidebar filters the feed to matching tweets.
- **Live search** — the search bar filters tweets in real time by content, name, or handle.
- **Themed content (FYP)** — trending topics and seed tweets cover styling/fashion, gospel, football, and the Ngabo Live July 2026 concert.

---

##  Tech Stack

- HTML5
- CSS3 (CSS variables for theming, Flexbox/Grid for layout)
- Vanilla JavaScript (no frameworks)
- `localStorage` for persistence (auth session, tweets, theme)

---

## Project Structure
twitter/
├── index.html # Main timeline page
├── login.html # Login page
├── style.css # All styling (light/dark themes, responsive layout)
├── script.js # App logic (auth guard, feed rendering, interactions)
└── README.md


---

## Running Locally

1. Clone the repo:
```bash
   git clone https://github.com/Ayandarrrr/twitter.git
   cd twitter
```
2. Open `login.html` with a live server (e.g. VS Code's Live Server extension), or just open it directly in your browser.
3. Sign in with any username and a password of at least 4 characters (this is a demo login — no real backend).

---

## Notes

- This is a Zaio "Solo Twitter Project" course assignment — not a production app. Login and data storage are demo-only via `localStorage`, not a real backend.
- Built by [Tina](https://github.com/Ayandarrrr).
