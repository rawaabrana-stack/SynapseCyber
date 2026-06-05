import React from 'react';
import { Link } from 'react-router-dom';

export default function TraMethodology() {
  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Resources · TRA Methodology Guide</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            The RCMP Harmonized <em>Threat &amp; Risk Assessment</em>.
          </h1>
          <p className="section-lead">
            A practitioner-level primer on the methodology used across Canadian federal departments, provincial
            agencies, and crown corporations — and how SynapseCyber delivers it in audit-defensible form.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">What it is</div>
          <h2 className="section-title">A <em>structured</em> way to reason about risk.</h2>
          <p className="section-lead">
            The RCMP Harmonized Threat &amp; Risk Assessment (TRA) methodology combines threat assessment, asset valuation,
            and control analysis into a single, traceable workflow. It is the standard methodology used by the
            Government of Canada for Protected B systems and is widely accepted in Canadian provincial and
            municipal procurement.
          </p>
          <p className="section-lead">
            The deliverable is not just a list of findings — it is a defensible argument that connects threats and
            vulnerabilities to specific assets and controls, with risk treatment decisions documented for sign-off.
          </p>
        </div>
      </section>

      <section className="methodology">
        <div className="container">
          <div className="section-eyebrow">Six Stages</div>
          <h2 className="section-title">From scoping to <em>risk treatment</em>.</h2>

          <div className="method-grid" style={{ marginTop: '40px' }}>
            <div className="method-step" data-num="01">
              <div className="method-step-tag">Stage 01</div>
              <h4>Asset Identification</h4>
              <p className="method-desc">Define the system boundary, primary and secondary assets, and the information types in scope.</p>
            </div>
            <div className="method-step" data-num="02">
              <div className="method-step-tag">Stage 02</div>
              <h4>Threat Assessment</h4>
              <p className="method-desc">Enumerate threat agents, methods, and motivations. The 86-row threat matrix is built here.</p>
            </div>
            <div className="method-step" data-num="03">
              <div className="method-step-tag">Stage 03</div>
              <h4>Vulnerability Assessment</h4>
              <p className="method-desc">Identify exploitable weaknesses across people, process, and technology layers.</p>
            </div>
            <div className="method-step" data-num="04">
              <div className="method-step-tag">Stage 04</div>
              <h4>Risk Calculation</h4>
              <p className="method-desc">Combine threat likelihood, vulnerability, and impact to produce inherent and residual risk ratings.</p>
            </div>
            <div className="method-step" data-num="05">
              <div className="method-step-tag">Stage 05</div>
              <h4>Control Mapping</h4>
              <p className="method-desc">Map controls to ITSG-33 and document existing, planned, and missing safeguards.</p>
            </div>
            <div className="method-step" data-num="06">
              <div className="method-step-tag">Stage 06</div>
              <h4>Treatment &amp; Sign-off</h4>
              <p className="method-desc">Risk-treatment decisions for each risk card, owned and signed by the accountable executive.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-eyebrow">Deliverables</div>
          <h2 className="section-title">What you <em>receive</em>.</h2>

          <ul className="report-includes" style={{ marginTop: '24px' }}>
            <li>Executive summary with residual-risk roll-up and treatment recommendations</li>
            <li>86-row threat assessment matrix with traceability to assets and controls</li>
            <li>22 (or more) risk cards covering inherent risk, residual risk, and treatment decisions</li>
            <li>Control mapping to ITSG-33 with gap analysis</li>
            <li>Data-flow diagrams and trust-boundary maps</li>
            <li>Sign-off-ready treatment register for departmental security officer approval</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-split">
            <div className="cta-box">
              <div className="tag">Scope a TRA</div>
              <h3>Engage a senior TRA lead.</h3>
              <p>40+ TRAs and PIAs delivered across federal and provincial Canada. Fixed-scope quote within one working day.</p>
              <Link to="/threat-risk-assessment" className="btn btn-primary">TRA service page <span className="arrow">→</span></Link>
            </div>
            <div className="cta-box">
              <div className="tag">Privacy Twin</div>
              <h3>Privacy Impact Assessment.</h3>
              <p>The PIA companion methodology for personal-information workloads.</p>
              <Link to="/privacy-impact-assessment" className="btn btn-secondary">PIA service page</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
