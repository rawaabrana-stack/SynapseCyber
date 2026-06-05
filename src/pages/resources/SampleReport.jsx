import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SampleReport() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const SAMPLE_PDF = '/SynapseCyber-Sample-Penetration-Test-Report.pdf';

  function handleSubmit(e) {
    e.preventDefault();
    // Give the visitor the report immediately.
    window.open(SAMPLE_PDF, '_blank', 'noopener');
    // Notify us of the lead via the SMTP endpoint (fire-and-forget).
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'Sample Report Request',
        name: email,
        email,
        message: `Sample report requested by ${email}`,
      }),
    }).catch(() => {});
    setSubmitted(true);
  }

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Resources · Sample Pentest Report</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            See the <em>report</em> before you commit.
          </h1>
          <p className="section-lead">
            A redacted SynapseCyber penetration-test report. Real format, real findings, real reproduction steps and
            remediation guidance — exactly what your team receives at the end of an engagement.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="report-grid">
            <div className="report-mockup">
              <div className="doc-page doc-page-3"></div>
              <div className="doc-page doc-page-2"></div>
              <div className="doc-page doc-page-1">
                <div className="doc-header">
                  <div className="doc-stamp">CONFIDENTIAL · REDACTED</div>
                  <div className="doc-title">SynapseCyber Penetration Test Report</div>
                  <div className="doc-sub">v2.1 · Sample · Engagement #C-2025-04</div>
                </div>
                <div className="doc-section-label">Executive Summary</div>
                <div className="doc-lines">
                  <div className="doc-line w90"></div>
                  <div className="doc-line w70"></div>
                  <div className="doc-line w80"></div>
                </div>
                <div className="doc-finding">
                  <div className="doc-finding-row">
                    <span className="doc-finding-label">CRITICAL · F-001</span>
                    <span className="doc-finding-cvss">CVSS 9.8</span>
                  </div>
                  <div className="doc-lines">
                    <div className="doc-line w80"></div>
                    <div className="doc-line w60"></div>
                  </div>
                </div>
                <div className="doc-section-label">Severity Distribution</div>
                <div className="doc-chart">
                  <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '85%' }}></span><em>Crit</em></div>
                  <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '55%' }}></span><em>High</em></div>
                  <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '70%' }}></span><em>Med</em></div>
                  <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '35%' }}></span><em>Low</em></div>
                </div>
              </div>
            </div>

            <div className="report-content">
              <div className="section-eyebrow">What's Inside</div>
              <h2 className="section-title">42 pages of <em>real</em> deliverable format.</h2>
              <p className="section-lead">
                Anonymised, but otherwise unaltered. The structure, depth, and clarity you can expect from every
                Synapse engagement — no marketing follow-up.
              </p>

              <ul className="report-includes">
                <li>Executive summary with risk ratings and business impact</li>
                <li>Detailed technical findings with step-by-step reproduction</li>
                <li>Evidence screenshots and request / response captures</li>
                <li>S.I.R.P.-prioritised remediation guidance per finding</li>
                <li>Audit-ready findings letter formatted for regulators &amp; customers</li>
              </ul>

              {!submitted ? (
                <form className="report-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Work email"
                    className="report-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="report-btn" type="submit">Download sample <span className="arrow">→</span></button>
                </form>
              ) : (
                <div style={{ padding: '18px 22px', background: 'var(--accent-soft)', borderRadius: '8px', color: 'var(--ink)', marginTop: '20px' }}>
                  Thanks — your sample report is opening in a new tab. If a pop-up blocker stopped it,{' '}
                  <a href={SAMPLE_PDF} target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>click here to open it</a>.
                </div>
              )}
              <p className="report-note">42-page PDF · No marketing follow-up · Opens instantly</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Engage</div>
              <h3>Talk about your scope.</h3>
              <p>A short call covers realistic effort, timeline, and a fixed-scope quote.</p>
              <Link to="/contact" className="btn btn-primary">Book a scoping call <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Other Resources</div>
              <h3>Read the TRA Methodology Guide.</h3>
              <p>A primer on the RCMP Harmonized TRA used across Canadian government and crown corps.</p>
              <Link to="/resources/tra-methodology" className="btn btn-secondary">Read the guide</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
