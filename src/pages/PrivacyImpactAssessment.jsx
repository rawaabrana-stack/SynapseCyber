import React from "react";

/* ── Content ──────────────────────────────────────────────── */

const fit = [
  ["New or changing systems", "You're building, procuring, or redesigning a system, application, or service that collects or uses personal information."],
  ["Québec Law 25 in scope", "You handle the personal data of people in Québec and need a documented assessment on file before the project proceeds."],
  ["Cross-border data transfers", "Personal data leaves the province or Canada, and the transfer needs to be assessed and defensibly documented."],
  ["Public bodies & regulated sectors", "You're a public body, Crown corporation, or health-sector organisation subject to FOIPOP / FOIPP or sector-specific privacy rules."],
];

const stats = [
  ["PIPEDA + Law 25", "Statutory baseline"],
  ["GDPR-aligned", "Where it applies"],
  ["3–6 weeks", "Typical engagement"],
  ["Regulator-ready", "Reporting standard"],
];

const facts = [
  ["Methodology", "Lifecycle data-flow mapping, tested against PIPEDA, Law 25, applicable provincial law, and the GDPR."],
  ["PIA vs TRA", "A PIA assesses privacy risk to individuals; a Threat & Risk Assessment assesses security risk to systems. They're complementary, not interchangeable."],
  ["Typical duration", "3–6 weeks, depending on system complexity, data volume, and the number of flows in scope."],
  ["Includes", "Data discovery, data-flow mapping, lawful-basis review, gap analysis, a privacy risk register, and a regulator-ready report."],
  ["When required", "New or overhauled systems handling personal data, high-risk processing, and transfers outside Québec under Law 25."],
  ["Output", "A commissioner-ready PIA report, data-flow diagrams, a personal-information inventory, and a prioritised risk register."],
];
const lastReviewed = "June 2026";

const gives = [
  "A clear, documented picture of every personal-data flow in scope",
  "An assessment of your lawful basis, consent model, and stated purposes",
  "Privacy risks rated by likelihood and impact to individuals",
  "Prioritised, practical mitigations mapped to each risk",
  "Cross-border transfer and processor due-diligence on the record",
  "A report written to the standard a privacy commissioner expects",
];

const risks = [
  "Processing personal data with no documented lawful basis",
  "A Law 25 obligation missed because no assessment was on file",
  "Cross-border transfers running without a safeguards review",
  "Consent models that don't meet the meaningful-consent standard",
  "Privacy risks surfacing only after a complaint or a breach",
  "No defensible record to produce if a regulator asks",
];

const triggers = [
  ["System or product change", "You're acquiring, developing, or overhauling an information system or electronic service that involves personal information — a documented trigger under Québec's Law 25."],
  ["High-risk processing", "The initiative involves sensitive data, large-scale processing, profiling, monitoring, or a new use of data individuals wouldn't expect."],
  ["Cross-border transfer", "Personal information will be communicated outside Québec, or out of Canada, requiring an assessment of the receiving jurisdiction and its safeguards."],
  ["New collection or sharing", "You're introducing a new data-sharing arrangement, processor, or collection point not covered by an existing assessment."],
];

const scope = [
  ["Personal information inventory", "Catalogue what personal data you collect, why, and under what authority."],
  ["Data-flow mapping", "Trace data across systems, processors, and borders, end to end."],
  ["Lawful basis & consent", "Review the basis for processing and the adequacy of your consent model."],
  ["Cross-border transfer review", "Assess where data leaves the jurisdiction and the safeguards around it."],
  ["Third-party & processor risk", "Evaluate vendors and sub-processors handling personal data for you."],
  ["Retention & disposal", "Check retention windows and confirm defensible destruction practices."],
];

const steps = [
  ["Scoping & data discovery", "Define the initiative, its objectives, and the personal information involved. Agree the boundaries, stakeholders, and the obligations that apply to you."],
  ["Personal information inventory", "Catalogue every category of personal data collected — its source, sensitivity, purpose, and the legal authority you rely on to hold it."],
  ["Data-flow mapping", "Trace each flow end to end, across people, systems, processors, and borders, and document where data is stored, accessed, and disclosed."],
  ["Lawful basis, consent & purpose", "Assess the basis for each activity, whether consent is meaningful and properly obtained, and whether stated purposes match how data is actually used."],
  ["Compliance gap analysis", "Test every flow against PIPEDA, Québec's Law 25, applicable provincial law (FOIPOP / FOIPP), and the GDPR where relevant. Identify each gap precisely."],
  ["Privacy risk rating", "Rate each risk by likelihood and by its impact on individuals, so mitigation effort lands where it actually matters."],
  ["Mitigation & recommendations", "Provide specific, prioritised, practical mitigations for every risk — technical, contractual, and procedural — each with a clear owner."],
  ["Reporting & sign-off", "Deliver a commissioner-ready report with diagrams, inventory, and risk register, plus a walkthrough to support your internal sign-off."],
];

const tiers = [
  ["Single system", "One application or service, a contained set of data flows, a single jurisdiction. The focused engagement.", "≈ 2–3 weeks"],
  ["Multi-system / programme", "Several systems or a programme of work, multiple data types and processors, more flows to map and test.", "≈ 3–5 weeks"],
  ["Enterprise / cross-border", "A complex environment, sensitive data at scale, transfers across borders, and commissioner-facing evidence.", "≈ 5–8 weeks"],
];

const frameworks = ["PIPEDA", "Quebec Law 25", "FOIPOP / FOIPP", "GDPR", "OPC Guidance"];

const deliverables = [
  "PIA report formatted to commissioner expectations",
  "End-to-end data-flow diagrams",
  "Personal information inventory",
  "Lawful-basis, consent, and purpose assessment",
  "Privacy risk register with likelihood and impact ratings",
  "Cross-border transfer and processor due-diligence review",
  "Prioritised mitigation plan with clear owners",
];

const includes = [
  ["Scoping call", "A 30-minute call to confirm the obligations that apply, the data in scope, and the engagement boundaries."],
  ["PIA report", "A full Privacy Impact Assessment report, formatted to the standard a privacy commissioner expects to see."],
  ["Data-flow diagrams", "Clear, end-to-end diagrams of how personal information moves through people, systems, and third parties."],
  ["Personal information inventory", "A catalogue of the personal data in scope — categories, sources, purposes, sensitivity, and authority."],
  ["Privacy risk register", "Every risk rated by likelihood and impact to individuals, with prioritised, actionable mitigations."],
  ["Walkthrough & sign-off support", "A working session to walk through the findings and support your internal review and sign-off."],
];

const sectors = ["Public sector & government", "Healthcare & life sciences", "Financial services & fintech", "Crown corporations", "Education & research", "Technology & SaaS"];

const why = [
  ["Canadian jurisdiction expertise", "Built around the laws that actually apply to you — PIPEDA, Québec's Law 25, and provincial access-and-privacy regimes — not a generic template."],
  ["Senior-led delivery", "The assessment is run by a senior practitioner, end to end. You're not handing sensitive data to a junior with a checklist."],
  ["Regulator-ready output", "Reports are written to the standard a commissioner expects, so the work stands up if you're ever asked to produce it."],
  ["Privacy and security together", "Privacy risk and technical security risk assessed in step, so gaps don't fall between a PIA and a TRA."],
  ["Plain-English findings", "Risk ratings and recommendations your board can read and your teams can act on — no jargon padding."],
  ["Fixed scope, no surprises", "A clear scope and a fixed quote agreed before the work starts. No scope-creep, no surprise invoices."],
];

const faqs = [
  ["What's the difference between a PIA and a DPIA?", "They're the same idea under different regimes. \u201CPIA\u201D (Privacy Impact Assessment) is the term used in Canada under PIPEDA, Law 25, and provincial law; \u201CDPIA\u201D (Data Protection Impact Assessment) is the term the GDPR uses. We deliver a single assessment that satisfies whichever regime applies to you."],
  ["When is a PIA legally required in Canada?", "It depends on the law that applies. Under Québec's Law 25, an assessment is expected when you acquire, develop, or overhaul an information system involving personal information, and before communicating personal information outside Québec. Federal public-sector institutions carry PIA obligations under Treasury Board policy. Even where it isn't strictly mandatory, a PIA is the accountability record PIPEDA expects you to be able to produce."],
  ["How long does a PIA take?", "A focused assessment of a single system typically runs 2–3 weeks; a multi-system programme, or a cross-border initiative involving sensitive data, runs longer. We confirm a timeline at the scoping stage and commit to it."],
  ["Do we need a PIA for Law 25 specifically?", "If you handle the personal information of people in Québec and you're standing up or changing a system that uses it — or sending that data outside Québec — then yes, Law 25 expects a documented assessment. We scope the work to Law 25's requirements and align it to PIPEDA and the GDPR in the same pass."],
  ["What about the GDPR?", "If you process the personal data of people in the EU or UK, the GDPR's DPIA requirements may apply. We align the assessment to the GDPR where you handle data subject to it, so you don't need to run a separate exercise."],
  ["What do we actually receive at the end?", "A commissioner-ready PIA report, end-to-end data-flow diagrams, a personal-information inventory, a prioritised privacy risk register, and a walkthrough to support your internal sign-off."],
];

const related = [
  ["Threat & Risk Assessment", "RCMP-harmonised TRA for the security-risk side of the same system."],
  ["Security Gap Assessment", "Measure your current controls against the standard you're targeting."],
  ["Data-Protection Advisory", "Ongoing privacy guidance and DPO-style support between projects."],
];

/* ── Icons for the \u201Cwhy work with us\u201D cards ──────────────── */
const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 20a6 6 0 0 0-12 0"/><circle cx="9" cy="8" r="3.4"/><polyline points="16 12 18 14 22 10"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6 20 12c0 4-3 7-8 9-5-2-8-5-8-9L4 6Z"/><polyline points="9 12 11 14 15 10"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-4 4v-4H4Z"/><line x1="8" y1="10.5" x2="16" y2="10.5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v5l9 9 5-5-9-9H3Z"/><circle cx="7.5" cy="11" r="1.3" fill="currentColor" stroke="none"/></svg>,
];

const Plus = () => (
  <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

/* ── Page ─────────────────────────────────────────────────── */

export default function PrivacyImpactAssessment() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      {/* HERO */}
      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>Privacy Impact Assessment</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">Privacy &amp; Compliance</div>
              <h1 className="sc-h1">Privacy Impact <em>Assessment</em></h1>
              <p className="sc-lead">Map personal information through its full lifecycle and test every step against the obligations that apply to you — PIPEDA, Quebec&rsquo;s Law 25, and provincial privacy law, with GDPR alignment where it&rsquo;s needed.</p>
              <div className="sc-trust"><span>PIPEDA &amp; Law 25 aligned</span><span>Full data-flow mapping</span><span>Regulator-ready reporting</span><span>Canadian senior-led delivery</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L20 6 L20 12 C20 16 17 19 12 21 C7 19 4 16 4 12 L4 6 Z"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="12" r="0.5" fill="currentColor"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="sc-strip">
        <div className="sc-wrap">
          <span>Same-business-day scoping response</span>
          <span>Fixed-scope quote, no surprise invoices</span>
          <span>Senior practitioner end to end</span>
          <span>Data kept in Canadian jurisdiction</span>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Who This Is For</div>
          <h2 className="sc-h2">This engagement is a <em>fit</em> if&hellip;</h2>
          <div className="sc-fit">
            {fit.map(([h, p], i) => (
              <div className="sc-fitcard" key={h}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">A Privacy Impact Assessment (PIA) documents what personal information you collect, why, where it flows, and who can access it — then tests each step against your legal obligations. We work to PIPEDA and Quebec&rsquo;s Law 25, and align to the GDPR where you handle data subject to it.</p>
          <p className="sc-p">With federal reform stalled — Bill C-27 and its CPPA and AIDA died in January 2025 — Law 25 and the GDPR now set the practical baseline. You receive a clear data-flow picture, a privacy risk register, and recommendations documented to the standard a commissioner expects.</p>
          <p className="sc-p" style={{ marginTop: 22, fontWeight: 600, color: "var(--ink)" }}>By the end of the engagement you have:</p>
          <ul className="sc-list">{gives.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
      </section>

      {/* QUICK FACTS + STATS */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Quick Facts</div>
          <h2 className="sc-h2">Privacy Impact Assessment, <em>at a glance</em>.</h2>
          <div className="sc-stats">
            {stats.map(([v, l]) => (
              <div className="sc-stat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>
            ))}
          </div>
          <div className="sc-factsbox">
            <div className="sc-factshd">
              <strong>Engagement summary</strong>
              <span className="rev">Last reviewed: {lastReviewed}</span>
            </div>
            <dl>
              {facts.map(([dt, dd]) => (
                <div className="sc-factrow" key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why It Matters</div>
          <h2 className="sc-h2">Accountability you can <em>put on the record</em>.</h2>
          <p className="sc-p">A PIA is how you demonstrate accountability — the principle at the heart of PIPEDA and of Quebec&rsquo;s Law 25. It turns &ldquo;we think we&rsquo;re handling personal data properly&rdquo; into a documented, defensible record: what you hold, why, where it flows, and what you&rsquo;ve done about the risks.</p>
          <p className="sc-p">Done before a system goes live, it catches problems while they&rsquo;re still cheap to fix. Done after a complaint or a breach, it&rsquo;s the evidence you wish you already had.</p>
          <p className="sc-p" style={{ marginTop: 22, fontWeight: 600, color: "var(--ink)" }}>Without a proper PIA, organisations risk:</p>
          <ul className="sc-list warn">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      {/* WHEN REQUIRED */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">When It&rsquo;s Needed</div>
          <h2 className="sc-h2">When is a PIA <em>required?</em></h2>
          <p className="sc-p">A PIA isn&rsquo;t needed for every activity, but several situations make one expected — and under Law 25, required. If any of these apply, an assessment should be on the record before you proceed.</p>
          <div className="sc-grid">
            {triggers.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">What&rsquo;s Covered</div>
          <h2 className="sc-h2">Scope of the <em>assessment</em>.</h2>
          <div className="sc-grid">
            {scope.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="sc-sec">
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
        </div>
      </section>

      {/* SCOPE / QUOTE TIERS */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Engagement Scope</div>
          <h2 className="sc-h2">What shapes the <em>quote</em>.</h2>
          <p className="sc-p">Every engagement is scoped and priced before it starts. What moves the number is the size and complexity of what&rsquo;s being assessed — not hourly surprises.</p>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4><p>{p}</p><div className="dur">{d}</div>
              </div>
            ))}
          </div>
          <div className="sc-quote-note">A fixed-scope quote within one working day. We commit to a number before you commit to us.</div>
        </div>
      </section>

      {/* STANDARDS + WHAT YOU RECEIVE */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Built to <em>current</em> privacy law.</h2>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">Defensible on the <em>record</em>.</h2>
              <ul className="sc-list">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVERY ENGAGEMENT INCLUDES */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">In Every Engagement</div>
          <h2 className="sc-h2">What&rsquo;s <em>always</em> included.</h2>
          <div className="sc-grid">
            {includes.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Sectors We Serve</div>
          <h2 className="sc-h2">Where the obligations <em>bite hardest</em>.</h2>
          <p className="sc-p">We deliver privacy assessments across the sectors where the rules are strictest and the data is most sensitive.</p>
          <div className="sc-chips">{sectors.map((s) => <span className="sc-chip" key={s}>{s}</span>)}</div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why Work With Us</div>
          <h2 className="sc-h2">Grounded reasons clients <em>choose us</em>.</h2>
          <div className="sc-why">
            {why.map(([h, p], i) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-whyic">{whyIcons[i]}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">FAQ</div>
          <h2 className="sc-h2">Frequently asked <em>questions</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a]) => (
              <details className="sc-faqitem" key={q}>
                <summary>{q}<Plus /></summary>
                <div className="a">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Where To Next</div>
          <h2 className="sc-h2">Often scoped <em>alongside</em> this.</h2>
          <div className="sc-rel">
            {related.map(([h, p]) => (
              <a className="sc-relcard" href="/#services" key={h}>
                <h4>{h} <span className="ar">→</span></h4><p>{p}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Scope your Privacy Impact Assessment</h3>
            <p>Book a 30-minute scoping call. We confirm the obligations that apply, the data in scope, and a fixed-scope quote.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>→</span></a></div>
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

/* trust strip */
.sc-strip{background:linear-gradient(to right,var(--accs),#EFF6FF);border-bottom:1px solid var(--line)}
.sc-strip .sc-wrap{display:flex;flex-wrap:wrap;gap:8px 26px;padding-top:15px;padding-bottom:15px;align-items:center;justify-content:center}
.sc-strip span{font-size:13px;color:var(--ink2);font-weight:500;display:inline-flex;gap:7px;align-items:center}
.sc-strip span::before{content:"✓";color:var(--acc);font-weight:800}

/* fit cards */
.sc-fit{display:grid;grid-template-columns:repeat(auto-fit,minmax(238px,1fr));gap:16px;margin-top:34px}
.sc-fitcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 22px 22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-fitcard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-fitcard .n{font-family:var(--mono);font-size:13px;color:var(--acc);font-weight:500;display:block;margin-bottom:14px}
.sc-fitcard h4{font-family:var(--disp);font-weight:500;font-size:18px;letter-spacing:-.01em;margin-bottom:8px}
.sc-fitcard p{font-size:14px;color:var(--ink3);line-height:1.6}

/* stats */
.sc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin-top:30px;margin-bottom:26px}
.sc-stat{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px}
.sc-stat .v{font-family:var(--disp);font-weight:500;font-size:21px;letter-spacing:-.01em;color:var(--ink);margin-bottom:4px}
.sc-stat .l{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}

/* quick facts table */
.sc-factsbox{background:var(--srf);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.sc-factshd{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 24px;border-bottom:1px solid var(--line);background:var(--bg2);flex-wrap:wrap}
.sc-factshd strong{font-family:var(--disp);font-weight:500;font-size:17px}
.sc-factshd .rev{font-family:var(--mono);font-size:11.5px;color:var(--ink3)}
.sc-factrow{display:grid;grid-template-columns:200px 1fr;gap:16px;padding:15px 24px;border-top:1px solid var(--line)}
.sc-factrow:first-child{border-top:none}
.sc-factrow dt{font-weight:600;font-size:14px;color:var(--ink)}
.sc-factrow dd{font-size:14.5px;color:var(--ink2);line-height:1.6}
@media(max-width:680px){.sc-factrow{grid-template-columns:1fr;gap:4px}}

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

/* scope tiers */
.sc-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
@media(max-width:780px){.sc-tiers{grid-template-columns:1fr}}
.sc-tier{background:var(--srf);border:1px solid var(--line);border-radius:15px;padding:26px 24px;display:flex;flex-direction:column;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-tier:hover{transform:translateY(-3px);border-color:var(--acc);box-shadow:0 16px 34px -18px rgba(37,99,235,.22)}
.sc-tier h4{font-family:var(--disp);font-weight:500;font-size:19px;margin-bottom:10px;letter-spacing:-.01em}
.sc-tier p{font-size:14px;color:var(--ink3);line-height:1.6;flex:1}
.sc-tier .dur{margin-top:16px;font-family:var(--mono);font-size:12.5px;color:var(--acc);border-top:1px solid var(--line);padding-top:14px}
.sc-quote-note{margin-top:18px;font-size:14.5px;color:var(--ink2);background:var(--accs);border:1px solid #BFDBFE;border-radius:12px;padding:16px 20px;display:flex;gap:11px;align-items:center;font-weight:500}
.sc-quote-note::before{content:"⚡";font-size:17px}

.sc-twocol{display:grid;grid-template-columns:1fr 1fr;gap:44px}@media(max-width:820px){.sc-twocol{grid-template-columns:1fr;gap:36px}}
.sc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.sc-chip{font-family:var(--mono);font-size:12.5px;color:var(--ink2);background:var(--srf);border:1px solid var(--line);border-radius:8px;padding:9px 14px;transition:border-color .2s,color .2s}
.sc-chip::before{content:"▪";color:var(--acc);margin-right:8px}.sc-chip:hover{border-color:var(--acc);color:var(--ink)}

.sc-list{list-style:none;display:grid;gap:13px;max-width:820px;margin-top:14px}
.sc-list li{position:relative;padding-left:32px;font-size:15.5px;color:var(--ink2);line-height:1.55}
.sc-list li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:var(--accs);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-list.warn li::before{background:#FEE2E2;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='3.4' stroke-linecap='round'%3E%3Cline x1='7' y1='7' x2='17' y2='17'/%3E%3Cline x1='17' y1='7' x2='7' y2='17'/%3E%3C/svg%3E")}

/* why work with us */
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
@media(max-width:860px){.sc-why{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.sc-why{grid-template-columns:1fr}}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-whyic{width:42px;height:42px;border-radius:11px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:16px}
.sc-whyic svg{width:22px;height:22px}
.sc-whycard h4{font-family:var(--disp);font-weight:500;font-size:17px;margin-bottom:8px;letter-spacing:-.01em}
.sc-whycard p{font-size:14px;color:var(--ink3);line-height:1.6}

/* faq */
.sc-faq{margin-top:30px;max-width:860px}
.sc-faqitem{border:1px solid var(--line);border-radius:12px;background:var(--srf);margin-bottom:12px;overflow:hidden;transition:border-color .2s}
.sc-faqitem[open]{border-color:var(--line2)}
.sc-faqitem summary{list-style:none;cursor:pointer;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;gap:16px;font-weight:600;font-size:15.5px;color:var(--ink);transition:color .2s}
.sc-faqitem summary::-webkit-details-marker{display:none}
.sc-faqitem summary:hover{color:var(--acc)}
.sc-faqitem summary .ic{flex:none;width:20px;height:20px;color:var(--acc);transition:transform .25s}
.sc-faqitem[open] summary .ic{transform:rotate(45deg)}
.sc-faqitem .a{padding:0 22px 20px;font-size:14.5px;color:var(--ink2);line-height:1.7;max-width:74ch}

/* related */
.sc-rel{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
@media(max-width:780px){.sc-rel{grid-template-columns:1fr}}
.sc-relcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;transition:all .3s;display:block}
.sc-relcard:hover{transform:translateY(-3px);border-color:var(--acc);box-shadow:0 16px 34px -18px rgba(37,99,235,.22)}
.sc-relcard h4{font-family:var(--disp);font-weight:500;font-size:17px;margin-bottom:8px;display:flex;align-items:center;gap:8px;letter-spacing:-.01em}
.sc-relcard h4 .ar{color:var(--acc);transition:transform .25s}
.sc-relcard:hover h4 .ar{transform:translateX(4px)}
.sc-relcard p{font-size:13.5px;color:var(--ink3);line-height:1.55}

.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:540px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}

@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
