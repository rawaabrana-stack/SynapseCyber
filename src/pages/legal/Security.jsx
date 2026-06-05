import React from 'react';
import { Link } from 'react-router-dom';

export default function Security() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Trust &amp; Legal · Security &amp; Disclosure</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Vulnerability <em>disclosure policy</em>.
          </h1>
          <p className="section-lead">
            How to report a security issue you have discovered in a SynapseCyber-owned property — and what to expect
            from us in response.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ fontSize: '28px' }}>Scope</h2>
            <p className="section-lead">
              This policy applies to security vulnerabilities discovered in SynapseCyber-owned or operated systems,
              including <strong>synapsecyber.security</strong> and any subdomains we operate directly. Client
              deliverables and client systems are governed by their own engagement terms.
            </p>

            <h2 className="section-title" style={{ fontSize: '28px', marginTop: '40px' }}>How to report</h2>
            <p className="section-lead">
              Email <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>ridarashid.cyber@gmail.com</a> with:
            </p>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>A clear description of the issue and impact</li>
              <li>Step-by-step reproduction instructions</li>
              <li>Any proof-of-concept output, screenshots, or HTTP traces</li>
              <li>Contact information for follow-up and (optionally) public credit</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '28px', marginTop: '40px' }}>What we ask</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>Make a good-faith effort to avoid privacy violations, data destruction, and service disruption</li>
              <li>Do not access more data than is necessary to demonstrate the vulnerability</li>
              <li>Do not publicly disclose the issue until we have had a reasonable opportunity to remediate</li>
              <li>Do not engage in social engineering of our staff or third parties</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '28px', marginTop: '40px' }}>What you can expect</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li><strong>Acknowledgement</strong> within 2 business days</li>
              <li><strong>Triage decision</strong> within 5 business days</li>
              <li><strong>Remediation timeline</strong> communicated based on severity</li>
              <li><strong>Public credit</strong> on our security acknowledgements page, if you wish</li>
              <li>A safe harbour from legal action for good-faith research conducted under this policy</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '28px', marginTop: '40px' }}>Out of scope</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>Findings against client environments (report to the client)</li>
              <li>Self-XSS, theoretical issues without proof of impact</li>
              <li>Reports from automated scanners with no manual validation</li>
              <li>Social engineering, phishing, or physical attacks against staff or facilities</li>
              <li>Denial-of-service testing without prior written authorisation</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Contact</div>
              <h3><a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>ridarashid.cyber@gmail.com</a></h3>
              <p>PGP-encrypted submissions accepted. Key available on request.</p>
              <a href="mailto:ridarashid.cyber@gmail.com" className="btn btn-primary">Send a report <span className="arrow">→</span></a>
            </div>
            <div className="cta-box">
              <div className="tag">Trust</div>
              <h3>Trust &amp; Assurance overview</h3>
              <p>How we handle data, personnel, and engagement evidence.</p>
              <Link to="/trust" className="btn btn-secondary">Trust posture</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
