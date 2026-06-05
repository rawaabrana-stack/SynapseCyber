import React from 'react';
import { Link } from 'react-router-dom';

export default function CriticalInfrastructure() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Industries · Critical Infrastructure</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Security where uptime is <em>public safety</em>.
          </h1>
          <p className="section-lead">
            Energy, water, telecommunications, transportation, NG-911 PSAPs, and operational-technology environments
            where service interruption has safety, regulatory, and reputational consequences.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>NIST CSF aligned</span>
            <span>IEC 62443 awareness</span>
            <span>OT-safe testing</span>
            <span>Multi-stakeholder coordination</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Why CI Operators Engage Us</div>
          <h2 className="section-title">Mature programs need <em>independent</em> verification.</h2>
          <p className="section-lead">
            We've delivered cyber-maturity assessments that advanced operator ratings from 4/10 to 10/10 against the
            NIST Cybersecurity Framework. Our consultants understand the difference between IT and OT, the operational
            risk of intrusive testing, and the multi-stakeholder coordination required to deliver in regulated
            essential-service environments.
          </p>

          <div className="industries-grid" style={{ marginTop: '32px' }}>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2l-9 12h6l-1 8 9-12h-6l1-8z" /></svg>
              </div>
              <div className="industry-name">Cyber Maturity Assessment</div>
              <p className="industry-driver">NIST CSF function-and-category assessment with multi-year roadmap and board-ready scorecard.</p>
              <div className="industry-reg">NIST CSF · IEC 62443</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /></svg>
              </div>
              <div className="industry-name">OT-aware Threat &amp; Risk</div>
              <p className="industry-driver">TRA methodology adapted for OT, ICS, and SCADA, with safety implications documented alongside cyber risk.</p>
              <div className="industry-reg">RCMP TRA · NIST 800-82</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-4 7 4v12" /></svg>
              </div>
              <div className="industry-name">Cyber Incident Response Plans</div>
              <p className="industry-driver">Multi-vendor CIRPs for essential services, including NG-911 PSAP cutover and provincial emergency-management coordination.</p>
              <div className="industry-reg">NIST CSF · OSFI E-23</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></svg>
              </div>
              <div className="industry-name">IT/OT Segmentation Review</div>
              <p className="industry-driver">Architecture review of Purdue-model layering, IT/OT boundaries, jump hosts, and remote-access controls.</p>
              <div className="industry-reg">Purdue · IEC 62443</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6z" /></svg>
              </div>
              <div className="industry-name">Tabletop Exercises</div>
              <p className="industry-driver">Realistic ransomware, supply-chain, and OT-disruption exercises with full after-action reporting.</p>
              <div className="industry-reg">NIST CSF · CCCS</div>
            </article>
            <article className="industry-card">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7" /></svg>
              </div>
              <div className="industry-name">vCISO &amp; Program Advisory</div>
              <p className="industry-driver">Fractional security leadership for operators between full-time CISOs, including board reporting.</p>
              <div className="industry-reg">NIST CSF · NERC CIP awareness</div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Scope an Engagement</div>
              <h3>Talk to a senior consultant.</h3>
              <p>A 30-minute call covers your operating environment, regulatory drivers, and a fixed-scope quote.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Insights</div>
              <h3>Read our research notes.</h3>
              <p>Practitioner writing on agentic AI, MCP security, and OT/IT convergence.</p>
              <Link to="/resources/blog" className="btn btn-secondary">Blog &amp; research</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
