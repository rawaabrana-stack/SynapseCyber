import React from "react";

const delivers = [
  "A clear view of where a single compromise could spread, and what stops it",
  "Trust boundaries mapped and tested for whether they are actually enforced",
  "Identity and privileged-access design assessed against least-privilege",
  "A measured Zero Trust maturity baseline and a defined target state",
  "Cloud foundations and guardrails reviewed against recognised baselines",
  "A prioritised roadmap that strengthens containment without stalling delivery",
];

const audience = [
  ["Designing or re-platforming", "You're standing up a new platform, migrating to cloud, or re-architecting, and you want design-level assurance before the build locks the decisions in."],
  ["Containing blast radius", "A recent incident, audit finding, or near-miss showed that a small compromise could spread too far — and segmentation and identity need hardening by design."],
  ["A Zero Trust direction", "Leadership has committed to a Zero Trust direction and needs an honest maturity baseline and a sequenced roadmap, not a vendor pitch."],
];

const facts = [
  ["Methodology", "NIST Zero Trust principles plus recognised architecture and cloud baselines, evidenced through design review and data-flow analysis."],
  ["vs Penetration testing", "An architecture review assesses the design — is it sound? A penetration test assesses a running system — is it exploitable? The two are complementary."],
  ["Typical duration", "2–5 weeks, depending on the size of the estate and the design documentation available."],
  ["Includes", "Architecture intake, trust and segmentation analysis, identity and control review, Zero Trust gap assessment, and a roadmap."],
  ["Best fit when", "You have design artefacts — diagrams, IAM and network configuration — or architects available to walk the design with us."],
  ["Output", "Architecture risk report, trust-boundary and segmentation diagrams, a Zero Trust maturity baseline and target state, and a prioritised roadmap."],
];

const stats = [
  ["NIST 800-207", "Zero Trust reference model"],
  ["2–5 wks", "Typical review window"],
  ["Design-stage", "Caught before it ships"],
  ["Roadmap", "Prioritised and sequenced"],
];

const risks = [
  "Flat or weakly segmented networks where one foothold can reach everything",
  "Over-privileged identities and standing access that widen every breach",
  "Trust assumed between components but never actually enforced",
  "Keys and secrets stored or rotated in ways that don't survive scrutiny",
  "Cloud foundations that bake in weaknesses every later workload inherits",
  "Finding the design flaw during an incident instead of at the whiteboard",
];

const steps = [
  ["Architecture intake", "Gather design documentation, diagrams, IAM and network configuration, and data-flow context, and agree the systems and boundaries in scope."],
  ["Data-flow & trust mapping", "Map how data and requests move through the environment, and identify every point where trust changes hands."],
  ["Segmentation analysis", "Assess network and micro-segmentation against lateral-movement and blast-radius risk — how far does a foothold actually get?"],
  ["Identity & access review", "Evaluate IAM, privileged access, authentication, and authorisation design against least-privilege and standing-access risk."],
  ["Key & secrets review", "Examine how cryptographic keys and secrets are generated, stored, rotated, and accessed across the design."],
  ["Zero Trust gap assessment", "Compare the current design to a target Zero Trust maturity across identity, device, network, and workload."],
  ["Prioritised roadmap", "Sequence improvements by risk reduction against delivery effort — not a flat list of every possible recommendation."],
  ["Design-stage advisory", "Stay available as changes are designed and rolled out, reviewing decisions before they are built rather than after."],
];

const receiveEng = [
  "Architecture risk-assessment report with rated findings",
  "Trust-boundary and segmentation diagrams of the current design",
  "Identity and access architecture findings against least-privilege",
  "Zero Trust maturity assessment with a defined target state",
  "Prioritised, sequenced architecture-improvement roadmap",
  "An executive summary framing risk in business terms",
];

const receiveCommercial = [
  "A scoping call and fixed-scope proposal before any work begins",
  "A review built around your available design artefacts and architects",
  "Working sessions with your engineering and platform teams",
  "A walkthrough of the findings and roadmap with the lead architect",
  "Design-stage advisory on in-flight changes within an agreed window",
  "A re-review of revised designs against the original findings",
];

const frameworks = ["NIST SP 800-207", "NIST CSF 2.0", "SABSA", "CIS Benchmarks", "Cloud Well-Architected", "ISO/IEC 27001", "CSA CCM"];
const industries = ["Financial Services", "Healthcare", "Public Sector & Government", "Retail & E-commerce", "Critical Infrastructure", "SaaS & Technology", "Education & Research", "Professional Services"];

const tiers = [
  ["Focused", "A single platform, application, or cloud landing zone, with design artefacts available — ideal for a first review or a specific build.", "~1–2 weeks"],
  ["Standard", "A multi-system environment: segmentation, identity, and a Zero Trust baseline assessed across the estate.", "~2–4 weeks"],
  ["Enterprise", "A complex or regulated estate, multiple domains, deeper cloud and identity review, and board-grade reporting.", "~4–6 weeks+"],
];

const whyUs = [
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="18" height="5" rx="1" /><rect x="6" y="9" width="12" height="5" rx="1" /><rect x="9" y="4" width="6" height="5" rx="1" /></svg>,
    "Design-stage, not just runtime",
    "We find the conditions that let a breach spread before they're built in — not only the bugs a scanner can see in today's running system.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7z" /><polyline points="9 12 11.3 14.3 15.5 9.8" /></svg>,
    "Zero Trust without the dogma",
    "A pragmatic maturity baseline and roadmap that fits your environment — not a rip-and-replace mandate or a vendor pitch.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1.5" /></svg>,
    "Containment-focused",
    "The priority is blast radius: assume something gets in, and make sure it cannot reach everything else from there.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0 1 14 0" /></svg>,
    "Identity-first",
    "Most modern breaches turn on identity and standing access; we treat it as the centre of the design, not an afterthought.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="9" r="2" /><path d="M6 8v8" /><path d="M6 13h6a4 4 0 0 0 4-4" /></svg>,
    "A roadmap you can sequence",
    "Findings are prioritised by risk reduction against delivery effort, so the work fits real release cycles rather than competing with them.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>,
    "Plain-English reporting",
    "Diagrams your architects trust and a summary your board can read, with business impact up front and the technical detail behind it.",
  ],
];

const faqs = [
  ["How is an architecture review different from a penetration test?", "A penetration test assesses a running system and asks \u201ccan this be exploited right now?\u201d An architecture review assesses the design and asks \u201cif something gets in, how far can it spread?\u201d The two are complementary — the review fixes the conditions that let the next vulnerability escalate."],
  ["What do you need from us to run it?", "Ideally design documentation — architecture diagrams, data-flow descriptions, and IAM and network configuration — plus access to an architect or two who can walk the design. Where documentation is thin, we reconstruct the picture together in working sessions."],
  ["How long does it take?", "Typically 2–5 weeks, depending on the size of the estate and how much design documentation already exists. A single platform sits at the short end; a complex, multi-domain environment at the longer end."],
  ["What is Zero Trust maturity, in practice?", "A measure of how far the design has moved from implicit trust — \u201cinside the network is safe\u201d — toward verifying every request across identity, device, network, and workload. We baseline where you are today and define a realistic target, not an all-or-nothing label."],
  ["Will this stall our delivery?", "No. The output is a prioritised, sequenced roadmap built to fit real release cycles, and design-stage advisory means we review changes as they are designed rather than blocking them after the fact."],
  ["How is it priced?", "Fixed-fee, quoted after a scoping call that confirms the architecture in scope and the artefacts available. Pricing scales with estate size and review depth — you get a firm number before you commit."],
];

export default function SecurityArchitectureReview() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Security Architecture Review</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Security Architecture</div>
              <h1 className="sc-h1">Security Architecture <em>Review</em></h1>
              <p className="sc-lead">Test whether your design holds up before it ships — segmentation, identity, and trust boundaries reviewed against Zero Trust principles, with a roadmap to close the gaps that matter.</p>
              <div className="sc-trust"><span>Zero Trust-aligned</span><span>Segmentation &amp; identity review</span><span>Trust-boundary mapping</span><span>Prioritised roadmap</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="16" width="18" height="5" /><rect x="6" y="10" width="12" height="6" /><rect x="9" y="3" width="6" height="7" /></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-tbar">
        <div className="sc-tbarin">
          <span>Zero Trust-aligned</span>
          <span>Trust-boundary mapping</span>
          <span>Segmentation &amp; identity review</span>
          <span>Design-stage advisory</span>
          <span>Prioritised roadmap</span>
        </div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">Many breaches succeed not because a single control failed, but because the architecture let a small compromise become a large one. A security architecture review evaluates how your systems are designed — where trust boundaries sit, how identity is enforced, and how well segmentation contains an intruder who is already inside.</p>
          <p className="sc-p">We assess against NIST Zero Trust principles and recognised design baselines, then deliver a prioritised roadmap that strengthens containment and identity without stalling your delivery.</p>
          <div className="sc-eb" style={{ marginTop: "34px" }}>What it delivers</div>
          <ul className="sc-list">{delivers.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who This Is For</div>
          <h2 className="sc-h2">This review is a fit if you&rsquo;re&hellip;</h2>
          <div className="sc-numgrid">
            {audience.map(([h, p], i) => (
              <div className="sc-numcard" key={h}>
                <span className="n">{i + 1}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">At a Glance</div>
          <h2 className="sc-h2">Architecture review, the <em>quick facts</em>.</h2>
          <dl className="sc-facts">
            {facts.map(([t, v]) => (
              <div className="sc-frow" key={t}><dt>{t}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <p className="sc-freview">Last reviewed: 2026-06-04</p>
          <div className="sc-stats">
            {stats.map(([b, s]) => (
              <div className="sc-stat" key={b}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why It Matters</div>
          <h2 className="sc-h2">Fix the design, not just the <em>bug</em>.</h2>
          <p className="sc-p">Testing a running system finds today&rsquo;s vulnerabilities. Reviewing the design fixes the conditions that let the next one escalate. Most damaging breaches are not a single clever exploit — they are a modest foothold that the architecture allowed to spread into something serious.</p>
          <div className="sc-eb" style={{ marginTop: "30px" }}>Without an architecture review, you risk</div>
          <ul className="sc-xlist">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">From design to <em>roadmap</em>.</h2>
          <p className="sc-p">A structured review combining trust-boundary mapping, identity analysis, and a Zero Trust gap assessment — ending in a roadmap you can actually sequence into delivery, not a flat list of findings.</p>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-p" style={{ marginTop: "26px" }}>Reviews typically run 2–5 weeks depending on estate size and available design documentation. Design-stage advisory is available beyond the review itself.</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">A clear <em>target state</em>.</h2>
              <ul className="sc-list">{receiveEng.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
            <div>
              <div className="sc-eb">How We Work With You</div>
              <h2 className="sc-h2">Commercial <em>commitments</em>.</h2>
              <ul className="sc-list">{receiveCommercial.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Anchored in Zero <em>Trust</em>.</h2>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">Industries We Serve</div>
              <h2 className="sc-h2">Where this <em>applies</em>.</h2>
              <div className="sc-chips">{industries.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Engagement Scope</div>
          <h2 className="sc-h2">What shapes the <em>review</em>.</h2>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4>
                <p>{p}</p>
                <span className="dur">{d}</span>
              </div>
            ))}
          </div>
          <div className="sc-tnote">Fixed-scope proposal before you commit — no scope-creep invoicing.</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why SynapseCyber</div>
          <h2 className="sc-h2">Containment by <em>design</em>.</h2>
          <p className="sc-p">A review is only useful if it changes the design. The focus here is blast radius and identity — the two things that decide whether a breach stays small — delivered as a roadmap your teams can sequence, not a report that sits on a shelf.</p>
          <div className="sc-why">
            {whyUs.map(([icon, h, p]) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-wicon">{icon}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">FAQ</div>
          <h2 className="sc-h2">Common <em>questions</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Scope your architecture review</h3>
            <p>Book a 30-minute scoping call. We&rsquo;ll confirm the architecture in scope, the design artefacts available, and a fixed-scope quote.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/contact" className="sc-btn ghost">Contact us</a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-page{--bg:#F8FAFC;--bg2:#F1F5F9;--srf:#fff;--ink:#0F172A;--ink2:#334155;--ink3:#64748B;--line:#E2E8F0;--line2:#CBD5E1;--acc:#2563EB;--accs:#DBEAFE;--warn:#DC2626;--disp:"Fraunces",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--mono:"JetBrains Mono",monospace;font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
.sc-page *{box-sizing:border-box;margin:0;padding:0}
.sc-page a{color:inherit;text-decoration:none}
.sc-page svg{display:block}
.sc-wrap{max-width:1140px;margin:0 auto;padding:0 28px}
.sc-sec{padding:72px 0}
.sc-sec.alt{background:var(--bg2)}
.sc-eb{font-family:var(--mono);font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--acc);margin-bottom:14px}
.sc-h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,3.2vw,38px);letter-spacing:-.02em;line-height:1.1;color:var(--ink);max-width:720px;margin-bottom:14px}
.sc-h2 em{font-style:italic;color:var(--acc)}
.sc-p{font-size:16.5px;line-height:1.72;color:var(--ink2);max-width:780px}
.sc-p+.sc-p{margin-top:15px}
.sc-btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:8px;font-weight:600;font-size:14.5px;font-family:var(--sans);cursor:pointer;border:none;transition:all .2s}
.sc-btn.pri{background:var(--ink);color:#fff}.sc-btn.pri:hover{background:var(--acc);transform:translateY(-2px);box-shadow:0 10px 22px rgba(37,99,235,.28)}
.sc-btn.sec{background:transparent;color:var(--ink);border:1px solid var(--line2)}.sc-btn.sec:hover{border-color:var(--ink)}
.sc-btn.ghost{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}.sc-btn.ghost:hover{background:rgba(255,255,255,.16)}
.sc-hero{position:relative;overflow:hidden;border-bottom:1px solid var(--line);background:radial-gradient(circle at 15% -10%,rgba(37,99,235,.07),transparent 42%),linear-gradient(to bottom,var(--bg2),var(--bg));padding:42px 0 64px}
.sc-hero::before{content:"";position:absolute;inset:0;background-image:radial-gradient(var(--line) 1px,transparent 1px);background-size:26px 26px;-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,.4),transparent 60%);mask-image:linear-gradient(to bottom,rgba(0,0,0,.4),transparent 60%);opacity:.5}
.sc-crumb{font-family:var(--mono);font-size:11.5px;color:var(--ink3);display:flex;gap:8px;align-items:center;margin-bottom:26px;flex-wrap:wrap;position:relative}
.sc-crumb a:hover{color:var(--acc)}.sc-crumb .s{opacity:.5}
.sc-hgrid{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;position:relative}
.sc-htext{max-width:720px}
.sc-h1{font-family:var(--disp);font-weight:500;font-size:clamp(33px,4.6vw,52px);line-height:1.04;letter-spacing:-.025em;margin-bottom:20px}
.sc-h1 em{font-style:italic;color:var(--acc)}
.sc-lead{font-size:18px;line-height:1.62;color:var(--ink2);max-width:60ch;margin-bottom:26px}
.sc-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:28px}
.sc-trust span{font-size:13px;color:var(--ink2);display:inline-flex;gap:7px;align-items:center}
.sc-trust span::before{content:"✓";color:var(--acc);font-weight:800}
.sc-cta-row{display:flex;gap:12px;flex-wrap:wrap}
.sc-bigicon{width:96px;height:96px;border-radius:22px;background:var(--accs);color:var(--acc);display:grid;place-items:center;box-shadow:0 18px 38px -14px rgba(37,99,235,.4)}
.sc-bigicon svg{width:46px;height:46px}
@media(max-width:860px){.sc-hgrid{grid-template-columns:1fr}.sc-bigicon{width:64px;height:64px}.sc-bigicon svg{width:32px;height:32px}}
.sc-tbar{background:var(--ink)}
.sc-tbarin{max-width:1140px;margin:0 auto;padding:14px 28px;display:flex;flex-wrap:wrap;gap:8px 26px;justify-content:center}
.sc-tbarin span{font-size:12.5px;display:inline-flex;gap:8px;align-items:center;color:#CBD5E1}
.sc-tbarin span::before{content:"✓";color:#60A5FA;font-weight:800}
.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}
.sc-card{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;display:flex;gap:14px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-card:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tick{flex:none;width:26px;height:26px;border-radius:7px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-top:2px}
.sc-tick svg{width:14px;height:14px}
.sc-card h4{font-weight:600;font-size:15px;margin-bottom:4px}
.sc-card p{font-size:13.5px;color:var(--ink3);line-height:1.55}
.sc-list{list-style:none;display:grid;gap:13px;max-width:820px;margin-top:6px}
.sc-list li{position:relative;padding-left:32px;font-size:15.5px;color:var(--ink2);line-height:1.55}
.sc-list li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:var(--accs);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-xlist{list-style:none;display:grid;gap:12px;max-width:820px;margin-top:6px}
.sc-xlist li{position:relative;padding-left:30px;font-size:15px;color:var(--ink2);line-height:1.55}
.sc-xlist li::before{content:"";position:absolute;left:3px;top:8px;width:7px;height:7px;border-radius:50%;background:var(--warn)}
.sc-numgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-numcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-numcard:hover{transform:translateY(-3px);box-shadow:0 16px 32px -18px rgba(15,23,42,.18);border-color:var(--line2)}
.sc-numcard .n{font-family:var(--mono);font-size:14px;color:var(--acc);display:inline-grid;place-items:center;width:36px;height:36px;border-radius:9px;background:var(--accs);margin-bottom:16px}
.sc-numcard h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:8px;letter-spacing:-.01em}
.sc-numcard p{font-size:14px;color:var(--ink3);line-height:1.6}
@media(max-width:820px){.sc-numgrid{grid-template-columns:1fr}}
.sc-facts{margin-top:34px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--srf)}
.sc-frow{display:grid;grid-template-columns:200px 1fr;gap:24px;padding:18px 24px;border-top:1px solid var(--line)}
.sc-frow:first-child{border-top:none}
.sc-frow dt{font-family:var(--mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink3);padding-top:2px}
.sc-frow dd{font-size:15px;color:var(--ink2);line-height:1.55}
@media(max-width:620px){.sc-frow{grid-template-columns:1fr;gap:6px}}
.sc-freview{font-family:var(--mono);font-size:11.5px;color:var(--ink3);margin-top:12px}
.sc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:30px}
.sc-stat{background:var(--srf);padding:24px 22px}
.sc-stat b{display:block;font-family:var(--disp);font-weight:500;font-size:25px;color:var(--acc);letter-spacing:-.01em;margin-bottom:5px}
.sc-stat span{font-size:12.5px;color:var(--ink3);line-height:1.4}
@media(max-width:720px){.sc-stats{grid-template-columns:repeat(2,1fr)}}
.sc-steps{margin-top:34px;max-width:880px}
.sc-step{display:grid;grid-template-columns:auto 1fr;gap:22px;padding:24px 0;border-top:1px solid var(--line)}
.sc-step:first-child{border-top:none}
.sc-stepn{font-family:var(--mono);font-size:13px;width:44px;height:44px;border-radius:11px;background:var(--ink);color:#fff;display:grid;place-items:center}
.sc-step h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:6px;letter-spacing:-.01em}
.sc-step p{font-size:15px;color:var(--ink2);line-height:1.6;max-width:66ch}
.sc-twocol{display:grid;grid-template-columns:1fr 1fr;gap:44px}@media(max-width:820px){.sc-twocol{grid-template-columns:1fr;gap:36px}}
.sc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}
.sc-chip{font-family:var(--mono);font-size:12.5px;color:var(--ink2);background:var(--srf);border:1px solid var(--line);border-radius:8px;padding:9px 14px;transition:border-color .2s,color .2s}
.sc-chip::before{content:"▪";color:var(--acc);margin-right:8px}.sc-chip:hover{border-color:var(--acc);color:var(--ink)}
.sc-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-tier{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 24px;display:flex;flex-direction:column;gap:10px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-tier:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 32px -18px rgba(15,23,42,.18)}
.sc-tier h4{font-family:var(--disp);font-weight:500;font-size:19px;letter-spacing:-.01em}
.sc-tier p{font-size:14px;color:var(--ink3);line-height:1.6;flex:1}
.sc-tier .dur{font-family:var(--mono);font-size:12.5px;color:var(--acc);border-top:1px solid var(--line);padding-top:12px}
@media(max-width:820px){.sc-tiers{grid-template-columns:1fr}}
.sc-tnote{margin-top:18px;font-size:14px;color:var(--ink2);display:inline-flex;gap:8px;align-items:center}
.sc-tnote::before{content:"✓";color:var(--acc);font-weight:800}
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px 22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 32px -18px rgba(15,23,42,.18)}
.sc-wicon{width:38px;height:38px;border-radius:10px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:16px}
.sc-wicon svg{width:19px;height:19px}
.sc-whycard h4{font-weight:600;font-size:15.5px;margin-bottom:6px}
.sc-whycard p{font-size:13.5px;color:var(--ink3);line-height:1.58}
@media(max-width:820px){.sc-why{grid-template-columns:1fr}}
.sc-faq{max-width:860px;margin-top:30px;border-top:1px solid var(--line)}
.sc-faq details{border-bottom:1px solid var(--line)}
.sc-faq summary{cursor:pointer;list-style:none;padding:20px 38px 20px 0;position:relative;font-family:var(--disp);font-weight:500;font-size:17px;color:var(--ink)}
.sc-faq summary::-webkit-details-marker{display:none}
.sc-faq summary::after{content:"+";position:absolute;right:6px;top:16px;font-size:22px;color:var(--acc);font-family:var(--sans)}
.sc-faq details[open] summary::after{content:"\\2212"}
.sc-faq p{padding:0 0 22px;font-size:15px;color:var(--ink2);line-height:1.66;max-width:74ch}
.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:540px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}
@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
