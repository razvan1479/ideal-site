export default async function handler(req, res) {
  const invites = String(req.query.invites || "").split(",").map(s=>s.trim()).filter(Boolean).slice(0,25);
  const out = { servers: {} };
  await Promise.all(invites.map(async (code) => {
    try { const r = await fetch(`https://discord.com/api/v10/invites/${code}?with_counts=true`); if (!r.ok) return;
      const d = await r.json(); const g = d.guild || {};
      out.servers[code] = { name: g.name || null,
        icon:   g.icon   ? `https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png?size=256` : null,
        banner: g.banner ? `https://cdn.discordapp.com/banners/${g.id}/${g.banner}.${g.banner.startsWith("a_")?"gif":"png"}?size=600` : null,
        splash: g.splash ? `https://cdn.discordapp.com/splashes/${g.id}/${g.splash}.png?size=600` : null,
        members: d.approximate_member_count ?? null }; } catch (_) {}
  }));
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
  res.status(200).json(out);
}
