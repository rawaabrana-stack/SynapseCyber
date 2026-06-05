import React from 'react';
import { Link } from 'react-router-dom';
import { useMailForm } from '../../useMailForm.js';

export default function Quote() {
  const form = useMailForm('Quote Request');

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Company · Request a Quote</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Get a fixed-scope quote in <em>one working day</em>.
          </h1>
          <p className="section-lead">
            Tell us what you need. A senior consultant replies with a scoping call and a clear, fixed-scope quote —
            no sales follow-up, no padded hours, no surprise invoices.
          </p>
        </div>
      </section>

      <section className="quote-section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="quote-panel">
            <div className="quote-banner">
              <svg className="quote-banner-waves" viewBox="0 0 940 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <g transform="rotate(-10 470 190)">
                  <path d="M-120,-70 C120,-110 320,-30 540,-70 760,-110 940,-40 1060,-70 L1060,-12 C940,18 760,-52 540,-12 320,28 120,-52 -120,-12 Z" fill="#FFFFFF" opacity="0.16" />
                  <path d="M-120,42 C120,2 300,82 520,42 740,2 940,72 1060,42 L1060,98 C940,128 740,58 520,98 300,138 120,58 -120,98 Z" fill="#FFFFFF" opacity="0.28" />
                  <path d="M-120,152 C120,112 300,192 520,152 740,112 940,182 1060,152 L1060,208 C940,238 740,168 520,208 300,248 120,168 -120,208 Z" fill="#FFFFFF" opacity="0.20" />
                </g>
              </svg>
              <div className="quote-banner-inner">
                <div>
                  <div className="quote-banner-logo">
                    <span className="logo-dot">S</span>
                    SynapseCyber
                  </div>
                  <h2>Request a quote</h2>
                  <p className="quote-banner-sub">Tell us the scope and we'll reply with a fixed-scope quote within one working day.</p>
                </div>
                <div className="quote-banner-trust">
                  <div className="qbt-head">Why SynapseCyber</div>
                  <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Senior consultants only</div>
                  <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>10+ years, 40+ TRAs &amp; PIAs delivered</div>
                  <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Audit-ready evidence</div>
                </div>
              </div>
            </div>

            <div className="quote-form-card">
              {!form.sent ? (
                <form onSubmit={form.handleSubmit} noValidate>
                  <p className="quote-form-intro">A senior consultant replies within one business day with a fixed-scope quote — no sales runaround.</p>

                  <div className="quote-form-row">
                    <div className="form-field">
                      <label>Full name</label>
                      <div className="field-wrap">
                        <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10" cy="6.5" r="3.2" /><path d="M4 17c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" /></svg>
                        <input type="text" name="name" placeholder="Jane Doe" required />
                      </div>
                    </div>
                    <div className="form-field">
                      <label>Work email</label>
                      <div className="field-wrap">
                        <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="14" height="11" rx="1.5" /><path d="M3 7l7 5 7-5" /></svg>
                        <input type="email" name="email" placeholder="jane@company.com" required />
                      </div>
                    </div>
                  </div>

                  <div className="quote-form-row">
                    <div className="form-field">
                      <label>Organisation</label>
                      <div className="field-wrap">
                        <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 17h14M5 17V5h7v12M12 17V9h4v8M7 8h2M7 11h2M7 14h2" /></svg>
                        <input type="text" name="organisation" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="form-field">
                      <label>Service required</label>
                      <div className="field-wrap">
                        <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10" cy="10" r="7" /><circle cx="10" cy="10" r="3" fill="currentColor" /></svg>
                        <select name="service">
                          <option>Penetration Testing</option>
                          <option>Threat &amp; Risk Assessment (TRA)</option>
                          <option>Privacy Impact Assessment (PIA)</option>
                          <option>Red Team / Adversary Simulation</option>
                          <option>vCISO / Security Advisory</option>
                          <option>Incident Response</option>
                          <option>Not sure yet — help me scope</option>
                        </select>
                        <svg className="field-chevron" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5l4 4 4-4" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Project details</label>
                    <textarea className="quote-textarea" name="message" placeholder="Systems in scope, rough timeline, and any compliance drivers (PIPEDA, SOC 2, RCMP TRA)…" required></textarea>
                  </div>

                  <button className="form-submit-pro" type="submit" disabled={form.sending}>
                    <span>{form.sending ? 'Sending…' : 'Request quote'}</span>
                    <svg viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 7h12M9 2l5 5-5 5" /></svg>
                  </button>

                  {form.error && (
                    <p role="alert" style={{ color: '#c0392b', marginTop: '12px', fontSize: '14px' }}>{form.error}</p>
                  )}

                  <div className="quote-card-footer">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6.5" width="8" height="6" rx="1" /><path d="M5 6.5V4a2 2 0 014 0v2.5" /></svg>
                    <span>Your information stays private. <Link to="/legal/privacy">Privacy Policy</Link>.</span>
                  </div>
                </form>
              ) : (
                <div style={{ padding: '24px 28px', background: 'var(--accent-soft)', borderRadius: '12px', color: 'var(--ink)' }}>
                  <strong>Thanks — quote request received.</strong>
                  <p style={{ marginTop: '8px', color: 'var(--ink-2)' }}>A senior consultant will reply within one business day with a fixed-scope quote.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
