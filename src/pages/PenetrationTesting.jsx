import React from "react";

const trust = [
  "Manual, senior-led testing",
  "Canada-based team",
  "Fixed-scope quote in one working day",
  "Executive + technical reporting",
  "Free retest included",
];

const delivers = [
  "Manual exploitation that goes beyond automated scanner coverage",
  "Multi-step, chained attack paths a single-issue scanner cannot detect",
  "Business-logic abuse mapped to real business impact",
  "S.I.R.P.-prioritised remediation so you fix what matters first",
  "Reproducible proof — step-by-step reproduction and evidence captures",
  "A free retest of remediated findings, with a confirmation letter",
];

const fit = [
  ["Shipping something new", "You're launching a product, platform, or major release and need independent assurance it can withstand a real attacker before go-live."],
  ["Compliance or customer reviews", "You need credible penetration-test evidence for SOC 2, PCI DSS, ISO 27001, or a customer's vendor-security questionnaire."],
  ["Annual or post-change assurance", "An established team validating that controls still hold after architecture changes, or on a recurring annual cadence."],
];

const stats = [
  ["5", "Recognised standards we test to"],
  ["5–25", "Working-day engagements"],
  ["1 day", "Fixed-scope quote turnaround"],
  ["Free", "Retest of remediated findings"],
];

const facts = [
  ["Methodology", "Manual-led, aligned to PTES and the OWASP testing guides (WSTG / MASTG)"],
  ["vs Vulnerability scanning", "A scan flags known issues automatically; a test manually exploits, chains, and proves real impact"],
  ["Typical duration", "5–25 working days, scoped to your attack surface and number of user roles"],
  ["Includes", "Scoping, test plan, manual exploitation, reporting, a remediation call, and a free retest"],
  ["When it's used", "Pre-launch, annual assurance, after major changes, or as evidence for SOC 2 / PCI / ISO"],
  ["Output", "Executive summary, technical findings with reproduction, S.I.R.P.-prioritised remediation, audit-ready letter"],
];

const risks = [
  "Low-rated scanner findings that chain together into full compromise",
  "Business-logic flaws no automated tool is capable of modelling",
  "False confidence from a clean automated scan",
  "Findings with no proof — so nothing gets prioritised or actually fixed",
  "Stalled audits and customer security reviews with no independent evidence",
  "A real incident that a test would have surfaced first",
];

const scope = [
  ["Web application testing", "Manual exploitation aligned to the OWASP testing guide, beyond automated coverage."],
  ["API security testing", "Authentication, authorisation, and business-logic abuse across REST and GraphQL."],
  ["Mobile application testing", "iOS and Android assessment aligned to the OWASP mobile testing standard."],
  ["Network penetration testing", "External and internal exploitation, lateral movement, and privilege escalation."],
  ["Cloud configuration testing", "Identity, exposure, and misconfiguration review across your cloud estate."],
  ["Business-logic & chained paths", "Multi-step attack chains single-issue scanners cannot detect."],
];

const steps = [
  ["Scoping & fixed quote", "A short call to define targets, rules of engagement, and objectives. You receive a fixed-scope quote within one working day — no surprise invoices, no scope creep."],
  ["Test plan & authorisation", "A written test plan covering methodology, targets, timing, and rules of engagement. A signed authorisation is in place before any testing begins."],
  ["Reconnaissance & mapping", "We enumerate the full attack surface, fingerprint technologies, and identify the most likely entry points before active exploitation."],
  ["Manual exploitation", "Senior, human-led testing of vulnerabilities, business logic, and chained attack paths. Critical findings are flagged to you immediately, not held for the report."],
  ["Reporting", "Evidence-backed technical findings with step-by-step reproduction, plus a board-ready executive summary — delivered within agreed working days."],
  ["Remediation call & retest", "A walkthrough with the lead tester on findings and fix strategy, followed by a free retest of remediated items and a confirmation letter for your auditors."],
];

const frameworks = ["PTES", "OWASP WSTG", "OWASP MASTG", "NIST SP 800-115", "OSSTMM"];

const receive = [
  ["Scoping call", "A 30-minute call to define targets, timeline, and authorisation boundaries."],
  ["Test plan & authorisation", "Written test plan covering methodology and rules of engagement, signed before testing begins."],
  ["Technical report", "Detailed findings with step-by-step reproduction, evidence, and fix-oriented guidance."],
  ["Executive summary", "A board-ready 1–2 page summary with risk ratings and business impact."],
  ["Audit-ready findings letter", "Formatted for auditors, customers, and compliance reviewers."],
  ["S.I.R.P. remediation guidance", "Findings prioritised by Severity, Impact, Reproducibility, and Priority."],
  ["Remediation call", "A walkthrough with the lead tester on findings and remediation strategy."],
  ["Free retest + confirmation letter", "Retest of remediated findings within an agreed window, with a confirmation letter."],
];

const scopeTiers = [
  ["Small scope", "A single application or a focused external surface. Smaller footprint, fewer user roles.", "5–7 working days"],
  ["Medium scope", "A multi-role platform with several user types, an API, and third-party integrations.", "8–12 working days"],
  ["Enterprise scope", "A complex environment — internal and external targets, multiple apps, compliance evidence.", "12–25 working days"],
];

const faqs = [
  ["What's the difference between a penetration test and a vulnerability scan?", "A scan is automated and lists known, surface-level issues. A penetration test is human-led: a senior tester manually exploits weaknesses, chains them into multi-step attack paths, abuses business logic, and proves real-world impact — the things a scanner cannot do."],
  ["How long does a test take?", "Most engagements run 5–25 working days depending on the size of the attack surface and the number of user roles. We confirm the exact effort and a fixed-scope quote after a short scoping call."],
  ["Do you test production or staging?", "Either. We agree the environment, timing, and rules of engagement up front, and document them in a signed authorisation before any testing begins. Production testing is conducted carefully to avoid disruption."],
  ["Will testing disrupt our systems?", "Testing is conducted to avoid impact to availability and data integrity. Any potentially intrusive action is agreed in advance through the rules of engagement, and critical findings are flagged to you immediately during the test."],
  ["What is the S.I.R.P. model?", "S.I.R.P. is our prioritisation model — Severity, Impact, Reproducibility, Priority — that integrates CVSS, OWASP risk rating, EPSS, and asset context so remediation effort lands on the findings that pose real business risk first."],
  ["Is the retest really free?", "Yes. After you remediate, we retest the affected findings within an agreed window and issue a confirmation letter you can share with auditors or customers."],
  ["What do you need to scope a test?", "Just the basics on a short call: what the targets are (web app, API, network range, cloud estate), roughly how many user roles exist, and your objectives and timing. You receive a fixed-scope quote within one working day."],
];

const related = [
  ["Web application testing", "Deep manual testing of your web applications."],
  ["API security testing", "Auth, authorisation, and logic abuse across REST and GraphQL."],
  ["Cloud configuration review", "Identity, exposure, and misconfiguration across your cloud."],
  ["Vulnerability assessment", "Broad, recurring coverage to complement manual testing."],
];

const WHY = [
  ["Manual-first, not scanner-only", "Automated tooling catches the obvious. Senior testers find the chained paths and logic flaws that actually matter.",
    <><path d="M12 2 4 5.5v6c0 4.6 3.3 7.8 8 9.5 4.7-1.7 8-4.9 8-9.5v-6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>],
  ["Proof, not just flags", "Every finding ships with reproduction steps and evidence — so it gets triaged and fixed, not debated.",
    <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 14.5 2 2 3.5-3.5"/></>],
  ["S.I.R.P. prioritisation", "Findings are rated by Severity, Impact, Reproducibility, and Priority — so you fix what matters first.",
    <><line x1="5" y1="21" x2="5" y2="11"/><line x1="12" y1="21" x2="12" y2="4"/><line x1="19" y1="21" x2="19" y2="14"/></>],
  ["Reporting both audiences read", "A board-ready executive summary and a technical report your engineers can act on — no jargon padding.",
    <><rect x="3" y="4" width="18" height="13" rx="1.5"/><polyline points="7 12 10 9 13 12 17 8"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></>],
  ["Compliance-aware delivery", "Findings mapped to the framework you report against — SOC 2, PCI DSS, ISO 27001.",
    <><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>],
  ["Canada-based, retest included", "A Canada-based team for jurisdiction-sensitive work, with a free retest and confirmation letter.",
    <><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 8 16 8"/></>],
];

const Tick = () => (
  <span className="sc-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
);

export default function PenetrationTesting() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Penetration Testing</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Offensive Security</div>
              <h1 className="sc-h1">Penetration <em>Testing</em></h1>
              <p className="sc-lead">Manual, senior-led testing that finds the chained attack paths and business-logic flaws scanners miss — across web, mobile, API, network, and cloud, with every finding proven and a free retest.</p>
              <div className="sc-trust"><span>Manual, senior-led testing</span><span>Evidence-backed findings</span><span>Free remediation retest</span><span>Executive + technical reporting</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11 V7 C8 4.8 9.8 3 12 3 C14.2 3 16 4.8 16 7 V11"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-strip">
        <div className="sc-wrap">{trust.map((t) => <span key={t}>{t}</span>)}</div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What a penetration <em>test</em> is.</h2>
          <p className="sc-p">A penetration test is a human-led security assessment that goes beyond automated scanning. A scanner asks &ldquo;which known issues are present?&rdquo;; a penetration test asks &ldquo;if a capable attacker targeted this, what could they actually do?&rdquo; Senior specialists manually exploit weaknesses, chain them into multi-step attack paths, and abuse business logic the way a real adversary would — across web, mobile, API, network, and cloud targets.</p>
          <p className="sc-p">The goal is not a longer list of flags. It is proof: evidence-backed findings with step-by-step reproduction, prioritised through our S.I.R.P. model, and a free retest to confirm the fixes hold — in a report your auditors, customers, and regulators will accept.</p>
          <ul className="sc-list">{delivers.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who this is for</div>
          <h2 className="sc-h2">This engagement is a fit <em>if</em>&hellip;</h2>
          <div className="sc-fit">
            {fit.map(([h, p], i) => (
              <div className="sc-fitcard" key={h}>
                <span className="sc-fitnum">{String(i + 1).padStart(2, "0")}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">At a glance</div>
          <h2 className="sc-h2">Penetration testing, <em>quick facts</em>.</h2>
          <div className="sc-stats">
            {stats.map(([n, l]) => <div className="sc-stat" key={l}><b>{n}</b><span>{l}</span></div>)}
          </div>
          <dl className="sc-facts">
            {facts.map(([k, v]) => <div className="sc-factrow" key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <p className="sc-reviewed">Last reviewed: 2026-06-04</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why it matters</div>
          <h2 className="sc-h2">A clean scan is not a <em>clean bill of health</em>.</h2>
          <p className="sc-p">Many breached organisations had recent vulnerability scans on record. What they lacked was someone proving how individual weaknesses chain into real compromise. Without a manual test, you risk:</p>
          <ul className="sc-risk">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">What&rsquo;s Covered</div>
          <h2 className="sc-h2">Scope of the <em>test</em>.</h2>
          <div className="sc-grid">
            {scope.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <Tick />
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A manual-led <em>methodology</em>.</h2>
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
          <div className="sc-eb">Standards &amp; Frameworks</div>
          <h2 className="sc-h2">Aligned to recognised <em>standards</em>.</h2>
          <p className="sc-p">Every engagement runs against established, vendor-neutral methodologies — so the coverage is consistent, defensible, and accepted by auditors and customers.</p>
          <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">What You Receive</div>
          <h2 className="sc-h2">Every engagement <em>includes</em>.</h2>
          <div className="sc-deliv">
            {receive.map(([h, p]) => (
              <div className="sc-delivcard" key={h}>
                <Tick />
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
          <p className="sc-p">Effort scales with your attack surface and the number of user roles. Most engagements fall into one of three bands:</p>
          <div className="sc-scope">
            {scopeTiers.map(([h, p, d]) => (
              <div className="sc-scopecard" key={h}>
                <h4>{h}</h4><p>{p}</p><span className="sc-dur">{d}</span>
              </div>
            ))}
          </div>
          <div className="sc-quote">
            <b>Fixed-scope quote within one working day.</b>
            <span>We commit to a number before you commit to us — no scope creep, no surprise invoices.</span>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why Work With Us</div>
          <h2 className="sc-h2">Grounded reasons clients <em>choose us</em>.</h2>
          <div className="sc-why">
            {WHY.map(([h, p, icon]) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-whyico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icon}</svg></span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">FAQ</div>
          <h2 className="sc-h2">Frequently asked <em>questions</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary><span className="q">{q}</span><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></summary>
                <div className="ans">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Where To Next</div>
          <h2 className="sc-h2">Often paired with this <em>engagement</em>.</h2>
          <div className="sc-rel">
            {related.map(([h, p]) => (
              <a className="sc-relcard" href="/#services" key={h}>
                <div><h4>{h}</h4><p>{p}</p></div>
                <span className="ar">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Book a penetration test scoping call</h3>
            <p>A 30-minute call covers targets, realistic effort, and a fixed-scope quote within one working day. Senior-led, manual-first, retest included.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-page{--bg:#F8FAFC;--bg2:#F1F5F9;--srf:#fff;--ink:#0F172A;--ink2:#334155;--ink3:#64748B;--line:#E2E8F0;--line2:#CBD5E1;--acc:#2563EB;--accs:#DBEAFE;--disp:"Fraunces",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--mono:"JetBrains Mono",monospace;font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
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
.sc-strip{background:var(--ink);color:#fff}
.sc-strip .sc-wrap{display:flex;flex-wrap:wrap;gap:10px 26px;padding-top:18px;padding-bottom:18px;justify-content:center}
.sc-strip span{font-size:13.5px;color:#CBD5E1;display:inline-flex;gap:8px;align-items:center;font-weight:500}
.sc-strip span::before{content:"✓";color:#60A5FA;font-weight:800}
.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}
.sc-card{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;display:flex;gap:14px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-card:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tick{flex:none;width:26px;height:26px;border-radius:7px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-top:2px}
.sc-tick svg{width:14px;height:14px}
.sc-card h4{font-weight:600;font-size:15px;margin-bottom:4px}
.sc-card p{font-size:13.5px;color:var(--ink3);line-height:1.55}
.sc-fit{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.sc-fitcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-fitcard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-fitnum{font-family:var(--mono);font-size:13px;width:40px;height:40px;border-radius:10px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:16px;font-weight:500}
.sc-fitcard h4{font-family:var(--disp);font-weight:500;font-size:18px;letter-spacing:-.01em;margin-bottom:8px}
.sc-fitcard p{font-size:14.5px;color:var(--ink2);line-height:1.6}
@media(max-width:820px){.sc-fit{grid-template-columns:1fr}}
.sc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}
.sc-stat{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 20px;text-align:center}
.sc-stat b{display:block;font-family:var(--disp);font-weight:500;font-size:clamp(28px,3.4vw,34px);letter-spacing:-.02em;color:var(--acc);line-height:1}
.sc-stat span{display:block;font-size:12.5px;color:var(--ink3);margin-top:10px;line-height:1.4}
@media(max-width:720px){.sc-stats{grid-template-columns:repeat(2,1fr)}}
.sc-facts{margin-top:18px;background:var(--srf);border:1px solid var(--line);border-radius:14px;overflow:hidden;max-width:900px}
.sc-factrow{display:grid;grid-template-columns:230px 1fr;gap:20px;padding:16px 24px;border-top:1px solid var(--line)}
.sc-factrow:first-child{border-top:none}
.sc-factrow dt{font-family:var(--mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink3);padding-top:2px}
.sc-factrow dd{font-size:15px;color:var(--ink);line-height:1.55}
.sc-reviewed{font-family:var(--mono);font-size:11.5px;color:var(--ink3);margin-top:14px}
@media(max-width:680px){.sc-factrow{grid-template-columns:1fr;gap:4px}}
.sc-risk{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:13px 28px;max-width:900px;margin-top:24px}
.sc-risk li{position:relative;padding-left:32px;font-size:15px;color:var(--ink2);line-height:1.5}
.sc-risk li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:#FEE2E2;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
@media(max-width:720px){.sc-risk{grid-template-columns:1fr}}
.sc-steps{margin-top:34px;max-width:880px}
.sc-step{display:grid;grid-template-columns:auto 1fr;gap:22px;padding:24px 0;border-top:1px solid var(--line)}
.sc-step:first-child{border-top:none}
.sc-stepn{font-family:var(--mono);font-size:13px;width:44px;height:44px;border-radius:11px;background:var(--ink);color:#fff;display:grid;place-items:center}
.sc-step h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:6px;letter-spacing:-.01em}
.sc-step p{font-size:15px;color:var(--ink2);line-height:1.6;max-width:66ch}
.sc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.sc-chip{font-family:var(--mono);font-size:12.5px;color:var(--ink2);background:var(--srf);border:1px solid var(--line);border-radius:8px;padding:9px 14px;transition:border-color .2s,color .2s}
.sc-chip::before{content:"▪";color:var(--acc);margin-right:8px}.sc-chip:hover{border-color:var(--acc);color:var(--ink)}
.sc-deliv{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:34px}
.sc-delivcard{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:18px 20px;display:flex;gap:13px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-delivcard:hover{transform:translateY(-2px);border-color:var(--line2);box-shadow:0 12px 26px -16px rgba(15,23,42,.16)}
.sc-delivcard h4{font-weight:600;font-size:14.5px;margin-bottom:3px}
.sc-delivcard p{font-size:13px;color:var(--ink3);line-height:1.5}
@media(max-width:720px){.sc-deliv{grid-template-columns:1fr}}
.sc-scope{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
.sc-scopecard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px 22px}
.sc-scopecard h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:8px}
.sc-scopecard p{font-size:14px;color:var(--ink2);line-height:1.55;margin-bottom:14px}
.sc-dur{font-family:var(--mono);font-size:12px;color:var(--acc);background:var(--accs);border-radius:7px;padding:6px 12px;display:inline-block}
.sc-quote{margin-top:14px;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:14px;padding:24px 28px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.sc-quote b{font-family:var(--disp);font-weight:500;font-size:19px;color:#fff;letter-spacing:-.01em}
.sc-quote span{color:#94A3B8;font-size:14px;max-width:520px}
@media(max-width:820px){.sc-scope{grid-template-columns:1fr}}
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px 22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-whyico{width:42px;height:42px;border-radius:11px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:16px}
.sc-whyico svg{width:21px;height:21px}
.sc-whycard h4{font-weight:600;font-size:15.5px;margin-bottom:7px}
.sc-whycard p{font-size:13.5px;color:var(--ink2);line-height:1.55}
@media(max-width:820px){.sc-why{grid-template-columns:1fr}}
.sc-faq{margin-top:24px;max-width:860px}
.sc-faq details{border-top:1px solid var(--line)}
.sc-faq details:last-child{border-bottom:1px solid var(--line)}
.sc-faq summary{list-style:none;cursor:pointer;padding:20px 4px;display:flex;justify-content:space-between;align-items:center;gap:18px}
.sc-faq summary::-webkit-details-marker{display:none}
.sc-faq summary .q{flex:1;font-family:var(--disp);font-weight:500;font-size:17px;color:var(--ink);letter-spacing:-.01em;line-height:1.3}
.sc-faq summary .ic{flex:none;width:26px;height:26px;border-radius:7px;border:1px solid var(--line2);display:grid;place-items:center;color:var(--acc);transition:transform .25s,background .2s,border-color .2s}
.sc-faq summary .ic svg{width:14px;height:14px}
.sc-faq details[open] summary .ic{transform:rotate(45deg);background:var(--accs);border-color:transparent}
.sc-faq .ans{padding:0 4px 22px;font-size:15px;color:var(--ink2);line-height:1.65;max-width:78ch}
.sc-rel{display:grid;grid-template-columns:repeat(2,1fr);gap:13px;margin-top:24px}
.sc-relcard{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;gap:14px;transition:all .25s}
.sc-relcard:hover{border-color:var(--acc);transform:translateY(-2px);box-shadow:0 12px 26px -16px rgba(37,99,235,.3)}
.sc-relcard h4{font-weight:600;font-size:15px;margin-bottom:3px}
.sc-relcard p{font-size:13px;color:var(--ink3)}
.sc-relcard .ar{color:var(--acc);font-size:18px;flex:none}
@media(max-width:680px){.sc-rel{grid-template-columns:1fr}}
.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:540px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}
@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
