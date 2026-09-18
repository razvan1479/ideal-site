# iDeaL — Discord servers & bots

English-only. Fundal negru, stil Discord, tubes neon la cursor.
Live din Discord: avatarul tau + iconitele/nr. membri servere.
La "Request": botul tau iti da DM cu ce a scris userul + buton "Reply on Discord".

## Structura
index.html · css/style.css · js/main.js · api/discord.js · api/contact.js

## Setup pe Vercel (o data)
Settings → Environment Variables:
- DISCORD_BOT_TOKEN = token bot   (Developer Portal → Bot → Reset Token)
- DISCORD_USER_ID   = ID-ul tau   (Developer Mode ON → click dreapta pe profil → Copy User ID)
Redeploy. Token DOAR aici, niciodata in cod.
DM merge daca botul e intr-un server comun cu tine si ai DM-urile deschise.

## Iconite servere pe carduri
index.html, la carduri-servere: <div class="swap-card" data-invite="AbCdEf">
Invite "never expire". Boturile raman cu data-invite="".

## Local
api/ ruleaza pe Vercel. Cu Live Server /api/* nu exista (fallback clipboard).
Test complet: npm i -g vercel && vercel dev

## Deploy
git push → Vercel redeployeaza automat.
