import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Trust &amp; Legal · Terms of Use</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Terms of <em>use</em>.
          </h1>
          <p className="section-lead">
            The rules governing your use of synapsecyber.security and any content on it. Paid engagements are
            governed by a separate written agreement.
          </p>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '24px' }}>Last updated: 2026 · Effective immediately</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ fontSize: '26px' }}>1. Acceptance</h2>
            <p className="section-lead">By accessing this website you agree to these Terms of Use. If you do not agree, do not use the site.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>2. Informational content</h2>
            <p className="section-lead">Content on this website is provided for general informational purposes only and does not constitute professional security advice. Engagements are scoped, contracted, and delivered separately under written agreement.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>3. Intellectual property</h2>
            <p className="section-lead">The site, its content, the SynapseCyber name, and our methodology marks (including S.I.R.P.) are owned by SynapseCyber Information Security. You may quote short excerpts with attribution; reproduction or redistribution of substantive portions requires prior written permission.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>4. Acceptable use</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>Do not attempt to gain unauthorised access to the site or related systems</li>
              <li>Do not interfere with site availability or perform load-generating activity without authorisation (see our <Link to="/security" style={{ color: 'var(--accent)' }}>disclosure policy</Link>)</li>
              <li>Do not use the site to harass, defame, or violate the rights of others</li>
              <li>Do not scrape contact information for unsolicited marketing</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>5. Third-party links</h2>
            <p className="section-lead">The site may link to third-party resources. We do not control and are not responsible for those resources or their content.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>6. Disclaimer</h2>
            <p className="section-lead">The site is provided &ldquo;as is&rdquo; without warranty of any kind. We do not warrant that the site will be uninterrupted or error-free, or that any information is current at the time you read it.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>7. Limitation of liability</h2>
            <p className="section-lead">To the maximum extent permitted by law, SynapseCyber will not be liable for indirect, incidental, consequential, or special damages arising from your use of this site, even if advised of the possibility.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>8. Governing law</h2>
            <p className="section-lead">These Terms are governed by the laws of Canada and the province in which SynapseCyber is principally established. Any dispute will be heard in the courts of that province.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>9. Changes</h2>
            <p className="section-lead">We may revise these Terms from time to time. Continued use of the site after a change indicates acceptance.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>10. Contact</h2>
            <p className="section-lead">Questions about these Terms: <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a>.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Other</div>
              <h3>Privacy Policy</h3>
              <p>How we collect and protect personal information.</p>
              <Link to="/legal/privacy" className="btn btn-secondary">Privacy policy</Link>
            </div>
            <div className="cta-box">
              <div className="tag">Other</div>
              <h3>Trust &amp; Assurance</h3>
              <p>Insurance, data residency, and personnel posture.</p>
              <Link to="/trust" className="btn btn-secondary">Trust posture</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
