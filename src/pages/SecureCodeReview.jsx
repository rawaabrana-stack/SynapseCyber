import React from "react";

const delivers = [
  "Vulnerabilities caught in the source, where they are cheapest to fix",
  "Logic and authorisation flaws a scanner alone will never match",
  "A finding list with the false positives already triaged out",
  "Every issue rated by real-world risk with the S.I.R.P. model",
  "Code-level remediation your developers can apply directly",
  "Scanning and gates wired into your pipeline to stop regression",
];

const audience = [
  ["Shipping security-critical code", "You're building software that handles money, personal data, or access control, and the source needs reviewing before it reaches production."],
  ["Scanner output you can't trust", "Your SAST tool floods the team with findings and false positives, and you need a specialist to separate the real risks from the noise."],
  ["A compliance or customer requirement", "A customer, auditor, or framework such as PCI DSS or SOC 2 requires a secure code review or evidence of secure development."],
];

const facts = [
  ["Methodology", "SAST and dependency analysis plus senior manual review and STRIDE threat modelling, aligned to OWASP ASVS."],
  ["vs Penetration testing", "A code review reads the source — logic, authorisation, crypto; a pen test probes the running app from outside. They find different issues and pair well."],
  ["Typical duration", "1–4 weeks, depending on codebase size, the language stacks in use, and review depth."],
  ["Includes", "Threat model, static and dependency analysis, manual review, false-positive triage, and code-level remediation."],
  ["Best fit when", "You have source access and want issues found and fixed before they reach production."],
  ["Output", "Findings report with location and S.I.R.P. rating, remediation per issue, threat-model artefacts, and CI/CD recommendations."],
];

const stats = [
  ["OWASP ASVS", "Verification standard"],
  ["1–4 wks", "Typical review window"],
  ["SAST + manual", "Tooling plus specialist eyes"],
  ["S.I.R.P.", "Risk-based prioritisation"],
];

const risks = [
  "Logic and authorisation flaws that no black-box test will ever reach",
  "Hard-coded secrets and credentials sitting in the repository",
  "Vulnerable and outdated dependencies inherited from the supply chain",
  "Unsafe input handling and query construction that invites injection",
  "Cryptography used incorrectly in ways that look fine until they're attacked",
  "Fixing in production what could have been caught in a pull request",
];

const steps = [
  ["Context & threat model", "Understand the application, its data flows and trust boundaries, and STRIDE-model where it can actually be attacked."],
  ["Static analysis", "Run SAST across the codebase and tune it to your language stacks to cut noise before manual work begins."],
  ["Dependency & secrets scan", "Identify vulnerable libraries, supply-chain exposure, and secrets committed to the repository."],
  ["Manual review", "Specialist review of authentication, authorisation, input handling, and cryptography — the logic a tool cannot judge."],
  ["Triage & false-positive removal", "Validate or dismiss tool findings, so what remains is real and worth your developers' time."],
  ["Risk rating with S.I.R.P.", "Rate each confirmed issue by real-world risk, not just raw severity, so remediation is ordered correctly."],
  ["Remediation guidance", "Deliver code-level fixes per issue that developers can apply directly, with the secure pattern to follow."],
  ["Pipeline integration", "Recommend scanning, gates, and secure-development practices that stop the same classes of issue returning."],
];

const receiveEng = [
  "A findings report with severity, location, and S.I.R.P. rating",
  "Code-level remediation guidance for every confirmed issue",
  "Threat-model artefacts and data-flow diagrams",
  "False-positive-triaged results your developers can trust",
  "A dependency and secrets exposure summary",
  "CI/CD integration and secure-development recommendations",
];

const receiveCommercial = [
  "A scoping call and fixed-scope proposal before any work begins",
  "Read-only source access on your terms, handled securely",
  "Critical findings flagged immediately, not held for the report",
  "A walkthrough of findings and fixes with your development team",
  "A re-review of remediated code within an agreed window",
  "Clear handling and deletion of your source once the engagement ends",
];

const frameworks = ["OWASP ASVS", "OWASP SAMM", "OWASP Top 10", "CWE Top 25", "SEI CERT", "NIST SSDF"];
const industries = ["Financial Services", "Healthcare", "Public Sector & Government", "Retail & E-commerce", "Critical Infrastructure", "SaaS & Technology", "Education & Research", "Professional Services"];

const tiers = [
  ["Focused", "A single application or service, one primary language stack, and a defined repository — ideal for a targeted review.", "~1 week"],
  ["Standard", "A multi-component application across several stacks or repositories, with threat modelling included.", "~1–3 weeks"],
  ["Enterprise", "A large or critical codebase, multiple services, deep manual review, and pipeline integration.", "~3–4 weeks+"],
];

const whyUs = [
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>,
    "Manual review, not scanner-only",
    "Tools catch the obvious; a specialist finds the broken authorisation and logic flaws a scanner structurally cannot reach.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18l-7 8v6l-4-2v-4z"/></svg>,
    "False positives triaged out",
    "You get a list your developers can trust and act on, not a raw export they'll quickly learn to ignore.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><circle cx="9" cy="8" r="2.2" fill="currentColor"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="15" cy="16" r="2.2" fill="currentColor"/></svg>,
    "S.I.R.P. prioritisation",
    "Findings ranked by real-world risk — blending severity, exploitability, and context — so the right things get fixed first.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><polyline points="9 14 11 16 15 11"/></svg>,
    "Fixes, not just findings",
    "Every issue comes with code-level remediation and the secure pattern to use, so the work is immediately actionable.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
    "Threat-modelled",
    "Review is anchored to how the application can actually be attacked, not a generic checklist run top to bottom.",
  ],
  [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h5a5 5 0 0 1 5 5"/><path d="M7 18h5a5 5 0 0 0 5-5"/></svg>,
    "Built into your pipeline",
    "Recommendations that wire scanning and gates into CI/CD, so the same classes of bug do not come back release after release.",
  ],
];

const faqs = [
  ["How is a code review different from a penetration test?", "A penetration test probes the running application from the outside; a secure code review reads the source. The review reaches things a black-box test cannot — logic flaws, broken authorisation deep in the code, and cryptographic misuse — which is why the two pair well."],
  ["Do you need access to our source code?", "Yes — read-only access to the repositories in scope. We handle source securely, work to your access constraints, and delete our copy once the engagement ends."],
  ["What languages and stacks do you cover?", "Static analysis runs across the major language stacks; manual review focuses on the security-critical components regardless of language. We confirm your specific stacks during scoping."],
  ["What is S.I.R.P.?", "Our risk-rating model. Rather than relying on raw severity alone, it blends recognised inputs — severity, exploitability, and real-world context — so each finding is prioritised by the risk it actually poses to your application, and your team fixes the right things first."],
  ["Will this just give us another wall of scanner output?", "No. Tool findings are triaged for false positives and validated by a specialist, so what you receive is confirmed, located, prioritised, and paired with a code-level fix — not a raw export."],
  ["How is it priced?", "Fixed-fee, quoted after a scoping call that confirms the codebase size, language stacks, and review depth. Pricing scales with lines of code and the depth of manual review — you get a firm number before you commit."],
];

export default function SecureCodeReview() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Secure Code Review</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Application Security</div>
              <h1 className="sc-h1">Secure Code <em>Review</em></h1>
              <p className="sc-lead">Find security flaws in the source, not just the running app — static analysis plus senior manual review and threat modelling, with the false positives already triaged out.</p>
              <div className="sc-trust"><span>SAST + manual review</span><span>Threat-modelled</span><span>False positives triaged</span><span>S.I.R.P.-prioritised findings</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6 L3 12 L8 18"/><path d="M16 6 L21 12 L16 18"/><path d="M14 4 L10 20"/></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-tbar">
        <div className="sc-tbarin">
          <span>SAST + manual review</span>
          <span>Threat-modelled</span>
          <span>False positives triaged</span>
          <span>S.I.R.P.-prioritised</span>
          <span>Code-level fixes</span>
        </div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">A secure code review catches vulnerabilities at the layer where they are cheapest to fix: the code itself. We pair static analysis (SAST) with manual review by application-security specialists and structured threat modelling, so logic flaws, broken authorisation, and unsafe data handling surface — not just the patterns a tool can match.</p>
          <p className="sc-p">Findings are triaged for false positives and rated with the S.I.R.P. model, then handed back with code-level remediation your developers can act on immediately and wire into your pipeline.</p>
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
          <h2 className="sc-h2">Code review, the <em>quick facts</em>.</h2>
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
          <h2 className="sc-h2">Cheapest to fix in the <em>source</em>.</h2>
          <p className="sc-p">A vulnerability in the source costs a fraction of the same vulnerability in production — and many of the worst flaws never show up to a black-box test at all. Broken authorisation, logic errors, and cryptographic misuse live in the code, and the code is where they are found and fixed cleanly.</p>
          <div className="sc-eb" style={{ marginTop: "30px" }}>Without a secure code review, you risk</div>
          <ul className="sc-xlist">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A clear, <em>repeatable</em> methodology.</h2>
          <p className="sc-p">A structured review that pairs tooling with specialist judgement — threat-modelled, triaged, and prioritised — ending in code-level fixes and pipeline recommendations, not a raw scanner export.</p>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-p" style={{ marginTop: "26px" }}>Reviews typically run 1–4 weeks depending on codebase size, language stacks, and the depth of manual review.</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Fixes, not just <em>findings</em>.</h2>
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
          <div className="sc-tnote">Scope is set by lines of code, repositories, and language stacks — fixed-scope proposal before you commit.</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why SynapseCyber</div>
          <h2 className="sc-h2">Findings you can <em>act on</em>.</h2>
          <p className="sc-p">A code review is only useful if developers trust it and can act on it. The focus here is exactly that: tooling sharpened by specialist review, false positives removed, every real issue prioritised with S.I.R.P. and paired with the fix.</p>
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
            <h3>Scope your secure code review</h3>
            <p>Book a 30-minute scoping call. We&rsquo;ll confirm the codebase, the language stack, and a fixed-scope quote.</p>
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
