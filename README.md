# iDeaL — Servere & boți de Discord

Fundal negru, stil aplicație Discord, cu **tubes neon** care urmăresc cursorul PESTE TOT.

## Structură
ideal-site/ ├── index.html (layout + loader tubes) ├── css/style.css └── js/{config.js, main.js}

## Tubes
- Se încarcă din CDN (threejs-components / jsdelivr) în `<script type="module">` din index.html.
- Tracking peste tot: mișcarea mouse-ului din fereastră e redirecționată către canvas,
  deci merge și peste carduri, contact, iconițe. Click pe fundal = culori noi.
- Bara/lista Discord sunt translucide ca efectul să se vadă și în spatele lor.
- Culorile inițiale: în scriptul din index.html (`colors`, `lights.colors`).

## Rulare
VS Code → Live Server → index.html. Are nevoie de internet (CDN).

## Formular
`js/config.js`: BOT_ENDPOINT (DM) sau DISCORD_WEBHOOK (canal).

## Deploy
GitHub Pages / Netlify / Vercel.
