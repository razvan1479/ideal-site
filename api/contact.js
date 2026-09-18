export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "method" }); return; }
  const TOKEN = process.env.DISCORD_BOT_TOKEN, USER_ID = process.env.DISCORD_USER_ID;
  if (!TOKEN || !USER_ID) { res.status(500).json({ error: "not configured" }); return; }
  let b = req.body; if (typeof b === "string") { try { b = JSON.parse(b); } catch (_) { b = {}; } } b = b || {};
  const clip = (v, n) => String(v ?? "").slice(0, n);
  const name = clip(b.name,200), discord = clip(b.discord,100), budget = clip(b.budget,200), project = clip(b.project,1800);
  if (!name || !project) { res.status(400).json({ error: "missing" }); return; }
  const isId = /^\d{15,20}$/.test(discord);
  const profileUrl = isId ? `https://discord.com/users/${discord}` : null;
  const payload = { embeds: [{ title: "New request — iDeaL site", color: 5793266,
    fields: [ { name:"Name", value:name, inline:true }, { name:"Discord", value:discord||"-", inline:true },
      { name:"Budget", value:budget||"-" }, { name:"Project", value:project } ],
    timestamp: new Date().toISOString() }] };
  if (profileUrl) payload.components = [{ type:1, components:[{ type:2, style:5, label:"Reply on Discord", url:profileUrl }] }];
  try {
    const dm = await fetch("https://discord.com/api/v10/users/@me/channels", { method:"POST",
      headers:{ Authorization:`Bot ${TOKEN}`, "Content-Type":"application/json" }, body: JSON.stringify({ recipient_id: USER_ID }) });
    if (!dm.ok) throw new Error("open DM failed " + dm.status);
    const ch = await dm.json();
    const msg = await fetch(`https://discord.com/api/v10/channels/${ch.id}/messages`, { method:"POST",
      headers:{ Authorization:`Bot ${TOKEN}`, "Content-Type":"application/json" }, body: JSON.stringify(payload) });
    if (!msg.ok) throw new Error("send failed " + msg.status);
    res.status(200).json({ ok: true });
  } catch (e) { res.status(502).json({ error: String(e.message || e) }); }
}
