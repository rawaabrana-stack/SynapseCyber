import React from 'react';
import { Link } from 'react-router-dom';

const ROLES = [
  {
    title: 'Senior Penetration Tester',
    focus: 'Offensive Security',
    location: 'Canada · Remote',
    summary: 'Lead web, mobile, API, network, and cloud engagements. Manual-first methodology. Write reports a board reads and engineers can act on.',
  },
  {
    title: 'Senior TRA / PIA Consultant',
    focus: 'Risk &amp; Compliance',
    location: 'Canada · Hybrid (Atlantic)',
    summary: 'Deliver RCMP Harmonized TRAs and PIAs across federal, provincial, and crown clients. Defensible risk cards. Privacy Commissioner-ready PIAs.',
  },
  {
    title: 'Cloud Security Consultant',
    focus: 'Cloud &amp; AppSec',
    location: 'Canada · Remote',
    summary: 'AWS, Azure, and GCP configuration reviews. IAM-first methodology. IaC scanning and trust-boundary reasoning.',
  },
  {
    title: 'Senior vCISO',
    focus: 'Advisory',
    location: 'Canada · Remote',
    summary: 'Fractional security leadership for regulated SaaS, fintech, and healthcare. Board reporting, audit liaison, and program design.',
  },
];

const VALUES = [
  ['Senior-led, always', 'No junior hand-offs. The person who tests signs off on the testing.'],
  ['Practitioner over salesperson', 'Consultants set scope and write reports. Sales does not negotiate findings.'],
  ['Public research encouraged', 'Speaking at DEFCON, ATLSECCON, OWASP — and writing about what we learn.'],
  ['Canadian, by design', 'Data residency in Canada. Cleared personnel. Procurement-ready from day one.'],
  ['Quality bar, every engagement', 'Independent review on every deliverable. No "good enough" reports leave the door.'],
  ['Conservative judgement', 'When evidence does not support a finding, we say so. No inflated severities.'],
];

export default function Careers() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Company · Careers</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Work with <em>senior</em> security practitioners.
          </h1>
          <p className="section-lead">
            SynapseCyber hires senior consultants exclusively. If you spend most of your week doing the actual
            analysis — not managing other people doing it — we want to talk.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">What we look for</div>
          <h2 className="section-title">Practitioners who can <em>own</em> an engagement.</h2>
          <p className="section-lead">
            We hire for depth: someone who can scope, deliver, and defend their work in front of a board, an auditor,
            or a security commissioner. Public research, conference speaking, and original writing are encouraged
            and supported.
          </p>

          <div className="services-grid" style={{ marginTop: '32px' }}>
            {VALUES.map(([t, d]) => (
              <div key={t} className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 6" /></svg>
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="engagements">
        <div className="container">
          <div className="section-eyebrow">Open Roles</div>
          <h2 className="section-title">Currently <em>hiring</em>.</h2>

          <div className="engagements-list" style={{ marginTop: '40px' }}>
            {ROLES.map((r) => (
              <article key={r.title} className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector" dangerouslySetInnerHTML={{ __html: r.focus }} />
                  <span className="eng-year">{r.location}</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">{r.title}</h4>
                  <p className="eng-detail">{r.summary}</p>
                  <div className="eng-frameworks"><span>Apply via <a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'inherit' }}>ridarashid.cyber@gmail.com</a></span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Apply</div>
              <h3>Send us your work.</h3>
              <p>A short note plus links to research, talks, writeups, or publicly disclosed findings. No CV needed first.</p>
              <a href="mailto:ridarashid.cyber@gmail.com" className="btn btn-primary">ridarashid.cyber@gmail.com</a>
            </div>
            <div className="cta-box">
              <div className="tag">About</div>
              <h3>Learn how we work.</h3>
              <p>Independent, senior-led, and proudly Canadian.</p>
              <Link to="/about" className="btn btn-secondary">About SynapseCyber</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
