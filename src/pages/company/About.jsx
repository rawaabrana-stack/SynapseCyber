import React from 'react';
import { Link } from 'react-router-dom';

const PRINCIPLES = [
  {
    title: 'Senior-led, end to end',
    body: 'Every engagement is run by a senior consultant from scoping to readout. No junior hand-offs, no scanner output reformatted as a report.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" /><path d="m16.5 11.5 1.8 1.8 3.2-3.6" /></svg>
    ),
  },
  {
    title: 'Independent & vendor-neutral',
    body: 'We do not resell tools or take referral fees. Our only incentive is findings that are accurate, defensible, and in your interest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3z" /><path d="m9 12 2 2 4-4.5" /></svg>
    ),
  },
  {
    title: 'Evidence over noise',
    body: 'Each finding ships with reproduction steps, evidence, and a business-impact rating — not a raw CVSS dump for you to triage alone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /><path d="M8.5 11h5M11 8.5v5" /></svg>
    ),
  },
  {
    title: 'Audit-ready by default',
    body: 'Deliverables are written to stand up to regulators, auditors, and your customers’ security questionnaires — the first time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4h6a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2z" /><path d="M9.5 3.5h5V5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3.5z" /><path d="m9.5 13 1.6 1.6L14.5 11" /></svg>
    ),
  },
];

const SERVICES = [
  { num: '01', name: 'Penetration Testing', tag: 'Offensive Security', to: '/penetration-testing', desc: 'Manual, adversary-style testing of applications, networks, and cloud — chained attack paths and business-logic flaws scanners miss.' },
  { num: '02', name: 'Threat & Risk Assessment', tag: 'Risk', to: '/threat-risk-assessment', desc: 'RCMP Harmonized TRAs that turn technical exposure into residual-risk decisions your board and auditors can sign.' },
  { num: '03', name: 'Privacy Impact Assessment', tag: 'Privacy', to: '/privacy-impact-assessment', desc: 'PIPEDA and provincial-aligned PIAs for systems that handle personal information across public and private sectors.' },
  { num: '04', name: 'Red Team & Adversary Simulation', tag: 'Offensive Security', to: '/red-team-adversary-simulation', desc: 'Goal-based, multi-vector simulation that tests detection and response, not just a vulnerability list.' },
  { num: '05', name: 'vCISO & Security Advisory', tag: 'Advisory', to: '/vciso-advisory', desc: 'Senior security leadership on demand — strategy, roadmaps, and board-ready reporting without a full-time hire.' },
  { num: '06', name: 'Incident Response', tag: '24/7 Response', to: '/incident-response', desc: 'Containment, forensics, and recovery when it matters most — with evidence handling that holds up afterward.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Company · About</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Senior-led security, <em>built in Canada</em>.
          </h1>
          <p className="section-lead">
            SynapseCyber is an independent information-security practice. We deliver penetration testing, threat &amp;
            risk assessments, privacy impact assessments, and vCISO advisory for organisations where the work
            actually has to hold up under audit, regulation, and adversary pressure.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>10+ years in offensive &amp; risk</span>
            <span>40+ TRAs &amp; PIAs delivered</span>
            <span>Canadian data residency</span>
            <span>DEF CON / ATLSECCON speakers</span>
          </div>
        </div>
      </section>

      {/* Positioning / narrative */}
      <section>
        <div className="container">
          <div className="section-eyebrow">Who We Are</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '20px' }}>
            An independent practice, built for work that has to <em>hold up</em>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginTop: '8px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)' }}>
              Most security work fails quietly — not because the testing was wrong, but because the report could not survive
              an auditor, a regulator, or a customer&apos;s security review. We built SynapseCyber to close that gap: senior
              practitioners doing the analysis, and deliverables written to be defended, not just delivered.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)' }}>
              We are deliberately small and senior. The person who tests your environment is the person who briefs your
              team — backed by independent review so no single consultant is the only set of eyes. The result is fewer
              false positives, clearer priorities, and evidence your stakeholders can act on.
            </p>
          </div>
        </div>
      </section>

      {/* How we work — principles */}
      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">How We Work</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '40px' }}>
            Principles that <em>don&apos;t flex</em> under deadline.
          </h2>
          <div className="dp-grid">
            {PRINCIPLES.map((p) => (
              <div className="dp-item" key={p.title}>
                {p.icon}
                <h5>{p.title}</h5>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver — links to service pages */}
      <section>
        <div className="container">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '12px' }}>
            Senior-led services across <em>offence, risk, and privacy</em>.
          </h2>
          <p className="section-lead" style={{ marginBottom: '40px' }}>
            Every service is delivered by a senior consultant and independently reviewed. Explore the work in detail:
          </p>
          <div className="engage-grid">
            {SERVICES.map((s) => (
              <Link to={s.to} className="engage-card" key={s.num}>
                <div className="eng-num">{s.num}</div>
                <h4>{s.name}</h4>
                <div className="eng-best">{s.tag}</div>
                <p>{s.desc}</p>
                <ul className="eng-feat">
                  <li>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>
                    Learn more
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & alignment */}
      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Standards &amp; Alignment</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '20px' }}>
            Recognised frameworks. <em>Canadian</em> data residency.
          </h2>
          <p className="section-lead">
            Our methodology aligns to the standards your auditors, regulators, and customers already trust — and your
            data stays in Canada, handled under controls we can evidence on request.
          </p>
          <div className="trust-row" style={{ marginTop: '28px' }}>
            <span>RCMP Harmonized TRA / PIA</span>
            <span>OWASP · PTES · NIST</span>
            <span>ISO 27001-aligned</span>
            <span>SOC 2-aware</span>
            <span>PIPEDA &amp; provincial privacy</span>
          </div>
          <p style={{ marginTop: '22px', fontSize: '14px', color: 'var(--ink-3)' }}>
            Need our security and privacy posture for procurement? See our{' '}
            <Link to="/trust" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Trust &amp; Assurance</Link> page or our{' '}
            <Link to="/security" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Security &amp; Disclosure</Link> policy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Talk to us</div>
              <h3>Book a scoping call.</h3>
              <p>A 30-minute call with a senior consultant covers your environment and a fixed-scope quote.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Careers</div>
              <h3>Work with us.</h3>
              <p>Senior consultants only. Practitioner culture. Public research encouraged.</p>
              <Link to="/careers" className="btn btn-secondary">Careers</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
