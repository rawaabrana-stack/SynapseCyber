import React, { useState } from "react";

const scope = [
  ["ABAP secure code review", "Static analysis plus manual review of custom developments and enhancements."],
  ["Authorisation analysis", "Review role and profile design for excessive or unintended access."],
  ["Segregation of duties (SoD)", "Identify conflicting access combinations and toxic role pairings."],
  ["RFC & gateway exposure", "Assess RFC destinations, gateway, and ICF services for non-interactive abuse."],
  ["Background job & program flow", "Review SM37 jobs and program-to-program SUBMIT / CALL execution paths."],
  ["GRC integration", "Align findings with Access Control and Process Control workflows."],
];
const steps = [
  ["Scope & system context", "We define the landscape (ECC or S/4HANA, the connected systems and transport paths), the custom-code footprint, and the controls in scope — so the review targets where your real exposure sits, not a generic checklist."],
  ["Code & authorisation review", "Custom ABAP is assessed with static analysis and manual review for injection, privilege, and unsafe execution. Authorisations and segregation of duties are analysed against your actual role and profile design."],
  ["Interface & job analysis", "We examine RFC destinations and stored credentials, gateway and ICF exposure, message-server access, SM37 background jobs, and program-to-program SUBMIT / CALL paths — the non-interactive routes a screen-level review never sees."],
  ["Risk decisioning", "Each finding gets a documented risk decision under a governed methodology (NIST SP 800-30 Rev.1, ISO 27005:2022, OWASP risk rating). Intentional-by-design patterns are recorded as risk-mitigated with rationale — never silently downgraded."],
  ["Remediation & GRC", "You receive a remediation roadmap that integrates with your Access Control and Process Control workflows, so segregation-of-duties conflicts and mitigating controls land in the GRC system your auditors already use."],
  ["Validation", "We re-check remediated items and confirm closure, with an audit-defensible record of what changed and why."],
];
const frameworks = ["SAP Security Baseline", "DSAG Audit Guide", "Secure ABAP Practices", "SAP GRC", "ISO/IEC 27001"];
const deliverables = [
  "ABAP code-review findings with risk decisions",
  "Authorisation and segregation-of-duties analysis",
  "RFC, gateway, and background-job exposure report",
  "GRC-aligned remediation roadmap",
  "Audit-defensible record of risk decisions",
  "Re-check of remediated items",
];

const glance = [
  ["ECC + S/4HANA", "Landscapes covered"],
  ["Beyond dialog", "RFC, gateway & batch paths"],
  ["Manual ABAP", "Reviewed, not scanner-only"],
  ["Audit-defensible", "Governed risk decisions"],
];
const quickFacts = [
  ["Methodology", "Static + manual ABAP review, authorisation and segregation-of-duties analysis, and RFC / gateway / job assessment — risk decisions under a governed methodology (NIST SP 800-30 Rev.1, ISO 27005:2022, OWASP risk rating)."],
  ["What it covers", "Custom ABAP, authorisations, segregation of duties, RFC and gateway exposure, ICF services, SM37 background jobs, and program-to-program execution."],
  ["Systems", "SAP ECC and S/4HANA — on-premise, RISE, and private-cloud landscapes."],
  ["vs Standard pentest", "A network or web test stops at the SAP perimeter; this review goes inside the application and its non-interactive execution paths."],
  ["What we don't assume", "That usage statistics (ST03N) prove a program is unreachable, or that service and system accounts in human-use roles are benign."],
  ["Includes", "Scoping, code and authorisation review, interface and job analysis, GRC-aligned remediation, and a re-check of fixes."],
  ["Output", "ABAP findings with risk decisions, segregation-of-duties analysis, RFC / gateway / job exposure report, GRC-aligned roadmap, and an audit-defensible record."],
];
const audience = [
  ["Before or after S/4HANA migration", "You're moving to S/4HANA — or recently cut over — and need the migrated custom code, authorisations, and new Fiori / gateway surface assessed properly."],
  ["Audit & segregation-of-duties pressure", "An external audit, SOX scope, or SoD remediation requires evidence that toxic access combinations and over-broad roles are actually under control."],
  ["Custom-code-heavy landscape", "Years of bespoke ABAP, Z-programs, and RFC interfaces have accumulated, and none has been reviewed for injection, privilege, or non-interactive abuse."],
];
const risks = [
  "Custom ABAP injection — dynamic SUBMIT, native SQL (EXEC SQL), or OS command execution (CALL 'SYSTEM', SXPG) in Z-programs",
  "RFC destinations storing privileged credentials, enabling pivots from non-production into production",
  "Background jobs (SM37) scheduled under service or privileged accounts, running custom reports outside dialog controls",
  "Over-broad authorisations — SAP_ALL, full table access (S_TABU_DIS), or debug-replace (S_DEVELOP) granted far beyond need",
  "Gateway, message server, and ICF services left with default or anonymous access — missing reginfo / secinfo, unsecured services",
  "Standard users (SAP*, DDIC, EARLYWATCH) retaining default passwords or carrying unexpected authorisations",
  "Reliance on usage statistics (ST03N) to 'prove' a program is unreachable, when RFC and batch paths bypass the dialog entirely",
];
const scopeTiers = [
  ["Single system", "One client — typically production — with a targeted custom-code set or a specific role and SoD review.", "~5–10 working days"],
  ["Multi-system landscape", "Dev / QA / Prod across ECC or S/4HANA, transport-connected, with interface and job review.", "~10–20 working days"],
  ["Enterprise programme", "Multiple landscapes, a large custom-code base, a full SoD rule set, and GRC integration with compliance evidence.", "20+ working days"],
];
const whyUs = [
  ["target", "Beyond the dialog layer", "We test RFC, gateway, message server, ICF, and background-job paths — not just roles and transactions."],
  ["file", "Custom ABAP, reviewed by hand", "Static analysis plus manual review, because scanners miss injection in dynamic SUBMIT, native SQL, and OS command calls."],
  ["user", "Conservative by default", "Service and system accounts in human-use authorisation lists are flagged for investigation — never assumed benign."],
  ["clip", "Governed risk decisions", "Every accept-or-mitigate decision is documented and audit-defensible under NIST SP 800-30, ISO 27005, and OWASP risk rating."],
  ["sliders", "GRC-integrated remediation", "Findings map to your Access Control and Process Control workflows, landing in the system your auditors already use."],
  ["retest", "Validation included", "Remediated items are re-checked and closure confirmed, with a record of what changed and why."],
];
const industries = ["Manufacturing & industrial", "Retail & consumer goods", "Energy & utilities", "Public sector", "Financial services", "Logistics & supply chain"];
const faqs = [
  ["How is an SAP security review different from a standard penetration test?", "A network or web penetration test stops at the SAP perimeter — it tells you whether the front door holds. An SAP review goes inside the application: custom ABAP, authorisations, segregation of duties, and the RFC, gateway, and background-job paths that execute with no user at a screen. The two are complementary, not interchangeable."],
  ["Do you only look at roles and authorisation design?", "No. Role design and segregation of duties matter, but the highest-impact findings are usually in custom ABAP and non-interactive execution: RFC destinations with stored credentials, SM37 background jobs under privileged accounts, program-to-program SUBMIT / CALL, and gateway or ICF exposure. We treat usage statistics (ST03N) as evidence of nothing on their own."],
  ["Will the review touch — or disrupt — production?", "Static ABAP review and authorisation analysis are largely read-only and can run against a system copy or with display access. Anything potentially intrusive, such as live RFC or gateway probing, is scoped, agreed, and where appropriate run in non-production. It is all defined in the rules of engagement before work starts."],
  ["How do you decide what is a real risk versus accepted by design?", "Each risk decision is documented under a governed methodology — NIST SP 800-30 Rev.1, ISO 27005:2022, and OWASP risk rating — rather than by overriding severities. Intentional-by-design patterns are recorded as risk-mitigated with written rationale, never silently downgraded to 'not an issue'."],
  ["Do you integrate with our existing GRC tooling?", "Yes. Findings map to your Access Control rule set and Process Control workflows, so segregation-of-duties conflicts and mitigating controls land in the GRC system your auditors and access teams already work in."],
  ["S/4HANA or ECC — does your approach change?", "The principles hold across both. S/4HANA adds Fiori and OData (gateway and ICF), CDS-view authorisations, and embedded analytics as extra surface, so the review covers both the migrated exposure and what is genuinely new."],
];
const ICONS = {
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.3"/><line x1="12" y1="2.5" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21.5" y2="12"/></svg>,
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="8" r="3.4"/><path d="M3.6 20a6.4 6.4 0 0 1 12.8 0"/><polyline points="16 11.5 18 13.5 22 9.5"/></svg>,
  sliders: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="3.5" y1="8" x2="20.5" y2="8"/><line x1="3.5" y1="16" x2="20.5" y2="16"/><circle cx="9" cy="8" r="2.4"/><circle cx="15" cy="16" r="2.4"/></svg>,
  file: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/><polyline points="8.5 14 10.5 16 15 11.5"/></svg>,
  clip: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><polyline points="9 13 11 15 15 11"/></svg>,
  retest: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12a8.5 8.5 0 1 1-2.4-5.9"/><polyline points="20.5 4 20.5 9 15.5 9"/></svg>,
};

export default function SAPSecurity() {
  const [open, setOpen] = useState(0);

  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>SAP Security</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Enterprise / SAP Security</div>
              <h1 className="sc-h1">SAP <em>Security</em></h1>
              <p className="sc-lead">Secure SAP and S/4HANA at the layer most reviews miss — custom ABAP, authorisations and segregation of duties, and the non-interactive paths (RFC, background jobs, gateway) an attacker uses without ever touching a screen.</p>
              <div className="sc-trust"><span>ABAP + authorisation review</span><span>SoD &amp; GRC-aligned</span><span>RFC / gateway / job analysis</span><span>Audit-defensible findings</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="2.5"/><path d="M4 5 V12 C4 13.4 7.6 14.5 12 14.5 C16.4 14.5 20 13.4 20 12 V5"/><path d="M4 12 V19 C4 20.4 7.6 21.5 12 21.5 C16.4 21.5 20 20.4 20 19 V12"/></svg>
            </div>
          </div>
        </div>
      </header>

      <section className="sc-sec slim alt">
        <div className="sc-wrap">
          <div className="sc-glance">
            {glance.map(([n, l]) => (
              <div className="sc-stat" key={l}><span className="sc-statn">{n}</span><span className="sc-statl">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Quick Facts</div>
          <h2 className="sc-h2">The <em>essentials</em>.</h2>
          <div className="sc-facts">
            {quickFacts.map(([k, v]) => (
              <div className="sc-fact" key={k}><span className="sc-factk">{k}</span><span className="sc-factv">{v}</span></div>
            ))}
            <div className="sc-factrev">Last reviewed: 2026-06-04</div>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">SAP risk does not live only in the dialog transactions a user clicks through. It lives in custom ABAP, in over-broad authorisations, and in the program-to-program and system-to-system paths — RFC destinations, background jobs, gateway and ICF services — that execute with no human at the keyboard. We review all of it, treating service and system accounts in human-use authorisation lists as something to investigate, not to wave through.</p>
          <p className="sc-p">Custom code is assessed with static analysis and manual review; authorisations and segregation of duties are analysed against your role design; and findings carry remediation that integrates with your GRC controls. Risk decisions are documented under a governed, audit-defensible methodology.</p>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Who It&rsquo;s For</div>
          <h2 className="sc-h2">Is this review a <em>fit</em>?</h2>
          <div className="sc-who">
            {audience.map(([h, p], i) => (
              <div className="sc-whocard" key={h}>
                <span className="sc-whon">{i + 1}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">What&rsquo;s Covered</div>
          <h2 className="sc-h2">Scope of the <em>review</em>.</h2>
          <div className="sc-grid">
            {scope.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why It Matters</div>
          <h2 className="sc-h2">Where SAP risk actually <em>lives</em>.</h2>
          <p className="sc-p">A standard penetration test stops at the SAP front door — it tells you whether the perimeter holds, not what happens inside the application. Most SAP compromise does not arrive through a dialog screen; it comes through custom ABAP, over-broad access, and the system-to-system paths that run with no user at the keyboard. A review that only checks roles and transactions will pass an environment a determined attacker walks straight through.</p>
          <h4 className="sc-rh">Common SAP exposures a screen-level review misses:</h4>
          <ul className="sc-risklist">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A rigorous SAP <em>method</em>.</h2>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Engagement Scope</div>
          <h2 className="sc-h2">What shapes the <em>quote</em>.</h2>
          <div className="sc-scope">
            {scopeTiers.map(([h, p, d]) => (
              <div className="sc-scopecard" key={h}>
                <h4>{h}</h4><p>{p}</p><span className="sc-scoped">{d}</span>
              </div>
            ))}
          </div>
          <div className="sc-promise">
            <strong>Fixed-scope quote within one working day.</strong>
            <span>We confirm the landscape and custom-code footprint, then commit to a number before you commit to us.</span>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Aligned to SAP <em>standards</em>.</h2>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Findings that <em>hold up</em>.</h2>
              <ul className="sc-list">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why Work With Us</div>
          <h2 className="sc-h2">How this review <em>differs</em>.</h2>
          <div className="sc-why">
            {whyUs.map(([ic, h, p]) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-whyi">{ICONS[ic]}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec slim alt">
        <div className="sc-wrap">
          <div className="sc-eb">Sectors</div>
          <h2 className="sc-h2">Where we <em>work</em>.</h2>
          <div className="sc-chips">{industries.map((i) => <span className="sc-chip" key={i}>{i}</span>)}</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">FAQ</div>
          <h2 className="sc-h2">Common <em>questions</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a], i) => (
              <div className={"sc-faqitem" + (open === i ? " open" : "")} key={q}>
                <button className="sc-faqq" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{q}</span>
                  <span className="sc-faqc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
                </button>
                <div className="sc-faqa"><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Scope your SAP security review</h3>
            <p>Book a 30-minute scoping call. We confirm the SAP landscape, custom-code footprint, and a fixed-scope quote.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-page{--bg:#F8FAFC;--bg2:#F1F5F9;--srf:#fff;--ink:#0F172A;--ink2:#334155;--ink3:#64748B;--line:#E2E8F0;--line2:#CBD5E1;--acc:#2563EB;--accs:#DBEAFE;--amber:#B45309;--ambers:#FEF3C7;--disp:"Fraunces",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--mono:"JetBrains Mono",monospace;font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
[data-theme="dark"] .sc-page{--bg:#0F172A;--bg2:#1E293B;--srf:#1E293B;--ink:#F1F5F9;--ink2:#CBD5E1;--ink3:#94A3B8;--line:#334155;--line2:#475569;--acc:#3B82F6;--accs:#1E3A5F}
.sc-page *{box-sizing:border-box;margin:0;padding:0}
.sc-page a{color:inherit;text-decoration:none}
.sc-page svg{display:block}
.sc-wrap{max-width:1140px;margin:0 auto;padding:0 28px}
.sc-sec{padding:72px 0}
.sc-sec.alt{background:var(--bg2)}
.sc-sec.slim{padding:46px 0}
.sc-eb{font-family:var(--mono);font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--acc);margin-bottom:14px}
.sc-h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,3.2vw,38px);letter-spacing:-.02em;line-height:1.1;color:var(--ink);max-width:720px;margin-bottom:14px}
.sc-h2 em{font-style:italic;color:var(--acc)}
.sc-p{font-size:16.5px;line-height:1.72;color:var(--ink2);max-width:780px}
.sc-p+.sc-p{margin-top:15px}
.sc-btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:8px;font-weight:600;font-size:14.5px;font-family:var(--sans);cursor:pointer;border:none;transition:all .2s}
.sc-btn.pri{background:var(--ink);color:#fff}.sc-btn.pri:hover{background:var(--acc);transform:translateY(-2px);box-shadow:0 10px 22px rgba(37,99,235,.28)}
[data-theme="dark"] .sc-btn.pri{background:var(--acc);color:#fff}
.sc-btn.sec{background:transparent;color:var(--ink);border:1px solid var(--line2)}.sc-btn.sec:hover{border-color:var(--ink)}
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
.sc-glance{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sc-stat{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:22px 20px;text-align:center}
.sc-statn{display:block;font-family:var(--disp);font-weight:500;font-size:22px;letter-spacing:-.02em;color:var(--acc);margin-bottom:5px}
.sc-statl{font-size:13px;color:var(--ink3);line-height:1.4}
@media(max-width:720px){.sc-glance{grid-template-columns:repeat(2,1fr)}}
.sc-facts{margin-top:30px;background:var(--srf);border:1px solid var(--line);border-radius:14px;overflow:hidden;max-width:920px}
.sc-fact{display:grid;grid-template-columns:200px 1fr;gap:24px;padding:16px 24px;border-top:1px solid var(--line)}
.sc-fact:first-child{border-top:none}
.sc-factk{font-family:var(--mono);font-size:12.5px;letter-spacing:.04em;color:var(--ink);text-transform:uppercase}
.sc-factv{font-size:14.5px;color:var(--ink2);line-height:1.6}
.sc-factrev{font-family:var(--mono);font-size:11.5px;color:var(--ink3);padding:12px 24px;border-top:1px solid var(--line);background:var(--bg2)}
@media(max-width:680px){.sc-fact{grid-template-columns:1fr;gap:5px}}
.sc-who{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-whocard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whocard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-whon{display:grid;place-items:center;width:38px;height:38px;border-radius:10px;background:var(--ink);color:#fff;font-family:var(--mono);font-size:15px;margin-bottom:16px}
.sc-whocard h4{font-family:var(--disp);font-weight:500;font-size:18px;letter-spacing:-.01em;margin-bottom:8px}
.sc-whocard p{font-size:14px;color:var(--ink2);line-height:1.6}
@media(max-width:820px){.sc-who{grid-template-columns:1fr}}
.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}
.sc-card{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;display:flex;gap:14px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-card:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tick{flex:none;width:26px;height:26px;border-radius:7px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-top:2px}
.sc-tick svg{width:14px;height:14px}
.sc-card h4{font-weight:600;font-size:15px;margin-bottom:4px}
.sc-card p{font-size:13.5px;color:var(--ink3);line-height:1.55}
.sc-rh{font-weight:700;font-size:15px;color:var(--ink);margin:26px 0 14px}
.sc-risklist{list-style:none;display:grid;gap:11px;max-width:840px}
.sc-risklist li{position:relative;padding-left:30px;font-size:15px;color:var(--ink2);line-height:1.55}
.sc-risklist li::before{content:"";position:absolute;left:0;top:3px;width:18px;height:18px;border-radius:5px;background:var(--ambers);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23B45309' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-steps{margin-top:34px;max-width:880px}
.sc-step{display:grid;grid-template-columns:auto 1fr;gap:22px;padding:24px 0;border-top:1px solid var(--line)}
.sc-step:first-child{border-top:none}
.sc-stepn{font-family:var(--mono);font-size:13px;width:44px;height:44px;border-radius:11px;background:var(--ink);color:#fff;display:grid;place-items:center}
[data-theme="dark"] .sc-stepn{background:var(--acc);color:#fff}
.sc-step h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:6px;letter-spacing:-.01em}
.sc-step p{font-size:15px;color:var(--ink2);line-height:1.6;max-width:66ch}
.sc-scope{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-scopecard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-scopecard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-scopecard h4{font-weight:700;font-size:15.5px;margin-bottom:7px}
.sc-scopecard p{font-size:14px;color:var(--ink2);line-height:1.55;margin-bottom:16px}
.sc-scoped{display:inline-block;font-family:var(--mono);font-size:12px;color:var(--acc);background:var(--accs);border-radius:7px;padding:6px 11px}
@media(max-width:820px){.sc-scope{grid-template-columns:1fr}}
.sc-promise{margin-top:16px;background:var(--srf);border:1px dashed var(--line2);border-radius:14px;padding:22px 26px;display:flex;flex-direction:column;gap:5px}
.sc-promise strong{font-family:var(--disp);font-weight:500;font-size:18px;color:var(--ink);letter-spacing:-.01em}
.sc-promise span{font-size:14.5px;color:var(--ink2)}
.sc-twocol{display:grid;grid-template-columns:1fr 1fr;gap:44px}@media(max-width:820px){.sc-twocol{grid-template-columns:1fr;gap:36px}}
.sc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}
.sc-chip{font-family:var(--mono);font-size:12.5px;color:var(--ink2);background:var(--srf);border:1px solid var(--line);border-radius:8px;padding:9px 14px;transition:border-color .2s,color .2s}
.sc-chip::before{content:"▪";color:var(--acc);margin-right:8px}.sc-chip:hover{border-color:var(--acc);color:var(--ink)}
.sc-list{list-style:none;display:grid;gap:13px;max-width:820px;margin-top:6px}
.sc-list li{position:relative;padding-left:32px;font-size:15.5px;color:var(--ink2);line-height:1.55}
.sc-list li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:var(--accs);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-whyi{display:grid;place-items:center;width:42px;height:42px;border-radius:11px;background:var(--accs);color:var(--acc);margin-bottom:16px}
.sc-whyi svg{width:21px;height:21px}
.sc-whycard h4{font-weight:600;font-size:15.5px;margin-bottom:7px}
.sc-whycard p{font-size:14px;color:var(--ink2);line-height:1.6}
@media(max-width:820px){.sc-why{grid-template-columns:1fr}}
.sc-faq{margin-top:30px;max-width:880px}
.sc-faqitem{border-top:1px solid var(--line)}
.sc-faqitem:last-child{border-bottom:1px solid var(--line)}
.sc-faqq{width:100%;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:22px 4px;text-align:left;font-family:var(--disp);font-weight:500;font-size:17.5px;color:var(--ink);letter-spacing:-.01em;line-height:1.35}
.sc-faqc{flex:none;width:30px;height:30px;border-radius:8px;background:var(--bg2);color:var(--acc);display:grid;place-items:center;transition:transform .3s,background .2s}
.sc-faqc svg{width:16px;height:16px}
.sc-faqitem.open .sc-faqc{transform:rotate(180deg);background:var(--accs)}
.sc-faqa{max-height:0;overflow:hidden;transition:max-height .35s ease}
.sc-faqitem.open .sc-faqa{max-height:360px}
.sc-faqa p{font-size:15px;color:var(--ink2);line-height:1.7;padding:0 4px 22px;max-width:72ch}
.sc-rel{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:30px}
.sc-relcard{display:flex;align-items:center;justify-content:space-between;gap:16px;background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;transition:all .25s}
.sc-relcard:hover{border-color:var(--acc);transform:translateY(-2px);box-shadow:0 12px 26px -16px rgba(37,99,235,.3)}
.sc-relcard h4{font-weight:600;font-size:15px;margin-bottom:3px}
.sc-relcard p{font-size:13.5px;color:var(--ink3);line-height:1.5}
.sc-relarr{flex:none;font-size:18px;color:var(--acc);transition:transform .2s}
.sc-relcard:hover .sc-relarr{transform:translateX(3px)}
@media(max-width:720px){.sc-rel{grid-template-columns:1fr}}
.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:540px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}
@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
