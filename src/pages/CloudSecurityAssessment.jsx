import React from "react";

const quickFacts = [
  ["Methodology", "CIS Benchmarks + provider security baselines (AWS, Azure, GCP), mapped to CSA CCM and NIST SP 800-53"],
  ["How it differs from a pentest", "A pentest probes specific systems for exploitable weaknesses. A posture assessment measures your whole configuration against a known-good baseline and finds the misconfigurations that cause most cloud incidents."],
  ["Coverage", "AWS, Azure, and GCP — single provider or multi-cloud, consolidated into one view"],
  ["Reviewed", "Configuration · identity & access · infrastructure-as-code · public exposure · logging & monitoring"],
  ["Access model", "Read-only audit roles, time-boxed. No agents installed, no production changes."],
  ["Typical duration", "1–3 weeks, depending on the number of accounts and providers in scope"],
  ["What you receive", "Benchmark-organised posture report · identity & IaC findings · exposure summary · prioritised remediation"],
];

const stats = [
  ["3", "Major clouds covered: AWS, Azure, GCP"],
  ["10+ yrs", "AppSec, DevSecOps & cloud practice"],
  ["5", "Review domains per environment"],
  ["Read-only", "Access model — no agents required"],
];

const fit = [
  ["Cloud-native & SaaS teams", "Organisations running production workloads on AWS, Azure, or GCP that have outgrown ad-hoc, console-by-console security."],
  ["Teams scaling fast", "Engineering orgs where accounts, services, and identities have multiplied faster than governance has kept up."],
  ["Multi-cloud environments", "Teams spanning two or three providers that need one consistent posture view instead of three separate ones."],
  ["Pre-audit & pre-funding", "Companies heading into SOC 2, ISO 27001, or a customer security review who need to know where they stand first."],
  ["Post-migration", "Teams that have just lifted-and-shifted or re-platformed and want to confirm the move did not open new exposure."],
  ["Public sector & regulated workloads", "Canadian organisations with data-residency and sovereignty requirements that need posture evidence against recognised baselines."],
];

const risks = [
  "Public storage, databases, or services exposed to the internet without anyone noticing",
  "Identities and roles carrying far more access than the job actually requires",
  "Misconfigurations shipped through infrastructure-as-code and replicated across every environment",
  "Audit-logging gaps that leave you blind during an incident and unable to investigate afterwards",
  "Drift between your documented architecture and what is actually running in each account",
  "A passed compliance audit that says nothing about the configuration risk underneath it",
];

const scope = [
  ["CIS benchmark review", "Measure your configuration against the CIS baseline for AWS, Azure, or GCP across compute, storage, networking, and managed services."],
  ["Identity & access review", "Assess roles, policies, and permissions for over-privileged, unused, and risky identities — the access paths attackers actually use."],
  ["Infrastructure-as-code scanning", "Catch misconfigurations in Terraform and CloudFormation before they reach production and replicate across environments."],
  ["Data exposure review", "Find publicly exposed storage, databases, and services, and the unprotected data behind them."],
  ["Logging & monitoring", "Verify that audit logging and detection coverage are in place so you can detect and investigate when it matters."],
  ["Multi-cloud posture", "Consolidate findings across providers into one consistent, comparable view rather than three disconnected reports."],
];

const steps = [
  ["Scope & access", "Confirm the accounts, subscriptions, and projects in scope and set up time-boxed, read-only audit access. No agents, no production changes."],
  ["Configuration assessment", "Evaluate each platform against the CIS benchmark and the provider's own security baseline, service by service."],
  ["Identity & access review", "Examine roles, policies, and permissions for over-privileged, unused, and risky identities, and the trust paths between them."],
  ["Infrastructure-as-code review", "Scan Terraform and CloudFormation for the misconfigurations that would otherwise ship to production and propagate."],
  ["Exposure & data-risk analysis", "Identify internet-facing services, public storage, and unprotected data across the environment."],
  ["Logging & monitoring review", "Confirm audit logging, retention, and detection coverage give you what you need to detect and investigate incidents."],
  ["Report & remediation support", "Deliver a benchmark-organised report with prioritised, platform-specific fixes, walk your platform team through them, and re-check."],
];

const frameworks = [
  "CIS Benchmarks",
  "CSA Cloud Controls Matrix",
  "Well-Architected (Security Pillar)",
  "NIST SP 800-53",
  "ISO/IEC 27017:2015",
  "ISO/IEC 27018:2019",
];

const deliverables = [
  "Posture report organised by CIS benchmark",
  "Identity and access risk findings",
  "Infrastructure-as-code scan results",
  "Public-exposure and data-risk summary",
  "Logging and monitoring coverage review",
  "Prioritised, platform-specific remediation",
];

const tiers = [
  ["Single cloud, single account", "One provider, one production account or subscription, a defined estate.", "≈ 1 week"],
  ["Multi-account, single cloud", "One provider with several accounts, organisations, or subscriptions.", "≈ 1–2 weeks"],
  ["Multi-cloud / enterprise", "Two or three providers, many accounts, IaC pipelines, and compliance evidence.", "≈ 2–3 weeks"],
];

const why = [
  ["Benchmark-anchored, not opinion", "Every finding maps to a CIS control or a provider baseline — defensible, repeatable, and ready to hand to an auditor."],
  ["Read-only, no production risk", "We assess through time-boxed audit roles. No agents are installed and nothing in your running environment is changed."],
  ["Identity and IaC, not just config", "We review the access paths and pipeline misconfigurations that checklists and surface scanners routinely miss."],
  ["Multi-cloud in one view", "AWS, Azure, and GCP consolidated into a single, consistent posture — not three reports you have to reconcile."],
  ["Fixes your team can action", "Prioritised, platform-specific remediation written for the engineers who own the environment, plus a walkthrough and re-check."],
  ["Canadian senior-led delivery", "Run end to end by a senior practitioner. Your data and findings stay in Canada."],
];

const faqs = [
  ["Is this a penetration test?", "No. A penetration test actively probes specific systems for exploitable weaknesses. A cloud security assessment measures your whole environment's configuration against a known-good benchmark and reviews identity, infrastructure-as-code, and exposure. The two complement each other, and many teams do both."],
  ["What access do you need?", "Read-only. We use the native audit and security-reader roles each provider offers — for example AWS SecurityAudit, Azure Security Reader, and GCP Security Reviewer — scoped and time-boxed. No agents are installed and nothing in your environment is changed."],
  ["Which clouds do you cover?", "AWS, Azure, and GCP, individually or together. Multi-cloud findings are consolidated into one consistent posture view rather than three separate reports you have to reconcile yourself."],
  ["How long does it take?", "Most assessments run one to three weeks elapsed, depending on the number of accounts and providers and the state of your infrastructure-as-code. We confirm scope and timeline before any billing begins."],
  ["Will this help with SOC 2 or ISO 27001?", "Yes. Findings are anchored to CIS Benchmarks and mapped to frameworks like the CSA Cloud Controls Matrix and NIST SP 800-53, so the output is useful evidence going into a SOC 2, ISO 27001, or customer security review."],
  ["Do you assess infrastructure-as-code?", "Yes. We scan Terraform and CloudFormation for misconfigurations before they reach production, since an error in code replicates across every environment it provisions."],
  ["What do we get at the end?", "A posture report organised by benchmark, identity and IaC findings, a public-exposure and data-risk summary, a logging and monitoring review, and a prioritised, platform-specific remediation plan — plus a walkthrough with your team and a re-check of the fixes."],
];

const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 8-4 4 4 4" /><path d="m15 8 4 4-4 4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9.5 4h5v3h-5z" /><path d="m9.5 13 1.8 1.8 3.4-3.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>,
];

export default function CloudSecurityAssessment() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Cloud Security Assessment</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Cloud Security</div>
              <h1 className="sc-h1">Cloud Security <em>Assessment</em></h1>
              <p className="sc-lead">See your true cloud posture across AWS, Azure, and GCP — measured against CIS benchmarks, with identity and infrastructure-as-code reviewed for the misconfigurations that cause most cloud incidents. Read-only, evidence-backed, and delivered as a fix list your platform team can action.</p>
              <div className="sc-trust"><span>CIS benchmark review</span><span>Identity &amp; IaC review</span><span>Multi-cloud coverage</span><span>Read-only, no agents</span><span>Prioritised remediation</span><span>Canadian senior-led</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16 C4 16 2 14 2 11.5 C2 9 4 7 6.5 7 C7 4 10 2 13 2 C16.5 2 19 4.5 19.5 7.5 C21.5 8 23 10 23 12 C23 14.5 21 16 18 16 Z" /><path d="M9 12 L11 14 L15 9" strokeWidth="2" /></svg>
            </div>
          </div>
        </div>
      </header>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">Cloud breaches are rarely exotic; they are usually a misconfigured permission, an over-exposed bucket, or an identity with more access than it needs. We assess your environment against the CIS benchmark for each platform, review identity and access, and scan your infrastructure-as-code so issues are caught before they reach production.</p>
          <p className="sc-p">You get a posture report organised by benchmark, a clear view of identity and exposure risk, and prioritised remediation your platform team can action — anchored to controls an auditor will recognise, with no agents and no changes to your running environment.</p>
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
          <p className="sc-p">Most cloud incidents are not sophisticated attacks — they are a public bucket, an over-permissioned role, or a security group left open. These rarely surface in a point-in-time penetration test, and they accumulate silently as your environment grows. A posture assessment finds them against a known-good baseline before an attacker, or an auditor, does.</p>
          <p className="sc-sub">Without a current cloud posture assessment, you risk:</p>
          <ul className="sc-risks">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Who It&rsquo;s For</div>
          <h2 className="sc-h2">Built for these <em>teams</em>.</h2>
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
          <h2 className="sc-h2">Posture you can <em>act on</em>.</h2>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
          <p className="sc-note">Assessments typically run one to three weeks depending on the number of accounts and providers and the maturity of your infrastructure-as-code. We confirm scope and timeline before any billing begins.</p>
        </div>
      </section>

      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Measured against <em>benchmarks</em>.</h2>
              <p className="sc-p" style={{ marginBottom: 18 }}>Findings are anchored to the benchmarks your auditors and cloud providers already recognise — so the output drops straight into a SOC 2, ISO 27001, or customer security review.</p>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">A prioritised <em>fix list</em>.</h2>
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
            <h3>Scope your cloud security assessment</h3>
            <p>Book a 30-minute scoping call. We confirm the cloud accounts in scope, the read-only access approach, and a fixed-scope quote within one working day.</p>
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
.sc-statn{font-family:var(--disp);font-weight:500;font-size:clamp(24px,3.4vw,38px);color:var(--acc);letter-spacing:-.02em;line-height:1}
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
