import React from 'react';
import { Link } from 'react-router-dom';

export default function FinancialServices() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Industries · Financial Services</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Independent security for <em>regulated</em> Canadian finance.
          </h1>
          <p className="section-lead">
            Banks, credit unions, fintechs, lenders, and payment platforms operating under OSFI prudential oversight,
            FINTRAC, and PCI DSS. Senior-led engagements that produce audit-ready evidence.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>OSFI B-13 aligned</span>
            <span>PCI DSS testing</span>
            <span>FINTRAC ready</span>
            <span>Canadian data residency</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Why Synapse for Finance</div>
          <h2 className="section-title">Built for the <em>regulator</em> in the room.</h2>
          <p className="section-lead">
            We deliver penetration tests, threat &amp; risk assessments, and program advisory engagements that hold up
            under OSFI inspections, board-level scrutiny, and vendor security reviews from your enterprise customers.
            Findings are mapped to the framework you report against, not a generic checklist.
          </p>

          <div className="services-grid" style={{ marginTop: '32px' }}>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 10h16M5 10l7-5 7 5M6 10v8M10 10v8M14 10v8M18 10v8" /></svg>
              </div>
              <h3>OSFI B-13 Technology &amp; Cyber Risk</h3>
              <p>Independent assurance and gap assessment against OSFI's Technology and Cyber Risk Management guideline, including third-party risk under B-10.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></svg>
              </div>
              <h3>PCI DSS Validation Testing</h3>
              <p>Network segmentation testing, application testing, and remediation guidance aligned to PCI DSS v4.0 requirement 11.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>SOC 2 Type II Readiness</h3>
              <p>Control design and operating effectiveness reviews so your SOC 2 examination proceeds without surprises.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v18M5 4l12 3-12 3" /></svg>
              </div>
              <h3>Red Team &amp; Adversary Simulation</h3>
              <p>Full-scope simulation of motivated financial threat actors, including assumed-breach and ransomware scenarios.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <h3>vCISO for Fintech</h3>
              <p>Fractional security leadership for fintechs scaling toward SOC 2, ISO 27001, and enterprise vendor reviews.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>Incident Response Retainer</h3>
              <p>Same-day response for ransomware, business email compromise, and fraud incidents — with a contracted SLA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="section-eyebrow">Regulatory Drivers</div>
          <h2 className="section-title">Frameworks your <em>regulator</em> already trusts.</h2>
          <p className="section-lead">Every engagement is mapped to the standards that matter for Canadian and cross-border finance.</p>

          <div className="method-grid" style={{ marginTop: '40px' }}>
            <div className="method-step" data-num="01">
              <div className="method-step-tag">Prudential</div>
              <h4>OSFI B-13</h4>
              <p className="method-desc">Technology &amp; Cyber Risk Management for federally regulated financial institutions.</p>
            </div>
            <div className="method-step" data-num="02">
              <div className="method-step-tag">Payments</div>
              <h4>PCI DSS v4.0</h4>
              <p className="method-desc">Cardholder data environment testing, segmentation validation, and quarterly scans.</p>
            </div>
            <div className="method-step" data-num="03">
              <div className="method-step-tag">Anti-Financial-Crime</div>
              <h4>FINTRAC</h4>
              <p className="method-desc">Reporting entity controls for money services businesses and securities dealers.</p>
            </div>
            <div className="method-step" data-num="04">
              <div className="method-step-tag">Customer Assurance</div>
              <h4>SOC 2 Type II</h4>
              <p className="method-desc">Trust services criteria evidence your enterprise customers ask for.</p>
            </div>
            <div className="method-step" data-num="05">
              <div className="method-step-tag">Governance</div>
              <h4>ISO/IEC 27001</h4>
              <p className="method-desc">ISMS design, internal audit, and certification readiness.</p>
            </div>
            <div className="method-step" data-num="06">
              <div className="method-step-tag">Privacy</div>
              <h4>PIPEDA &amp; Provincial</h4>
              <p className="method-desc">Privacy impact assessments and breach response aligned to Canadian law.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Scoping Call</div>
              <h3>Talk to a senior consultant.</h3>
              <p>A 30-minute call covers realistic effort, timeline, and a fixed-scope quote tailored to your regulator and customer requirements.</p>
              <Link to="/contact" className="btn btn-primary">Book a scoping call <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">All Industries</div>
              <h3>Other regulated sectors we serve.</h3>
              <p>Healthcare, government &amp; crown corps, SaaS, and critical infrastructure.</p>
              <Link to="/" className="btn btn-secondary">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
