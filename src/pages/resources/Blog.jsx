import React from 'react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    cat: 'AI Security',
    date: '2026 · Q2',
    title: 'OWASP LLM Top 10 (2025): what changed and what matters for production',
    summary: 'A practitioner reading of the 2025 update, mapped against real engagement findings across agentic and RAG-based products.',
    status: 'Coming soon',
  },
  {
    cat: 'AppSec',
    date: '2026 · Q1',
    title: 'Non-human identity governance in modern CI/CD pipelines',
    summary: 'Service-account sprawl, OIDC workload federation, and the controls auditors increasingly expect to see exercised.',
    status: 'Coming soon',
  },
  {
    cat: 'Methodology',
    date: '2025',
    title: 'S.I.R.P.: the prioritisation model we built to cut through CVSS noise',
    summary: 'Severity, Impact, Reproducibility, Priority — how we rank what actually matters in your environment, with worked examples.',
    status: 'Coming soon',
  },
  {
    cat: 'TRA &amp; PIA',
    date: '2025',
    title: 'Risk-card discipline: turning an 86-row TRA into a decision the board can sign',
    summary: 'How structured risk cards make residual-risk treatment auditable, defensible, and signable.',
    status: 'Coming soon',
  },
  {
    cat: 'Cloud',
    date: '2025',
    title: 'IAM-first cloud security review: a checklist for AWS, Azure, and GCP',
    summary: 'Identity exposure is the dominant failure mode in modern cloud breaches. A pragmatic review checklist.',
    status: 'Coming soon',
  },
  {
    cat: 'OT / Critical Infrastructure',
    date: '2025',
    title: 'OT-safe pentesting: what we test, what we never touch, and why',
    summary: 'A consultant’s view on rules of engagement for energy, water, and transportation operators.',
    status: 'Coming soon',
  },
];

export default function Blog() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Resources · Blog &amp; Research</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Practitioner writing on <em>security that ships</em>.
          </h1>
          <p className="section-lead">
            Research notes, methodology deep-dives, and conference talks from the SynapseCyber team. New posts publish
            as we wrap engagements and present at DEF CON, ATLSECCON, and OWASP.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="engagements-list">
            {POSTS.map((p) => (
              <article key={p.title} className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector" dangerouslySetInnerHTML={{ __html: p.cat }} />
                  <span className="eng-year">{p.date}</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">{p.title}</h4>
                  <p className="eng-detail">{p.summary}</p>
                  <div className="eng-frameworks"><span>{p.status}</span></div>
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
              <div className="tag">Subscribe</div>
              <h3>Get notified when posts publish.</h3>
              <p>One email per post — no marketing sequences, no SDR follow-up.</p>
              <Link to="/contact" className="btn btn-primary">Contact us <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Case Studies</div>
              <h3>See anonymised engagements.</h3>
              <p>Real client work across finance, healthcare, government, and critical infrastructure.</p>
              <Link to="/resources/case-studies" className="btn btn-secondary">Browse case studies</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
