
const M = window.XDS_MANIFEST, T = window.XDS_TOKENS, P = window.XDS_PALETTE, S = window.XDS_SPECIMENS || {};

const PINNED_LIGHT = '[data-surface="light"], [data-panel="light"], .xds-header__mega, .xds-header__menu';
const DARK_SEL = Object.values(M.components || {}).filter(x => (x.ground || []).includes("dark") && x.id !== "ground")    .flatMap(x => (x.class || "").split("|").map(k => "." + k.trim())).filter(k => k.length > 1).join(",");
const $ = (s, r = document) => r.querySelector(s);
const h = (tag, attrs = {}, html = "") => { const e = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const FAM = M.families || { order: [], gloss: {}, members: {} };
const famTitle = f => String(f).charAt(0).toUpperCase() + String(f).slice(1);
const famGloss = f => { const g = (FAM.gloss || {})[f] || ""; return g ? g.charAt(0).toUpperCase() + g.slice(1) + "." : ""; };
const famId = f => "family-" + f;
const byFamily = (() => {
  const out = new Map(FAM.order.map(f => [f, []]));
  for (const c of Object.values(M.components)) { if (!out.has(c.family)) out.set(c.family, []); out.get(c.family).push(c); }
  for (const [f, list] of out) {
    const rank = (FAM.members || {})[f] || [];
    const at = c => { const i = rank.indexOf(c.id); return i < 0 ? rank.length : i; };
    list.sort((a, b) => at(a) - at(b));
  }
  return out;
})();

$("#ver").textContent = `v${M.version} · built ${M.generated}`;
$("#counts").textContent = `${M.counts.tokens} tokens · ${M.counts.components} components · ${M.counts.faces} typefaces · ${M.lint.errors.length} lint errors · ${M.lint.warnings.length} warnings`;

const rules = $("#rule-list");
for (const t of M.laws.topics) {
  const rows = M.laws.laws.filter(l => l.topic === t.id);
  if (!rows.length) continue;
  rules.append(h("li", { class: "law-topic", id: "law-" + t.id }, `<b>${esc(t.id)}</b><div><span>${esc(t.gloss)}</span></div>`));
  for (const l of rows) {
    const g = [].concat(l.gate || []).join(" ");
    rules.append(h("li", { id: "law-" + l.id }, `<b>${esc(g || "—")}</b><div><span>${esc(l.law)}</span>
  ${l.ok ? `<pre class="ex ok"><span class="ex-tag">passes</span>${esc(l.ok)}</pre>` : ""}${l.bad ? `<pre class="ex bad"><span class="ex-tag">fails</span>${esc(l.bad)}</pre>` : ""}</div>`));
  }
}

const count = tier => Object.values(T).filter(t => t.tier === tier).length;
$("#tier-grid").innerHTML = [["g", "global", "Literals. Hex, px, ms, a family name. Nothing outside tokens.css may bind one."],
  ["s", "semantic", "Intent. References g. Carries the light/dark flip — the only tier that knows about ground."],
  ["c", "component", "Contract. References s. The only tier a component stylesheet may bind."]]
  .map(([k, n, d]) => `<div class="tier"><h3>${k}- · ${n}</h3><p>${d}</p><span class="n">${count(k)} tokens · --${k}-*</span></div>`).join("");

const fams = $("#families");
const meta = {
  "brand-primary": "Identity primary — surfaces and structure. The dark grounds live here (80 page · 70 raised · 90 sunken).",
  "brand-vivid": "Identity vivid — action and links. Step 50 is the primary button. Step 40 is the emphasis edge.",
  "brand-accent": "Identity accent — eyebrows, rules, secondary identity. Never a control fill.",
  "brand-gray": "The one gray. Text, and light-ground borders (10 on page/sunken, 20 on raised).",
  page: "Universal neutral. 0 white · 5 page · 10 sunken · 100 black. Never re-hued.",
  focus: "Reserved. Focus only, off-ladder. 60 on light, 30 on dark.",
  emergency: "Status · interrupt rank 1 of 5", error: "Status · rank 2", warning: "Status · rank 3", success: "Status · rank 4", info: "Status · rank 5",
};
const hex2rgb = x => [1, 3, 5].map(i => parseInt(x.slice(i, i + 2), 16) / 255);
const lin = c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const Y = x => { const [r, g, b] = hex2rgb(x).map(lin); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const ratio = (a, b) => { const x = Y(a) + 0.05, y = Y(b) + 0.05; return (x > y ? x / y : y / x).toFixed(2); };
for (const fam of Object.keys(meta).filter(f => P[f])) {
  const steps = Object.entries(P[fam]);
  const sec = h("section", { class: "family" }, `<h3>${fam}</h3><p class="path">g.color.${fam}.* · ${steps.length} steps</p><p class="blurb" style="margin:0 0 8px">${meta[fam]}</p>`);
  const ramp = h("div", { class: "ramp " + (steps.length === 4 ? "short" : steps.length === 2 ? "two" : "") });
  for (const [step, hex] of steps) {
    const n = +step, dark = n < 50 || (fam === "page" && n < 100);
    const sw = h("div", { class: "swatch", style: `background:${hex};color:${dark ? "#000" : "#fff"}` },
      `<b>${step}</b><span>${hex.toUpperCase()}<br>white ${ratio(hex, "#ffffff")}<br>black ${ratio(hex, "#000000")}</span>`);
    ramp.append(sw);
  }
  sec.append(ramp); fams.append(sec);
}

const sbody = $("#s-table tbody");
for (const [name, t] of Object.entries(T).filter(([, t]) => t.tier === "s")) {
  const chip = v => t.type === "color" && /^#|^rgb/.test(v) ? `<span class="chip" style="background:${v}"></span>` : "";
  sbody.append(h("tr", {}, `<td>${t.cssVar}</td><td>${esc(t.raw)}</td><td>${chip(t.light)}${esc(t.light)}</td><td>${t.flips ? chip(t.dark) + esc(t.dark) : "<span style='opacity:.4'>same</span>"}</td><td class="d">${esc(t.description || "")}</td>`));
}

const idx = $("#index-table tbody");
for (const c of [...byFamily.values()].flat()) {
  const dark = (c.ground || ["light"]).includes("dark") ? (c.darkTokens ? "partial" : "yes") : "no";
  const radius = c.tokens.some(v => { const t = Object.values(T).find(x => x.cssVar === v); return t && /radius/.test(v) && t.light !== "0"; }) ? "yes" : "0";
  idx.append(h("tr", {}, `<td><a href="#c-${c.id}">${c.id}</a></td><td class="d"><a href="#${famId(c.family)}">${esc(c.family)}</a></td><td class="d">${dark}</td><td class="d">${radius}</td><td class="d">${(c.composes || []).join(", ") || "—"}</td><td class="d">${Object.keys(c.props || {}).filter(k => !k.startsWith("__")).join(", ") || "—"}</td><td class="d">${c.tokens.length}</td>`));
}

const pat = $("#patterns-list");
for (const [cid, list] of Object.entries(M.patterns || {})) {

  const sec = h("div", { class: "panel", style: "margin-bottom:16px" }, `<h4>${cid}</h4><dl>${list.map(p =>
    `<dt>${esc(p.id)}</dt><dd style="font-family:inherit">${esc(p.rule)}`
    + (p.html ? `<pre class="pat-starter"><code>${esc(p.html)}</code></pre>` : "")
    + `</dd>`).join("")}</dl>`);
  pat.append(sec);
}

const TOOLS = {};
const facetsOf = c => {
  const f = [];
  if (c.family) f.push(c.family);
  if ((c.ground || ["light"]).includes("dark")) f.push("dark");
  if ((c.composes || []).length) f.push("composed");
  return f;
};

const facetChips = c => { const f = facetsOf(c).filter(x => x !== c.family); return !f.length ? "" :
  `<div class="xds-chip-group entry-facets" aria-label="what this component is">` + f.map(x => `<span class="xds-chip">${esc(x)}</span>`).join("") + `</div>`; };

const nav = $("#nav-components");
const host = $("#components-host");

const FAMILY_MORE = {
  conversation: list => {
    const blocks = [...new Set(list.map(c => c.block || `c.${c.id}.*`))];
    const lightOnly = list.every(c => !(c.ground || []).includes("dark"));
    return "A mini system inside the system. The radius exception (<code>s.radius.conv-*</code>): here the corner carries meaning. " +
      "Tones are brand-gray and brand-vivid; brand-accent appears exactly once, on the source marker." +
      (blocks.length === 1 ? ` One shared token block, <code>${esc(blocks[0])}</code>, parts prefixed by component.` : "") +
      (lightOnly ? " Light ground only." : "");
  }
};
for (const [fam, list] of byFamily) {
  if (!list.length) continue;

  const famName = famTitle(fam);
  nav.append(h("h2", { "data-section": famId(fam) }, famName));
  const more = FAMILY_MORE[fam] ? " " + FAMILY_MORE[fam](list) : "";
  const sec = h("section", { class: "doc-section", id: famId(fam) }, `<h2>${esc(famName)}</h2><p class="blurb">${esc(famGloss(fam))}${more}</p>`);

  const strip = h("div", { class: "xds-chip-group sec-chips", "aria-label": `${famName}, by component` },
    list.map(c => `<a class="xds-chip" href="#c-${c.id}" data-facets="${facetsOf(c).join(" ")}">${esc(c.id)}</a>`).join(""));

  const tally = {};
  list.forEach(c => facetsOf(c).forEach(f => { tally[f] = (tally[f] || 0) + 1; }));
  const useful = [...FAM.order, "dark", "composed"].filter(f => tally[f] && tally[f] < list.length);

  if (useful.length > 1) {
    const bar = h("div", { class: "sec-filters" },
      `<p class="filter-label" id="fl-${fam}">Filter</p>` +
      `<div class="xds-chip-group" role="group" aria-labelledby="fl-${fam}">` +
      `<button type="button" class="xds-chip" aria-pressed="true" data-facet="*">All<span class="facet-n">${list.length}</span></button>` +
      useful.map(f => `<button type="button" class="xds-chip" aria-pressed="false" data-facet="${f}">${esc(f)}<span class="facet-n">${tally[f]}</span></button>`).join("") +
      `</div><p class="filter-count" role="status"></p>`);
    const count = bar.querySelector(".filter-count");
    const all = bar.querySelector('[data-facet="*"]');

    const apply = () => {
      const on = [...bar.querySelectorAll('button[data-facet]:not([data-facet="*"])')]
        .filter(b => b.getAttribute("aria-pressed") === "true").map(b => b.dataset.facet);
      const match = el => on.every(f => (el.dataset.facets || "").split(" ").includes(f));
      let shown = 0;
      strip.querySelectorAll("a").forEach(a => { const ok = match(a); a.hidden = !ok; if (ok) shown++; });

      sec.querySelectorAll("article.entry").forEach(e => { e.hidden = on.length ? !match(e) : false; });
      count.textContent = on.length ? `${shown} of ${list.length}` : "";
      bar.dataset.on = on.length ? "yes" : "";
      all.setAttribute("aria-pressed", String(!on.length));
    };
    bar.addEventListener("click", e => {
      const b = e.target.closest("button[data-facet]"); if (!b) return;
      if (b === all) bar.querySelectorAll('button[data-facet]').forEach(x => x.setAttribute("aria-pressed", "false"));
      else b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      apply();
    });
    sec.append(bar);
  }
  sec.append(strip);

const docket = c => !(c.docket || []).length ? "" :
  `<div class="docket">${c.docket.map(d => `
     <p class="docket-head"><span class="docket-kind" data-kind="${esc(d.kind || "item")}">${esc(d.kind || "item")}</span>
        <span class="docket-id">${esc(d.id)}</span> · filed ${esc(d.filed)}${d.state ? " · " + esc(d.state) : ""}</p>
     ${d.operator ? `<p class="docket-quote">&ldquo;${esc(d.operator)}&rdquo;</p>` : ""}
     <p class="docket-note">${esc(d.note || "")}</p>`).join("")}</div>`;

const RULE_WORDS = { in: "in", notIn: "never in", on: "on", first: "first in", last: "last in", before: "before",
  after: "after", notAdjacent: "never next to" };
const placeText = p => {
  if (!p) return "";
  const out = Object.entries(p).filter(([k]) => k !== "gate" && k !== "otherwise")
    .map(([k, v]) => `${RULE_WORDS[k] || k} ${[].concat(v).join(" or ")}`);
  if (p.otherwise) out.push("otherwise " + placeText(p.otherwise));
  return out.join(" · ");
};
const countText = c => [].concat(c || []).map(x => {
  const n = x.min != null && x.max != null ? (x.min === x.max ? `${x.min}` : `${x.min} to ${x.max}`)
          : x.max != null ? `at most ${x.max}` : `at least ${x.min}`;
  return `${n}${x.of ? " " + x.of : ""} per ${x.per}`;
}).join(" · ");
const gatesOf = (...fs) => [...new Set(fs.flatMap(f => [].concat(f || []).flatMap(x => [].concat((x && x.gate) || []))))];
const rulesLines = c => {
  const L = [];
  if (c.place) L.push(["where", placeText(c.place), gatesOf(c.place)]);
  if (c.count) L.push(["how many", countText(c.count), gatesOf(c.count)]);
  if (c.never && c.never.length) L.push(["never", c.never.join(" · "), []]);
  return L;
};
const notesOf = c => rulesLines(c).map(([k, v, g]) =>
  `<p style="margin-top:var(--s-space-sm)"><b>${esc(k)}</b> &mdash; <code>${esc(v)}</code>${g.length ? ` <span class="cap">${esc(g.join(" "))}</span>` : ""}</p>`).join("");
const picksOf = c => {
  const all = Object.entries(c.picks || {});
  if (!all.length) return "";
  return all.map(([prop, spec]) => {
    const when = Object.entries(spec || {}).filter(([k]) => k !== "test");
    return `<p style="margin-top:var(--s-space-sm)"><b>Which <code>${esc(prop)}</code>.</b>${spec && spec.test ? " " + esc(spec.test) : ""}</p>` +
      (when.length ? `<ul style="margin:var(--s-space-2xs) 0 0;padding-inline-start:var(--s-space-lg);color:var(--s-color-text-secondary)">${when.map(([v, w]) =>
        `<li><code>${esc(v)}</code> &mdash; ${esc(w)}</li>`).join("")}</ul>` : "");
  }).join("");
};

  for (const c of list) {
    nav.append(h("a", { href: "#c-" + c.id }, c.id));
    if (TOOLS[c.id]) nav.append(h("a", { class: "nav-tool", href: TOOLS[c.id].href }, TOOLS[c.id].label));
    const e = h("article", { class: "entry", id: "c-" + c.id, "data-facets": facetsOf(c).join(" ") });
    e.append(h("div", { class: "entry-head" },
      `<div><h3>.${esc(c.class)}</h3><span class="tier-tag">${esc(c.family)} · binds ${c.block || "c." + c.id + ".*"}</span>${facetChips(c)}${TOOLS[c.id] ? `<p class="entry-tool"><a class="xds-link" href="${TOOLS[c.id].href}">${TOOLS[c.id].label}</a> &mdash; every fill, emphasis and surface this component allows, with the combinations that fail ruled out</p>` : ""}</div>
       <div><p>${esc(c.summary)}</p>${notesOf(c)}${picksOf(c)}<p class="font-line">font: ${esc(c.font)} · element: ${esc(c.element)}</p>${docket(c)}</div>`));
    const spec = S[c.id] || `<p class="cap">no specimen authored</p>`;
    const darkCapable = (c.ground || ["light"]).includes("dark");
    const pair = h("div", { class: "spec-pair" + ((c.wide || !darkCapable || c.darkSpecimen === false) ? " single" : "") });
    const light = h("div", { class: "spec xds-page", "data-ground": "light" });
    light.innerHTML = `<div class="spec-marker"><span>pattern begins · light</span><span>${darkCapable ? "rest" : "no dark variant"}</span></div>${spec}`;
    pair.append(light);
    if (darkCapable && c.darkSpecimen !== false) {

      const classes = c.class.split("|").map(s => s.trim());
      const wrap = h("div");
      wrap.innerHTML = spec;
      wrap.querySelectorAll(classes.map(k => "." + k).join(",")).forEach(el => el.setAttribute("data-surface", "dark"));

      wrap.querySelectorAll(DARK_SEL).forEach(el => { if (!el.closest(PINNED_LIGHT)) el.setAttribute("data-surface", "dark"); });

      const ids = new Set([...wrap.querySelectorAll("[id]")].map(el => el.id));
      const suffix = v => ids.has(v) ? v + "-dark" : v;
      wrap.querySelectorAll("[id]").forEach(el => el.id = el.id + "-dark");
      for (const attr of ["for", "aria-controls", "aria-labelledby", "aria-describedby", "data-modal-open", "data-modal-close"]) {
        wrap.querySelectorAll(`[${attr}]`).forEach(el => { const v = el.getAttribute(attr); if (v) el.setAttribute(attr, v.split(/\s+/).map(suffix).join(" ")); });
      }
      wrap.querySelectorAll('[href^="#"]').forEach(el => { const v = el.getAttribute("href").slice(1); if (ids.has(v)) el.setAttribute("href", "#" + v + "-dark"); });
      wrap.querySelectorAll('[fill^="url(#"]').forEach(el => { const v = el.getAttribute("fill").slice(5, -1); if (ids.has(v)) el.setAttribute("fill", `url(#${v}-dark)`); });

      const inCard = ["button", "link", "badge", "divider", "button-group", "accordion", "breadcrumb", "in-page-nav", "pagination", "label", "checkbox", "switch", "field",
        "prose", "text", "eyebrow", "section-heading", "pull-quote", "stat", "section-opener", "objective"].includes(c.id);
      const dark = h("div", { class: "spec xds-page", "data-ground": "dark" });
      dark.innerHTML = `<div class="spec-marker"><span>pattern begins · dark surface</span><span>${inCard ? `inside .xds-card[data-surface="dark"]` : `.${classes[0]}[data-surface="dark"]`}</span></div>` +
        (inCard ? `<div class="xds-card" data-surface="dark">${wrap.innerHTML}</div>` : wrap.innerHTML);
      pair.append(dark);
      if (c.darkFirst) pair.prepend(dark);
    }
    e.append(pair);

    const defs = c.propDefaults || {};
    const props = (Object.entries(c.props || {}).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${(Array.isArray(v) ? v : [v]).map(x => esc(x) + (defs[k] === x ? " <i>(default)</i>" : "")).join(" · ")}</dd>`).join("")
      + Object.entries(defs).filter(([k, d]) => !(Array.isArray((c.props || {})[k]) && c.props[k].includes(d))).map(([k, d]) => `<dt>${esc(k)}</dt><dd>default: ${esc(d)}</dd>`).join(""))
      || "<dt>—</dt><dd>no props</dd>";
    const toks = c.tokens.map(v => { const t = T[v.replace(/^--/, "").replace(/-/g, ".")] || Object.values(T).find(x => x.cssVar === v); return `<tr><td>${v}</td><td>${esc(t?.raw ?? "")}</td><td>${t?.type === "color" ? `<span class="chip" style="background:${t.light}"></span>` : ""}${esc(t?.light ?? "")}</td><td>${t?.flips ? `<span class="chip" style="background:${t.dark}"></span>${esc(t.dark)}` : "<span style='opacity:.4'>same</span>"}</td></tr>`; }).join("");
    e.append(h("div", { class: "apparatus" }, `
      <div class="panel"><h4>props</h4><dl>${props}</dl></div>
      <div class="panel"><h4>states</h4><dl><dt>states</dt><dd>${c.states.map(esc).join(" · ")}</dd>${c.composes ? `<dt>composes</dt><dd>${c.composes.join(" · ")}</dd>` : ""}${(c.optionalParts || []).length ? `<dt>optional parts</dt><dd>${c.optionalParts.map(esc).join(" · ")}</dd>` : ""}${c.a11y ? `<dt>a11y</dt><dd style="font-family:inherit">${esc(c.a11y)}</dd>` : ""}</dl></div>
      <div class="panel wide"><h4>html</h4><pre>${esc(c.html)}</pre></div>
      <div class="panel wide"><h4>bound tokens · ${c.tokens.length} · every one is c-, every one resolves through s- to g-</h4>
        <details class="toks"><summary>show the binding table</summary><div class="scroll-x"><table class="tok-table"><thead><tr><th>c- token</th><th>→ s-</th><th>light</th><th>dark</th></tr></thead><tbody>${toks}</tbody></table></div></details>
        <details class="toks"><summary>spec as JSON</summary><pre>${esc(JSON.stringify({ id: c.id, family: c.family, class: c.class, element: c.element, props: c.props, states: c.states, composes: c.composes || [], tokens: c.tokens, selectors: c.selectors }, null, 1))}</pre></details>
      </div>`));
    sec.append(e);
  }
  if (fam === "conversation") {
    const demo = h("article", { class: "entry entry--demo", id: "c-conv-demo", "data-facets": "" }, `<div class="entry-head"><div><h3>a whole exchange</h3><span class="tier-tag">composition · nothing new</span></div><div><p>Every part above, in one thread: notice, two turns, steps, sources, actions, typing, composer.</p></div></div>`);
    const pane = h("div", { class: "spec-pair single" }); const l = h("div", { class: "spec xds-page", "data-ground": "light" });
    l.innerHTML = `<div class="spec-marker"><span>pattern begins · light</span><span>composition</span></div>` + (S["conv-demo"] || "");
    pane.append(l); demo.append(pane); sec.append(demo);
  }
  host.append(sec);
}


window.XDS?.init(document);
document.querySelectorAll(".indet").forEach(i => i.indeterminate = true);

document.addEventListener("toggle", e => {
  const d = e.target; if (!d.classList || !d.classList.contains("xds-disclosure")) return;
  const spec = d.closest(".spec"); if (!spec) return;
  requestAnimationFrame(() => {
    spec.style.removeProperty("padding-top");
    const panels = [...spec.querySelectorAll(".xds-disclosure[open] > .xds-disclosure__panel")];
    if (!panels.length) return;
    const base = parseFloat(getComputedStyle(spec).paddingTop) || 0;
    const edge = spec.getBoundingClientRect().top + base;
    const need = Math.max(0, ...panels.map(p => edge - p.getBoundingClientRect().top));
    if (need > 0) spec.style.paddingTop = (base + need) + "px";
  });
}, true);

const PARTS = [
  { id: "foundations", title: "Foundations", members: ["rules", "tiers", "color", "semantic", "icons", "index"],
    lede: "What the components are made of, and the rules that decide what a component may say. The generator enforces the rules; the three tiers say where a value may live; the ramps are every color the system owns; the semantic layer is the only tier that knows about ground. Read this before the components — everything below binds to what is defined here." },
  { id: "patterns", title: "Patterns", members: [] },
  { id: "meta", title: "Meta", members: ["open", "lint", "files"],
    lede: "The state of the system rather than its contents: the decisions still open, what the linter is complaining about in this build, and the files the generator reads and writes." }
];
for (const part of PARTS) {
  let el = document.getElementById(part.id);
  if (!el) {
    el = h("section", { class: "doc-section doc-part", id: part.id }, `<h2>${part.title}</h2><p class="blurb">${part.lede}</p>`);
    const at = document.getElementById(part.anchor || part.members[0]);
    if (!at) continue;
    at.parentNode.insertBefore(el, at);
  } else {
    el.classList.add("doc-part");
  }
  for (const id of part.members) {
    const sec = document.getElementById(id);
    if (!sec) continue;
    const head = sec.querySelector(":scope > h2");
    if (head) head.replaceWith(h("h3", {}, head.innerHTML));
    el.appendChild(sec);
  }
}

(function () {

  const closed = new Set();
  const write = () => {};
  let syncAll = () => {};

  function fold(host, head, id, label, count) {
    const body = document.createElement("div");
    body.className = host.classList.contains("entry") ? "entry-body" : "sec-body";
    body.id = id + "-body";
    let n = head.nextSibling;
    while (n) { const next = n.nextSibling; body.appendChild(n); n = next; }
    host.appendChild(body);

    while (body.firstElementChild && (body.firstElementChild.classList.contains("blurb") || body.firstElementChild.classList.contains("sec-chips") || body.firstElementChild.classList.contains("sec-filters")))
      host.insertBefore(body.firstElementChild, body);

    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "toggle";
    btn.setAttribute("aria-controls", body.id);
    btn.innerHTML = `<span class="chev" aria-hidden="true"></span><span class="toggle__label"></span>` +
                    (count ? `<span class="count">${count}</span>` : "");
    btn.querySelector(".toggle__label").textContent = label;
    head.textContent = ""; head.appendChild(btn);

    const set = open => { btn.setAttribute("aria-expanded", String(open)); body.hidden = !open;
                          open ? closed.delete(id) : closed.add(id); };
    set(false);

    btn.addEventListener("click", () => {
      const was = btn.getBoundingClientRect().top;
      set(body.hidden); write(closed); syncAll();
      const now = btn.getBoundingClientRect().top;
      if (now !== was) window.scrollBy(0, now - was);
    });
    return { host, body, btn, set: o => { set(o); write(closed); } };
  }

  const sections = new Map();
  document.querySelectorAll("section.doc-section").forEach(sec => {
    const head = sec.querySelector(":scope > h2, :scope > h3"); if (!head || !sec.id) return;
    const entries = sec.querySelectorAll(":scope > .entry:not(.entry--demo)").length;
    const kids = sec.querySelectorAll(":scope > section.doc-section").length;
    const deep = sec.querySelectorAll(".entry:not(.entry--demo)").length;
    const count = entries ? `${entries} components` : deep ? `${deep} components` : kids ? `${kids} sections` : "";
    sections.set(sec.id, fold(sec, head, sec.id, head.textContent.trim(), count));
  });
  const entries = new Map();
  document.querySelectorAll("article.entry").forEach(entry => {
    const head = entry.querySelector(":scope > .entry-head > div > h3"); if (!head || !entry.id) return;
    const wrap = entry.querySelector(":scope > .entry-head");
    const body = document.createElement("div"); body.className = "entry-body"; body.id = entry.id + "-body";
    let n = wrap.nextSibling; while (n) { const next = n.nextSibling; body.appendChild(n); n = next; }
    entry.appendChild(body);
    const label = head.textContent.trim();
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "toggle"; btn.setAttribute("aria-controls", body.id);
    btn.innerHTML = `<span class="chev" aria-hidden="true"></span><span class="toggle__label"></span>`;
    btn.querySelector(".toggle__label").textContent = label;
    head.textContent = ""; head.appendChild(btn);
    const set = open => { btn.setAttribute("aria-expanded", String(open)); body.hidden = !open;
                          open ? closed.delete(entry.id) : closed.add(entry.id); };
    set(false);
    btn.addEventListener("click", () => {
      const was = btn.getBoundingClientRect().top;
      set(body.hidden); write(closed); syncAll();
      const now = btn.getBoundingClientRect().top;
      if (now !== was) window.scrollBy(0, now - was);
    });
    entries.set(entry.id, { set: o => { set(o); write(closed); } });
  });

  const navEl = document.querySelector(".doc-nav");
  const comps = document.querySelector("#nav-components");
  if (comps) { while (comps.firstChild) navEl.insertBefore(comps.firstChild, comps); comps.remove(); }
  const groups = [];
  let current = null;
  [...navEl.children].forEach(el => {

    if (el.tagName === "H2" && el.classList.contains("nav-solo")) { current = null; return; }
    if (el.tagName === "H2") { current = { head: el, links: [] }; groups.push(current); }
    else if (current && el.tagName === "A") current.links.push(el);
  });
  groups.forEach((g, i) => {
    const list = document.createElement("div"); list.className = "nav-group"; list.id = "nav-group-" + i;
    g.head.after(list); g.links.forEach(a => list.appendChild(a));
    const label = g.head.textContent.trim(), id = "nav:" + label;
    const target = g.head.dataset.section || "";
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "toggle"; btn.setAttribute("aria-controls", list.id);
    btn.setAttribute("aria-label", `${label} links`);
    btn.innerHTML = `<span class="chev" aria-hidden="true"></span>`;
    g.head.textContent = ""; g.head.appendChild(btn);

    const name = document.createElement(target ? "a" : "span");
    name.className = "nav-head__link";
    if (target) name.setAttribute("href", "#" + target);
    name.textContent = label;
    g.head.appendChild(name);

    g.targets = [...new Set(g.links.map(a => {
      const t = document.getElementById(a.getAttribute("href").slice(1));
      return t ? (t.closest("section.doc-section") || t).id : null;
    }).filter(Boolean))];
    if (target && !g.targets.includes(target)) g.targets.push(target);

    const set = open => {
      btn.setAttribute("aria-expanded", String(open)); list.hidden = !open;
      open ? closed.delete(id) : closed.add(id);
    };
    set(false);
    btn.addEventListener("click", () => { set(list.hidden); write(closed); syncAll(); });
    g.set = set;
  });

  const menu = document.querySelector(".doc-menu"), scrim = document.querySelector(".doc-scrim");
  const root = document.querySelector(".doc") || document.body;

  const NARROW = (getComputedStyle(document.documentElement).getPropertyValue("--s-breakpoint-narrow") || "600px").trim();
  function setNav(open) {
    root.dataset.nav = open ? "open" : "";
    menu?.setAttribute("aria-expanded", String(open));
    if (scrim) scrim.hidden = !open;
    if (open) navEl.querySelector("a, button")?.focus();
  }
  setNav(false);
  menu?.addEventListener("click", () => setNav(root.dataset.nav !== "open"));
  scrim?.addEventListener("click", () => setNav(false));
  addEventListener("keydown", e => { if (e.key === "Escape" && root.dataset.nav === "open") { setNav(false); menu?.focus(); } });
  matchMedia(`(max-width: ${NARROW})`).addEventListener("change", e => { if (!e.matches) setNav(false); });

  const reveal = hash => {
    const t = hash && document.getElementById(hash.slice(1)); if (!t) return;

    const chain = [];
    for (let sec = t.closest("section.doc-section"); sec; sec = sec.parentElement && sec.parentElement.closest("section.doc-section")) chain.unshift(sec);
    chain.forEach(sec => sections.get(sec.id)?.set(true));
    if (chain.length) groups.forEach(g => { if (chain.some(sec => g.targets.includes(sec.id))) g.set(true); });

    const ent = t.closest("article.entry");
    if (ent && ent.hidden) ent.closest("section.doc-section")?.querySelector('.sec-filters button[data-facet="*"]')?.click();
    if (t.classList.contains("entry")) entries.get(t.id)?.set(true);
    write(closed);
  };

  const jumpTo = hash => {
    const id = hash && decodeURIComponent(hash.slice(1));
    const t = id && document.getElementById(id); if (!t) return false;
    reveal(hash);
    requestAnimationFrame(() => {
      const margin = parseFloat(getComputedStyle(t).scrollMarginBlockStart) || 0;
      window.scrollTo({ top: Math.max(0, window.scrollY + t.getBoundingClientRect().top - margin), behavior: "auto" });
      if (t.tabIndex < 0 && !t.hasAttribute("tabindex")) t.setAttribute("tabindex", "-1");
      t.focus({ preventScroll: true });
    });
    return true;
  };
  document.addEventListener("click", e => {
    const a = e.target.closest ? e.target.closest('a[href^="#"]') : null; if (!a) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute("href");
    if (href === "#" || !document.getElementById(decodeURIComponent(href.slice(1)))) return;
    e.preventDefault();
    try { history.pushState(null, "", href); } catch (err) {   }
    jumpTo(href);
    if (navEl.contains(a) && matchMedia(`(max-width: ${NARROW})`).matches) setNav(false);
  });

  const searchCorpus = c => [c.id, c.class, c.family, (FAM.gloss || {})[c.family] || "", c.summary, placeText(c.place), (c.never || []).join(" "), (c.states || []).join(" "),
    Object.entries(c.props || {}).map(([k, v]) => k + " " + (Array.isArray(v) ? v.join(" ") : v)).join(" "),
    (c.tokens || []).join(" "), JSON.stringify(c.a11y || "")].join(" ").toLowerCase();

  const searchScore = (c, q) => {
    const id = c.id.toLowerCase(), cls = (c.class || "").toLowerCase();
    if (id === q) return 100;
    if (id.startsWith(q)) return 80;
    if (id.includes(q)) return 60;
    if (cls.includes(q)) return 50;
    if ((c.summary || "").toLowerCase().includes(q)) return 30;
    return searchCorpus(c).includes(q) ? 10 : 0;
  };

  const runSearch = raw => {
    const q = String(raw || "").trim().toLowerCase();
    document.getElementById("doc-results")?.remove();
    if (!q) return;
    const hits = Object.values(M.components)
      .map(c => ({ c, s: searchScore(c, q) })).filter(h => h.s > 0)
      .sort((a, b) => b.s - a.s || a.c.id.localeCompare(b.c.id));
    const head = document.querySelector(".doc-head");
    const panel = h("section", { class: "doc-results", id: "doc-results", tabindex: "-1" },
      `<p class="doc-results__count" role="status">${hits.length
        ? `${hits.length} component${hits.length === 1 ? "" : "s"} for &ldquo;${esc(q)}&rdquo;`
        : `Nothing matches &ldquo;${esc(q)}&rdquo;`}</p>` +
      (hits.length
        ? `<ul class="doc-results__list">${hits.map(({ c }) =>
            `<li><a href="#c-${c.id}"><b>${esc(c.id)}</b> <span class="tier-tag">${esc(c.family)}</span></a>
             <p>${esc((c.summary || "").split(". ")[0]).slice(0, 160)}</p></li>`).join("")}</ul>`

        : `<p class="doc-results__none">Try a component name (<code>card</code>, <code>disclosure</code>),
           a class (<code>xds-hero</code>) or a family
           (<code>${esc((M.components.card || {}).family || FAM.order[0] || "")}</code>).</p>`) +
      `<p><a class="doc-results__clear" href="index.html">Clear search</a></p>`);
    head.insertAdjacentElement("afterend", panel);
    panel.focus({ preventScroll: true });
  };

  const q0 = new URLSearchParams(location.search).get("q");
  if (q0) runSearch(q0);

  addEventListener("hashchange", () => jumpTo(location.hash));
  if (location.hash) jumpTo(location.hash);

})();
