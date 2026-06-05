import React from 'react';
import { Link } from 'react-router-dom';

const CASES = [
  {
    sector: 'Crown Corporation',
    year: '2026',
    title: 'RCMP Harmonized TRA &amp; PIA programme',
    detail: '86-row threat assessment matrix across 22 risk cards. 4-week delivery. Executive summary accepted by board with no edits.',
    frameworks: ['RCMP TRA', 'NIST SP 800-30', 'ISO 27005'],
  },
  {
    sector: 'Healthcare · Provincial Authority',
    year: '2025',
    title: 'Privacy Impact Assessment: patient-facing application',
    detail: 'Flutter mobile app, 22 risk cards (RS-01 to RS-22). PIPEDA &amp; provincial alignment. Approved by the Privacy Commissioner.',
    frameworks: ['RCMP PIA', 'PIPEDA', 'Provincial Privacy'],
  },
  {
    sector: 'Government · NG-911 Infrastructure',
    year: '2025',
    title: 'Cyber Incident Response Plan: PSAP cutover',
    detail: 'Critical 911 dispatch infrastructure. 86-row CIRP assessment matrix. Multi-vendor coordination across provincial emergency management.',
    frameworks: ['NIST CSF', 'OSFI E-23'],
  },
  {
    sector: 'Enterprise · Retail &amp; Supply Chain',
    year: '2024 to 2026',
    title: 'SAP S/4HANA security validation programme',
    detail: '1,551 SAST/DAST findings triaged across R1 to R4 releases. Risk adjustment memos under NIST SP 800-30 Rev.1, OWASP RRM, ISO 27005:2022 clause 8.6.3.',
    frameworks: ['SAP GRC', 'SAST / DAST', 'OWASP RRM'],
  },
  {
    sector: 'Defence Sector · Naval / Marine',
    year: '2023',
    title: 'Cyber Maturity Assessment: NIST CSF',
    detail: 'Advanced maturity rating from 4/10 to 10/10 against the NIST Cybersecurity Framework. Multi-stakeholder coordination across OT environments.',
    frameworks: ['NIST CSF', 'OT Security'],
  },
];

export default function CaseStudies() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Resources · Case Studies</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Notable work, <em>anonymised</em>.
          </h1>
          <p className="section-lead">
            Engagement profiles across regulated sectors. Client names are withheld under NDA; methodology, scope,
            and outcomes are disclosed in full.
          </p>
        </div>
      </section>

      <section className="engagements">
        <div className="container">
          <div className="engagements-list">
            {CASES.map((c) => (
              <article key={c.title} className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector" dangerouslySetInnerHTML={{ __html: c.sector }} />
                  <span className="eng-year">{c.year}</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title" dangerouslySetInnerHTML={{ __html: c.title }} />
                  <p className="eng-detail" dangerouslySetInnerHTML={{ __html: c.detail }} />
                  <div className="eng-frameworks">
                    {c.frameworks.map((f) => <span key={f}>{f}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Discuss your scope</div>
              <h3>Engage senior consultants.</h3>
              <p>A short call covers your environment, regulatory drivers, and a fixed-scope quote.</p>
              <Link to="/contact" className="btn btn-primary">Book a call <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Sample</div>
              <h3>See a redacted report.</h3>
              <p>The exact deliverable format your team would receive.</p>
              <Link to="/resources/sample-report" className="btn btn-secondary">Get the sample</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
