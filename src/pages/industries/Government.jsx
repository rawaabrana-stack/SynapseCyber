import React from 'react';
import { Link } from 'react-router-dom';

export default function Government() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Industries · Government &amp; Crown Corporations</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Procurement-ready assurance for the <em>public sector</em>.
          </h1>
          <p className="section-lead">
            Federal departments, provincial ministries, crown corporations, and municipal bodies. SRCL-ready, RCMP TRA
            aligned, with senior consultants holding active Government of Canada clearances.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>GoC Reliability Status</span>
            <span>Secret clearance in progress</span>
            <span>SRCL-ready</span>
            <span>Protected B baseline</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Why Public Sector Engages Us</div>
          <h2 className="section-title">A small, senior team with the <em>clearances</em> you need.</h2>
          <p className="section-lead">
            Government of Canada Reliability Status is held; Secret clearance is in progress. Our consultants are
            named on every Statement of Work, our engagements run under NDA, and our deliverables conform to the
            templates and methodologies your security officer already expects to receive.
          </p>

          <div className="services-grid" style={{ marginTop: '32px' }}>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>
              </div>
              <h3>RCMP Harmonized TRA</h3>
              <p>86-row threat assessment matrices, 22-card risk register, executive summary, and full traceability to ITSG-33 controls.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6z" /><circle cx="12" cy="12" r="2.5" /></svg>
              </div>
              <h3>Privacy Impact Assessment</h3>
              <p>Privacy Act and PIPEDA aligned PIAs with full data-flow mapping and risk-card register, ready for departmental review.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></svg>
              </div>
              <h3>ITSG-33 Security Assessment</h3>
              <p>Control baseline assessment against the Canadian Centre for Cyber Security's IT Security Risk Management framework.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </div>
              <h3>Penetration Testing</h3>
              <p>Manual testing of departmental web applications, APIs, and infrastructure with ITSG-33 control mapping.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M4 12h16" /></svg>
              </div>
              <h3>Cyber Incident Response Plans</h3>
              <p>Multi-stakeholder CIRP design and tabletop exercises, including NG-911 PSAP environments and critical service cutover plans.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <h3>vCISO &amp; Advisory</h3>
              <p>Fractional security leadership for crown corporations and agencies between full-time security officers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="section-eyebrow">Canadian Frameworks</div>
          <h2 className="section-title">Aligned to the standards your <em>departmental security officer</em> reports against.</h2>

          <div className="method-grid" style={{ marginTop: '40px' }}>
            <div className="method-step" data-num="01">
              <div className="method-step-tag">Methodology</div>
              <h4>RCMP Harmonized TRA</h4>
              <p className="method-desc">The standard threat and risk methodology used across federal and provincial Canada.</p>
            </div>
            <div className="method-step" data-num="02">
              <div className="method-step-tag">Controls</div>
              <h4>ITSG-33</h4>
              <p className="method-desc">CCCS IT Security Risk Management framework — control selection and assessment.</p>
            </div>
            <div className="method-step" data-num="03">
              <div className="method-step-tag">Baseline</div>
              <h4>PBMM / Protected B</h4>
              <p className="method-desc">Protected B Medium-Medium-Medium baseline for sensitive Government of Canada workloads.</p>
            </div>
            <div className="method-step" data-num="04">
              <div className="method-step-tag">Privacy</div>
              <h4>Privacy Act</h4>
              <p className="method-desc">Federal privacy obligations and Treasury Board PIA Directive alignment.</p>
            </div>
            <div className="method-step" data-num="05">
              <div className="method-step-tag">Continuity</div>
              <h4>BCP / DR Planning</h4>
              <p className="method-desc">Essential services continuity, recovery time objectives, and tabletop validation.</p>
            </div>
            <div className="method-step" data-num="06">
              <div className="method-step-tag">Procurement</div>
              <h4>SRCL-ready</h4>
              <p className="method-desc">Cleared consultants, signed personnel forms, and security requirements check list compliant.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Procurement</div>
              <h3>Engage cleared consultants.</h3>
              <p>Standing-offer ready, NDA-backed, with named senior consultants holding active Government of Canada clearances.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Trust</div>
              <h3>Our trust posture.</h3>
              <p>Insurance, data residency, evidence handling, and personnel screening described in plain language.</p>
              <Link to="/trust" className="btn btn-secondary">Trust &amp; Assurance</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
