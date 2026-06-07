import React from "react";

const delivers = [
  "A realistic test of whether your team and tooling detect a live intrusion",
  "Validation of SOC, EDR, and SIEM effectiveness under adversarial pressure",
  "Attack paths that scope-bound penetration tests structurally cannot find",
  "MITRE ATT&CK-mapped findings with explicit detection-coverage analysis",
  "A purple-team replay that converts the engagement into defensive uplift",
  "Defensible evidence for boards, auditors, customers, and cyber-insurers",
];

const audience = [
  ["Established security operations", "You already run a SOC and regular penetration testing, and you want to know whether your people and tooling actually catch and respond to a live intruder — not just whether vulnerabilities exist."],
  ["Board & risk-committee assurance", "Leadership needs defensible evidence of how the organisation performs under genuine adversary pressure, expressed in business terms rather than a raw vulnerability count."],
  ["Threat-led testing drivers", "A regulator, enterprise customer, cyber-insurer, or internal mandate is asking for goal-based, intelligence-led testing rather than scope-based scanning."],
];

const facts = [
  ["Methodology", "Threat-intelligence-led and MITRE ATT&CK-mapped, with an assumed-breach option and purple-team integration as standard."],
  ["vs Penetration testing", "Red team is goal-based and tests detection and response; a penetration test is scope-based and tests for vulnerabilities."],
  ["Typical duration", "4–12 weeks, depending on scope, number of objectives, and the depth of threat intelligence."],
  ["Includes", "Threat-intelligence and scenario design, red-team execution, blue-team observation, and a purple-team replay."],
  ["Best fit when", "You have a SOC and EDR to measure against and need to validate response — not simply enumerate findings."],
  ["Output", "Executive briefing, ATT&CK-mapped technical report, detection-gap analysis, and concrete detection-engineering recommendations."],
];

const stats = [
  ["MITRE ATT&CK", "TTPs mapped to real adversaries"],
  ["4–12 wks", "Typical engagement window"],
  ["Purple team", "Included as standard, not an upsell"],
  ["Assumed breach", "Optional faster-start model"],
];

const risks = [
  "Detection and response that looks effective on paper but fails against a live intruder",
  "False confidence in EDR and SIEM tooling that has never been adversarially tested",
  "Incident-response playbooks that have never been exercised end to end",
  "Blind spots in ATT&CK coverage that a real attacker will find before you do",
  "No defensible evidence of resilience for boards, auditors, customers, or insurers",
  "Discovering the gaps during a real breach instead of a controlled exercise",
];

const steps = [
  ["Threat intelligence & scenario design", "We profile the adversary groups relevant to your sector and design scenarios that reflect how they actually operate — not generic, theatrical hacking."],
  ["Rules of engagement & approvals", "A detailed RoE document with named approvers, escalation paths, deconfliction protocol, emergency-stop procedure, and clear in-scope / out-of-scope boundaries."],
  ["Reconnaissance & initial access", "OSINT, social engineering, phishing, and external targeting to establish a foothold, modelled on the agreed adversary scenario."],
  ["Persistence & privilege escalation", "Establishing reliable callback, evading EDR, and escalating to higher-privilege accounts using techniques drawn from real intrusion campaigns."],
  ["Lateral movement & discovery", "Network discovery, credential harvesting, and movement toward the objective — directly testing your segmentation and east-west monitoring."],
  ["Objective execution", "Demonstration that the defined goal is achievable — data access, transaction manipulation, or critical-system control — without ever causing real harm."],
  ["Purple-team walk-through", "A live session walking your blue team through exactly what we did, what they detected, what they missed, and how to close each gap."],
  ["Reporting & detection engineering", "A full report with ATT&CK mapping, detection-gap analysis, and specific SIEM rule and EDR policy recommendations your team can implement."],
];

const receiveEng = [
  "Threat-intelligence brief and scenario-design document",
  "Full engagement narrative with a timestamped activity log",
  "MITRE ATT&CK mapping of every executed TTP",
  "Detection-gap analysis against your blue-team telemetry",
  "Specific SIEM detection and EDR policy recommendations",
  "Board-ready executive briefing for risk-committee reporting",
];

const receiveCommercial = [
  "A scoping call and fixed-scope proposal before any work begins",
  "A written rules-of-engagement and authorisation framework",
  "Named escalation, deconfliction, and emergency-stop procedures",
  "A live purple-team replay and detection-engineering session",
  "A remediation and detection-tuning walkthrough with the lead operator",
  "Detection-validation re-test of agreed fixes within a defined window",
];

const frameworks = ["MITRE ATT&CK", "Assumed-Breach Methodology", "PTES", "Purple-Team Practices", "TIBER-EU (concepts)", "NIST SP 800-115", "MITRE ATLAS (AI systems)"];
const industries = ["Financial Services", "Healthcare", "Public Sector & Government", "Retail & E-commerce", "Critical Infrastructure", "SaaS & Technology", "Education & Research", "Professional Services"];

const tiers = [
  ["Focused", "A single objective or constrained scenario against a defined target set — ideal for a first engagement or a specific high-value system.", "~2–4 weeks"],
  ["Standard", "Multiple objectives, full kill-chain execution, and a purple-team replay across a typical enterprise estate.", "~4–8 weeks"],
  ["Enterprise", "A complex estate, multiple scenarios, deeper threat intelligence, and regulatory-grade evidence for supervisory or board reporting.", "~8–12 weeks+"],
];

const whyUs = [
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
    "Threat-intelligence-led",
    "Scenarios are modelled on the adversaries relevant to your sector, using current intelligence — not a generic, off-the-shelf playbook.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8"/><path d="M6 13h6a4 4 0 0 0 4-4"/></svg>,
    "ATT&CK-mapped throughout",
    "Every action is traceable to a technique, so detection-coverage gaps are explicit and measurable rather than anecdotal.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>,
    "Purple-team integrated",
    "Collaborative replay and detection engineering are standard — the engagement leaves your defenders measurably stronger.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><circle cx="9" cy="8" r="2.2" fill="currentColor"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="15" cy="16" r="2.2" fill="currentColor"/></svg>,
    "Detection-engineering output",
    "You leave with concrete SIEM rules and EDR policy changes that improve your SOC — not just a narrative of how you were breached.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4-3 7-7 8-4-1-7-4-7-8V7z"/><polyline points="9 12 11.3 14.3 15.5 9.8"/></svg>,
    "Senior practitioner-led",
    "Engagements are run by an experienced operator with offensive, AppSec, and GRC depth — not delegated to junior testers.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>,
    "Plain-English reporting",
    "Reports your board can read and your engineers can act on, with business impact up front and reproducible technical detail behind it.",
  ],
];

const faqs = [
  ["How is a red team different from a penetration test?", "A penetration test is scope-based and short — it answers \u201care these systems vulnerable?\u201d A red team is objective-led and longer — it answers \u201cif a determined attacker came for us, would we detect and stop them?\u201d Red teaming tests your whole defensive operation: detection, response, and recovery, not just a list of findings."],
  ["How long does an engagement take?", "Typically 4–12 weeks. A common shape is roughly one week of threat intelligence and scenario design, one week of reconnaissance, several weeks of active engagement, then reporting and the purple-team replay. More constrained or more complex scenarios sit at either end of that range."],
  ["What is purple teaming?", "A collaborative session where the offensive side walks your defenders through everything that was done — what was detected, what was missed, and how to close each gap. It is usually the highest-value learning output of the entire engagement, and it is included as standard."],
  ["Can you emulate a specific threat actor?", "Yes. Most engagements are scoped to the TTPs of groups relevant to your sector, using current threat intelligence so the scenario reflects how that adversary actually operates rather than a generic intrusion."],
  ["Do I need a SOC before this is worthwhile?", "Largely, yes. Red teaming measures detection and response, so without a SOC or EDR to detect activity, a penetration test usually delivers more value first. Red teaming follows once monitoring is in place and there is a capability to measure."],
  ["How is it priced?", "Every engagement is fixed-fee and quoted after a scoping call that defines objectives, scope, and duration. Pricing scales with scenario complexity and the depth of threat intelligence required — you get a firm number before you commit."],
];

export default function RedTeamAdversarySimulation() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Red Team &amp; Adversary Simulation</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Offensive Security</div>
              <h1 className="sc-h1">Red Team &amp; <em>Adversary Simulation</em></h1>
              <p className="sc-lead">A goal-based simulation of a real attack — testing not just whether you can be breached, but whether your people and tooling detect it, respond, and recover, mapped to MITRE ATT&amp;CK.</p>
              <div className="sc-trust"><span>Goal-based, scenario-driven</span><span>MITRE ATT&amp;CK-mapped TTPs</span><span>Purple-team replay included</span><span>Detection-gap analysis</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3 V21"/><path d="M5 4 L17 4 L14 8 L17 12 L5 12 Z" fill="currentColor" fillOpacity="0.2"/></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-tbar">
        <div className="sc-tbarin">
          <span>Goal-based engagements</span>
          <span>MITRE ATT&amp;CK-mapped</span>
          <span>Purple-team replay</span>
          <span>Executive + technical reporting</span>
          <span>Fast scoping turnaround</span>
        </div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What a red team <em>engagement</em> is.</h2>
          <p className="sc-p">Where a penetration test asks &ldquo;is this system secure?&rdquo;, a red team asks &ldquo;if a determined attacker targeted us, what would actually happen?&rdquo; It is an objective-led engagement that simulates a real adversary against your organisation — setting a concrete goal such as access to a payment system or exfiltration of a sensitive dataset, and using any technique a genuine attacker would: phishing, OSINT-driven reconnaissance, lateral movement, persistence, and defensive evasion.</p>
          <p className="sc-p">The point is not to enumerate every vulnerability. It is to demonstrate whether your detection, response, and recovery hold up under realistic pressure. Findings cover not only exploitable weaknesses but gaps in monitoring, alerting, incident response, and recovery — and the engagement closes with a purple-team replay so the output is measurable defensive uplift, not just a breach narrative.</p>
          <div className="sc-eb" style={{ marginTop: "34px" }}>What it delivers</div>
          <ul className="sc-list">{delivers.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who This Is For</div>
          <h2 className="sc-h2">This service is a fit if you&rsquo;re&hellip;</h2>
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
          <h2 className="sc-h2">Red team, the <em>quick facts</em>.</h2>
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
          <h2 className="sc-h2">Tests whether your defence <em>works</em>.</h2>
          <p className="sc-p">Penetration tests measure whether vulnerabilities exist. Red team engagements measure whether your defensive operation works. Most breached organisations had penetration tests on record — what they lacked was the ability to detect and respond to live adversarial activity. Red teaming is the only way to test that capability before a real attacker does it for you.</p>
          <div className="sc-eb" style={{ marginTop: "30px" }}>Without red team validation, you risk</div>
          <ul className="sc-xlist">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">Threat-intelligence-led <em>method</em>.</h2>
          <p className="sc-p">A methodology combining sector threat intelligence, MITRE ATT&amp;CK-mapped TTPs, and rigorous purple-team integration — so the engagement produces detection uplift, not just a breach story.</p>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-p" style={{ marginTop: "26px" }}>Engagements typically run 4–12 weeks depending on scope, objectives, and scenario complexity. Purple-team integration is included as standard.</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Engagement <em>deliverables</em>.</h2>
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
              <h2 className="sc-h2">Mapped to real <em>adversaries</em>.</h2>
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
          <h2 className="sc-h2">What shapes the <em>engagement</em>.</h2>
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
          <h2 className="sc-h2">Detection that <em>improves</em>, not just a breach.</h2>
          <p className="sc-p">Red teaming done badly is just expensive penetration testing. Engagements here are threat-intelligence-led, ATT&amp;CK-aligned, and purple-team-integrated — focused on uplifting your defensive capability, because the detection-engineering output is what materially improves a SOC.</p>
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
            <h3>Validate your defensive operation</h3>
            <p>Book a 30-minute scoping call. We&rsquo;ll outline a threat scenario and a fixed-scope proposal — ATT&amp;CK-mapped, purple-team included.</p>
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
