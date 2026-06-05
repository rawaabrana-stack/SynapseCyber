import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Trust &amp; Legal · Privacy Policy</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Privacy <em>policy</em>.
          </h1>
          <p className="section-lead">
            How SynapseCyber Information Security collects, uses, and protects personal information. Aligned to
            PIPEDA and applicable provincial privacy laws.
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '24px' }}>Last updated: 2026 · Effective immediately</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ fontSize: '26px' }}>1. Scope</h2>
            <p className="section-lead">This policy applies to personal information collected by SynapseCyber Information Security (&quot;Synapse&quot;, &quot;we&quot;) through this website, the contact and quote forms, and direct correspondence. Personal information processed in the delivery of a paid engagement is governed by that engagement's written agreement.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>2. What we collect</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>Contact information you provide (name, email, organisation, phone)</li>
              <li>The contents of messages, quote requests, and sample-report download requests</li>
              <li>Standard server access logs (IP address, user-agent, referrer, timestamp)</li>
              <li>No third-party advertising cookies, no behavioural tracking, no fingerprinting</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>3. How we use it</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>To respond to your inquiry, prepare a quote, or deliver a requested resource</li>
              <li>To operate, secure, and improve this website</li>
              <li>To meet legal and regulatory obligations</li>
            </ul>
            <p className="section-lead" style={{ marginTop: '16px' }}>We do not sell or rent personal information. We do not share it with third parties for marketing.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>4. Where it is stored</h2>
            <p className="section-lead">All personal information collected through this website is stored and processed in Canada. Subprocessors, where used, are bound by written agreements consistent with this policy.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>5. Retention</h2>
            <p className="section-lead">Inquiry data is retained for as long as needed to respond to your request plus a reasonable follow-up window, and is then deleted unless a contractual or legal obligation requires longer retention. Server logs are rotated and deleted on a defined schedule.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>6. Your rights</h2>
            <p className="section-lead">Under PIPEDA and applicable provincial privacy law, you have the right to access the personal information we hold about you, to request correction, and to withdraw consent. To exercise these rights, contact <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a>.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>7. Security</h2>
            <p className="section-lead">Personal information is protected with reasonable administrative, technical, and physical safeguards proportionate to its sensitivity. No system is perfectly secure; if a breach occurs that materially affects you, we will notify you and the appropriate authority as required by law.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>8. Changes</h2>
            <p className="section-lead">We may update this policy from time to time. Material changes will be announced on this page with an updated effective date.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>9. Contact</h2>
            <p className="section-lead">Questions, requests, or complaints: <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a>. You also have the right to file a complaint with the Office of the Privacy Commissioner of Canada.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Other</div>
              <h3>Terms of Use</h3>
              <p>The rules governing your use of this website.</p>
              <Link to="/legal/terms" className="btn btn-secondary">Read the terms</Link>
            </div>
            <div className="cta-box">
              <div className="tag">Other</div>
              <h3>Accessibility statement</h3>
              <p>WCAG 2.1 AA and AODA alignment, plus contact for barrier reports.</p>
              <Link to="/legal/accessibility" className="btn btn-secondary">Accessibility</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
