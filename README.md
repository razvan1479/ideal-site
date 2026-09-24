# iDeaL site — GDPR ready

Ce e inclus pentru hosting legal in UE:
- Banner de cookies (Accept/Reject). Profilul (Lanyard + dcdn.dstn.to) se incarca DOAR dupa Accept.
- Checkbox de consimtamant pe formular (Privacy Policy).
- Pagini privacy.html si terms.html (TEMPLATE — completeaza [YOUR NAME]/[YOUR EMAIL]).
- Fonturi (Inter, Fredoka) si GSAP SELF-HOSTED (fara Google Fonts / cdnjs) => nu trimit IP la CDN-uri.

## De completat de tine (obligatoriu)
- In privacy.html si terms.html: [YOUR NAME], [YOUR EMAIL].
- Nu sunt sfat juridic — verifica textele pt. situatia ta.

## Structura
index.html · css/style.css · js/main.js · api/{discord,contact}.js
fonts/{Inter,Fredoka}.ttf · assets/js/gsap.min.js · privacy.html · terms.html

## Vercel (request pe Discord): DISCORD_WEBHOOK_URL (+ DISCORD_USER_ID).
## Deploy: git push -> redeploy.
