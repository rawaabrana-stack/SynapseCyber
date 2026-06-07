import React from "react";

const quickFacts = [
  ["Methodology", "RCMP Harmonized TRA (HTRA), mapped to CCCS / CSE ITSG-33"],
  ["How it differs from a scan", "A scan or penetration test finds technical weaknesses on specific systems. A TRA values your assets, models the threats that realistically apply, and tells you which risks warrant investment."],
  ["Typical duration", "3–8 weeks, depending on the system boundary and data sensitivity"],
  ["Phases", "Scoping · asset valuation · threat modelling · vulnerability & control review · risk rating · treatment & residual-risk sign-off"],
  ["When you need one", "Security authorisation (ATO), new systems handling sensitive or personal information, cloud onboarding, major change, or periodic reassessment"],
  ["What you receive", "TRA report · risk register · controls-mapping matrix · statement of residual risk · remediation roadmap"],
];

const stats = [
  ["40+", "Harmonized TRAs & PIAs delivered"],
  ["10+ yrs", "Threat, AppSec & GRC practice"],
  ["6", "Governing standards aligned"],
  ["100%", "Canadian senior-led delivery"],
];

const fit = [
  ["Government departments & agencies", "Federal, provincial, and municipal teams pursuing a security authorisation or meeting Treasury Board and departmental security requirements."],
  ["Crown corporations & public sector", "Organisations held to government-grade assurance for systems handling citizen, operational, or financial data."],
  ["Health authorities & healthcare", "Custodians of personal health information that need defensible risk and privacy evidence on the record."],
  ["Critical infrastructure & regulated operators", "Utilities, transport, and operators where availability and safety impacts carry real-world consequence."],
  ["Vendors selling to government", "Suppliers who need an independent TRA to clear procurement, onboarding, or contractual security obligations."],
  ["Teams facing a major change", "Cloud migrations, new platforms, mergers, or system redesigns that materially shift your risk picture."],
];

const risks = [
  "Authorising officials signing off on risk they cannot see, quantify, or defend later",
  "Security budget directed at low-priority issues while real exposure goes unfunded",
  "Authorisation, audit, or procurement gates stalling for want of traceable evidence",
  "Sensitive or personal-information exposure a structured assessment would have surfaced",
  "Risk-acceptance decisions made informally, with no record if something later goes wrong",
  "Controls assumed effective on paper that have never been tested against a real threat model",
];

const scope = [
  ["Asset identification & valuation", "Catalogue your information assets and rate each by confidentiality, integrity, and availability impact, anchored to business and statutory consequence."],
  ["Threat & threat-agent analysis", "Identify the deliberate, accidental, and environmental threats — and the agents behind them — that realistically apply to your sector."],
  ["Vulnerability assessment", "Map the weaknesses across people, process, and technology those threats could exploit, drawing on existing scans, audits, and architecture."],
  ["Risk calculation", "Combine likelihood and impact into prioritised, comparable risk ratings that decision-makers can rank and fund."],
  ["Control gap analysis", "Measure the safeguards already in place against the risk and surface where coverage is missing or unverified."],
  ["Residual risk & treatment", "Define accept / mitigate / transfer decisions and a sequenced remediation plan, with a clear statement of what remains."],
];

const steps = [
  ["Scope & context", "Agree the system boundary, business context, classification, and data sensitivity. Confirm stakeholders, the authorising official, and the decision the assessment must support."],
  ["Asset identification & valuation", "Catalogue the information assets in scope and rate each for confidentiality, integrity, and availability impact against business and statutory consequence."],
  ["Threat & threat-agent modelling", "Pair assets with credible deliberate, accidental, and environmental threats using sector-relevant threat context — not a generic checklist."],
  ["Vulnerability assessment", "Identify the weaknesses across people, process, and technology those threats could realistically exploit, building on the evidence you already hold."],
  ["Control review & gap analysis", "Evaluate the controls already in place, measure coverage against the target baseline, and surface where protection is missing or untested."],
  ["Risk rating", "Calculate likelihood and impact to produce a prioritised, comparable risk register — every rating traceable to the asset, threat, and vulnerability behind it."],
  ["Treatment & residual-risk sign-off", "Deliver accept / mitigate / transfer decisions, a sequenced remediation roadmap, and a clear statement of the residual risk management is asked to accept."],
];

const frameworks = [
  "RCMP Harmonized TRA (HTRA)",
  "CCCS / CSE ITSG-33",
  "TBS Policy on Government Security",
  "NIST SP 800-30 Rev.1",
  "ISO/IEC 27005:2022",
  "ISO/IEC 27001:2022",
];

const deliverables = [
  "TRA report with executive summary and documented methodology",
  "Prioritised risk register with individual, traceable risk cards",
  "Controls-mapping matrix (risk-to-control traceability)",
  "Asset valuation and threat-event analysis",
  "Statement of residual risk for management acceptance",
  "Sequenced remediation and risk-treatment roadmap",
];

const tiers = [
  ["Single system", "One application or system, a clear boundary, and a defined data set.", "≈ 3–4 weeks"],
  ["Multi-system program", "Several interconnected systems, multiple data types, and integrations.", "≈ 5–7 weeks"],
  ["Portfolio / enterprise", "Complex environment, high-sensitivity data, multiple authorities, and compliance evidence.", "≈ 7–10 weeks"],
];

const why = [
  ["Canadian senior-led delivery", "Your assessment is run by a senior practitioner end to end — not handed down to a junior. Your data stays in Canada."],
  ["RCMP Harmonized methodology", "The methodology your authorising officials already recognise, run to the letter rather than approximated."],
  ["Evidence-traceable ratings", "Every risk rating traces back to a named asset, threat, and vulnerability — defensible under audit and review."],
  ["Clearance-eligible personnel", "Reliability- and Secret-clearance-eligible delivery for sensitive and classified-adjacent engagements."],
  ["Plain-English executive reporting", "A report your board and authorising official can act on, with the technical depth your security team needs underneath it."],
  ["Fixed scope, no surprises", "A fixed-scope quote agreed before any work begins. No scope creep, no open-ended invoices."],
];

const faqs = [
  ["What is the difference between a TRA and a vulnerability scan or penetration test?", "A scan or penetration test tells you which technical weaknesses exist on specific systems. A threat and risk assessment is broader and decision-focused: it values your assets, models the threats that realistically apply, weighs your existing controls, and produces prioritised risk ratings that management can act on. The two are complementary — scan and test results are useful input to a TRA."],
  ["How long does a TRA take?", "Most run three to eight weeks elapsed, depending on the size of the system boundary, the sensitivity of the data, and how readily existing documentation and stakeholders are available. We confirm a timeline at scoping."],
  ["Do you follow the RCMP Harmonized TRA methodology?", "Yes. We run the Harmonized TRA methodology end to end and map it to CCCS / CSE ITSG-33 and the international standards — NIST SP 800-30 and ISO/IEC 27005 — your assessment may also be measured against."],
  ["Will the output support a security authorisation?", "Yes. The TRA report, risk register, controls-mapping matrix, and statement of residual risk are written to be the security-assessment evidence an authorising official needs to make, and record, an authorisation decision."],
  ["Can you work with sensitive or protected information?", "We deliver with clearance-eligible personnel and handle sensitive material under appropriate controls. Classification and handling requirements are confirmed during scoping and reflected in the rules of engagement."],
  ["What do you need from us to begin?", "A defined system boundary, access to existing architecture and security documentation, and the right stakeholders for a short set of interviews. We provide a request list at kickoff so nothing stalls."],
  ["How is pricing structured?", "Fixed scope. After a 30-minute scoping call we confirm the boundary, methodology fit, and a fixed-fee quote — with no open-ended billing."],
];

const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4" /><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="12" r="2.4" /><path d="M6 8.4v7.2M8.3 6.8 15.7 11M8.3 17.2 15.7 13" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M9.5 12h6M9.5 16h6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 3h6v6l-9 9z" /><circle cx="15" cy="9" r="1.3" fill="currentColor" /></svg>,
];

export default function ThreatRiskAssessment() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Threat &amp; Risk Assessment</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Risk &amp; Compliance</div>
              <h1 className="sc-h1">Threat &amp; Risk <em>Assessment</em></h1>
              <p className="sc-lead">Know exactly what you are protecting, which threats realistically apply to it, and where your safeguards fall short — assessed end to end with the RCMP Harmonized TRA methodology and delivered in evidence your authorising officials, auditors, and Treasury Board reviewers will accept.</p>
              <div className="sc-trust"><span>Canadian senior-led delivery</span><span>RCMP Harmonized methodology</span><span>Clearance-eligible personnel</span><span>Evidence-traceable ratings</span><span>Executive + technical reporting</span><span>Fixed-scope quote</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
            </div>
          </div>
        </div>
      </header>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">A threat and risk assessment (TRA) values your information assets, identifies the threats and threat agents that could affect them, assesses the vulnerabilities those threats could exploit, and calculates the resulting risk. We run the RCMP Harmonized TRA methodology end to end, so every rating traces back to evidence rather than opinion.</p>
          <p className="sc-p">The output is built for decisions and for the record: a defensible risk register, a controls-mapping matrix, and a treatment roadmap your team can fund and execute — with a clear statement of the residual risk management is asked to accept. It is written to stand up in front of an authorising official, an auditor, or a procurement review without translation.</p>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Quick Facts</div>
          <h2 className="sc-h2">The <em>essentials</em>, at a glance.</h2>
          <div className="sc-qf">
            {quickFacts.map(([k, v]) => (
              <div className="sc-qfrow" key={k}>
                <div className="sc-qfk">{k}</div>
                <div className="sc-qfv">{v}</div>
              </div>
            ))}
          </div>
          <div className="sc-reviewed">Last reviewed: 2026-06-04</div>

          <div className="sc-stats">
            {stats.map(([n, l]) => (
              <div className="sc-stat" key={l}>
                <div className="sc-statn">{n}</div>
                <div className="sc-statl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why It Matters</div>
          <h2 className="sc-h2">Why this <em>matters</em>.</h2>
          <p className="sc-p">A vulnerability scan tells you what is broken. It does not tell you what a failure would cost, which threats would realistically pursue it, or where to spend first. A threat and risk assessment answers the three questions every authorising official and board actually asks — what are we protecting, what realistically threatens it, and where do our safeguards fall short — and puts the answer on the record.</p>
          <p className="sc-sub">Without a defensible TRA, you risk:</p>
          <ul className="sc-risks">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who It&rsquo;s For</div>
          <h2 className="sc-h2">Built for these <em>organisations</em>.</h2>
          <div className="sc-fit">
            {fit.map(([h, p], i) => (
              <div className="sc-fitcard" key={h}>
                <span className="sc-fitn">{String(i + 1).padStart(2, "0")}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">What&rsquo;s Covered</div>
          <h2 className="sc-h2">Scope of the <em>assessment</em>.</h2>
          <div className="sc-grid">
            {scope.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A clear, <em>repeatable</em> methodology.</h2>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-note">Engagements typically run three to eight weeks depending on the system boundary, data sensitivity, and the depth of threat context required. We confirm scope and timeline before any billing begins.</p>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Aligned to what your <em>reviewers</em> use.</h2>
              <p className="sc-p" style={{ marginBottom: 18 }}>Your reviewers, auditors, and authorising officials work to a defined methodology. We do too — Canadian-first, and mapped to the international standards your assessment will be measured against.</p>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Evidence that <em>holds up</em>.</h2>
              <ul className="sc-list">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Engagement &amp; Scope</div>
          <h2 className="sc-h2">What shapes your <em>engagement</em>.</h2>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4>
                <p>{p}</p>
                <div className="sc-tdur">{d}</div>
              </div>
            ))}
          </div>
          <div className="sc-tiernote">Fixed-scope quote before you commit — no scope creep, no open-ended invoices.</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why SynapseCyber</div>
          <h2 className="sc-h2">Why teams choose <em>SynapseCyber</em>.</h2>
          <div className="sc-why">
            {why.map(([h, p], i) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-whyic">{whyIcons[i]}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Questions</div>
          <h2 className="sc-h2">Questions, <em>answered</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <div className="sc-fa">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Scope your threat &amp; risk assessment</h3>
            <p>Book a 30-minute scoping call. We confirm the system boundary, methodology fit, and a fixed-scope quote within one working day — no open-ended billing.</p>
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
.sc-sub{font-weight:600;font-size:15.5px;color:var(--ink);margin-top:28px;margin-bottom:2px}
.sc-note{font-size:14.5px;color:var(--ink3);line-height:1.6;max-width:760px;margin-top:26px;padding-left:16px;border-left:2px solid var(--line2)}
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
.sc-lead{font-size:18px;line-height:1.62;color:var(--ink2);max-width:62ch;margin-bottom:26px}
.sc-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:28px}
.sc-trust span{font-size:13px;color:var(--ink2);display:inline-flex;gap:7px;align-items:center}
.sc-trust span::before{content:"✓";color:var(--acc);font-weight:800}
.sc-cta-row{display:flex;gap:12px;flex-wrap:wrap}
.sc-bigicon{width:96px;height:96px;border-radius:22px;background:var(--accs);color:var(--acc);display:grid;place-items:center;box-shadow:0 18px 38px -14px rgba(37,99,235,.4)}
.sc-bigicon svg{width:46px;height:46px}
@media(max-width:860px){.sc-hgrid{grid-template-columns:1fr}.sc-bigicon{width:64px;height:64px}.sc-bigicon svg{width:32px;height:32px}}
.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}
.sc-card{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;display:flex;gap:14px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-card:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tick{flex:none;width:26px;height:26px;border-radius:7px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-top:2px}
.sc-tick svg{width:14px;height:14px}
.sc-card h4{font-weight:600;font-size:15px;margin-bottom:4px}
.sc-card p{font-size:13.5px;color:var(--ink3);line-height:1.55}
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
.sc-list{list-style:none;display:grid;gap:13px;max-width:820px;margin-top:6px}
.sc-list li{position:relative;padding-left:32px;font-size:15.5px;color:var(--ink2);line-height:1.55}
.sc-list li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:var(--accs);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-qf{margin-top:32px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--srf)}
.sc-qfrow{display:grid;grid-template-columns:240px 1fr;border-top:1px solid var(--line)}
.sc-qfrow:first-child{border-top:none}
.sc-qfk{padding:16px 22px;font-family:var(--mono);font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--acc);background:var(--bg2);display:flex;align-items:center;border-right:1px solid var(--line)}
.sc-qfv{padding:16px 22px;font-size:14.5px;color:var(--ink2);line-height:1.55}
@media(max-width:680px){.sc-qfrow{grid-template-columns:1fr}.sc-qfk{border-right:none;padding-bottom:5px}.sc-qfv{padding-top:5px}}
.sc-reviewed{font-family:var(--mono);font-size:11.5px;color:var(--ink3);margin-top:14px}
.sc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:34px}
.sc-stat{background:var(--srf);padding:28px 22px;text-align:center}
.sc-statn{font-family:var(--disp);font-weight:500;font-size:clamp(28px,4vw,40px);color:var(--acc);letter-spacing:-.02em;line-height:1}
.sc-statl{font-size:13px;color:var(--ink3);margin-top:9px;line-height:1.4}
@media(max-width:680px){.sc-stats{grid-template-columns:repeat(2,1fr)}}
.sc-fit{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
@media(max-width:900px){.sc-fit{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.sc-fit{grid-template-columns:1fr}}
.sc-fitcard{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-fitcard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-fitn{font-family:var(--mono);font-size:12px;color:var(--acc);background:var(--accs);width:30px;height:30px;border-radius:8px;display:grid;place-items:center;margin-bottom:14px}
.sc-fitcard h4{font-weight:600;font-size:15.5px;margin-bottom:6px;line-height:1.3}
.sc-fitcard p{font-size:13.5px;color:var(--ink3);line-height:1.55}
.sc-risks{list-style:none;display:grid;gap:12px;max-width:820px;margin-top:14px}
.sc-risks li{position:relative;padding-left:32px;font-size:15px;color:var(--ink2);line-height:1.55}
.sc-risks li::before{content:"";position:absolute;left:0;top:2px;width:20px;height:20px;border-radius:6px;background:#FEE2E2;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'/%3E%3Cline x1='6' y1='6' x2='18' y2='18'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
@media(max-width:760px){.sc-tiers{grid-template-columns:1fr}}
.sc-tier{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:10px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-tier:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tier h4{font-family:var(--disp);font-weight:500;font-size:18px;letter-spacing:-.01em}
.sc-tier p{font-size:14px;color:var(--ink3);line-height:1.55;flex:1}
.sc-tdur{font-family:var(--mono);font-size:12.5px;color:var(--acc);border-top:1px dashed var(--line2);padding-top:12px}
.sc-tiernote{margin-top:20px;font-size:14.5px;color:var(--ink2);display:inline-flex;gap:8px;align-items:center}
.sc-tiernote::before{content:"✓";color:var(--acc);font-weight:800}
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
@media(max-width:900px){.sc-why{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.sc-why{grid-template-columns:1fr}}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-whyic{width:34px;height:34px;border-radius:9px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:14px}
.sc-whyic svg{width:18px;height:18px}
.sc-whycard h4{font-weight:600;font-size:15px;margin-bottom:6px}
.sc-whycard p{font-size:13.5px;color:var(--ink3);line-height:1.55}
.sc-faq{margin-top:32px;max-width:880px}
.sc-faq details{border:1px solid var(--line);border-radius:12px;background:var(--srf);margin-bottom:12px;overflow:hidden;transition:border-color .2s}
.sc-faq details[open]{border-color:var(--line2)}
.sc-faq summary{list-style:none;cursor:pointer;padding:18px 22px;font-weight:600;font-size:15px;color:var(--ink);display:flex;justify-content:space-between;align-items:center;gap:16px}
.sc-faq summary::-webkit-details-marker{display:none}
.sc-faq summary::after{content:"+";font-family:var(--mono);font-size:20px;line-height:1;color:var(--acc);flex:none}
.sc-faq details[open] summary::after{content:"–"}
.sc-faq summary:hover{color:var(--acc)}
.sc-faq .sc-fa{padding:0 22px 20px;font-size:14.5px;color:var(--ink2);line-height:1.65;max-width:74ch}
.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:560px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}
@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
