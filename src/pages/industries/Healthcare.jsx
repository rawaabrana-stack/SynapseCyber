import React from 'react';
import { Link } from 'react-router-dom';

export default function Healthcare() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Industries · Healthcare</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Security for custodians of <em>personal health information</em>.
          </h1>
          <p className="section-lead">
            Hospitals, provincial authorities, virtual care platforms, and digital health startups handling personal health
            information under PIPEDA, PHIPA, and provincial privacy regimes.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>PIPEDA &amp; provincial privacy</span>
            <span>Privacy Commissioner approved deliverables</span>
            <span>Canadian data residency</span>
            <span>RCMP TRA aligned</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Why Healthcare Trusts Us</div>
          <h2 className="section-title">Privacy work the <em>Commissioner</em> accepts.</h2>
          <p className="section-lead">
            Our Privacy Impact Assessments have been reviewed and approved by provincial Privacy Commissioners, including
            for patient-facing applications. We work the way provincial health authorities and PHI custodians need:
            documented, defensible, and aligned to the specific privacy regime that governs your service.
          </p>

          <div className="industries-grid" style={{ marginTop: '32px' }}>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18" /></svg>
              </div>
              <div className="industry-name">Privacy Impact Assessments</div>
              <p className="industry-driver">22-row risk-card PIAs aligned to PIPEDA, PHIPA, and provincial privacy law. Privacy Commissioner approved.</p>
              <div className="industry-reg">PIPEDA · PHIPA · Provincial</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <div className="industry-name">Application &amp; Mobile Testing</div>
              <p className="industry-driver">Manual penetration testing of patient portals, virtual care platforms, and clinician-facing mobile apps.</p>
              <div className="industry-reg">OWASP WSTG · MASTG</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6" /></svg>
              </div>
              <div className="industry-name">Threat &amp; Risk Assessments</div>
              <p className="industry-driver">RCMP Harmonized TRAs for provincial health authorities, with 86-row threat matrices and risk cards.</p>
              <div className="industry-reg">RCMP TRA · ITSG-33</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
              </div>
              <div className="industry-name">Breach Preparedness</div>
              <p className="industry-driver">Cyber incident response plans, tabletop exercises, and breach notification readiness aligned to mandatory reporting.</p>
              <div className="industry-reg">PIPEDA Breach Reporting</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <div className="industry-name">vCISO &amp; Advisory</div>
              <p className="industry-driver">Fractional security leadership for digital health scale-ups and HealthTech vendors selling to hospitals.</p>
              <div className="industry-reg">NIST CSF · ISO 27001</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6z" /></svg>
              </div>
              <div className="industry-name">Cloud &amp; SaaS Hosting</div>
              <p className="industry-driver">Configuration review of Azure, AWS, and Google Cloud environments hosting PHI, with residency and access controls.</p>
              <div className="industry-reg">Provincial residency · CIS</div>
            </article>
          </div>
        </div>
      </section>

      <section className="engagements">
        <div className="container">
          <div className="section-eyebrow">Recent Healthcare Work</div>
          <h2 className="section-title">Anonymised <em>case examples</em>.</h2>

          <div className="engagements-list">
            <article className="engagement-row">
              <div className="eng-meta">
                <span className="eng-sector">Provincial Health Authority</span>
                <span className="eng-year">2025</span>
              </div>
              <div className="eng-body">
                <h4 className="eng-title">PIA: Patient-facing Flutter application</h4>
                <p className="eng-detail">A 22-row risk-card PIA covering data minimisation, consent flows, retention, and breach notification. Approved by the Privacy Commissioner.</p>
                <div className="eng-frameworks"><span>RCMP PIA</span><span>PIPEDA</span><span>Provincial</span></div>
              </div>
            </article>
            <article className="engagement-row">
              <div className="eng-meta">
                <span className="eng-sector">Virtual Care Platform</span>
                <span className="eng-year">2025</span>
              </div>
              <div className="eng-body">
                <h4 className="eng-title">Penetration test ahead of enterprise hospital onboarding</h4>
                <p className="eng-detail">Manual testing of clinician and patient portals, plus the API surface, with reproduction evidence and a free retest of remediated findings.</p>
                <div className="eng-frameworks"><span>OWASP WSTG</span><span>SOC 2</span></div>
              </div>
            </article>
            <article className="engagement-row">
              <div className="eng-meta">
                <span className="eng-sector">Digital Health Startup</span>
                <span className="eng-year">2024</span>
              </div>
              <div className="eng-body">
                <h4 className="eng-title">vCISO advisory toward SOC 2 Type II</h4>
                <p className="eng-detail">Quarterly retainer covering policy authoring, control design, vendor risk, and audit liaison for first-year SOC 2.</p>
                <div className="eng-frameworks"><span>SOC 2</span><span>NIST CSF</span></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Get a Quote</div>
              <h3>Talk about your PHI workload.</h3>
              <p>A scoping call covering the privacy regime that governs you, current controls, and a fixed-scope quote.</p>
              <Link to="/contact" className="btn btn-primary">Contact a consultant <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Resources</div>
              <h3>See a sample report.</h3>
              <p>A redacted PIA so your privacy and clinical leadership can see the format before engaging.</p>
              <Link to="/resources/sample-report" className="btn btn-secondary">Sample report</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
