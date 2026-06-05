import React from 'react';
import { Link } from 'react-router-dom';

export default function Accessibility() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Trust &amp; Legal · Accessibility</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Accessibility <em>statement</em>.
          </h1>
          <p className="section-lead">
            SynapseCyber is committed to making this site usable for the widest possible audience — including people
            who rely on assistive technology, who navigate with a keyboard, or who require reduced motion.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ fontSize: '26px' }}>Standards we target</h2>
            <p className="section-lead">This site targets conformance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>, and aligns with the <strong>Accessibility for Ontarians with Disabilities Act (AODA)</strong> and the <strong>Accessible Canada Act</strong>.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>What we do</h2>
            <ul className="report-includes" style={{ marginTop: '16px' }}>
              <li>Respect your operating system's <code>prefers-reduced-motion</code> setting — heavy animations are disabled when set</li>
              <li>Support full keyboard navigation across menus, forms, and accordions</li>
              <li>Maintain colour-contrast ratios meeting WCAG AA for normal and large text</li>
              <li>Provide semantic HTML and ARIA attributes for assistive technology</li>
              <li>Use scalable typography that responds to browser zoom up to 200%</li>
              <li>Test against current versions of NVDA, VoiceOver, and JAWS during release reviews</li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>Known limitations</h2>
            <p className="section-lead">We are not perfect. The site contains 3D and particle effects that, while skippable via reduced-motion preferences, may still be visually intense for some users. We are working to expand opt-out controls and welcome feedback on additional barriers you encounter.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>Report a barrier</h2>
            <p className="section-lead">If you encounter an accessibility barrier on this site, please email <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a> with the page, the issue, and (if helpful) the assistive technology you were using. We aim to acknowledge within 2 business days and resolve issues as quickly as practicable.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>Alternative formats</h2>
            <p className="section-lead">Documents on this site can be provided in alternative formats on request. Contact <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a>.</p>

            <h2 className="section-title" style={{ fontSize: '26px', marginTop: '40px' }}>Procurement</h2>
            <p className="section-lead">For procurement reviews, our accessibility conformance can be discussed against the WCAG 2.1 AA criteria checklist. Contact <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a>.</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Contact</div>
              <h3>Report a barrier</h3>
              <p>We acknowledge accessibility reports within 2 business days.</p>
              <a href="mailto:ridarashid.cyber@gmail.com" className="btn btn-primary">Email us <span className="arrow">→</span></a>
            </div>
            <div className="cta-box">
              <div className="tag">Other</div>
              <h3>Privacy Policy</h3>
              <p>How we handle the information you submit through this site.</p>
              <Link to="/legal/privacy" className="btn btn-secondary">Privacy policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
