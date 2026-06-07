import React from "react";

const delivers = [
  "The judgement of a seasoned CISO without the cost of a full-time hire",
  "A security strategy grounded in your actual risk, not a generic checklist",
  "A roadmap your team can execute, sequenced by what reduces risk first",
  "Reporting that turns posture and risk into board- and regulator-ready language",
  "A maturity baseline against NIST CSF 2.0 and a realistic target state",
  "Governance, policy, and third-party risk structures that hold up to scrutiny",
];

const audience = [
  ["No CISO, growing risk", "You've outgrown ad-hoc security but can't yet justify a full-time CISO, and you need senior ownership of strategy, risk, and reporting now."],
  ["A team without a head", "You have capable security staff but no senior leader to set direction, prioritise the work, and represent security to the board."],
  ["Pressure from outside", "Regulators, enterprise customers, auditors, or investors are asking for security leadership and a credible program you don't yet have."],
];

const facts = [
  ["Engagement model", "Ongoing and fractional — typically a monthly retainer with an agreed time commitment and a minimum initial term."],
  ["vs A full-time hire", "Senior judgement and accountability at a fraction of the cost and lead time of recruiting a permanent CISO."],
  ["Typical commitment", "A few days a month for steady-state advisory; more during a program build or an incident."],
  ["Includes", "Strategy and roadmap, maturity baseline, governance and policy, board reporting, third-party risk, and execution support."],
  ["Best fit when", "You need senior security ownership and direction — not just another point-in-time assessment."],
  ["Output", "A living strategy and roadmap, a maturity scorecard, a board reporting pack, and a governance framework, kept current as you mature."],
];

const stats = [
  ["NIST CSF 2.0", "Maturity baseline & target"],
  ["Fractional", "Senior leadership, part-time"],
  ["Board-ready", "Risk in business terms"],
  ["Regulated", "Built for finance, health & public sector"],
];

const risks = [
  "Security spend driven by vendors and point fixes rather than your actual risk",
  "A board that cannot see, or be held accountable for, the risk it is carrying",
  "Customer-security questionnaires and audits that stall deals and drain the team",
  "Policies that exist on paper but are not governed, measured, or followed",
  "Third-party and supply-chain risk that no one actually owns",
  "Reacting to incidents and regulators instead of getting ahead of them",
];

const steps = [
  ["Discovery", "Understand the business, the current state, the risk profile, and the obligations you are measured against."],
  ["Maturity baseline", "Score the program against NIST CSF 2.0 and agree a realistic target maturity with the leadership team."],
  ["Risk prioritisation", "Identify and rank the risks that matter most, in business terms, rather than a flat technical backlog."],
  ["Strategy & roadmap", "Turn the gaps into a sequenced, prioritised plan tied to budget and business objectives."],
  ["Governance & policy", "Stand up or refresh the policy framework and the risk-governance structure that supports it."],
  ["Board & executive reporting", "Establish a reporting cadence that gives leadership a clear, decision-ready view of risk."],
  ["Execution support", "Help your team deliver the prioritised initiatives, and unblock them where senior weight is needed."],
  ["Ongoing advisory", "Provide fractional leadership and review as the program matures, adjusting the plan as risk changes."],
];

const receiveEng = [
  "A security strategy and prioritised, sequenced roadmap",
  "A program maturity scorecard against NIST CSF 2.0 with a target state",
  "A board-ready reporting pack and an ongoing reporting cadence",
  "A policy and governance framework fit for your sector",
  "A third-party and supply-chain risk-management approach",
  "A compliance posture view across the obligations that apply to you",
];

const receiveCommercial = [
  "A scoping call and a fixed-scope advisory arrangement before any work begins",
  "A named senior advisor as your point of accountability throughout",
  "A regular, agreed cadence of working sessions and leadership time",
  "Direct representation of security to your board, auditors, and key customers",
  "Documentation that stays current rather than a one-off deliverable",
  "A clear minimum term, with the flexibility to scale time up or down",
];

const frameworks = ["NIST CSF 2.0", "ISO/IEC 27001", "CIS Controls", "OSFI B-13", "SOC 2", "COBIT", "Maturity Models"];
const industries = ["Financial Services", "Healthcare", "Public Sector & Government", "Retail & E-commerce", "Critical Infrastructure", "SaaS & Technology", "Education & Research", "Professional Services"];

const tiers = [
  ["Program build", "Standing up a first real security program: strategy, governance, and the foundational roadmap, with a heavier commitment up front.", "Higher early commitment"],
  ["Embedded leadership", "Ongoing senior ownership for an organisation without a CISO: strategy, reporting, and oversight of execution.", "Ongoing monthly"],
  ["Advisory & oversight", "Lighter-touch direction for a team that has leadership but wants senior review, board support, and a steady hand.", "Light-touch monthly"],
];

const whyUs = [
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="18" height="5" rx="1"/><rect x="6" y="9" width="12" height="5" rx="1"/><rect x="9" y="4" width="6" height="5" rx="1"/></svg>,
    "Built programs, not just audited them",
    "Direction from someone who has stood up and run security functions in regulated environments — not only reviewed them from the outside.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="20" y2="20"/><rect x="6" y="11" width="3" height="9" rx="0.5"/><rect x="11" y="7" width="3" height="13" rx="0.5"/><rect x="16" y="14" width="3" height="6" rx="0.5"/></svg>,
    "Risk in business language",
    "Security framed in terms your board, auditors, and customers can act on — not a wall of technical findings they have to decode.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16"/><path d="M7 20h10"/><path d="M4 8h16"/><path d="M4 8l-2 5h4z"/><path d="M20 8l-2 5h4z"/></svg>,
    "Vendor-neutral",
    "Advice tied to your risk and your budget, with no product to sell you on the side and no quota shaping the recommendation.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7z"/><polyline points="9 12 11.3 14.3 15.5 9.8"/></svg>,
    "Senior, hands-on, accountable",
    "A named senior advisor does the work. Nothing is handed to a junior or dropped into a generic playbook and re-badged.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8"/><path d="M6 13h6a4 4 0 0 0 4-4"/></svg>,
    "A roadmap your team can run",
    "A sequenced plan tied to feasibility and budget, built to fit your delivery cadence rather than to impress on a slide.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V10"/><path d="M9 21V10"/><path d="M15 21V10"/><path d="M19 21V10"/><path d="M12 3l9 5H3z"/></svg>,
    "Regulated-sector fluent",
    "Comfortable with the frameworks and supervisory expectations your sector is measured against, from OSFI B-13 to ISO 27001 and SOC 2.",
  ],
];

const faqs = [
  ["What exactly is a vCISO?", "A virtual, or fractional, Chief Information Security Officer: an experienced security leader who owns your strategy, risk, governance, and board reporting on a part-time basis — giving you the judgement of a CISO without the cost or lead time of a permanent hire."],
  ["How much of your time do we get?", "It varies with the engagement. A program build needs more time up front; steady-state advisory is typically a few days a month. We agree the commitment and a minimum term during scoping, and scale it as the program matures."],
  ["How is this different from a one-off consulting project?", "A project delivers a point-in-time output and ends. A vCISO is ongoing ownership — the strategy, roadmap, and reporting stay current, and there is a named senior person accountable for the program over time."],
  ["Will you represent security to our board and auditors?", "Yes. Translating risk into board-ready language and standing in front of auditors, regulators, and enterprise customers is a core part of the role, not an optional add-on."],
  ["Do you work to Canadian regulatory expectations?", "Yes. Engagements align to NIST CSF 2.0 and ISO 27001, and to sector expectations such as OSFI B-13 for federally regulated financial institutions, alongside the obligations specific to your organisation."],
  ["How is it priced?", "A fixed monthly arrangement, quoted after a scoping call that confirms your maturity, the time commitment, and the minimum term. Pricing scales with the level of involvement — you get a firm number before you commit."],
];

export default function VCISOAdvisory() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>vCISO &amp; Advisory</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Advisory &amp; Leadership</div>
              <h1 className="sc-h1">vCISO &amp; <em>Advisory</em></h1>
              <p className="sc-lead">Senior security leadership without the full-time hire — strategy, roadmap, governance, and board-ready reporting from someone who has built and run security programs in regulated environments.</p>
              <div className="sc-trust"><span>Fractional senior leadership</span><span>NIST CSF 2.0-aligned</span><span>Board-ready reporting</span><span>Canadian senior-led delivery</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M4 21 C4 16.5 7.5 14 12 14 C16.5 14 20 16.5 20 21"/><path d="M16 4 L18 6 L22 2" strokeWidth="1.8"/></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-tbar">
        <div className="sc-tbarin">
          <span>Fractional senior leadership</span>
          <span>NIST CSF 2.0-aligned</span>
          <span>Board-ready reporting</span>
          <span>Strategy &amp; roadmap</span>
          <span>Governance &amp; risk</span>
        </div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">Not every organisation needs a full-time CISO, but every organisation needs the judgement of one. Fractional security leadership gives you a strategy grounded in your actual risk, a roadmap your team can execute, and reporting that translates security into terms your board and regulators understand.</p>
          <p className="sc-p">Engagements are shaped to your maturity — from standing up a first security program to advising an existing team — and align to NIST CSF 2.0 and the control frameworks your sector is measured against.</p>
          <div className="sc-eb" style={{ marginTop: "34px" }}>What it delivers</div>
          <ul className="sc-list">{delivers.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who This Is For</div>
          <h2 className="sc-h2">This is a fit if you&rsquo;re&hellip;</h2>
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
          <h2 className="sc-h2">vCISO, the <em>quick facts</em>.</h2>
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
          <h2 className="sc-h2">Security needs an <em>owner</em>.</h2>
          <p className="sc-p">Without senior ownership, security drifts — tools get bought without a strategy, risk goes unmanaged, and the board cannot see what it is exposed to. A vCISO puts an accountable, experienced hand on the program before that gap turns into an incident, a stalled deal, or a regulatory finding.</p>
          <div className="sc-eb" style={{ marginTop: "30px" }}>Without senior security leadership, you risk</div>
          <ul className="sc-xlist">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A clear, <em>repeatable</em> approach.</h2>
          <p className="sc-p">A structured method that moves from understanding your risk to standing up governance and reporting — and then stays with you as the program matures, rather than ending at a deliverable.</p>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-p" style={{ marginTop: "26px" }}>The early steps are front-loaded to set direction; the later steps run on an ongoing cadence agreed with you.</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Leadership that <em>delivers</em>.</h2>
              <ul className="sc-list">{receiveEng.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
            <div>
              <div className="sc-eb">How We Work With You</div>
              <h2 className="sc-h2">Engagement <em>commitments</em>.</h2>
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
              <h2 className="sc-h2">Aligned to recognised <em>standards</em>.</h2>
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
          <div className="sc-eb">Engagement Models</div>
          <h2 className="sc-h2">How the <em>engagement</em> is shaped.</h2>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4>
                <p>{p}</p>
                <span className="dur">{d}</span>
              </div>
            ))}
          </div>
          <div className="sc-tnote">Fixed-scope arrangement and minimum term agreed up front — no surprise invoicing.</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why SynapseCyber</div>
          <h2 className="sc-h2">Senior judgement, <em>vendor-neutral</em>.</h2>
          <p className="sc-p">A vCISO is only worth it if the person carrying the title has actually built and run a program. The focus here is exactly that: experienced, accountable leadership that frames risk for the board and leaves your team with a plan they can run.</p>
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
            <h3>Scope your vCISO engagement</h3>
            <p>Book a 30-minute call. We&rsquo;ll confirm your maturity, your priorities, and a fixed-scope advisory arrangement.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a><a href="/contact" className="sc-btn ghost">Contact us</a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-page{--bg:#F8FAFC;--bg2:#F1F5F9;--srf:#fff;--ink:#0F172A;--ink2:#334155;--ink3:#64748B;--line:#E2E8F0;--line2:#CBD5E1;--acc:#2563EB;--accs:#DBEAFE;--warn:#DC2626;--disp:"Fraunces",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--mono:"JetBrains Mono",monospace;font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
[data-theme="dark"] .sc-page{--bg:#0F172A;--bg2:#1E293B;--srf:#1E293B;--ink:#F1F5F9;--ink2:#CBD5E1;--ink3:#94A3B8;--line:#334155;--line2:#475569;--acc:#3B82F6;--accs:#1E3A5F}
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
[data-theme="dark"] .sc-btn.pri{background:var(--acc);color:#fff}
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
[data-theme="dark"] .sc-stepn{background:var(--acc);color:#fff}
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
