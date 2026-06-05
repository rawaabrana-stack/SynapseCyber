import React from 'react';
import { Link } from 'react-router-dom';
import { useMailForm } from '../../useMailForm.js';

export default function Contact() {
  const form = useMailForm('Contact');

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow">Company · Contact</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '20px' }}>
            Talk to a <em>senior consultant</em>.
          </h1>
          <p className="section-lead">
            A 30-minute scoping call covers your environment, the regulatory drivers, and a realistic effort and
            timeline. You receive a fixed-scope quote within one working day — no sales runaround.
          </p>
          <div className="trust-row" style={{ marginTop: '32px', borderTop: 'none', paddingTop: 0 }}>
            <span>&lt; 4 hour average response</span>
            <span>Fixed-scope quote in 1 working day</span>
            <span>NDA-backed conversation</span>
          </div>
        </div>
      </section>

      <section className="quote-section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="quote-panel">
            <div className="quote-form-card" style={{ margin: 0 }}>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '8px' }}>Send us a message</h2>
              <p className="quote-form-intro">A senior consultant replies within one business day.</p>

              {!form.sent ? (
                <form onSubmit={form.handleSubmit} noValidate>
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
                      <label>Reason for contact</label>
                      <div className="field-wrap">
                        <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="10" cy="10" r="7" /><circle cx="10" cy="10" r="3" fill="currentColor" /></svg>
                        <select name="reason">
                          <option>Scope a security engagement</option>
                          <option>Request a quote</option>
                          <option>Sample report request</option>
                          <option>Procurement / RFP question</option>
                          <option>Press / speaking</option>
                          <option>Other</option>
                        </select>
                        <svg className="field-chevron" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5l4 4 4-4" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Message</label>
                    <textarea className="quote-textarea" name="message" placeholder="Briefly describe what you need — systems in scope, regulatory drivers, timing…" required></textarea>
                  </div>

                  <button className="form-submit-pro" type="submit" disabled={form.sending}>
                    <span>{form.sending ? 'Sending…' : 'Send message'}</span>
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
                  <strong>Thanks — message received.</strong>
                  <p style={{ marginTop: '8px', color: 'var(--ink-2)' }}>A senior consultant will reply within one business day. For urgent incident response, call <a href="tel:+19025550100" style={{ color: 'inherit' }}><strong>+1 902 555 0100</strong></a>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="dp-grid">
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
              <h5>Email</h5>
              <p><a href="mailto:ridarashid.cyber@gmail.com" style={{ color: 'var(--accent)' }}>ridarashid.cyber@gmail.com</a></p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <h5>Incident Response</h5>
              <p><a href="tel:+19025550100" style={{ color: 'var(--accent)' }}>+1 902 555 0100</a> · 24/7 hotline</p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>
              <h5>Location</h5>
              <p>Atlantic Canada · Serving clients across Canada &amp; cross-border.</p>
            </div>
            <div className="dp-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              <h5>Response Time</h5>
              <p>&lt; 4 hours during business hours · same-day for incidents.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
