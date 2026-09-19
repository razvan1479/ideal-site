# iDeaL — Discord servers & bots

Profil live FARA token: dstn (avatar, banner GIF, badges, accent, GUILD TAG),
Lanyard (status + activitate). Servere din invite. Request pe Discord via webhook.

## Ce trebuie
- Lanyard: intra pe https://discord.gg/lanyard (status/activitate).
- dstn: nimic (avatar/banner/badges/guild-tag). User ID e in js/main.js.
- Vercel Env (doar request): DISCORD_WEBHOOK_URL (+ DISCORD_USER_ID pt @mention).

## Guild tag
Se ia din primary_guild (dstn). Apare doar daca ai un server tag activ pe cont.

## Static (index.html): tag "Discord Manager | DM", bio, Member Since, Connections.

## Deploy
git push -> Vercel redeployeaza automat.
