# iDeaL — Discord servers & bots

Card de profil stil Discord (Contact, stanga).
- API (bot token): avatar, banner GIF, nume, @username.
- Lanyard (FARA token): status live (online/idle/dnd/offline) + activitate
  (custom status / Playing / Spotify). Trebuie sa intri pe serverul Lanyard:
  https://discord.gg/lanyard  (ca sa-ti urmareasca prezenta).
- Static (editabil in index.html): tag "Discord Manager | DM", bio, Member Since, Connections.

## Vercel — Environment Variables (doar pt. avatar/banner + request)
- DISCORD_WEBHOOK_URL  -> mesaj la request (canal privat webhook)
- DISCORD_USER_ID = 1493163753447882894  -> profil + @mention
- DISCORD_BOT_TOKEN    -> avatar + banner GIF (bot NOU, separat de Sir Penguin)

Lanyard NU are nevoie de nimic pe Vercel (merge direct din browser). Doar intra
pe serverul lor. User ID-ul e deja in js/main.js (blocul Lanyard).

## Deploy
git push -> Vercel redeployeaza automat.
