# iDeaL — Discord servers & bots

English-only, fundal negru, tubes la cursor. Top bar (avatar + nume + Request).
Carduri stil Discord: banner in fundal + iconita patrat in stanga + numele.
Fallback banner: banner -> splash -> icon -> gradient. "Request": DM prin botul tau.

## Setup pe Vercel (o data)
Env: DISCORD_BOT_TOKEN + DISCORD_USER_ID. Redeploy.
Iconita/banner/nume vin din /api/discord (invite-urile sunt in index.html).
Banner-ul apare doar daca serverul are banner setat (necesita boost/feature).

## Deploy
git push → Vercel redeployeaza automat.
