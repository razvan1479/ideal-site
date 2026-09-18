# iDeaL — Discord servers & bots

English-only. Fundal negru, tubes neon la cursor. Fara sidebar/iconite — doar top bar.
Cardurile = serverele tale (icon + nume + membri live, buton Join).
La "Request": botul tau iti da DM cu ce a scris userul + buton "Reply on Discord".

## Structura
index.html · css/style.css · js/main.js · api/discord.js · api/contact.js

## Setup pe Vercel (o data) — pt. avatar + DM
Settings → Environment Variables:
- DISCORD_BOT_TOKEN = token bot (Developer Portal → Bot → Reset Token)
- DISCORD_USER_ID   = ID-ul tau (Developer Mode → Copy User ID)
Redeploy. Token DOAR aici. DM merge daca botul e intr-un server comun cu tine.

## Serverele de pe carduri
Invite-urile sunt deja puse in index.html (data-invite). Iconita/numele/membrii
se iau automat prin /api/discord (pe Vercel). Butonul Join merge oricum.

## Deploy
git push → Vercel redeployeaza automat.
