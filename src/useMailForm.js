import { useState } from 'react';

/**
 * Form hook that POSTs the form fields to /api/contact and tracks status.
 * Reads values via FormData, so each field just needs a `name` attribute.
 *
 * @param {string} formType - label included in the email subject/body
 * @returns {{ status: string, sending: boolean, sent: boolean, error: string, handleSubmit: Function }}
 */
export function useMailForm(formType) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setError('');
    setStatus('sending');

    const payload = Object.fromEntries(new FormData(formEl).entries());
    payload.formType = formType;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('sent');
      formEl.reset();
    } catch (err) {
      setError(err.message || 'Could not send. Please email ridarashid.cyber@gmail.com directly.');
      setStatus('error');
    }
  }

  return {
    status,
    sending: status === 'sending',
    sent: status === 'sent',
    error,
    handleSubmit,
  };
}
