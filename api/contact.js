export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "method" }); return; }
  const WEBHOOK = process.env.DISCORD_WEBHOOK_URL, TOKEN = process.env.DISCORD_BOT_TOKEN, USER_ID = process.env.DISCORD_USER_ID;
  let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch (_) { b = {}; } } b = b || {};
  const clip = (v, n) => String(v ?? "").slice(0, n);
  const name = clip(b.name,200), discord = clip(b.discord,100), budget = clip(b.budget,200), project = clip(b.project,1800);
  if (!name || !project) { res.status(400).json({ error: "missing" }); return; }
  const isId = /^\d{15,20}$/.test(discord);
  const profileUrl = isId ? `https://discord.com/users/${discord}` : null;
  const fields = [ { name:"Name", value:name, inline:true }, { name:"Discord", value:discord||"-", inline:true },
    { name:"Budget", value:budget||"-" }, { name:"Project", value:project } ];
  if (profileUrl) fields.push({ name:"Reply", value:`[Open profile](${profileUrl})` });
  const embed = { title:"New request — iDeaL site", color:5793266, fields, timestamp:new Date().toISOString() };
  try {
    if (WEBHOOK) { const body={embeds:[embed]}; if(USER_ID){body.content=`<@${USER_ID}>`;body.allowed_mentions={users:[USER_ID]};}
      const r=await fetch(WEBHOOK,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      if(!r.ok) throw new Error("webhook "+r.status); res.status(200).json({ok:true}); return; }
    if (TOKEN && USER_ID) { const payload={embeds:[embed]};
      if(profileUrl) payload.components=[{type:1,components:[{type:2,style:5,label:"Reply on Discord",url:profileUrl}]}];
      const dm=await fetch("https://discord.com/api/v10/users/@me/channels",{method:"POST",headers:{Authorization:`Bot ${TOKEN}`,"Content-Type":"application/json"},body:JSON.stringify({recipient_id:USER_ID})});
      if(!dm.ok) throw new Error("open DM failed "+dm.status); const ch=await dm.json();
      const msg=await fetch(`https://discord.com/api/v10/channels/${ch.id}/messages`,{method:"POST",headers:{Authorization:`Bot ${TOKEN}`,"Content-Type":"application/json"},body:JSON.stringify(payload)});
      if(!msg.ok) throw new Error("send failed "+msg.status); res.status(200).json({ok:true}); return; }
    res.status(500).json({ error:"not configured" });
  } catch (e) { res.status(502).json({ error:String(e.message||e) }); }
}
