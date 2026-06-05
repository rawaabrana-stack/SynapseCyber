import React from 'react';
import { Link } from 'react-router-dom';

export default function Trust() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Trust &amp; Legal · Trust &amp; Assurance</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Our <em>trust posture</em>, in plain language.
          </h1>
          <p className="section-lead">
            How we handle your data, who is allowed to see it, how we insure our work, and what happens to the
            evidence when an engagement ends. No legalese padding — just the facts your procurement, audit, and
            security teams need.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Personnel &amp; Clearance</div>
          <h2 className="section-title">Cleared, named, and <em>accountable</em>.</h2>
          <p className="section-lead">
            Every Statement of Work names the consultants assigned to your engagement. We do not substitute personnel
            mid-engagement without your written approval.
          </p>
          <div className="services-grid" style={{ marginTop: '32px' }}>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <h3>Government of Canada Reliability</h3>
              <p>Reliability Status held; Secret clearance in progress. SRCL-ready for classified procurement.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6z" /></svg>
              </div>
              <h3>Background-checked Personnel</h3>
              <p>All consultants are background-checked. Subcontractors, if used, are vetted and disclosed in advance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
              </div>
              <h3>NDA-backed Engagements</h3>
              <p>Every engagement runs under NDA. Client identities are withheld unless disclosure is authorised in writing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="section-eyebrow">Insurance &amp; Liability</div>
          <h2 className="section-title">Insured, <em>professionally</em>.</h2>
          <div className="method-grid" style={{ marginTop: '40px' }}>
            <div className="method-step" data-num="01">
              <div className="method-step-tag">Coverage</div>
              <h4>Commercial General Liability</h4>
              <p className="method-desc">CGL insurance covering bodily injury, property damage, and personal injury claims.</p>
            </div>
            <div className="method-step" data-num="02">
              <div className="method-step-tag">Coverage</div>
              <h4>Professional Liability (E&amp;O)</h4>
              <p className="method-desc">Errors and omissions coverage for the professional services we deliver.</p>
            </div>
            <div className="method-step" data-num="03">
              <div className="method-step-tag">Coverage</div>
              <h4>Cyber Liability</h4>
              <p className="method-desc">Cyber liability coverage including data-breach response and regulatory exposure.</p>
            </div>
          </div>
          <p className="section-lead" style={{ marginTop: '32px' }}>
            Certificates of insurance are available on request via your procurement contact.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Data Handling</div>
          <h2 className="section-title">Your data stays <em>in Canada</em>.</h2>
          <div className="dp-grid">
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>
              <h5>Canadian data residency</h5>
              <p>Client data is stored and processed in Canada and never leaves Canadian jurisdiction.</p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
              <h5>Encrypted in transit &amp; at rest</h5>
              <p>Findings, evidence, and artefacts are encrypted end-to-end. Exchange channels are vetted per engagement.</p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              <h5>Retention &amp; destruction</h5>
              <p>Defined retention windows with documented, certified destruction at engagement close.</p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h6M10 17h4" /></svg>
              <h5>Audit-ready logging</h5>
              <p>Access to client artefacts is logged and reviewable on request.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Procurement</div>
              <h3>Have a procurement question?</h3>
              <p>Insurance certificates, SRCL forms, and security-questionnaire responses are available on request.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Vulnerability Disclosure</div>
              <h3>Security &amp; Disclosure Policy</h3>
              <p>How to report a security issue against SynapseCyber or our hosted properties.</p>
              <Link to="/security" className="btn btn-secondary">Disclosure policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
