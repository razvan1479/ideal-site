/* MAIN — CardSwap+nav, form, profil dstn+Lanyard (consent-gated), cookie banner */
/* ===== i18n ===== */
const I18N={
 ro:{"nav.services":"Servicii","ch.home":"acasă","ch.svc":"servicii","ch.proj":"proiecte","ch.contact":"contact","ch.topic":"Servere & boți de Discord, făcute ca la carte.","u.online":"online","nav.projects":"Proiecte","nav.faq":"FAQ","nav.contact":"Contact",
  "hero.welcome":"Soluția ta completă de Discord",
  "hero.lead":"Ai nevoie de un server Discord personalizat? Construiesc servere și boți la comandă pentru orice joc sau comunitate — de la gameri la creatori de conținut.",
  "hero.cta1":"Cere un server","hero.cta2":"Vezi proiectele","hero.stat1":"proiecte livrate","hero.stat2":"servicii principale","hero.stat3":"contact Discord",
  "cc.sub":"custom server pipeline","cc.c1":"Canale","cc.c1s":"arhitectură curată de server","cc.c2":"Permisiuni","cc.c2s":"roluri mapate cu grijă","cc.c3":"Boți","cc.c3s":"automatizări + mesagerie",
  "cc.f1":"onboarding gata","cc.f2":"boți calibrați","cc.f3":"suport activ",
  "svc.tag":"Servicii","svc.h2":"Două servicii principale",
  "svc1.h":"Server Discord","svc1.p":"Alege-mă și îți construiesc cel mai profesional server Discord pe care l-ai putea avea.","svc1.a":"Canale Discord","svc1.b":"Roluri","svc1.c":"Permisiuni","svc1.d":"Boți","svc1.e":"Setup onboarding","svc1.f":"Setup reguli",
  "svc2.h":"Boți & automatizări","svc2.p":"Boți custom care cresc engagement-ul și fac treaba în locul tău, fără spam.","svc2.a":"Moderare","svc2.b":"Tickete","svc2.c":"Leaderboard","svc2.d":"Matchmaking","svc2.e":"Evenimente","svc2.f":"Dashboard web",
  "pr.tag":"Proiecte","pr.h2":"Proiecte featured","pr.p":"Verifică și ajustează ce apare aici — sunt proiectele tale.",
  "pr1.p":"Server privat de Metin2 — arhitectură și comunitate.","pr2.p":"Bot cu dashboard web și multe funcții.","pr3.p":"Matchmaking 5v5 — MMR, leaderboard, sezoane.","pr4.p":"Tranzacții cu intermediar și tickete.","pr5.p":"Calendar lunar cu evenimente și notificări.","pr6.p":"Clasament pe voturi și scor.",
  "faq.tag":"FAQ","faq.h2":"Să răspundem la câteva întrebări",
  "faq1.q":"Cât costă un server Discord?","faq1.a":"Depinde de cerințe. Un server internațional, cu mai multe limbi, costă mai mult decât unul pe o singură limbă. Scrie-mi pe Discord și discutăm concret.",
  "faq2.q":"Cât costă serviciile de boți?","faq2.a":"Depinde de complexitate și de câți membri / servere folosesc botul. Pentru mai multe servere fac pachet cu reducere.",
  "faq3.q":"Cum funcționează colaborarea?","faq3.a":"Vorbim pe Discord, îmi zici ce vrei, construiesc, îți arăt pe parcurs, apoi predau totul cu suport după.",
  "faq4.q":"Ce valoare în plus aduc?","faq4.a":"Pe lângă administrare de server, am experiență și conexiuni cu developeri, designeri și promoteri pentru soluții complete.",
  "ct.tag":"Contact","ct.h2":"Hai să vorbim despre următorul tău proiect","ct.p":"Completează formularul și pornim un proiect, sau scrie-mi direct pe Discord.","ct.dc":"contact pe Discord","ct.l1":"Cum te cheamă?","ct.p1":"Numele tău","ct.l2":"Care e Discord ID-ul tău?","ct.l3":"Care e bugetul tău?","ct.l4":"Descrie proiectul","ct.p4":"Ce vrei să construiesc?","ct.btn":"Cere un server",
  "t.err":"Completează cel puțin numele și descrierea proiectului.","t.copy":"Detaliile au fost copiate — trimite-le pe Discord la iDeaL. ✓","t.sent":"Cererea a fost trimisă. Îți răspund pe Discord. ✓","t.sending":"Se trimite…"},
 en:{"nav.services":"Service","ch.home":"home","ch.svc":"services","ch.proj":"projects","ch.contact":"contact","ch.topic":"Discord servers & bots, done right.","u.online":"online","nav.projects":"Projects","nav.faq":"FAQ","nav.contact":"Get in touch",
  "hero.welcome":"Your ultimate Discord solution",
  "hero.lead":"Need a customized Discord server? I build tailored servers and bots for any game or community — whether you're a gamer or a content creator.",
  "hero.cta1":"Request a server","hero.cta2":"Explore projects","hero.stat1":"featured projects","hero.stat2":"core services","hero.stat3":"Discord contact",
  "cc.sub":"custom server pipeline","cc.c1":"Channels","cc.c1s":"clean server architecture","cc.c2":"Permissions","cc.c2s":"roles mapped with care","cc.c3":"Bots","cc.c3s":"automation + messaging",
  "cc.f1":"onboarding ready","cc.f2":"bots calibrated","cc.f3":"support active",
  "svc.tag":"Service","svc.h2":"Two core services",
  "svc1.h":"Discord Server","svc1.p":"Choose me and I'll build the most professional Discord server you could ever have.","svc1.a":"Discord Channels","svc1.b":"Roles","svc1.c":"Permissions","svc1.d":"Bots","svc1.e":"Setup Onboarding","svc1.f":"Setup Rules",
  "svc2.h":"Bots & automation","svc2.p":"Custom bots that boost engagement and do the work for you, no spam.","svc2.a":"Moderation","svc2.b":"Tickets","svc2.c":"Leaderboard","svc2.d":"Matchmaking","svc2.e":"Events","svc2.f":"Web dashboard",
  "pr.tag":"Projects","pr.h2":"Featured projects","pr.p":"Review and adjust what shows here — these are your projects.",
  "pr1.p":"Private Metin2 server — architecture and community.","pr2.p":"Bot with a web dashboard and many features.","pr3.p":"5v5 matchmaking — MMR, leaderboard, seasons.","pr4.p":"Trades with a middleman and tickets.","pr5.p":"Monthly calendar with events and notifications.","pr6.p":"Vote- and score-based leaderboard.",
  "faq.tag":"FAQ","faq.h2":"Let's answer some questions",
  "faq1.q":"How much does a Discord server cost?","faq1.a":"It depends on the requirements. An international, multi-language server costs more than a single-language one. Message me on Discord and we'll go over it.",
  "faq2.q":"How much do bot services cost?","faq2.a":"It depends on complexity and how many members / servers use the bot. For multiple servers I make a discounted package.",
  "faq3.q":"How does working together go?","faq3.a":"We talk on Discord, you tell me what you want, I build, I show you along the way, then hand it over with support after.",
  "faq4.q":"What extra value do I bring?","faq4.a":"Beyond server management, I have experience and connections with developers, designers and promoters for complete solutions.",
  "ct.tag":"Get in touch","ct.h2":"Let's talk about your next project","ct.p":"Fill in the form and start a project, or message me directly on Discord.","ct.dc":"contact on Discord","ct.l1":"What's your name?","ct.p1":"Your name","ct.l2":"What's your Discord id?","ct.l3":"What's your budget?","ct.l4":"Describe your project","ct.p4":"What do you want me to build?","ct.btn":"Request a server",
  "t.err":"Fill in at least your name and the project description.","t.copy":"Details copied — send them on Discord to iDeaL. ✓","t.sent":"Request sent. I'll reply on Discord. ✓","t.sending":"Sending…"}
};
let LANG="ro";
function setLang(l){LANG=l;const d=I18N[l];document.documentElement.lang=l;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.getAttribute("data-i18n");if(d[k]!=null)el.textContent=d[k];});
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{const k=el.getAttribute("data-i18n-ph");if(d[k]!=null)el.placeholder=d[k];});
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("active",b.dataset.lang===l));
  try{localStorage.setItem("ideal-lang",l);}catch(e){}}
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
setLang("en");

const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
if(!rm){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.14});
  document.querySelectorAll(".sr").forEach(el=>io.observe(el));}else{document.querySelectorAll(".sr").forEach(el=>el.classList.add("in"));}

const $=id=>document.getElementById(id);
$("send").addEventListener("click",async()=>{
  const t=$("toast");
  const name=$("f-name").value.trim(),desc=$("f-desc").value.trim();
  if(!name||!desc){t.style.color="#e06565";t.textContent="Please fill in at least your name and the project description.";return;}
  const cons=document.getElementById("f-consent");
  if(cons&&!cons.checked){t.style.color="#e06565";t.textContent="Please accept the Privacy Policy first.";return;}
  const data={name,discord:$("f-discord").value.trim(),budget:$("f-budget").value.trim(),project:desc};
  const plain=`New iDeaL request\nName: ${name}\nDiscord: ${data.discord||"-"}\nBudget: ${data.budget||"-"}\nProject: ${desc}`;
  t.style.color="var(--muted)";t.textContent="Sending…";
  try{
    const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    if(!r.ok) throw 0;
    t.style.color="var(--ok)";t.textContent="Request sent — I'll get back to you on Discord. ✓";
    ["f-name","f-discord","f-budget","f-desc"].forEach(id=>$(id).value="");
  }catch(e){
    try{await navigator.clipboard.writeText(plain);}catch(_){}
    t.style.color="var(--ok)";t.textContent="Copied — send it to iDeaL on Discord.";
  }
});

/* ===== CardSwap — teanc de carduri 3D cu swap automat (GSAP) ===== */
(function(){
  const deck=$("cardswap");if(!deck||typeof gsap==="undefined")return;
  const cards=[...deck.querySelectorAll(".swap-card")];
  const total=cards.length;
  const CFG={cardDistance:34,verticalDistance:36,delay:3600,skew:6,durDrop:1.5,durMove:1.5,durReturn:1.5,ease:"elastic.out(0.62,0.85)"};
  const slot=i=>({x:i*CFG.cardDistance,y:-i*CFG.verticalDistance,z:-i*CFG.cardDistance*1.6,zIndex:total-i});
  cards.forEach((el,i)=>{const s=slot(i);gsap.set(el,{x:s.x,y:s.y,z:s.z,zIndex:s.zIndex,skewY:CFG.skew,transformOrigin:"center center"});});
  let order=cards.map((_,i)=>i),timer=null;
  function swap(){
    if(order.length<2)return;
    const front=order[0],rest=order.slice(1),tl=gsap.timeline();
    tl.to(cards[front],{y:"+=520",duration:CFG.durDrop,ease:CFG.ease});
    tl.addLabel("promote",`-=${CFG.durDrop*0.9}`);
    rest.forEach((idx,i)=>{const s=slot(i);
      tl.set(cards[idx],{zIndex:s.zIndex},"promote");
      tl.to(cards[idx],{x:s.x,y:s.y,z:s.z,duration:CFG.durMove,ease:CFG.ease},`promote+=${i*0.14}`);});
    const back=slot(total-1);
    tl.addLabel("return",`promote+=${CFG.durMove*0.6}`);
    tl.call(()=>gsap.set(cards[front],{zIndex:back.zIndex}),null,"return");
    tl.set(cards[front],{x:back.x,z:back.z},"return");
    tl.to(cards[front],{y:back.y,duration:CFG.durReturn,ease:CFG.ease},"return");
    order=[...rest,front];
    updateDots();
  }
  function start(){if(rm||timer)return;timer=setInterval(swap,CFG.delay);}
  function stop(){clearInterval(timer);timer=null;}
  function restart(){stop();start();}
  // asezare rapida (pt. navigare manuala)
  function place(){ order.forEach((idx,k)=>{const s=slot(k);
    gsap.set(cards[idx],{zIndex:s.zIndex});
    gsap.to(cards[idx],{x:s.x,y:s.y,z:s.z,duration:.55,ease:"power3.out",overwrite:true});}); }
  function goTo(cardIdx){ const pos=order.indexOf(cardIdx); if(pos<0) return;
    stop(); gsap.killTweensOf(cards);
    order=[...order.slice(pos),...order.slice(0,pos)]; place(); updateDots(); start(); }
  function next(){ stop(); gsap.killTweensOf(cards); order=[...order.slice(1),order[0]]; place(); updateDots(); start(); }
  function prev(){ stop(); gsap.killTweensOf(cards); order=[order[total-1],...order.slice(0,total-1)]; place(); updateDots(); start(); }

  // bara de navigare sub carduri
  const stage=deck.closest(".swap-stage")||deck.parentNode;
  const nav=document.createElement("div"); nav.className="swap-nav";
  const pv=document.createElement("button"); pv.className="swap-arrow"; pv.setAttribute("aria-label","Anterior"); pv.textContent="‹";
  const dots=document.createElement("div"); dots.className="swap-dots";
  const nx=document.createElement("button"); nx.className="swap-arrow"; nx.setAttribute("aria-label","Următor"); nx.textContent="›";
  cards.forEach((_,i)=>{ const d=document.createElement("button"); d.className="swap-dot"; d.addEventListener("click",()=>goTo(i)); dots.appendChild(d); });
  nav.appendChild(pv); nav.appendChild(dots); nav.appendChild(nx);
  stage.parentNode.insertBefore(nav, stage.nextSibling);
  pv.addEventListener("click",prev); nx.addEventListener("click",next);
  function updateDots(){ const f=order[0]; [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===f)); }

  deck.addEventListener("mouseenter",stop);
  deck.addEventListener("mouseleave",start);
  updateDots(); start();
})();

/* ===== nav stil Discord: scroll, active, drawer ===== */
(function(){
  const scroller=document.getElementById("scroll");
  const servers=[...document.querySelectorAll(".rail .server")];
  const chans=[...document.querySelectorAll(".chan")];
  const title=document.getElementById("chan-title");
  const sidebar=document.querySelector(".sidebar");
  const goto=sel=>{const t=document.querySelector(sel);if(t)t.scrollIntoView({behavior:"smooth",block:"start"});};
  document.querySelectorAll("[data-scroll]").forEach(el=>el.addEventListener("click",()=>{goto(el.dataset.scroll);sidebar&&sidebar.classList.remove("open");}));
  function syncTitle(){const ac=chans.find(c=>c.classList.contains("active"))||chans[0];const l=ac&&ac.querySelector("[data-i18n]");if(title&&l)title.textContent=l.textContent;}
  const secs=[...document.querySelectorAll("#scroll section")];
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){
    const id="#"+e.target.id;
    chans.forEach(c=>c.classList.toggle("active",c.dataset.scroll===id));
    servers.forEach(s=>s.classList.toggle("active",s.dataset.scroll===id));
    syncTitle();
  }});},{root:scroller,threshold:.45});
  secs.forEach(s=>io.observe(s));
  document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>setTimeout(syncTitle,0)));
  const burg=document.getElementById("burger");
  if(burg&&sidebar)burg.addEventListener("click",()=>sidebar.classList.toggle("open"));
  syncTitle();
})();


/* ===== Discord: avatar (bot token) + card-uri server (banner + icon + nume) ===== */
(function(){
  const cards=[...document.querySelectorAll('.swap-card[data-invite]')].filter(c=>c.dataset.invite);
  const codes=[...new Set(cards.map(c=>c.dataset.invite))];
  const avatars=[...document.querySelectorAll('.js-avatar')];
  if(!codes.length && !avatars.length) return;
  const bg=(el,url)=>{el.style.backgroundImage=`url(${url})`;el.style.backgroundSize='cover';el.style.backgroundPosition='center';};
  fetch('/api/discord?invites='+encodeURIComponent(codes.join(',')))
    .then(r=>r.ok?r.json():null)
    .then(d=>{
      if(!d) return;
      if(d.user){
        if(d.user.avatar){ avatars.forEach(el=>{el.textContent='';bg(el,d.user.avatar);}); }
        if(d.user.banner){ document.querySelectorAll('.js-banner').forEach(el=>bg(el,d.user.banner)); }
        if(d.user.name){ document.querySelectorAll('.js-uname').forEach(el=>el.textContent=d.user.name); }
        if(d.user.username){ document.querySelectorAll('.js-tag').forEach(el=>el.textContent=d.user.username); }
      }
      cards.forEach(c=>{
        const srv=d.servers && d.servers[c.dataset.invite]; if(!srv) return;
        const banner=c.querySelector('.banner'), icon=c.querySelector('.srv-icon'), name=c.querySelector('.js-name');
        const bimg=srv.banner||srv.splash||srv.icon;      // banner -> splash -> icon (fallback)
        if(bimg && banner) bg(banner,bimg);
        if(srv.icon && icon){icon.textContent='';bg(icon,srv.icon);}
        else if(icon && srv.name){icon.textContent=srv.name[0].toUpperCase();}
        if(srv.name && name) name.textContent=srv.name;
      });
    })
    .catch(()=>{});
})();


/* ===== numar servere = numar carduri ===== */
(function(){
  const n=document.querySelectorAll('.swap-card[data-invite]').length || document.querySelectorAll('.swap-card').length;
  document.querySelectorAll('.js-servercount').forEach(el=>el.textContent=n);
})();

/* ===== dcdn.dstn.to — avatar + banner GIF + badges + accent (fara token) ===== */
(function(){
  const ID="1493163753447882894"; if((localStorage.getItem("ideal-consent")||"")!=="accepted")return;
  const bg=(el,url)=>{el.textContent='';el.style.backgroundImage='url('+url+')';el.style.backgroundSize='cover';el.style.backgroundPosition='center';};
  fetch('https://dcdn.dstn.to/profile/'+ID)
    .then(r=>r.ok?r.json():null)
    .then(j=>{ if(!j) return; const u=j.user||{};
      document.querySelectorAll('.js-avatar').forEach(el=>bg(el,'https://dcdn.dstn.to/avatars/'+ID+'?size=160'));
      const banner=document.querySelector('.js-banner');
      if(banner){ if(u.banner) bg(banner,'https://dcdn.dstn.to/banners/'+ID+'?size=600');
        else if(typeof u.accent_color==='number'){ banner.style.backgroundImage='none'; banner.style.backgroundColor='#'+u.accent_color.toString(16).padStart(6,'0'); } }
      if(u.global_name) document.querySelectorAll('.js-uname').forEach(el=>el.textContent=u.global_name);
      if(u.username) document.querySelectorAll('.js-tag').forEach(el=>el.textContent=u.username);
      const pg=u.primary_guild||u.clan, gt=document.querySelector('.js-guildtag');
      if(gt && pg && pg.tag && (pg.identity_enabled!==false)){
        gt.innerHTML='';
        if(pg.badge && pg.identity_guild_id){ const im=document.createElement('img'); im.src='https://cdn.discordapp.com/clan-badges/'+pg.identity_guild_id+'/'+pg.badge+'.png?size=24'; im.alt=''; gt.appendChild(im); }
        gt.appendChild(document.createTextNode(pg.tag)); gt.classList.add('on');
      }
      const st=u.display_name_styles;
      if(st && Array.isArray(st.colors) && st.colors.length){
        const cols=st.colors.map(c=>'#'+(c>>>0).toString(16).padStart(6,'0'));
        const grad='linear-gradient(90deg,'+cols.join(',')+')';
        document.querySelectorAll('.dcard-name').forEach(el=>{el.style.background=grad;el.style.webkitBackgroundClip='text';el.style.backgroundClip='text';el.style.color='transparent';});
      }
      const bio=u.bio||(j.user_profile&&j.user_profile.bio);
      if(bio) document.querySelectorAll('.js-bio').forEach(el=>el.textContent=bio);
      try{ const ms=Number(BigInt(ID)>>22n)+1420070400000; const f=new Date(ms).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
        document.querySelectorAll('.js-since').forEach(el=>el.textContent=f); }catch(_){}
      const cc=document.querySelector('.js-connections');
      if(cc && Array.isArray(j.connected_accounts)){
        const glyph={steam:'\u25c8',tiktok:'\u266a',riotgames:'\u2b22',spotify:'\u266b',xbox:'\u25a3',youtube:'\u25b6'};
        const link={steam:a=>'https://steamcommunity.com/profiles/'+a.id, tiktok:a=>'https://www.tiktok.com/@'+a.name};
        let h='';
        j.connected_accounts.forEach(a=>{ const m=a.metadata||{}; let sub='';
          if(a.type==='steam'){ const s=m.created_at?('Member since '+new Date(m.created_at).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})):''; const g=m.game_count?(m.game_count+' Games'):''; sub=[s,g].filter(Boolean).join(' \u00b7 '); }
          else if(a.type==='tiktok'){ sub=[m.follower_count&&m.follower_count+' Followers',m.following_count&&m.following_count+' Following',m.likes_count&&m.likes_count+' Likes'].filter(Boolean).join(' \u00b7 '); }
          const url=link[a.type]?link[a.type](a):null;
          const nm=url?('<a href="'+url+'" target="_blank" rel="noreferrer">'+a.name+' \u2197</a>'):a.name;
          h+='<div class="conn"><span class="conn-ic '+a.type+'">'+(glyph[a.type]||'\u25c8')+'</span><div class="conn-b"><div class="conn-n">'+nm+'</div>'+(sub?'<div class="conn-s">'+sub+'</div>':'')+'</div></div>';
        });
        h+='<div class="conn-add">+ Add Connection</div>';
        cc.innerHTML=h;
      }
      const bc=document.querySelector('.js-badges');
      if(bc && Array.isArray(j.badges)){ bc.innerHTML=''; j.badges.forEach(b=>{ if(!b.icon) return;
        const img=document.createElement('img'); img.loading='lazy';
        img.src='https://cdn.discordapp.com/badge-icons/'+b.icon+'.png';
        img.alt=b.description||''; img.title=b.description||''; bc.appendChild(img); }); }
    })
    .catch(()=>{});
})();

/* ===== Lanyard — status live + activitate (fara token) ===== */
(function(){
  const ID="1493163753447882894"; if((localStorage.getItem("ideal-consent")||"")!=="accepted")return;
  const dot=document.querySelector('.js-status');
  const act=document.querySelector('.js-activity');
  if(!dot && !act) return;
  const setStatus=st=>{ if(dot) dot.className='dcard-status '+(st||'offline'); };
  const setAct=txt=>{ if(!act) return; if(txt){act.textContent=txt;act.classList.add('on');} else act.classList.remove('on'); };
  function pick(d){
    if(d.listening_to_spotify && d.spotify) return '\u{1F3A7} '+d.spotify.song+' \u2014 '+d.spotify.artist;
    const acts=d.activities||[];
    const custom=acts.find(a=>a.type===4);
    if(custom && (custom.state||custom.emoji)) return ((custom.emoji&&custom.emoji.name)?custom.emoji.name+' ':'')+(custom.state||'');
    const game=acts.find(a=>a.type===0);
    if(game) return '\u{1F3AE} Playing '+game.name;
    const other=acts.find(a=>a.type!==4);
    if(other) return other.name;
    return '';
  }
  function load(){
    fetch('https://api.lanyard.rest/v1/users/'+ID)
      .then(r=>r.ok?r.json():null)
      .then(j=>{ if(!j||!j.success) return; const d=j.data, u=d.discord_user||{};
        setStatus(d.discord_status); setAct(pick(d));
        const banner=document.querySelector('.js-banner');
        if(banner){ const cur=banner.style.backgroundImage; const hasImg=cur && cur!=='none' && cur.indexOf('url(')>-1;
          if(!hasImg && typeof u.accent_color==='number'){ banner.style.backgroundImage='none'; banner.style.backgroundColor='#'+u.accent_color.toString(16).padStart(6,'0'); } }
        document.querySelectorAll('.js-avatar').forEach(el=>{ if(!el.style.backgroundImage && u.avatar){ el.textContent=''; el.style.backgroundImage='url(https://cdn.discordapp.com/avatars/'+ID+'/'+u.avatar+'.'+(u.avatar.startsWith('a_')?'gif':'png')+'?size=160)'; el.style.backgroundSize='cover'; el.style.backgroundPosition='center'; } });
        document.querySelectorAll('.js-uname').forEach(el=>{ if(u.global_name) el.textContent=u.global_name; });
        document.querySelectorAll('.js-tag').forEach(el=>{ if(u.username) el.textContent=u.username; });
      }).catch(()=>{});
  }
  load(); setInterval(load,30000);
})();
