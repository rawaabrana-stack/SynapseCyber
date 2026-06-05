import React from 'react';
import { Link } from 'react-router-dom';

export default function SaasTechnology() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Industries · SaaS &amp; Technology</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Security evidence your <em>enterprise buyers</em> actually accept.
          </h1>
          <p className="section-lead">
            B2B SaaS, AI platforms, fintech infrastructure, and developer-tooling companies. Penetration tests, SOC 2
            readiness, and product-security advisory that close enterprise deals without the back-and-forth.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>SOC 2 Type II ready</span>
            <span>ISO 27001 aligned</span>
            <span>OWASP testing</span>
            <span>AI / LLM security</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">For Product &amp; Security Leaders</div>
          <h2 className="section-title">Stop losing deals to <em>vendor security reviews</em>.</h2>
          <p className="section-lead">
            Enterprise buyers ask for an independent penetration test, a current SOC 2 report, and an answer to
            an increasing list of AI and supply-chain questions. We deliver the evidence: senior-led testing,
            audit-ready reports, and a remediation pathway that integrates with your engineering velocity.
          </p>

          <div className="services-grid" style={{ marginTop: '32px' }}>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </div>
              <h3>Penetration Testing</h3>
              <p>Web, mobile, API, and cloud testing aligned to OWASP, with a free retest and a confirmation letter for your customers.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>SOC 2 Type I &amp; II</h3>
              <p>Control design assessments, gap analysis, and audit liaison so your first or recurring SOC 2 examination ships on time.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M6 6l-3 6 3 6M18 6l3 6-3 6" /></svg>
              </div>
              <h3>Secure Code Review</h3>
              <p>Static analysis plus manual review of authentication, authorisation, and trust-boundary code across major stacks.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1" /><rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.2" /></svg>
              </div>
              <h3>AI / LLM Security</h3>
              <p>OWASP LLM Top 10, MCP threat modelling, prompt-injection testing, and NIST AI RMF alignment for AI-native products.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16c-3 0-5-2-5-5 0-2.5 2-4.5 4.5-4.5C7 4 10 2 13 2c3.5 0 6 2.5 6.5 5.5C21.5 8 23 10 23 12c0 2.5-2 4-5 4z" /></svg>
              </div>
              <h3>Cloud Configuration Review</h3>
              <p>AWS, Azure, and GCP environments — IAM, network exposure, IaC scanning, CIS benchmark alignment.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <h3>vCISO Retainer</h3>
              <p>Fractional security leadership: board reporting, security questionnaires, and roadmap design for scaling teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="section-eyebrow">For Every Stage</div>
          <h2 className="section-title">From <em>seed</em> to enterprise IPO.</h2>

          <div className="method-grid" style={{ marginTop: '40px' }}>
            <div className="method-step" data-num="01">
              <div className="method-step-tag">Pre-launch</div>
              <h4>Product Security Review</h4>
              <p className="method-desc">Threat modelling, architecture review, and a baseline pentest before your first paying customer.</p>
            </div>
            <div className="method-step" data-num="02">
              <div className="method-step-tag">Series A–B</div>
              <h4>SOC 2 Type I &amp; Pentest</h4>
              <p className="method-desc">First-year SOC 2 and an annual penetration test unlocks enterprise procurement reviews.</p>
            </div>
            <div className="method-step" data-num="03">
              <div className="method-step-tag">Series B+</div>
              <h4>ISO 27001 &amp; Red Team</h4>
              <p className="method-desc">International enterprise customers expect ISO 27001 and a periodic red team or adversary simulation.</p>
            </div>
            <div className="method-step" data-num="04">
              <div className="method-step-tag">AI-native</div>
              <h4>LLM &amp; MCP Security</h4>
              <p className="method-desc">Prompt injection testing, agent boundaries, and supply-chain risk for foundation-model integrations.</p>
            </div>
            <div className="method-step" data-num="05">
              <div className="method-step-tag">Pre-IPO</div>
              <h4>Continuous Assurance</h4>
              <p className="method-desc">Recurring testing, release reviews, and on-call advisory through a senior retainer.</p>
            </div>
            <div className="method-step" data-num="06">
              <div className="method-step-tag">Always</div>
              <h4>Customer Letters</h4>
              <p className="method-desc">Confirmation letters and attestation summaries customers can drop into their vendor reviews.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">For Founders</div>
              <h3>Talk about your stack.</h3>
              <p>A scoping call covers your product, your customer requirements, and the fastest path to the evidence you need.</p>
              <Link to="/contact" className="btn btn-primary">Book a call <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Sample</div>
              <h3>See a redacted pentest report.</h3>
              <p>A real engagement format your security and engineering leads can review before scoping.</p>
              <Link to="/resources/sample-report" className="btn btn-secondary">Get the sample</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
