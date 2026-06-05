import React from "react";

const quickFacts = [
  ["Engagement model", "Emergency response, an SLA-backed IR retainer, or readiness work and tabletop exercises"],
  ["Incident types", "Ransomware & extortion · business email compromise · data exfiltration · web, app & cloud compromise · insider misuse"],
  ["Methodology", "NIST SP 800-61r3 incident lifecycle, mapped to NIST CSF 2.0 and MITRE ATT&CK"],
  ["Lifecycle covered", "Triage · containment · eradication · recovery · root cause · lessons learned"],
  ["Evidence", "Forensic capture and preservation to a defensible standard for insurance, regulators, and law enforcement"],
  ["Canadian obligations", "Support for PIPEDA and provincial breach-notification and OPC reporting, coordinated with your counsel"],
  ["What you receive", "Incident timeline · actions log · forensic findings · post-incident report & executive briefing · root-cause analysis · lessons-learned plan"],
];

const stats = [
  ["Rapid", "Mobilisation on active incidents"],
  ["Full lifecycle", "Triage to lessons learned"],
  ["10+ yrs", "Threat, SOC & response practice"],
  ["Retainer", "SLA-backed standby available"],
];

const fit = [
  ["Ransomware & extortion", "Encryption, data-theft extortion, and leak-site threats — containment, recovery, and the hard decisions around demands and disclosure."],
  ["Business email compromise", "Account takeover, fraudulent payment redirection, and mailbox-rule persistence across Microsoft 365 or Google Workspace."],
  ["Data theft & exfiltration", "Suspected or confirmed loss of personal, financial, or sensitive data, and the scoping needed to meet notification obligations."],
  ["Web & application compromise", "Defaced sites, web shells, injected payment skimmers, and exploited application vulnerabilities."],
  ["Cloud account compromise", "Stolen keys, exposed credentials, and unauthorised activity across AWS, Azure, or GCP."],
  ["Insider & account misuse", "Misused access, departing-employee data loss, and anomalous account behaviour."],
];

const risks = [
  "Evidence destroyed by well-meant clean-up, leaving you unable to prove what happened",
  "Reinfection because the attacker's foothold was never fully removed",
  "Breach-notification obligations missed or mishandled under PIPEDA and provincial law",
  "Cyber-insurance claims weakened by uncoordinated or undocumented response",
  "Recovery that quietly restores the compromise along with the data",
  "Ransom, disclosure, and downtime decisions made under pressure with no playbook",
];

const scope = [
  ["Rapid triage", "Fast assessment of scope, severity, the systems and data in play, and immediate containment options."],
  ["Containment & eradication", "Isolate affected systems and remove the threat actor's foothold — implants, persistence, and compromised accounts."],
  ["Forensic preservation", "Capture and protect evidence to a defensible standard for insurance, regulators, and law enforcement."],
  ["Ransomware & BEC response", "Specialist handling of extortion and email-compromise incidents, coordinated with counsel and insurer."],
  ["Recovery support", "Restore operations safely from known-good state and verify the environment is clean before you trust it again."],
  ["Retainer & tabletops", "A contracted SLA and quarterly exercises to build readiness before the next incident."],
];

const steps = [
  ["Engage & triage", "Rapid mobilisation. We establish scope, severity, and the systems and data in play, and agree an immediate containment plan with you."],
  ["Contain", "Stop the spread and cut off the attacker's access, isolating affected systems without destroying the evidence we will need."],
  ["Eradicate & preserve", "Remove the threat actor's foothold — implants, persistence, compromised accounts — while capturing forensic evidence to a defensible standard."],
  ["Recover", "Restore operations safely from known-good state, validate that the environment is clean, and watch for any sign the threat returns."],
  ["Root cause", "Establish how the incident happened, what it touched, and what enabled it — the questions your board, insurer, and regulator will ask."],
  ["Lessons learned", "Deliver the post-incident report and a concrete plan to close the gaps and prevent recurrence, optionally backed by a retainer."],
];

const frameworks = ["NIST SP 800-61r3", "NIST CSF 2.0", "SANS PICERL", "MITRE ATT&CK", "ISO/IEC 27035"];

const deliverables = [
  "Incident timeline and impact assessment",
  "Log of containment and eradication actions taken",
  "Forensic findings and preserved evidence",
  "Post-incident report and executive briefing",
  "Root-cause analysis",
  "Lessons-learned plan and optional retainer",
];

const tiers = [
  ["Emergency response", "An incident is active now. Rapid scoping and mobilisation; we work it through containment, recovery, and a post-incident report.", "Active incident"],
  ["Incident response retainer", "Pre-arranged standby — a contracted response time, an agreed rate, and a named lead who already knows your environment.", "Pre-arranged · SLA"],
  ["Readiness & tabletops", "IR-plan (CIRP) development, playbooks, and facilitated tabletop exercises so your team has practised before the real thing.", "Preventive"],
];

const why = [
  ["Senior-led from the first call", "You get an experienced practitioner running the incident — not a queue, a ticket number, and a junior reading a script."],
  ["Evidence preserved, options protected", "We contain and investigate without destroying the forensic record you will need for insurance, regulators, or court."],
  ["Built around Canadian obligations", "Response coordinated with PIPEDA and provincial breach-notification duties, and CCCS reporting, from the first hour."],
  ["Calm, plain-English command", "Clear direction for your technical team and clear updates for your executives while the pressure is on."],
  ["Readiness, not just reaction", "Retainers, IR plans, and tabletop exercises — informed by public-sector cyber-incident-response-plan work — so you are rehearsed in advance."],
  ["Coordinated, not siloed", "We work alongside your legal counsel, insurer, and IT and vendor teams rather than around them."],
];

const faqs = [
  ["We think we're under attack right now — what do we do first?", "Isolate what you can without destroying it: disconnect affected systems from the network rather than powering them off, which can wipe volatile evidence. Stop deleting or \"cleaning\" anything, get the right people on a call, and engage us to scope and mobilise. Preserving evidence early keeps your options open for investigation, insurance, and disclosure."],
  ["How fast can you engage?", "For an active incident we scope and mobilise rapidly. Retainer clients get a contracted response time and a named lead who has already reviewed their environment — the fastest possible start, because there is no procurement or onboarding delay at the worst moment."],
  ["Do you handle ransomware and extortion?", "Yes. We work ransomware and extortion incidents end to end — containment, scope and impact assessment, evidence preservation, and recovery — including the difficult decisions around demands and disclosure, coordinated with your legal counsel and insurer."],
  ["Will you preserve evidence for legal, insurance, or law-enforcement use?", "Yes. We capture and protect forensic evidence to a defensible standard so it holds up for insurance claims, regulatory reporting, and, if it comes to it, law enforcement or litigation."],
  ["What about breach-notification obligations?", "We help you assess whether an incident triggers reporting under PIPEDA — where there is a real risk of significant harm — or applicable provincial law, and support the OPC and individual-notification steps. We work alongside your privacy counsel rather than replacing them."],
  ["What is an IR retainer, and is it worth it?", "A retainer is pre-arranged standby: an agreed rate, a contracted response time, and a lead who has already reviewed your environment. It removes the procurement and onboarding delay at the worst possible moment, and unused time is typically applied to readiness work like tabletops and plan development."],
  ["Can you help us prepare before an incident?", "Yes. We develop incident-response plans (CIRPs) and playbooks and run facilitated tabletop exercises, so the first time your team runs the process is not during a real breach."],
];

const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.4" /><path d="M5 20c0-3.3 3.1-5.6 7-5.6s7 2.3 7 5.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-4 4z" /><path d="M8 9h8M8 12h5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9.5 4h5v3h-5z" /><path d="m9.5 13 1.8 1.8 3.4-3.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4" /><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="12" r="2.4" /><path d="M6 8.4v7.2M8.3 6.8 15.7 11M8.3 17.2 15.7 13" /></svg>,
];

export default function IncidentResponse() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Incident Response</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Incident Response</div>
              <h1 className="sc-h1">Incident <em>Response</em></h1>
              <p className="sc-lead">When something is actively wrong — ransomware, business email compromise, suspected data theft — rapid engagement to contain it, understand it, and get you operating again, with the evidence preserved and your reporting obligations handled.</p>
              <div className="sc-trust"><span>Rapid engagement</span><span>Forensic preservation</span><span>NIST SP 800-61r3 lifecycle</span><span>PIPEDA breach support</span><span>Retainer &amp; tabletops</span><span>Canadian senior-led</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L4 15 L11 15 L9 21 L20 10 L13 10 L15 3 Z" fill="currentColor" fillOpacity="0.2" /></svg>
            </div>
          </div>
        </div>
      </header>

      <div className="sc-urgent">
        <div className="sc-wrap sc-urgentinner">
          <span className="sc-udot" aria-hidden="true"></span>
          <p><strong>Active incident right now?</strong> Don&rsquo;t power off or wipe affected systems and don&rsquo;t delete anything — disconnect them from the network to limit the spread while preserving evidence, then reach out.</p>
          <a href="/#quote" className="sc-btn pri sc-ubtn">Get help now <span>&rarr;</span></a>
        </div>
      </div>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">In an active incident, hours matter. We engage rapidly to triage, contain, and eradicate the threat while preserving forensic evidence, then drive recovery and a clear understanding of what happened and how to stop it recurring. We work the full incident lifecycle for ransomware, business email compromise, suspected data exfiltration, and web compromise.</p>
          <p className="sc-p">Our process aligns to NIST SP 800-61r3 and the NIST Cybersecurity Framework 2.0, with response coordinated around your Canadian breach-notification obligations from the outset. Beyond live response, retainer arrangements with a contracted SLA and quarterly tabletop exercises keep your team ready before the next incident, not just after one.</p>
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
          <p className="sc-p">In an active incident, the first hours decide how bad it gets. Acting without a plan — wiping systems, paying too fast, talking to the wrong people — usually destroys the evidence and options you will need later. A structured response contains the damage, preserves what regulators and insurers will ask for, and gets you back to operating on solid ground.</p>
          <p className="sc-sub">Without a structured response, you risk:</p>
          <ul className="sc-risks">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">What We Respond To</div>
          <h2 className="sc-h2">Incidents we <em>handle</em>.</h2>
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
          <h2 className="sc-h2">Scope of the <em>engagement</em>.</h2>
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
          <h2 className="sc-h2">The incident <em>lifecycle</em>.</h2>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-note">Live incidents are scoped and worked at pace; retainer clients get a contracted response time and a lead who already knows their environment. We confirm rate and approach up front, even under time pressure.</p>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Aligned to recognised <em>standards</em>.</h2>
              <p className="sc-p" style={{ marginBottom: 18 }}>We follow the incident lifecycle your insurers, auditors, and regulators recognise — so the way we work, and the evidence we produce, holds up after the incident is over.</p>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Evidence and a path <em>forward</em>.</h2>
              <ul className="sc-list">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">How You Engage Us</div>
          <h2 className="sc-h2">Three ways to <em>work with us</em>.</h2>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4>
                <p>{p}</p>
                <div className="sc-tdur">{d}</div>
              </div>
            ))}
          </div>
          <div className="sc-tiernote">A retainer turns the worst day into a phone call to someone who already knows your environment.</div>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Why SynapseCyber</div>
          <h2 className="sc-h2">Why teams call <em>SynapseCyber</em>.</h2>
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
            <h3>Facing an active incident?</h3>
            <p>Reach out to scope rapid engagement, or set up a retainer with a contracted SLA and quarterly tabletops before the next one.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a></div>
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
.sc-sub{font-weight:600;font-size:15.5px;color:var(--ink);margin-top:28px;margin-bottom:2px}
.sc-note{font-size:14.5px;color:var(--ink3);line-height:1.6;max-width:760px;margin-top:26px;padding-left:16px;border-left:2px solid var(--line2)}
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
.sc-lead{font-size:18px;line-height:1.62;color:var(--ink2);max-width:62ch;margin-bottom:26px}
.sc-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:28px}
.sc-trust span{font-size:13px;color:var(--ink2);display:inline-flex;gap:7px;align-items:center}
.sc-trust span::before{content:"✓";color:var(--acc);font-weight:800}
.sc-cta-row{display:flex;gap:12px;flex-wrap:wrap}
.sc-bigicon{width:96px;height:96px;border-radius:22px;background:var(--accs);color:var(--acc);display:grid;place-items:center;box-shadow:0 18px 38px -14px rgba(37,99,235,.4)}
.sc-bigicon svg{width:46px;height:46px}
@media(max-width:860px){.sc-hgrid{grid-template-columns:1fr}.sc-bigicon{width:64px;height:64px}.sc-bigicon svg{width:32px;height:32px}}
.sc-urgent{background:#FEF2F2;border-top:1px solid #FECACA;border-bottom:1px solid #FECACA}
.sc-urgentinner{display:flex;align-items:center;gap:18px;padding-top:15px;padding-bottom:15px;flex-wrap:wrap}
.sc-udot{width:11px;height:11px;border-radius:50%;background:#DC2626;flex:none;box-shadow:0 0 0 0 rgba(220,38,38,.5);animation:scpulse 2.2s infinite}
@keyframes scpulse{0%{box-shadow:0 0 0 0 rgba(220,38,38,.45)}70%{box-shadow:0 0 0 10px rgba(220,38,38,0)}100%{box-shadow:0 0 0 0 rgba(220,38,38,0)}}
.sc-urgent p{font-size:14px;color:#7F1D1D;line-height:1.5;flex:1;min-width:250px}
.sc-urgent p strong{color:#991B1B}
.sc-ubtn{background:#DC2626!important;flex:none}.sc-ubtn:hover{background:#991B1B!important;box-shadow:0 10px 22px rgba(220,38,38,.28)!important}
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
.sc-statn{font-family:var(--disp);font-weight:500;font-size:clamp(22px,3.2vw,34px);color:var(--acc);letter-spacing:-.02em;line-height:1.05}
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
.sc-tiernote{margin-top:20px;font-size:14.5px;color:var(--ink2);display:inline-flex;gap:8px;align-items:center;max-width:760px}
.sc-tiernote::before{content:"✓";color:var(--acc);font-weight:800;flex:none}
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
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important;animation:none!important}}
`;
