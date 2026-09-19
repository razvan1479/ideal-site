# iDeaL — Discord servers & bots

Profil stil Discord LIVE, FARA bot token:
- dcdn.dstn.to  -> avatar, banner GIF, badges (iconite reale), accent_color
- Lanyard       -> status live (online/idle/dnd/offline) + activitate
- static (index.html) -> tag, bio, Member Since, Connections
- /api/discord  -> cardurile serverelor (din invite, fara token)

## Ce trebuie
- Lanyard: intra pe https://discord.gg/lanyard (o data).
- dstn: nimic, merge direct.
- Vercel Env doar pt. REQUEST pe Discord:
  DISCORD_WEBHOOK_URL (+ DISCORD_USER_ID = 1493163753447882894 pt @mention).
- Bot token NU mai e necesar (dstn acopera banner+badges). Ramane optional in
  contact.js ca alternativa la webhook.

## Note
dcdn.dstn.to e un serviciu public tert (proxy). Daca pica, avatarul/banner/badges
raman pe fallback. Nu folosim user token niciodata.

## Deploy
git push -> Vercel redeployeaza automat.
