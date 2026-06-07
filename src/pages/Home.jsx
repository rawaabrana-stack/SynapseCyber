import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { useMailForm } from '../useMailForm.js';

/**
 * SynapseCyber Information Security — single-file React conversion.
 *
 * Faithful 1:1 port of the original static HTML page:
 *   - All original CSS is injected verbatim (fonts pulled in via @import).
 *   - All four Three.js scenes (dot-globe, methodology network, CTA wave-grid,
 *     footer particles) plus the nav-scroll, hero-replay, scroll-reveal,
 *     count-up and EN/FR toggle behaviours run inside one mount effect, scoped
 *     to a root ref, with full teardown on unmount.
 *
 * Requires `three` (the artifact runtime provides r128; in your own project run
 * `npm install three`). No other runtime dependencies.
 */

export const CSS = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
  :root {
    --bg: #F8FAFC;
    --bg-alt: #F1F5F9;
    --surface: #FFFFFF;
    --ink: #0F172A;
    --ink-2: #334155;
    --ink-3: #64748B;
    --line: #E2E8F0;
    --line-2: #CBD5E1;
    --accent: #2563EB;
    --accent-2: #1D4ED8;
    --accent-soft: #DBEAFE;
    --display: "Fraunces", Georgia, serif;
    --sans: "Manrope", system-ui, sans-serif;
    --mono: "JetBrains Mono", monospace;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--ink);
    line-height: 1.55;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  .container { max-width: 1240px; margin: 0 auto; padding: 0 32px; position: relative; z-index: 2; }

  /* TOP BAR */
  .topbar { background: var(--ink); color: #E2E8F0; font-size: 13px; padding: 10px 0; }
  .topbar .container { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
  .topbar a { color: #60A5FA; text-decoration: none; transition: color .15s ease; }
  .topbar a:hover { color: #93C5FD; text-decoration: underline; }
  .pulse { display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); animation: pulse 2s infinite; margin-right: 8px; }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6); }
    70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
  }

  /* NAV */
  nav {
    background: transparent;
    border-bottom: 1px solid transparent;
    padding: 18px 0;
    position: sticky; top: 0; z-index: 50;
    transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
  }
  nav.scrolled {
    background: rgba(248, 250, 252, 0.92);
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(12px);
  }
  nav .container { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
  .logo { font-family: var(--display); font-weight: 600; font-size: 24px; letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; color: #FFFFFF; transition: color 0.4s; }
  nav.scrolled .logo { color: var(--ink); }
  .logo-mark {
    width: 30px; height: 30px; background: var(--accent); color: #FFFFFF;
    display: grid; place-items: center; font-family: var(--mono); font-size: 14px;
    border-radius: 4px; transform: rotate(-3deg);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s;
  }
  nav.scrolled .logo-mark { background: var(--ink); }
  .logo:hover .logo-mark { transform: rotate(360deg); }
  .logo-mark::after { content: "S"; }
  .nav-links { display: flex; gap: 28px; align-items: center; font-size: 14.5px; font-weight: 500; }
  .nav-links a { color: rgba(255,255,255,0.85); transition: color 0.2s; }
  nav.scrolled .nav-links a { color: var(--ink-2); }
  .nav-links a:hover { color: var(--accent); }
  .nav-cta {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.3);
    color: #FFFFFF;
    padding: 10px 18px; border-radius: 6px; font-size: 14px; font-weight: 600;
    transition: all 0.3s;
    backdrop-filter: blur(8px);
  }
  nav.scrolled .nav-cta { background: var(--ink); color: #FFFFFF; border-color: var(--ink); }
  .nav-cta:hover { background: var(--accent); color: #fff; border-color: var(--accent); transform: translateY(-1px); }
  /* Hamburger button — hidden on desktop, shown on mobile */
  .nav-toggle {
    display: none;
    width: 42px; height: 42px; padding: 0;
    flex-direction: column; align-items: center; justify-content: center; gap: 5px;
    background: transparent; border: 1px solid rgba(255,255,255,0.35); border-radius: 8px; cursor: pointer;
  }
  .nav-toggle span { display: block; width: 18px; height: 2px; background: #fff; border-radius: 2px; transition: transform 0.25s ease, opacity 0.2s ease; }
  nav.scrolled .nav-toggle { border-color: var(--line-2); }
  nav.scrolled .nav-toggle span { background: var(--ink); }
  .nav-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-toggle.is-open span:nth-child(2) { opacity: 0; }
  .nav-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .nav-toggle.is-open { background: var(--ink); border-color: var(--ink); }
  .nav-toggle.is-open span { background: #fff; }

  /* Mobile dropdown menu */
  .mobile-menu { display: none; overflow: hidden; max-height: 0; background: rgba(248,250,252,0.98); backdrop-filter: blur(12px); border-bottom: 1px solid transparent; transition: max-height 0.32s ease, border-color 0.32s ease; }
  .mobile-menu.open { max-height: 70vh; border-bottom-color: var(--line); }
  .mobile-menu .container { display: flex; flex-direction: column; padding-top: 6px; padding-bottom: 18px; }
  .mobile-menu a { padding: 14px 2px; font-size: 16px; font-weight: 600; color: var(--ink-2); border-bottom: 1px solid var(--line); }
  .mobile-menu a:hover { color: var(--accent); }
  .mobile-menu .mm-cta { margin-top: 14px; }
  .mobile-menu .mm-cta .btn { width: 100%; justify-content: center; }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .nav-toggle { display: flex; }
    .mobile-menu { display: block; }
  }

  /* ============ NEW DARK CINEMATIC HERO ============ */
  .hero-intro {
    position: relative;
    min-height: 78vh;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(15, 23, 42, 0.6) 0%, transparent 60%),
      linear-gradient(to bottom, #0B1120 0%, #0B1120 60%, #0F1A2E 80%, #13203A 92%, #18243F 100%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -90px;
    padding: 100px 24px 80px;
  }
  .hero-intro::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;
    height: 220px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(241, 245, 249, 0.04) 30%,
      rgba(241, 245, 249, 0.25) 65%,
      rgba(241, 245, 249, 0.7) 88%,
      var(--bg-alt) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
  .hero-bg-noise {
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
    opacity: 0.06;
    pointer-events: none;
    mix-blend-mode: overlay;
  }
  .hero-arc {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -45%);
    width: min(1400px, 110vw);
    height: auto;
    pointer-events: none;
    z-index: 2;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .arc {
    stroke-dasharray: 2200;
    stroke-dashoffset: 2200;
    animation: drawArc 2.2s 0.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  /* After draw completes, add persistent glow pulse */
  .arc-mega { animation: drawArc 2.2s 0.4s cubic-bezier(0.65, 0, 0.35, 1) forwards, arcGlowMega 5s 3s ease-in-out infinite; }
  .arc-soft { animation: drawArc 2.2s 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards, arcGlowSoft 4s 3.2s ease-in-out infinite; }
  .arc-main { animation: drawArc 2.2s 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards, arcGlowMain 3s 3.4s ease-in-out infinite; }
  .arc-core { animation: drawArc 2.2s 0.7s cubic-bezier(0.65, 0, 0.35, 1) forwards; }
  @keyframes drawArc { to { stroke-dashoffset: 0; } }
  @keyframes arcGlowMega { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
  @keyframes arcGlowSoft { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }
  @keyframes arcGlowMain { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } }

  .hero-content {
    position: relative;
    z-index: 3;
    text-align: center;
    max-width: 1200px;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.7);
    margin-bottom: 28px;
    padding: 8px 16px;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
    backdrop-filter: blur(8px);
    background: rgba(37, 99, 235, 0.08);
    opacity: 0;
    animation: fadeInSlow 1s 0.2s ease-out forwards;
  }
  .hero-eyebrow .dot {
    width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
    box-shadow: 0 0 8px var(--accent);
    animation: dotPulse 2s infinite;
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  @keyframes fadeInSlow { to { opacity: 1; } }

  .brand-title {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(40px, 10vw, 150px);
    line-height: 1;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin: 0 0 28px;
    white-space: nowrap;
    text-shadow: 0 0 60px rgba(37, 99, 235, 0.4);
    animation: brandBreathe 6s 4.5s ease-in-out infinite;
  }
  @keyframes brandBreathe {
    0%, 100% { text-shadow: 0 0 60px rgba(37, 99, 235, 0.4); }
    50% { text-shadow: 0 0 90px rgba(37, 99, 235, 0.7), 0 0 30px rgba(255,255,255,0.15); }
  }
  .brand-title span {
    display: inline-block;
    opacity: 0;
    transform: translateY(40px);
    filter: blur(24px);
    animation: letterReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: calc(2.2s + var(--i) * 0.08s);
  }
  @keyframes letterReveal {
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }

  .brand-tagline {
    font-family: var(--mono);
    font-size: clamp(13px, 1.4vw, 18px);
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: rgba(255,255,255,0.7);
    margin-bottom: 36px;
    opacity: 0;
    animation: fadeInUp 1s 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-cta-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    color: #0F172A;
    padding: 16px 32px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    animation: fadeInUp 1s 3.7s cubic-bezier(0.16, 1, 0.3, 1) forwards, ctaPulse 3s 5s ease-in-out infinite;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }
  @keyframes ctaPulse {
    0%, 100% { box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255,255,255,0.1); }
    50% { box-shadow: 0 8px 40px rgba(37, 99, 235, 0.6), 0 0 0 1px rgba(255,255,255,0.2); }
  }
  .hero-cta-pill::before {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent);
    transition: left 0.6s;
  }
  .hero-cta-pill:hover::before { left: 100%; }
  .hero-cta-pill:hover {
    background: var(--accent);
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.6);
  }

  .hero-subnote {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    margin-top: 20px;
    opacity: 0;
    animation: fadeInSlow 1s 4s ease-out forwards;
  }

  /* ============ QUOTE SECTION (redesigned to match reference) ============ */
  .quote-section {
    background: linear-gradient(180deg, #EEF5FF 0%, var(--bg) 72%);
    padding: 100px 0;
    border-bottom: 1px solid var(--line);
  }
  .quote-panel { max-width: 940px; margin: 0 auto; position: relative; }

  /* ---- Soft blue wavy banner ---- */
  .quote-banner {
    position: relative;
    border-radius: 24px;
    padding: 48px 52px 104px;
    background: linear-gradient(135deg, #CFE0FE 0%, #BFD5FD 48%, #B0CAFC 100%);
    overflow: hidden;
    isolation: isolate;
  }
  .quote-banner-waves { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
  .quote-banner-inner {
    position: relative; z-index: 1;
    display: flex; align-items: flex-start; justify-content: space-between; gap: 36px;
  }
  .quote-banner-logo {
    font-family: var(--display); font-style: italic; font-weight: 600;
    font-size: 18px; letter-spacing: -0.01em; color: var(--ink);
    display: inline-flex; align-items: center; gap: 9px; margin-bottom: 20px;
  }
  .quote-banner-logo .logo-dot {
    width: 24px; height: 24px; border-radius: 6px;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    display: inline-flex; align-items: center; justify-content: center;
    color: #fff; font-family: var(--mono); font-weight: 700; font-size: 13px; line-height: 1;
    box-shadow: 0 4px 10px -3px rgba(37,99,235,0.5);
  }
  .quote-banner-trust {
    flex-shrink: 0; width: 256px;
    background: rgba(255,255,255,0.94); border: 1px solid rgba(255,255,255,0.9);
    border-radius: 16px; padding: 20px 22px;
    box-shadow: 0 18px 40px -16px rgba(15,23,42,0.28);
    display: flex; flex-direction: column; gap: 13px;
  }
  .qbt-head { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--accent); margin-bottom: 2px; }
  .qbt-row { display: flex; align-items: flex-start; gap: 10px; font-size: 13.5px; color: var(--ink-2); line-height: 1.45; font-weight: 500; }
  .qbt-row svg { width: 15px; height: 15px; color: var(--accent); flex-shrink: 0; margin-top: 2px; }
  .quote-banner h2 {
    font-family: var(--display); font-weight: 600;
    font-size: clamp(30px, 4.6vw, 44px); letter-spacing: -0.028em;
    line-height: 1.04; color: var(--ink); margin: 0 0 16px;
  }
  .quote-banner-sub {
    font-size: 16.5px; line-height: 1.5; color: #1B3D70;
    max-width: 400px; font-weight: 500;
  }
  .quote-banner-media {
    flex-shrink: 0; width: 210px; height: 156px;
    border-radius: 18px; overflow: hidden;
    background: #fff; border: 6px solid #fff;
    box-shadow: 0 16px 36px -12px rgba(15,23,42,0.28);
  }
  .quote-banner-media svg, .quote-banner-media img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* ---- White form card overlapping the banner ---- */
  .quote-form-card {
    position: relative; z-index: 2;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 38px;
    margin: -68px 40px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 34px 64px -24px rgba(15,23,42,0.20);
  }
  .describe-label { display: block; font-weight: 700; font-size: 15px; color: var(--ink); margin-bottom: 12px; }
  .quote-textarea {
    width: 100%; min-height: 124px; resize: vertical;
    padding: 16px 18px; font-family: var(--sans); font-size: 15px;
    color: var(--ink); background: var(--bg);
    border: 1.5px solid var(--line); border-radius: 12px;
    transition: all 0.25s cubic-bezier(0.4,0,0.2,1); margin-bottom: 22px;
  }
  .quote-textarea::placeholder { color: var(--ink-3); }
  .quote-textarea:focus { outline: none; border-color: var(--accent); background: var(--surface); box-shadow: 0 0 0 4px rgba(37,99,235,0.10); }
  .quote-form-intro { font-size: 13.5px; color: var(--ink-3); line-height: 1.55; margin: 0 0 24px; max-width: 640px; }
  .form-field .quote-textarea { margin-bottom: 0; min-height: 110px; }
  .quote-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 720px) {
    .quote-banner { padding: 40px 30px 96px; }
    .quote-banner-inner { flex-direction: column; }
    .quote-banner-trust { width: 100%; }
    .quote-form-card { margin: -66px 16px 0; padding: 28px 22px; }
  }
  @media (max-width: 560px) { .quote-form-row { grid-template-columns: 1fr; } }

    /* ============ TRUST & RECOGNITION ============ */
  .trust-section {
    background: var(--bg);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid var(--line);
  }
  .trust-section::before {
    content: "";
    position: absolute;
    top: -200px; right: -200px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(29, 78, 216, 0.04), transparent 70%);
    pointer-events: none;
  }
  .trust-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 64px;
  }
  .trust-header .section-eyebrow { text-align: center; }
  .trust-title {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(30px, 3.6vw, 44px);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 16px;
    color: var(--ink);
  }
  .trust-title em { font-style: italic; color: var(--accent); }
  .trust-lead {
    font-size: 17px;
    color: var(--ink-2);
    line-height: 1.5;
  }

  /* ============ EDITORIAL CREDENTIALS LAYOUT ============ */
  .creds-redesign {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-bottom: 72px;
    position: relative;
  }
  @media (max-width: 900px) { .creds-redesign { grid-template-columns: 1fr; gap: 56px; } }

  .creds-redesign::before {
    content: "";
    position: absolute;
    top: 60px; bottom: 0;
    left: 50%;
    width: 1px;
    background: linear-gradient(to bottom, var(--line), transparent);
    pointer-events: none;
  }
  @media (max-width: 900px) { .creds-redesign::before { display: none; } }

  .creds-block-head {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 40px;
  }
  .creds-block-num {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.15em;
    font-weight: 500;
  }
  .creds-block-label {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--ink);
    font-weight: 600;
    white-space: nowrap;
  }
  .creds-block-line {
    flex: 1;
    height: 1px;
    background: var(--line);
  }

  .creds-block-items {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .creds-item {
    position: relative;
    padding-left: 22px;
    transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: default;
  }
  .creds-item::before {
    content: "";
    position: absolute;
    top: 13px;
    left: 0;
    width: 8px;
    height: 8px;
    background: var(--accent-soft);
    border: 1.5px solid var(--accent);
    border-radius: 50%;
    transition: all 0.3s;
  }
  .creds-item:hover { padding-left: 30px; }
  .creds-item:hover::before {
    background: var(--accent);
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.15);
  }
  .creds-item:hover .creds-item-name { color: var(--accent); }

  .creds-item-name {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(22px, 2vw, 28px);
    letter-spacing: -0.015em;
    color: var(--ink);
    line-height: 1.2;
    margin-bottom: 8px;
    transition: color 0.3s;
  }
  .creds-item-desc {
    font-family: var(--display);
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: var(--ink-2);
    line-height: 1.45;
    margin-bottom: 8px;
  }
  .creds-item-source {
    font-family: var(--mono);
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--ink-3);
    position: relative;
    padding-left: 14px;
  }
  .creds-item-source::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 1px;
    background: var(--ink-3);
  }

  /* Dark featured stat block */
  .trust-stats {
    background: linear-gradient(135deg, #0B1120 0%, #0E1A30 100%);
    border-radius: 14px;
    padding: 36px 40px;
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
    gap: 24px;
    align-items: center;
    margin-bottom: 64px;
    position: relative;
    overflow: hidden;
  }
  .trust-stats::before {
    content: "";
    position: absolute;
    top: -100px; left: -100px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(29, 78, 216, 0.25), transparent 70%);
    pointer-events: none;
  }
  @media (max-width: 800px) {
    .trust-stats {
      grid-template-columns: 1fr 1fr;
      gap: 32px 24px;
    }
    .trust-stat-divider { display: none; }
  }
  .trust-stat {
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .trust-stat-num {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(40px, 4.5vw, 56px);
    letter-spacing: -0.03em;
    color: #FFFFFF;
    line-height: 1;
    margin-bottom: 10px;
  }
  .trust-stat-label {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.7);
  }
  .trust-stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(255,255,255,0.1);
  }

  /* Speaking row */
  .speaking-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
    padding-top: 40px;
    border-top: 1px dashed var(--line);
  }
  .speaking-label {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--ink-3);
  }
  .speaking-logos {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .speaking-logo {
    font-family: var(--display);
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.01em;
    color: var(--ink-2);
    transition: color 0.2s;
  }
  .speaking-logo em { font-style: italic; color: var(--ink-3); font-weight: 400; }
  .speaking-logo:hover { color: var(--accent); }
  .speaking-dot {
    color: var(--line-2);
    font-size: 18px;
  }

  /* ----- Trust row (below the form card) ----- */
  .quote-trust-row {
    display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
    gap: 12px 16px; max-width: 820px; margin: 30px auto 0;
  }
  .quote-response {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 20px; background: var(--surface);
    border: 1px solid var(--line); border-radius: 14px; transition: all 0.3s;
  }
  .quote-response:hover { border-color: var(--accent); box-shadow: 0 12px 28px -8px rgba(29,78,216,0.12); }
  .quote-response-dot { width: 11px; height: 11px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 0 4px rgba(34,197,94,0.15); animation: dotPulse 2s infinite; flex-shrink: 0; }
  .quote-response-num { font-family: var(--display); font-weight: 500; font-size: 20px; letter-spacing: -0.02em; color: var(--ink); line-height: 1.1; }
  .quote-response-label { font-size: 11.5px; color: var(--ink-3); margin-top: 2px; }

  .quote-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .quote-pill {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 7px 14px; background: var(--surface);
    border: 1px solid var(--line); border-radius: 999px;
    font-size: 13px; color: var(--ink-2); font-weight: 500; transition: all 0.25s;
  }
  .quote-pill svg { width: 12px; height: 12px; color: var(--accent); flex-shrink: 0; }
  .quote-pill:hover { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

    /* ----- Form fields with icons ----- */
  .form-field {
    margin-bottom: 16px;
  }
  .form-field label {
    display: block;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--ink-2);
    margin-bottom: 7px;
  }
  .field-wrap {
    position: relative;
    transition: transform 0.2s;
  }
  .field-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px; height: 18px;
    color: var(--ink-3);
    pointer-events: none;
    transition: color 0.2s;
    z-index: 2;
  }
  .field-chevron {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px; height: 12px;
    color: var(--ink-3);
    pointer-events: none;
    transition: transform 0.2s;
  }
  .field-wrap input,
  .field-wrap select {
    width: 100%;
    padding: 13px 16px 13px 42px;
    font-family: var(--sans);
    font-size: 14.5px;
    color: var(--ink);
    background: var(--bg);
    border: 1.5px solid var(--line);
    border-radius: 10px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  .field-wrap select { padding-right: 38px; }
  .field-wrap input::placeholder { color: var(--ink-3); }
  .field-wrap input:focus,
  .field-wrap select:focus {
    outline: none;
    border-color: var(--accent);
    background: var(--surface);
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.08);
  }
  .field-wrap:focus-within .field-icon { color: var(--accent); }
  .field-wrap:focus-within .field-chevron { transform: translateY(-50%) rotate(180deg); }

  /* ----- Submit button ----- */
  .form-submit-pro {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px;
    background: var(--ink);
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    font-family: var(--sans);
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.005em;
    cursor: pointer;
    margin-top: 12px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  .form-submit-pro::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--accent), #2563EB);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
  }
  .form-submit-pro > * {
    position: relative;
    z-index: 1;
  }
  .form-submit-pro svg {
    width: 16px;
    height: 14px;
    transition: transform 0.3s;
  }
  .form-submit-pro:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -6px rgba(29, 78, 216, 0.45);
  }
  .form-submit-pro:hover::before { opacity: 1; }
  .form-submit-pro:hover svg { transform: translateX(4px); }
  .form-submit-pro:active { transform: translateY(0); }

  /* ----- Footer privacy note ----- */
  .quote-card-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    font-size: 12px;
    color: var(--ink-3);
  }
  .quote-card-footer svg {
    width: 14px; height: 14px;
    flex-shrink: 0;
    color: var(--ink-3);
  }
  .quote-card-footer a {
    color: var(--ink-2);
    text-decoration: underline;
    text-decoration-color: var(--line-2);
    text-underline-offset: 2px;
  }
  .quote-card-footer a:hover { color: var(--accent); text-decoration-color: var(--accent); }

  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 24px; border-radius: 6px; font-weight: 600; font-size: 15px;
    transition: all 0.2s; cursor: pointer; border: none;
  }
  .btn-primary { background: var(--ink); color: var(--bg); }
  .btn-primary:hover { background: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(29, 78, 216, 0.25); }
  .btn-secondary { background: transparent; color: var(--ink); border: 1px solid var(--line-2); }
  .btn-secondary:hover { border-color: var(--ink); transform: translateY(-1px); }
  .btn .arrow { transition: transform 0.2s; }
  .btn:hover .arrow { transform: translateX(4px); }

  .trust-row {
    display: flex; gap: 20px; flex-wrap: wrap;
    font-size: 13px; color: var(--ink-3);
    padding-top: 24px; border-top: 1px solid var(--line);
  }
  .trust-row span { display: inline-flex; align-items: center; gap: 6px; }
  .trust-row span::before { content: "✓"; color: var(--accent); font-weight: 700; }

  .hero-card {
    background: var(--surface); border: 1px solid var(--line);
    border-radius: 12px; padding: 32px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.06);
    position: relative; z-index: 3;
  }
  .hero-card h3 { font-family: var(--display); font-weight: 500; font-size: 22px; letter-spacing: -0.01em; margin-bottom: 8px; }
  .hero-card .sub { color: var(--ink-3); font-size: 14px; margin-bottom: 24px; }
  .form-group { margin-bottom: 16px; }
  .form-group label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 6px; color: var(--ink-2); }
  .form-group input, .form-group select {
    width: 100%; padding: 11px 14px; border: 1px solid var(--line-2);
    border-radius: 6px; font-family: var(--sans); font-size: 14px;
    background: var(--bg); transition: border-color 0.2s;
  }
  .form-group input:focus, .form-group select:focus { outline: none; border-color: var(--ink); }
  .form-submit {
    width: 100%; background: var(--accent); color: #fff;
    padding: 13px; border-radius: 6px; border: none;
    font-weight: 600; font-size: 15px; cursor: pointer; margin-top: 8px;
    transition: all 0.2s;
  }
  .form-submit:hover { background: var(--accent-2); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3); }
  .privacy-note { font-size: 12px; color: var(--ink-3); margin-top: 12px; line-height: 1.4; }

  /* COMPLIANCE STRIP */
  .compliance-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 32px 0; background: var(--bg-alt); overflow: hidden; }
  .compliance-strip .label { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-3); text-align: center; margin-bottom: 20px; }
  .badges-track { display: flex; gap: 56px; align-items: center; animation: scroll-left 30s linear infinite; width: max-content; }
  @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .badge-item { font-family: var(--display); font-weight: 500; font-size: 17px; color: var(--ink-2); letter-spacing: -0.01em; display: flex; align-items: center; gap: 10px; white-space: nowrap; }
  .badge-item .dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; }

  /* SECTIONS */
  section { padding: 100px 0; position: relative; }
  .section-eyebrow { font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--accent); margin-bottom: 16px; }
  .section-title { font-family: var(--display); font-weight: 500; font-size: clamp(32px, 4vw, 48px); letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 16px; max-width: 700px; }
  .section-title em { font-style: italic; color: var(--accent); }
  .section-lead { font-size: 17px; color: var(--ink-2); max-width: 620px; margin-bottom: 56px; }

  /* SERVICES */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }

  .service-card {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 30px 28px 26px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
  }
  .service-card::before {
    content: "";
    position: absolute;
    top: -40px; right: -40px;
    width: 140px; height: 140px;
    background: radial-gradient(circle, rgba(29, 78, 216, 0.08), transparent 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s;
  }
  .service-card::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .service-card:hover {
    transform: translateY(-6px);
    border-color: var(--ink-3);
    box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.12);
  }
  .service-card:hover::before { opacity: 1; }
  .service-card:hover::after { transform: scaleX(1); }

  .service-icon {
    width: 48px; height: 48px;
    background: var(--accent-soft);
    color: var(--accent);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .service-icon svg { width: 24px; height: 24px; }
  .service-card:hover .service-icon {
    background: var(--accent);
    color: #FFFFFF;
    transform: scale(1.08) rotate(-5deg);
  }

  .service-card h3 {
    font-family: var(--display);
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.01em;
    line-height: 1.2;
    margin-bottom: 10px;
    color: var(--ink);
  }
  .service-card p {
    color: var(--ink-3);
    font-size: 14px;
    line-height: 1.55;
    margin-bottom: 18px;
    flex: 1;
  }
  .read-more {
    font-size: 13px;
    font-weight: 600;
    color: var(--accent);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.2s;
  }
  .read-more svg {
    width: 12px; height: 10px;
    transition: transform 0.3s;
  }
  .service-card:hover .read-more {
    gap: 10px;
  }
  .service-card:hover .read-more svg {
    transform: translateX(2px);
  }

  /* METHODOLOGY */
  .methodology { background: var(--bg-alt); position: relative; overflow: hidden; }
  #method-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.4; }
  .method-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 900px) { .method-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .method-grid { grid-template-columns: 1fr; } }

  .method-step {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 36px 32px 32px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .method-step::before {
    content: attr(data-num);
    position: absolute;
    top: -28px;
    right: -8px;
    font-family: var(--display);
    font-size: 180px;
    font-weight: 500;
    font-style: italic;
    color: var(--accent);
    opacity: 0.06;
    line-height: 1;
    pointer-events: none;
    transition: opacity 0.4s, transform 0.4s;
  }
  .method-step::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 3px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .method-step:hover {
    transform: translateY(-6px);
    border-color: var(--ink-3);
    box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.12);
  }
  .method-step:hover::before {
    opacity: 0.12;
    transform: scale(1.05);
  }
  .method-step:hover::after { transform: scaleX(1); }

  .method-icon {
    width: 52px;
    height: 52px;
    margin-bottom: 22px;
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-soft);
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .method-step:hover .method-icon {
    transform: scale(1.08) rotate(-4deg);
    background: var(--accent);
    color: #FFFFFF;
  }
  .method-icon svg { width: 28px; height: 28px; }

  .method-step-tag {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent);
    margin-bottom: 10px;
  }
  .method-step h4 {
    font-family: var(--display);
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 12px;
    color: var(--ink);
  }
  .method-step .method-desc {
    color: var(--ink-3);
    font-size: 14px;
    line-height: 1.55;
    margin-bottom: 20px;
  }
  .method-step ul {
    list-style: none;
    font-size: 13.5px;
    color: var(--ink-2);
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }
  .method-step ul li {
    padding: 5px 0 5px 22px;
    position: relative;
  }
  .method-step ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 12px;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s;
  }
  .method-step:hover ul li::before { width: 16px; }

  /* STATS */
  .stats-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin: 56px 0; }
  @media (max-width: 700px) { .stats-bar { grid-template-columns: repeat(2, 1fr); } }
  .stat { padding: 32px 24px; border-right: 1px solid var(--line); text-align: left; }
  .stat:last-child { border-right: none; }
  .stat-num { font-family: var(--display); font-weight: 500; font-size: 44px; letter-spacing: -0.02em; color: var(--ink); line-height: 1; margin-bottom: 8px; }
  .stat-label { font-family: var(--mono); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-3); }

  /* WHY CHOOSE US - Rich card layout */
  .why-layout {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 900px) {
    .why-layout { grid-template-columns: 1fr; gap: 56px; }
  }

  .why-intro {
    position: sticky;
    top: 120px;
  }
  @media (max-width: 900px) {
    .why-intro { position: static; }
  }
  .why-intro .section-title { margin-bottom: 20px; }
  .why-intro .section-lead { margin-bottom: 40px; }

  .why-proof {
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 32px;
    border-top: 1px solid var(--line);
  }
  .why-proof-item { }
  .why-proof-num {
    font-family: var(--display);
    font-weight: 500;
    font-size: 56px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--ink);
    display: inline-flex;
    align-items: flex-start;
  }
  .why-proof-num .pct {
    font-size: 0.45em;
    color: var(--accent);
    margin-top: 0.2em;
    margin-left: 2px;
  }
  .why-proof-label {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--ink-3);
    margin-top: 8px;
  }
  .why-proof-divider {
    width: 1px;
    height: 56px;
    background: var(--line);
  }

  .why-cards {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .why-card {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 32px 36px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .why-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(29, 78, 216, 0.02), transparent 40%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
  }
  .why-card::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 0; height: 2px;
    background: var(--accent);
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .why-card:hover {
    border-color: var(--ink-3);
    transform: translateX(4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.06);
  }
  .why-card:hover::before { opacity: 1; }
  .why-card:hover::after { width: 100%; }

  .why-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .why-tag {
    font-family: var(--mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--accent);
    padding: 5px 10px;
    background: var(--accent-soft);
    border-radius: 4px;
  }
  .why-icon {
    width: 32px;
    height: 32px;
    color: var(--ink-3);
    transition: color 0.4s, transform 0.4s;
  }
  .why-card:hover .why-icon {
    color: var(--accent);
    transform: scale(1.1) rotate(-5deg);
  }

  .why-bignum {
    font-family: var(--display);
    font-style: italic;
    font-weight: 400;
    font-size: 96px;
    line-height: 0.9;
    color: var(--ink);
    opacity: 0.06;
    position: absolute;
    right: 28px;
    bottom: 16px;
    pointer-events: none;
    transition: opacity 0.4s, color 0.4s;
  }
  .why-card:hover .why-bignum {
    opacity: 0.12;
    color: var(--accent);
  }

  .why-card-title {
    font-family: var(--display);
    font-weight: 500;
    font-size: 26px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--ink);
    position: relative;
    z-index: 1;
  }

  .why-card-text {
    color: var(--ink-2);
    font-size: 15.5px;
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 90%;
    position: relative;
    z-index: 1;
  }

  .why-card-foot {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-3);
    padding-top: 18px;
    border-top: 1px dashed var(--line);
    position: relative;
    z-index: 1;
  }
  .why-card-foot .dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ============ COVERAGE / DOT GLOBE SECTION ============ */
  .coverage {
    background: var(--bg);
    padding: 100px 0 120px;
    position: relative;
    overflow: hidden;
  }

  .coverage-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .coverage-intro .section-eyebrow {
    text-align: center;
  }
  .coverage-intro-title {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(26px, 3.4vw, 36px);
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--ink-2);
    margin-top: 8px;
  }

  .globe-container {
    position: relative;
    width: 100%;
    height: clamp(420px, 56vw, 640px);
    margin-bottom: 20px;
  }
  #dot-globe {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    display: block;
  }

  .globe-stat {
    position: absolute;
    top: 38%;
    z-index: 2;
    max-width: 180px;
  }
  .globe-stat-left {
    left: 6%;
    text-align: left;
  }
  .globe-stat-right {
    right: 6%;
    text-align: right;
  }
  @media (max-width: 700px) {
    .globe-stat { top: 28%; max-width: 130px; }
    .globe-stat-left { left: 4%; }
    .globe-stat-right { right: 4%; }
  }

  .globe-stat-num {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(56px, 8vw, 96px);
    letter-spacing: -0.04em;
    color: var(--ink);
    line-height: 1;
    margin-bottom: 8px;
    display: inline-flex;
    align-items: flex-start;
    opacity: 0;
    animation: statFadeIn 0.8s 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .globe-stat-num .plus {
    font-size: 0.5em;
    color: var(--accent);
    margin-top: 0.15em;
    margin-left: 2px;
  }
  @keyframes statFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .globe-stat-label {
    font-size: 13px;
    color: var(--ink-2);
    line-height: 1.45;
    opacity: 0;
    animation: statFadeIn 0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .coverage-heading {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .coverage-heading h2 {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(42px, 6vw, 72px);
    letter-spacing: -0.025em;
    line-height: 1.05;
    color: var(--ink);
    margin-bottom: 18px;
  }
  .coverage-heading p {
    font-size: 16px;
    color: var(--ink-3);
    max-width: 540px;
    margin: 0 auto;
    line-height: 1.55;
  }

  /* ============ NOTABLE ENGAGEMENTS ============ */
  .engagements {
    background: var(--bg-alt);
    padding: 120px 0;
    position: relative;
  }
  .engagements-list { margin-top: 56px; }

  .engagement-row {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 48px;
    padding: 36px 0;
    border-bottom: 1px solid var(--line);
    transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }
  .engagement-row:first-child { border-top: 1px solid var(--line); }
  .engagement-row::before {
    content: "";
    position: absolute;
    left: 0; bottom: -1px;
    width: 0; height: 1px;
    background: var(--accent);
    transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .engagement-row:hover { padding-left: 14px; }
  .engagement-row:hover::before { width: 100%; }
  .engagement-row:hover .eng-title { color: var(--accent); }

  @media (max-width: 800px) {
    .engagement-row { grid-template-columns: 1fr; gap: 16px; }
  }

  .eng-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 6px;
  }
  .eng-sector {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--accent);
    font-weight: 500;
  }
  .eng-year {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-3);
    letter-spacing: 0.1em;
  }

  .eng-title {
    font-family: var(--display);
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -0.015em;
    line-height: 1.25;
    margin-bottom: 12px;
    color: var(--ink);
    transition: color 0.3s;
  }
  .eng-detail {
    font-size: 15.5px;
    color: var(--ink-2);
    line-height: 1.6;
    margin-bottom: 18px;
    max-width: 680px;
  }
  .eng-frameworks {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
  .eng-frameworks span {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--ink-3);
    padding: 0 14px;
    position: relative;
  }
  .eng-frameworks span:first-child { padding-left: 0; }
  .eng-frameworks span:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0; top: 50%;
    width: 1px; height: 10px;
    background: var(--line-2);
    transform: translateY(-50%);
  }

  /* ============ FOUNDER / PRACTITIONER ============ */
  .founder {
    background: var(--bg);
    padding: 120px 0;
    border-top: 1px solid var(--line);
  }
  .founder-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 900px) {
    .founder-grid { grid-template-columns: 1fr; gap: 48px; }
  }

  .founder-left { position: relative; }
  .founder-quote {
    font-family: var(--display);
    font-weight: 400;
    font-style: italic;
    font-size: clamp(26px, 3.2vw, 40px);
    letter-spacing: -0.015em;
    line-height: 1.25;
    color: var(--ink);
    margin: 24px 0 32px;
    position: relative;
    padding-left: 28px;
    border-left: 2px solid var(--accent);
  }
  .founder-quote em {
    font-style: normal;
    font-weight: 500;
    color: var(--accent);
  }
  .founder-attrib {
    padding-top: 20px;
    border-top: 1px solid var(--line);
  }
  .founder-name {
    font-family: var(--display);
    font-weight: 500;
    font-size: 19px;
    color: var(--ink);
    letter-spacing: -0.01em;
    margin-bottom: 4px;
  }
  .founder-title {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-3);
  }

  .founder-right {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  .founder-meta { position: relative; }
  .founder-meta-label {
    font-family: var(--mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--accent);
    margin-bottom: 12px;
    font-weight: 600;
  }
  .founder-meta-text {
    font-size: 15px;
    color: var(--ink-2);
    line-height: 1.6;
  }
  .founder-speaking {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: baseline;
  }
  .founder-speaking span {
    font-family: var(--display);
    font-weight: 500;
    font-size: 17px;
    color: var(--ink);
    position: relative;
    letter-spacing: -0.01em;
  }
  .founder-speaking span em {
    font-style: italic;
    font-weight: 400;
    color: var(--ink-3);
  }
  .founder-speaking span:not(:last-child)::after {
    content: "·";
    margin-left: 14px;
    color: var(--line-2);
    font-style: normal;
  }
  .founder-contact {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
  }
  .founder-contact a {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--accent);
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
    transition: border-color 0.2s;
  }
  .founder-contact a:hover { border-bottom-color: var(--accent); }

  /* ============ PRICING TRANSPARENCY ============ */
  .pricing {
    padding: 120px 0;
    background: var(--bg-alt);
    border-top: 1px solid var(--line);
  }
  .pricing-band {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    gap: 36px;
    margin: 64px 0 48px;
    align-items: start;
  }
  @media (max-width: 900px) {
    .pricing-band { grid-template-columns: 1fr; gap: 32px; }
    .price-divider { display: none; }
  }
  .price-divider {
    align-self: stretch;
    background: var(--line);
    width: 1px;
  }
  .price-col {
    padding: 4px;
    position: relative;
  }
  .price-col-featured {
    padding: 24px 24px 24px;
    background: linear-gradient(180deg, rgba(29, 78, 216, 0.04), rgba(29, 78, 216, 0.01));
    border-radius: 10px;
    margin: -18px -10px;
    position: relative;
  }
  .price-flag {
    position: absolute;
    top: -10px; left: 24px;
    background: var(--accent);
    color: #fff;
    font-family: var(--mono);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 600;
  }
  .price-tier {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--accent);
    margin-bottom: 14px;
    font-weight: 600;
  }
  .price-range {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(40px, 4.5vw, 56px);
    letter-spacing: -0.025em;
    color: var(--ink);
    margin-bottom: 8px;
    line-height: 1;
    display: inline-flex;
    align-items: baseline;
    gap: 4px;
  }
  .price-range .dash { color: var(--ink-3); margin: 0 4px; font-weight: 400; }
  .price-range .days-label {
    font-family: var(--mono);
    font-size: 0.28em;
    font-weight: 500;
    color: var(--ink-3);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-left: 8px;
    align-self: center;
    margin-bottom: 6px;
  }
  .price-range .plus-sign {
    color: var(--accent);
    font-size: 0.7em;
    margin-left: 2px;
  }
  .price-time {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-2);
    margin-bottom: 22px;
    letter-spacing: 0.05em;
  }
  .price-desc {
    font-size: 14.5px;
    color: var(--ink-2);
    line-height: 1.55;
    margin-bottom: 24px;
  }
  .price-includes {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .price-includes li {
    padding: 10px 0 10px 22px;
    position: relative;
    font-size: 13.5px;
    color: var(--ink-2);
    border-bottom: 1px dashed var(--line);
    line-height: 1.45;
  }
  .price-includes li:last-child { border-bottom: none; }
  .price-includes li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--accent);
  }
  .price-footnote {
    text-align: center;
    font-size: 13px;
    color: var(--ink-3);
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 40px;
    border-top: 1px dashed var(--line);
    font-style: italic;
  }

  /* ============ SAMPLE REPORT DOWNLOAD ============ */
  .sample-report {
    padding: 120px 0;
    background: var(--bg);
    border-top: 1px solid var(--line);
    overflow: hidden;
  }
  .report-grid {
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .report-grid { grid-template-columns: 1fr; gap: 56px; }
  }

  /* Document mockup */
  .report-mockup {
    position: relative;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .doc-page {
    position: absolute;
    width: 300px;
    height: 400px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 4px;
    box-shadow: 0 18px 40px rgba(0,0,0,0.08);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .doc-page-3 {
    transform: translate(-50px, 28px) rotate(-7deg);
    background: #fafafa;
    opacity: 0.7;
  }
  .doc-page-2 {
    transform: translate(28px, 14px) rotate(-3deg);
    background: var(--surface);
    opacity: 0.88;
  }
  .doc-page-1 {
    transform: rotate(2.5deg);
    z-index: 2;
    padding: 30px 26px;
    overflow: hidden;
  }
  .report-grid:hover .doc-page-3 { transform: translate(-65px, 34px) rotate(-9deg); }
  .report-grid:hover .doc-page-2 { transform: translate(38px, 18px) rotate(-4deg); }
  .report-grid:hover .doc-page-1 { transform: rotate(1deg) translateY(-4px); }

  .doc-header {
    padding-bottom: 14px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 18px;
  }
  .doc-stamp {
    display: inline-block;
    font-family: var(--mono);
    font-size: 8.5px;
    letter-spacing: 0.22em;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 3px 7px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .doc-title {
    font-family: var(--display);
    font-weight: 600;
    font-size: 16px;
    color: var(--ink);
    letter-spacing: -0.01em;
    white-space: nowrap;
    margin-bottom: 2px;
  }
  .doc-doctype {
    font-family: var(--sans);
    font-weight: 600;
    font-size: 8.5px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink-2);
    white-space: nowrap;
    margin-bottom: 4px;
  }
  .doc-sub {
    font-family: var(--mono);
    font-size: 8.5px;
    color: var(--ink-3);
    letter-spacing: 0.1em;
  }
  .doc-section-label {
    font-family: var(--mono);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink-3);
    margin-bottom: 8px;
    margin-top: 14px;
  }
  .doc-section-label:first-of-type { margin-top: 0; }
  .doc-lines {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 14px;
  }
  .doc-line {
    height: 5px;
    background: var(--line);
    border-radius: 2px;
  }
  .doc-line.w90 { width: 92%; }
  .doc-line.w80 { width: 82%; }
  .doc-line.w70 { width: 72%; }
  .doc-line.w60 { width: 62%; }
  .doc-line.w50 { width: 52%; }
  .doc-finding {
    background: var(--accent-soft);
    border-left: 3px solid var(--accent);
    padding: 8px 10px;
    margin-bottom: 12px;
  }
  .doc-finding-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  .doc-finding-label {
    font-family: var(--mono);
    font-size: 8.5px;
    letter-spacing: 0.12em;
    color: var(--accent);
    font-weight: 700;
  }
  .doc-finding-cvss {
    font-family: var(--mono);
    font-size: 8.5px;
    color: var(--ink);
    letter-spacing: 0.05em;
  }
  .doc-chart {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    height: 70px;
    padding-top: 4px;
  }
  .doc-chart-bar {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 100%;
    justify-content: flex-end;
  }
  .doc-bar-fill {
    width: 100%;
    background: var(--accent);
    border-radius: 2px 2px 0 0;
    display: block;
  }
  .doc-chart-bar:nth-child(1) .doc-bar-fill { opacity: 0.95; }
  .doc-chart-bar:nth-child(2) .doc-bar-fill { opacity: 0.7; }
  .doc-chart-bar:nth-child(3) .doc-bar-fill { opacity: 0.5; }
  .doc-chart-bar:nth-child(4) .doc-bar-fill { opacity: 0.3; }
  .doc-chart-bar em {
    font-style: normal;
    font-family: var(--mono);
    font-size: 7px;
    color: var(--ink-3);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Report content side */
  .report-includes {
    list-style: none;
    padding: 0;
    margin: 28px 0;
  }
  .report-includes li {
    padding: 14px 0 14px 32px;
    position: relative;
    font-size: 15px;
    color: var(--ink-2);
    border-bottom: 1px dashed var(--line);
    line-height: 1.5;
  }
  .report-includes li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 22px;
    width: 14px;
    height: 14px;
    background: var(--accent-soft);
    border: 1.5px solid var(--accent);
    border-radius: 50%;
  }
  .report-includes li::after {
    content: "✓";
    position: absolute;
    left: 4px;
    top: 19px;
    font-size: 9px;
    color: var(--accent);
    font-weight: 800;
  }
  .report-form {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    margin-top: 8px;
  }
  .report-input {
    flex: 1;
    padding: 14px 18px;
    border: 1px solid var(--line-2);
    border-radius: 6px;
    font-family: var(--sans);
    font-size: 15px;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .report-input:focus { outline: none; border-color: var(--ink); }
  .report-btn {
    background: var(--ink);
    color: #fff;
    padding: 14px 24px;
    border-radius: 6px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .report-btn:hover {
    background: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(29, 78, 216, 0.3);
  }
  .report-btn .arrow { transition: transform 0.2s; }
  .report-btn:hover .arrow { transform: translateX(4px); }
  .report-note {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--ink-3);
    letter-spacing: 0.08em;
  }

  /* FAQ */
  .faq-list { max-width: 820px; }
  .faq-item { border-bottom: 1px solid var(--line); padding: 24px 0; }
  .faq-item summary { font-family: var(--display); font-weight: 500; font-size: 20px; letter-spacing: -0.01em; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 24px; transition: color 0.2s; }
  .faq-item summary:hover { color: var(--accent); }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::after { content: "+"; font-family: var(--mono); font-size: 22px; color: var(--accent); transition: transform 0.3s; }
  .faq-item[open] summary::after { content: "−"; transform: rotate(180deg); }
  .faq-item p { margin-top: 14px; color: var(--ink-2); font-size: 15px; line-height: 1.6; }

  /* CTA SPLIT */
  .cta-split { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; position: relative; }
  @media (max-width: 800px) { .cta-split { grid-template-columns: 1fr; } }
  #cta-canvas { position: absolute; top: 0; left: 0; width: 50%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.6; }
  .cta-box { padding: 48px 40px; background: var(--surface); position: relative; z-index: 1; }
  .cta-box:first-child { border-right: 1px solid var(--line); background: var(--bg-alt); }
  .cta-box .tag { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ink-3); margin-bottom: 12px; }
  .cta-box h3 { font-family: var(--display); font-weight: 500; font-size: 28px; letter-spacing: -0.02em; margin-bottom: 12px; }
  .cta-box p { color: var(--ink-2); margin-bottom: 20px; font-size: 15px; }

  /* FOOTER */
  footer { background: var(--ink); color: #CBD5E1; padding: 80px 0 32px; margin-top: 80px; position: relative; overflow: hidden; border-top: 1px solid #334155; }
  #footer-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; opacity: 0.4; }
  footer .container { position: relative; z-index: 1; }
  .footer-top { display: grid; grid-template-columns: 1.5fr repeat(5, 1fr); gap: 32px; padding-bottom: 56px; border-bottom: 1px solid #1E293B; }
  @media (max-width: 900px) { .footer-top { grid-template-columns: repeat(2, 1fr); gap: 36px 28px; } .footer-brand { grid-column: 1 / -1; max-width: 440px; } }
  @media (max-width: 480px) { .footer-top { grid-template-columns: 1fr; gap: 28px; } }
  .footer-brand .logo { color: #fff; margin-bottom: 16px; }
  .footer-brand .logo-mark { background: var(--accent); color: #fff; }
  .footer-brand p { font-size: 14px; line-height: 1.6; color: #94A3B8; margin-bottom: 20px; }
  .socials { display: flex; gap: 10px; }
  .socials a { width: 38px; height: 38px; border: 1px solid #243042; background: rgba(255,255,255,0.02); border-radius: 8px; display: grid; place-items: center; color: #94A3B8; transition: all 0.2s ease; }
  .socials a svg { width: 17px; height: 17px; display: block; }
  .socials a:hover { background: var(--accent); border-color: var(--accent); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 18px rgba(0,0,0,0.35); }
  .footer-col h5 { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #94A3B8; margin-bottom: 18px; }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 10px; }
  .footer-col ul li a { font-size: 14px; color: #CBD5E1; transition: color 0.2s; }
  .footer-col ul li a:hover { color: var(--accent); }
  .footer-bottom { padding-top: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; font-size: 13px; color: #94A3B8; }
  .certs-row { display: flex; gap: 28px; flex-wrap: wrap; }
  .cert { display: inline-flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; }
  .cert::before { content: ""; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }

  /* SCROLL REVEAL */
  .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-stagger > * { opacity: 0; transform: translateY(30px); transition: opacity 0.6s, transform 0.6s; }
  .reveal-stagger.visible > * { opacity: 1; transform: translateY(0); }
  .reveal-stagger.visible > *:nth-child(1) { transition-delay: 0s; }
  .reveal-stagger.visible > *:nth-child(2) { transition-delay: 0.08s; }
  .reveal-stagger.visible > *:nth-child(3) { transition-delay: 0.16s; }
  .reveal-stagger.visible > *:nth-child(4) { transition-delay: 0.24s; }
  .reveal-stagger.visible > *:nth-child(5) { transition-delay: 0.32s; }
  .reveal-stagger.visible > *:nth-child(6) { transition-delay: 0.4s; }
  .reveal-stagger.visible > *:nth-child(7) { transition-delay: 0.48s; }
  .reveal-stagger.visible > *:nth-child(8) { transition-delay: 0.56s; }
  .reveal-stagger.visible > *:nth-child(9) { transition-delay: 0.64s; }
  .reveal-stagger.visible > *:nth-child(10) { transition-delay: 0.72s; }
  .reveal-stagger.visible > *:nth-child(11) { transition-delay: 0.8s; }
  .reveal-stagger.visible > *:nth-child(12) { transition-delay: 0.88s; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  /* ===================== ADDED: LANGUAGE TOGGLE ===================== */
  .lang-toggle { display:inline-flex; align-items:center; gap:6px; background:transparent; border:1px solid var(--line-2); border-radius:999px; padding:5px 12px; font-family:var(--mono); font-size:11px; letter-spacing:0.08em; cursor:pointer; color:var(--ink-3); transition:all 0.25s; margin-left:6px; }
  .lang-toggle:hover { border-color:var(--ink-3); }
  .lang-toggle .lang-sep { opacity:0.4; }
  .lang-toggle:not(.is-fr) .lang-en, .lang-toggle.is-fr .lang-fr { color:var(--accent); font-weight:700; }
  .footer-lang { margin-top:20px; }
  .footer-lang .lang-toggle { margin-left:0; color:#94A3B8; border-color:#1E293B; }
  .footer-lang .lang-toggle:hover { border-color:#334155; }

  /* ===================== ADDED: INDUSTRIES ===================== */
  .industries-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  @media (max-width:900px){ .industries-grid{ grid-template-columns:repeat(2,1fr);} }
  @media (max-width:600px){ .industries-grid{ grid-template-columns:1fr;} }
  .industry-card { position:relative; background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:28px 26px; overflow:hidden; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); }
  .industry-card::after { content:""; position:absolute; bottom:0; left:0; width:100%; height:2px; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); }
  .industry-card:hover { transform:translateY(-6px); border-color:var(--ink-3); box-shadow:0 20px 40px -12px rgba(15,23,42,0.12); }
  .industry-card:hover::after { transform:scaleX(1); }
  .ind-icon { width:44px; height:44px; background:var(--accent-soft); color:var(--accent); border-radius:11px; display:flex; align-items:center; justify-content:center; margin-bottom:18px; transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  .ind-icon svg { width:22px; height:22px; }
  .industry-card:hover .ind-icon { background:var(--accent); color:#fff; transform:scale(1.06) rotate(-5deg); }
  .industry-name { font-family:var(--display); font-weight:500; font-size:19px; letter-spacing:-0.01em; color:var(--ink); margin-bottom:8px; }
  .industry-driver { font-size:14px; color:var(--ink-3); line-height:1.55; }
  .industry-reg { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.14em; color:var(--accent); margin-top:14px; }

  /* ===================== ADDED: HOW TO ENGAGE ===================== */
  .engage-assurance { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-bottom:48px; }
  @media (max-width:760px){ .engage-assurance{ grid-template-columns:1fr;} }
  .assurance-card { background:var(--bg-alt); border:1px solid var(--line); border-radius:14px; padding:26px 28px; }
  .assurance-card h4 { font-family:var(--display); font-weight:500; font-size:18px; color:var(--ink); margin-bottom:14px; letter-spacing:-0.01em; }
  .assurance-list { list-style:none; }
  .assurance-list li { display:flex; align-items:flex-start; gap:10px; font-size:14.5px; color:var(--ink-2); line-height:1.5; margin-bottom:10px; }
  .assurance-list li:last-child{ margin-bottom:0; }
  .assurance-list svg { width:16px; height:16px; color:var(--accent); flex-shrink:0; margin-top:2px; }
  .engage-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  @media (max-width:900px){ .engage-grid{ grid-template-columns:1fr;} }
  .engage-card { position:relative; background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:30px 28px; overflow:hidden; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); display:flex; flex-direction:column; }
  .engage-card::after { content:""; position:absolute; bottom:0; left:0; width:100%; height:2px; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); }
  .engage-card:hover { transform:translateY(-6px); border-color:var(--ink-3); box-shadow:0 20px 40px -12px rgba(15,23,42,0.12); }
  .engage-card:hover::after { transform:scaleX(1); }
  .engage-card .eng-num { font-family:var(--mono); font-size:11px; letter-spacing:0.15em; color:var(--accent); margin-bottom:14px; }
  .engage-card h4 { font-family:var(--display); font-weight:500; font-size:21px; letter-spacing:-0.01em; color:var(--ink); margin-bottom:6px; }
  .engage-card .eng-best { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.14em; color:var(--ink-3); margin-bottom:16px; }
  .engage-card p { font-size:14px; color:var(--ink-3); line-height:1.6; margin-bottom:18px; flex:1; }
  .engage-card .eng-feat { list-style:none; border-top:1px solid var(--line); padding-top:16px; }
  .engage-card .eng-feat li { display:flex; align-items:flex-start; gap:9px; font-size:13px; color:var(--ink-2); margin-bottom:9px; line-height:1.45; }
  .engage-card .eng-feat li:last-child{ margin-bottom:0; }
  .engage-card .eng-feat svg { width:14px; height:14px; color:var(--accent); flex-shrink:0; margin-top:2px; }

  /* ===================== ADDED: INSIGHTS / RESEARCH ===================== */
  .insights-grid { display:grid; grid-template-columns:1.1fr 1fr; gap:28px; align-items:start; }
  @media (max-width:900px){ .insights-grid{ grid-template-columns:1fr;} }
  .sirp-card { background:var(--ink); color:#fff; border-radius:16px; padding:36px 34px; position:relative; overflow:hidden; }
  .sirp-card .sirp-tag { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.18em; color:#93C5FD; margin-bottom:14px; }
  .sirp-card h3 { font-family:var(--display); font-weight:500; font-size:26px; letter-spacing:-0.015em; margin:0 0 8px; color:#fff; }
  .sirp-card .sirp-sub { font-size:14.5px; color:rgba(255,255,255,0.7); line-height:1.6; margin-bottom:24px; }
  .sirp-letters { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin-bottom:24px; }
  .sirp-letter { border:1px solid rgba(255,255,255,0.14); border-radius:10px; padding:14px 16px; }
  .sirp-letter b { font-family:var(--display); font-size:22px; color:#fff; display:block; line-height:1.1; }
  .sirp-letter span { font-size:12.5px; color:rgba(255,255,255,0.7); }
  .sirp-inputs { display:flex; flex-wrap:wrap; gap:8px; }
  .sirp-inputs span { font-family:var(--mono); font-size:11px; padding:5px 11px; border-radius:999px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); color:rgba(255,255,255,0.85); }
  .insights-side { display:flex; flex-direction:column; gap:20px; }
  .insight-block { border:1px solid var(--line); border-radius:14px; padding:26px 28px; background:var(--surface); }
  .insight-block h4 { font-family:var(--display); font-weight:500; font-size:19px; color:var(--ink); margin-bottom:14px; letter-spacing:-0.01em; }
  .insight-speaking { display:flex; flex-direction:column; gap:14px; }
  .insight-talk .venue { font-family:var(--display); font-weight:500; font-size:16px; color:var(--ink); }
  .insight-talk .topic { font-size:13.5px; color:var(--ink-3); line-height:1.5; }
  .insight-post { padding:14px 0; border-bottom:1px solid var(--line); }
  .insight-post:first-of-type{ padding-top:0; }
  .insight-post:last-child{ border-bottom:none; padding-bottom:0; }
  .insight-post .ip-title { font-size:15px; color:var(--ink); font-weight:500; margin-bottom:3px; }
  .insight-post .ip-meta { font-family:var(--mono); font-size:11px; color:var(--ink-3); letter-spacing:0.06em; }
  .insight-post .ip-soon { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.14em; color:var(--accent); }

  /* ===================== ADDED: OUR TEAM ===================== */
  .team-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:8px; }
  @media (max-width:900px){ .team-grid{ grid-template-columns:repeat(2,1fr);} }
  @media (max-width:600px){ .team-grid{ grid-template-columns:1fr;} }
  .team-card { background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:26px 26px; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); }
  .team-card:hover { transform:translateY(-5px); border-color:var(--ink-3); box-shadow:0 18px 36px -14px rgba(15,23,42,0.12); }
  .team-card.is-principal { background:var(--bg-alt); border-color:var(--line-2); }
  .team-avatar { width:46px; height:46px; border-radius:12px; background:linear-gradient(135deg,var(--accent),var(--accent-2)); color:#fff; display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-weight:700; font-size:14px; margin-bottom:18px; letter-spacing:0.04em; }
  .team-role { font-family:var(--display); font-weight:500; font-size:18px; color:var(--ink); letter-spacing:-0.01em; margin-bottom:4px; }
  .team-name { font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.14em; color:var(--accent); margin-bottom:12px; }
  .team-cred { font-size:13.5px; color:var(--ink-3); line-height:1.55; }
  .team-capacity { margin-top:28px; padding:18px 22px; background:var(--bg-alt); border:1px solid var(--line); border-radius:12px; font-size:14.5px; color:var(--ink-2); line-height:1.6; }
  .team-capacity b { color:var(--ink); font-weight:600; }

  /* ===================== ADDED: DATA POSTURE ===================== */
  .data-posture { background:var(--bg-alt); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
  .dp-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
  @media (max-width:800px){ .dp-grid{ grid-template-columns:repeat(2,1fr);} }
  @media (max-width:480px){ .dp-grid{ grid-template-columns:1fr;} }
  .dp-item { display:flex; flex-direction:column; gap:9px; }
  .dp-item svg { width:22px; height:22px; color:var(--accent); }
  .dp-item h5 { font-family:var(--display); font-weight:500; font-size:16px; color:var(--ink); letter-spacing:-0.01em; }
  .dp-item p { font-size:13.5px; color:var(--ink-3); line-height:1.5; }

  /* ===================== ADDED: ACCESSIBILITY STATEMENT (footer) ===================== */
  .a11y { margin-top:28px; }
  .a11y summary { cursor:pointer; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.14em; color:#94A3B8; list-style:none; display:inline-flex; align-items:center; gap:8px; }
  .a11y summary::-webkit-details-marker{ display:none; }
  .a11y summary:hover{ color:#CBD5E1; }
  .a11y summary::before{ content:"+"; color:var(--accent); font-size:14px; line-height:1; display:inline-block; transition:transform 0.2s; }
  .a11y[open] summary::before{ transform:rotate(45deg); }
  .a11y p { font-size:13px; color:#94A3B8; line-height:1.65; margin-top:14px; max-width:780px; }
  .a11y a { color:#CBD5E1; text-decoration:underline; text-underline-offset:2px; }

  /* ===================== ADDED: REDUCED MOTION (additive fallback only) ===================== */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
    .reveal, .reveal-stagger, .reveal-stagger > * { opacity:1 !important; transform:none !important; }
    .brand-title span, .hero-eyebrow, .brand-tagline, .hero-cta-pill, .hero-subnote { opacity:1 !important; transform:none !important; filter:none !important; }
    .arc { stroke-dashoffset:0 !important; }
  }

  /* ===================== TIGHTER SECTION SPACING (desktop) ===================== */
  section { padding: 68px 0; }
  .coverage { padding: 68px 0 76px; }
  .engagements,
  .founder,
  .pricing,
  .sample-report,
  .quote-section,
  .trust-section { padding: 68px 0; }
  footer { padding: 60px 0 26px; margin-top: 44px; }
  /* Inner-page hero banners (inline 120px/60px) — tightened so inner pages aren't top-heavy */
  section[style*="paddingTop: '120px'"] { padding-top: 94px !important; padding-bottom: 44px !important; }
  .section-lead { margin-bottom: 44px; }

  /* ===================== MOBILE: <= 900px ===================== */
  @media (max-width: 900px) {
    .container { padding: 0 22px; }

    /* Section spacing */
    section { padding: 46px 0; }
    .coverage { padding: 46px 0 50px; }
    .engagements,
    .founder,
    .pricing,
    .sample-report,
    .quote-section,
    .trust-section,
    .data-posture,
    .methodology { padding: 46px 0; }
    .section-lead { margin-bottom: 28px; }

    /* iOS Safari zooms in when focusing inputs smaller than 16px — force 16px to stop it */
    input, select, textarea { font-size: 16px !important; }

    /* Topbar — wrap nicely */
    .topbar { font-size: 12px; padding: 9px 0; }
    .topbar .container { flex-direction: column; gap: 6px; text-align: center; }

    /* Nav */
    nav { padding: 12px 0; }
    .logo { font-size: 20px; }
    .nav-cta { padding: 9px 14px; font-size: 13px; }

    /* Hero */
    .hero-intro { min-height: 56vh; padding: 80px 18px 60px; margin-top: -70px; }
    .brand-title { font-size: clamp(40px, 11vw, 76px) !important; margin-bottom: 16px; }
    .brand-tagline { font-size: 11px !important; margin-bottom: 22px; letter-spacing: 0.22em; }
    .hero-eyebrow { font-size: 10px; padding: 6px 12px; margin-bottom: 18px; }
    .hero-cta-pill { padding: 13px 24px; font-size: 14px; }
    .hero-subnote { font-size: 12px; margin-top: 16px; }

    /* Section headings */
    .section-title { font-size: clamp(24px, 7vw, 34px) !important; margin-bottom: 12px; }
    .section-eyebrow { font-size: 11px; margin-bottom: 12px; }
    .section-lead { font-size: 15px; margin-bottom: 28px; }

    /* Inner-page hero (paddings on new pages set via inline styles) */
    section[style*="paddingTop: '120px'"] { padding-top: 84px !important; padding-bottom: 36px !important; }

    /* Card-like blocks — tighter padding */
    .service-card,
    .industry-card,
    .why-card,
    .engage-card,
    .team-card,
    .insight-block,
    .assurance-card,
    .quote-form-card { padding: 22px 20px !important; }
    .method-step { padding: 28px 22px 26px; }
    .service-card h3, .industry-name { font-size: 17px; }
    .method-step h4 { font-size: 20px; }
    .method-step::before { font-size: 110px; top: -16px; }

    /* All grids — tighter gap on mobile */
    .services-grid,
    .industries-grid,
    .method-grid,
    .engage-grid,
    .team-grid,
    .dp-grid,
    .insights-grid,
    .creds-redesign { gap: 14px; }

    /* Coverage / Globe */
    .globe-container { height: 340px !important; margin-bottom: 4px; }
    .globe-stat { top: 16%; max-width: 110px; }
    .globe-stat-num { font-size: 38px !important; }
    .globe-stat-label { font-size: 11px; line-height: 1.35; }
    .coverage-heading h2 { font-size: clamp(30px, 8vw, 42px); }
    .coverage-heading p { font-size: 14px; }
    .coverage-intro-title { font-size: clamp(20px, 5.5vw, 26px); }

    /* Trust stats */
    .trust-stats { padding: 26px 20px; grid-template-columns: 1fr 1fr; gap: 22px 18px; margin-bottom: 40px; }
    .trust-stat-num { font-size: 32px !important; margin-bottom: 6px; }
    .trust-stat-label { font-size: 10px; }
    .trust-stat-divider { display: none; }

    /* Stats bar */
    .stats-bar { grid-template-columns: 1fr 1fr; margin: 36px 0; }
    .stat { padding: 22px 16px; border-right: none; border-bottom: 1px solid var(--line); }
    .stat:nth-last-child(-n+2) { border-bottom: none; }
    .stat-num { font-size: 30px; }

    /* Credentials */
    .creds-redesign { gap: 40px; margin-bottom: 48px; }
    .creds-item-name { font-size: 19px !important; }
    .creds-item-desc { font-size: 14.5px; }

    /* Speaking row */
    .speaking-row { gap: 14px; padding-top: 26px; flex-direction: column; }
    .speaking-logos { gap: 10px; }
    .speaking-logo { font-size: 14px; }
    .speaking-dot { display: none; }

    /* Quote section */
    .quote-banner { padding: 28px 22px 84px; }
    .quote-banner h2 { font-size: clamp(22px, 6vw, 28px) !important; }
    .quote-banner-sub { font-size: 14.5px; }
    .quote-banner-trust { width: 100%; padding: 16px 18px; }
    .quote-form-card { margin: -60px 10px 0 !important; }
    .quote-form-row { grid-template-columns: 1fr; gap: 12px; }
    .field-wrap input, .field-wrap select { font-size: 14px; padding: 11px 14px 11px 38px; }
    .form-submit-pro { padding: 13px; font-size: 14px; }
    .quote-trust-row { gap: 10px; }
    .quote-pills { justify-content: center; }

    /* Engagement rows — stack vertically */
    .engagement-row { grid-template-columns: 1fr !important; gap: 10px; padding: 24px 0 !important; }
    .engagement-row:hover { padding-left: 0 !important; }
    .eng-title { font-size: 19px; }
    .eng-detail { font-size: 14.5px; margin-bottom: 12px; }
    .eng-frameworks span { font-size: 10px; padding: 0 10px; }

    /* Founder */
    .founder-grid { gap: 36px; }
    .founder-quote { font-size: 22px !important; padding-left: 16px; margin: 18px 0 24px; }
    .founder-speaking { gap: 10px; }
    .founder-speaking span { font-size: 15px; }
    .founder-contact { gap: 18px; }

    /* Pricing */
    .pricing-band { gap: 20px; margin: 36px 0 28px; }
    .price-range { font-size: 36px !important; }
    .price-tier { font-size: 10px; }
    .price-col-featured { margin: 0; }
    .price-footnote { padding-top: 28px; font-size: 12px; }

    /* Report mockup */
    .report-grid { gap: 36px; }
    .report-mockup { height: 360px; }
    .doc-page { width: 240px; height: 320px; }
    .doc-page-1 { padding: 22px 20px; }
    .report-form { flex-direction: column; gap: 10px; }
    .report-btn { width: 100%; justify-content: center; }
    .report-includes li { font-size: 14.5px; padding: 11px 0 11px 30px; }

    /* CTA split */
    .cta-split { grid-template-columns: 1fr; }
    .cta-box { padding: 28px 22px; }
    .cta-box:first-child { border-right: none; border-bottom: 1px solid var(--line); }
    .cta-box h3 { font-size: 22px; }
    .cta-box p { font-size: 14.5px; }
    #cta-canvas { width: 100% !important; height: 50% !important; }

    /* FAQ */
    .faq-item { padding: 18px 0; }
    .faq-item summary { font-size: 16px; gap: 16px; }
    .faq-item summary::after { font-size: 20px; }
    .faq-item p { font-size: 14.5px; }

    /* Why section */
    .why-card { padding: 24px 22px; }
    .why-bignum { font-size: 64px; right: 18px; bottom: 8px; }
    .why-card-title { font-size: 21px; }
    .why-card-text { font-size: 14.5px; }
    .why-proof { gap: 22px; padding-top: 22px; }
    .why-proof-num { font-size: 42px; }

    /* Industries cards */
    .industries-grid { grid-template-columns: 1fr; }
    .industry-driver { font-size: 13.5px; }

    /* Engage how-to */
    .engage-card { padding: 24px 22px; }
    .engage-card h4 { font-size: 19px; }
    .engage-card p { font-size: 13.5px; }

    /* Insights */
    .insights-grid { gap: 18px; }
    .sirp-card { padding: 28px 24px; }
    .sirp-card h3 { font-size: 24px; }
    .sirp-letters { gap: 10px; }
    .sirp-letter { padding: 12px 14px; }
    .insight-block { padding: 22px 22px; }

    /* Data posture */
    .dp-grid { grid-template-columns: 1fr 1fr; }
    .dp-item h5 { font-size: 15px; }
    .dp-item p { font-size: 13px; }

    /* Footer */
    footer { padding: 48px 0 24px; margin-top: 48px; }
    .footer-top { gap: 32px 22px; padding-bottom: 36px; }
    .footer-col h5 { font-size: 10.5px; margin-bottom: 12px; }
    .footer-col ul li { margin-bottom: 7px; }
    .footer-col ul li a { font-size: 13px; }
    .footer-brand p { font-size: 13px; }
    .footer-bottom { padding-top: 22px; font-size: 12px; flex-direction: column-reverse; text-align: center; gap: 14px; }
    .certs-row { gap: 12px 18px; justify-content: center; }
    .cert { font-size: 10px; }
    .a11y p { font-size: 12px; }
    .a11y summary { font-size: 10.5px; }
  }

  /* ===================== SMALL MOBILE: <= 560px ===================== */
  @media (max-width: 560px) {
    .container { padding: 0 16px; }

    /* Topbar even tighter */
    .topbar { font-size: 11px; padding: 8px 0; }

    /* Hero */
    .hero-intro { padding: 68px 14px 48px; min-height: 52vh; }
    .brand-title { font-size: clamp(28px, 11vw, 52px) !important; }
    .brand-tagline { letter-spacing: 0.18em; }
    .hero-cta-pill { padding: 12px 20px; font-size: 13px; }
    .hero-eyebrow { font-size: 9.5px; }

    /* Quote */
    .quote-form-card { margin: -54px 8px 0 !important; padding: 20px 16px !important; }
    .quote-banner { padding: 24px 18px 76px; }

    /* Globe even smaller */
    .globe-container { height: 280px !important; }
    .globe-stat { top: 10%; max-width: 96px; }
    .globe-stat-num { font-size: 30px !important; }
    .globe-stat-label { font-size: 10px; }

    /* Report mockup */
    .report-mockup { height: 320px; }
    .doc-page { width: 210px; height: 280px; }

    /* Data posture single column on tiny screens */
    .dp-grid { grid-template-columns: 1fr; }

    /* Trust stats single column on tiny screens */
    .trust-stats { grid-template-columns: 1fr; gap: 18px; }

    /* Footer */
    .footer-top { grid-template-columns: 1fr; }
    .footer-brand { grid-column: auto; }
  }
`;

export default function SynapseCyber() {
  const rootRef = useRef(null);
  const quoteForm = useMailForm('Home Quote');
  const [sampleSent, setSampleSent] = useState(false);

  function handleSampleDownload(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email') || '';
    // Open the report for the visitor immediately.
    window.open('/SynapseCyber-Sample-Penetration-Test-Report.pdf', '_blank', 'noopener');
    // Capture the lead via the SMTP endpoint (fire-and-forget).
    if (email) {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Sample Report Request',
          name: email,
          email,
          message: `Sample report requested from homepage by ${email}`,
        }),
      }).catch(() => {});
    }
    setSampleSent(true);
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Honour the OS "reduce motion" preference (replaces the original window.__RM global).
    const RM =
      (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
      false;

    const cleanups = [];

    // Low-power / touch devices: phones and tablets have far less GPU memory
    // and a hard cap on simultaneous WebGL contexts. Running every decorative
    // scene there caused context-loss crashes (frozen animations) and tab
    // reloads on Android. On mobile we keep only the hero globe and trim it.
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      (window.matchMedia('(max-width: 820px)').matches ||
        window.matchMedia('(pointer: coarse)').matches);
    const DPR_CAP = isMobile ? 1.5 : 2;

    // Pause a render loop whenever its canvas is off-screen or the tab is
    // hidden. This frees the main thread for touch input (taps were queuing
    // up behind always-on animation work) and stops needless GPU load.
    function gateVisibility(canvas, start, stop) {
      let onScreen = false;
      let running = false;
      const sync = () => {
        const shouldRun = onScreen && !document.hidden;
        if (shouldRun && !running) { running = true; start(); }
        else if (!shouldRun && running) { running = false; stop(); }
      };
      const io = new IntersectionObserver(
        (entries) => { onScreen = entries[0].isIntersecting; sync(); },
        { threshold: 0 }
      );
      io.observe(canvas);
      document.addEventListener('visibilitychange', sync);
      cleanups.push(() => {
        io.disconnect();
        document.removeEventListener('visibilitychange', sync);
        stop();
      });
    }

    // ===================================================================
    // HERO REPLAY — re-trigger intro animation when hero re-enters view
    // ===================================================================
    (function () {
      const hero = root.querySelector('.hero-intro');
      if (!hero) return;
      const selectors = [
        '.hero-eyebrow',
        '.brand-title',
        '.brand-title span',
        '.brand-tagline',
        '.hero-cta-pill',
        '.hero-subnote',
        '.arc',
      ];
      function replay() {
        const elements = hero.querySelectorAll(selectors.join(','));
        elements.forEach((el) => {
          el.style.animation = 'none';
        });
        void hero.offsetWidth; // force reflow
        elements.forEach((el) => {
          el.style.animation = '';
        });
      }
      let wasOutOfView = false;
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && wasOutOfView) {
              replay();
              wasOutOfView = false;
            } else if (!entry.isIntersecting) {
              wasOutOfView = true;
            }
          });
        },
        { threshold: 0.35 }
      );
      heroObserver.observe(hero);
      cleanups.push(() => heroObserver.disconnect());
    })();

    // ===================================================================
    // DOT GLOBE — instanced dots, lighting, hotspots, ambient particles
    // ===================================================================
    (function () {
      const canvas = root.querySelector('#dot-globe');
      if (!canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, DPR_CAP));
      if (THREE.SRGBColorSpace !== undefined) renderer.outputColorSpace = THREE.SRGBColorSpace;
      else if (THREE.sRGBEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0.4, 9);

      function resize() {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      const ambient = new THREE.AmbientLight(0xffffff, 0.55);
      scene.add(ambient);
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
      keyLight.position.set(4, 6, 5);
      scene.add(keyLight);
      const fillLight = new THREE.PointLight(0x2563eb, 0.8, 20);
      fillLight.position.set(-4, 2, 4);
      scene.add(fillLight);
      const rimLight = new THREE.DirectionalLight(0x2563eb, 0.4);
      rimLight.position.set(-2, -1, -3);
      scene.add(rimLight);

      const globeGroup = new THREE.Group();
      globeGroup.position.y = -1.7;
      scene.add(globeGroup);

      const radius = 3.4;

      const coreGeo = new THREE.SphereGeometry(radius * 0.96, 48, 48);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xfbfaf7, transparent: true, opacity: 0.18, roughness: 0.85, metalness: 0.1,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      globeGroup.add(core);

      const dotCount = isMobile ? 1100 : 2400;
      const dotGeo = new THREE.SphereGeometry(0.028, 6, 6);
      const dotMatGray = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.2 });
      const dotMatRed = new THREE.MeshStandardMaterial({
        color: 0x2563eb, roughness: 0.3, metalness: 0.4, emissive: 0x2563eb, emissiveIntensity: 0.25,
      });

      const grayMatrices = [];
      const redMatrices = [];
      const dummy = new THREE.Object3D();
      for (let i = 0; i < dotCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / dotCount);
        const theta = Math.sqrt(dotCount * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        dummy.position.set(x, y, z);
        dummy.lookAt(0, 0, 0);
        dummy.updateMatrix();
        const isRed = Math.random() > 0.93;
        const scale = isRed ? 1.4 : 1;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        if (isRed) redMatrices.push(dummy.matrix.clone());
        else grayMatrices.push(dummy.matrix.clone());
      }

      const grayInstanced = new THREE.InstancedMesh(dotGeo, dotMatGray, grayMatrices.length);
      grayMatrices.forEach((m, i) => grayInstanced.setMatrixAt(i, m));
      grayInstanced.instanceMatrix.needsUpdate = true;
      globeGroup.add(grayInstanced);

      const redInstanced = new THREE.InstancedMesh(dotGeo, dotMatRed, redMatrices.length);
      redMatrices.forEach((m, i) => redInstanced.setMatrixAt(i, m));
      redInstanced.instanceMatrix.needsUpdate = true;
      globeGroup.add(redInstanced);

      const hotspots = [];
      const hotPoints = [
        { lat: 45, lon: -63 }, { lat: 43, lon: -79 }, { lat: 51, lon: 0 }, { lat: 35, lon: 139 },
        { lat: 28, lon: 77 }, { lat: 40, lon: -74 }, { lat: 1, lon: 103 }, { lat: 25, lon: 55 },
      ];
      hotPoints.forEach((p, i) => {
        const latRad = (p.lat * Math.PI) / 180;
        const lonRad = (p.lon * Math.PI) / 180;
        const r = radius * 1.008;
        const x = r * Math.cos(latRad) * Math.cos(lonRad);
        const y = r * Math.sin(latRad);
        const z = r * Math.cos(latRad) * Math.sin(lonRad);
        const hot = new THREE.Mesh(
          new THREE.SphereGeometry(0.075, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x2563eb, emissive: 0x2563eb, emissiveIntensity: 1.0, roughness: 0.2 })
        );
        hot.position.set(x, y, z);
        const ring = new THREE.Mesh(
          new THREE.SphereGeometry(0.075, 16, 16),
          new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.35 })
        );
        ring.position.set(x, y, z);
        hot.userData = { phase: i * 0.85 };
        ring.userData = { phase: i * 0.85 };
        hotspots.push({ hot, ring });
        globeGroup.add(hot);
        globeGroup.add(ring);
      });

      globeGroup.rotation.x = -0.22;
      globeGroup.rotation.z = 0.08;

      const particleCount = isMobile ? 30 : 80;
      const pPositions = new Float32Array(particleCount * 3);
      const pColors = new Float32Array(particleCount * 3);
      const particleData = [];
      for (let i = 0; i < particleCount; i++) {
        const r = 4.5 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
        pPositions[i * 3 + 2] = r * Math.cos(phi);
        if (Math.random() > 0.7) {
          pColors[i * 3] = 0.73; pColors[i * 3 + 1] = 0.11; pColors[i * 3 + 2] = 0.11;
        } else {
          pColors[i * 3] = 0.6; pColors[i * 3 + 1] = 0.55; pColors[i * 3 + 2] = 0.5;
        }
        particleData.push({ speed: 0.0008 + Math.random() * 0.002, phase: Math.random() * Math.PI * 2, ampY: 0.3 + Math.random() * 0.5 });
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
      const softSprite = (function () {
        const c = document.createElement('canvas');
        c.width = c.height = 64;
        const x = c.getContext('2d');
        const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(0.45, 'rgba(255,255,255,0.85)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        x.fillStyle = g;
        x.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
      })();
      const pMat = new THREE.PointsMaterial({
        size: 0.06, map: softSprite, vertexColors: true, transparent: true, opacity: 0.7,
        sizeAttenuation: true, blending: THREE.NormalBlending, depthWrite: false,
      });
      const ambientParticles = new THREE.Points(pGeo, pMat);
      scene.add(ambientParticles);

      const shadowGeo = new THREE.CircleGeometry(radius * 1.3, 64);
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12 });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = -radius - 1.6;
      scene.add(shadow);

      const baseY = -1.7;
      let frame = 0;
      let rafId;
      function animate() {
        if (RM) { renderer.render(scene, camera); return; }
        frame++;
        const t = frame * 0.016;
        globeGroup.rotation.y += 0.0035;
        globeGroup.position.y = baseY + Math.sin(t * 0.6) * 0.12;
        const bobNorm = (Math.sin(t * 0.6) + 1) / 2;
        const shadowScale = 1 - bobNorm * 0.08;
        shadow.scale.set(shadowScale, shadowScale, 1);
        shadow.material.opacity = 0.12 + (1 - bobNorm) * 0.04;
        hotspots.forEach(({ hot, ring }) => {
          const ht = frame * 0.05 + hot.userData.phase;
          const pulse = (Math.sin(ht) + 1) / 2;
          const ringScale = 1 + pulse * 3;
          ring.scale.set(ringScale, ringScale, ringScale);
          ring.material.opacity = 0.35 * (1 - pulse);
          const hotScale = 1 + Math.sin(ht) * 0.15;
          hot.scale.set(hotScale, hotScale, hotScale);
          hot.material.emissiveIntensity = 0.7 + pulse * 0.6;
        });
        const ppos = pGeo.attributes.position.array;
        particleData.forEach((d, i) => {
          ppos[i * 3 + 1] += Math.sin(t * 0.4 + d.phase) * 0.003;
          const x = ppos[i * 3];
          const z = ppos[i * 3 + 2];
          const angle = d.speed;
          ppos[i * 3] = x * Math.cos(angle) - z * Math.sin(angle);
          ppos[i * 3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
        });
        pGeo.attributes.position.needsUpdate = true;
        fillLight.position.x = Math.cos(t * 0.3) * 5;
        fillLight.position.z = Math.sin(t * 0.3) * 5;
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      }

      // If the GPU drops the context (common on memory-constrained Android),
      // stop the loop cleanly instead of throwing / freezing in a bad state.
      const onLost = (e) => { e.preventDefault(); if (rafId) cancelAnimationFrame(rafId); };
      canvas.addEventListener('webglcontextlost', onLost, false);

      gateVisibility(
        canvas,
        () => { rafId = requestAnimationFrame(animate); },
        () => { if (rafId) cancelAnimationFrame(rafId); }
      );

      cleanups.push(() => {
        canvas.removeEventListener('webglcontextlost', onLost);
        window.removeEventListener('resize', resize);
        renderer.dispose();
      });
    })();

    // ===================================================================
    // METHODOLOGY SCENE — connected node network
    // ===================================================================
    (function () {
      const canvas = root.querySelector('#method-canvas');
      if (!canvas) return;
      if (isMobile) return; // one fewer WebGL context on phones — avoids GPU OOM
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, DPR_CAP));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 8;

      function resize() {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      const nodeCount = 36;
      const nodes = [];
      const nodeGroup = new THREE.Group();
      for (let i = 0; i < nodeCount; i++) {
        const x = (Math.random() - 0.5) * 14;
        const y = (Math.random() - 0.5) * 8;
        const z = (Math.random() - 0.5) * 4;
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.7 })
        );
        mesh.position.set(x, y, z);
        nodes.push({ mesh, vx: (Math.random() - 0.5) * 0.003, vy: (Math.random() - 0.5) * 0.003, vz: (Math.random() - 0.5) * 0.002 });
        nodeGroup.add(mesh);
      }
      scene.add(nodeGroup);

      const lineMat = new THREE.LineBasicMaterial({ color: 0x0f172a, transparent: true, opacity: 0.18 });
      let lineSegments;
      function updateLines() {
        if (lineSegments) {
          scene.remove(lineSegments);
          lineSegments.geometry.dispose(); // free old GPU buffer — was leaking every 3 frames
        }
        const positions = [];
        const threshold = 2.2;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i].mesh.position, b = nodes[j].mesh.position;
            const d = a.distanceTo(b);
            if (d < threshold) positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        lineSegments = new THREE.LineSegments(geo, lineMat);
        scene.add(lineSegments);
      }

      let frame = 0;
      let rafId;
      function animate() {
        if (RM) { renderer.render(scene, camera); return; }
        frame++;
        nodes.forEach((n) => {
          n.mesh.position.x += n.vx;
          n.mesh.position.y += n.vy;
          n.mesh.position.z += n.vz;
          if (Math.abs(n.mesh.position.x) > 7) n.vx *= -1;
          if (Math.abs(n.mesh.position.y) > 4) n.vy *= -1;
          if (Math.abs(n.mesh.position.z) > 2) n.vz *= -1;
        });
        if (frame % 3 === 0) updateLines();
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      }

      const onLost = (e) => { e.preventDefault(); if (rafId) cancelAnimationFrame(rafId); };
      canvas.addEventListener('webglcontextlost', onLost, false);

      gateVisibility(
        canvas,
        () => { rafId = requestAnimationFrame(animate); },
        () => { if (rafId) cancelAnimationFrame(rafId); }
      );

      cleanups.push(() => {
        canvas.removeEventListener('webglcontextlost', onLost);
        window.removeEventListener('resize', resize);
        renderer.dispose();
      });
    })();

    // ===================================================================
    // CTA SCENE — animated wave grid
    // ===================================================================
    (function () {
      const canvas = root.querySelector('#cta-canvas');
      if (!canvas) return;
      if (isMobile) return; // one fewer WebGL context on phones — avoids GPU OOM
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, DPR_CAP));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.set(0, 2, 5);
      camera.lookAt(0, 0, 0);

      function resize() {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      const gridSize = 20;
      const planeGeo = new THREE.PlaneGeometry(10, 10, gridSize, gridSize);
      const planeMat = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.3 });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.rotation.x = -Math.PI / 2.5;
      scene.add(plane);

      const positions = planeGeo.attributes.position.array;
      const original = positions.slice();

      let frame = 0;
      let rafId;
      function animate() {
        if (RM) { renderer.render(scene, camera); return; }
        frame++;
        for (let i = 0; i < positions.length; i += 3) {
          const x = original[i];
          const y = original[i + 1];
          positions[i + 2] = Math.sin(x * 0.6 + frame * 0.04) * 0.4 + Math.cos(y * 0.6 + frame * 0.03) * 0.4;
        }
        planeGeo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
      }

      const onLost = (e) => { e.preventDefault(); if (rafId) cancelAnimationFrame(rafId); };
      canvas.addEventListener('webglcontextlost', onLost, false);

      gateVisibility(
        canvas,
        () => { rafId = requestAnimationFrame(animate); },
        () => { if (rafId) cancelAnimationFrame(rafId); }
      );

      cleanups.push(() => {
        canvas.removeEventListener('webglcontextlost', onLost);
        window.removeEventListener('resize', resize);
        renderer.dispose();
      });
    })();

    // ===================================================================
    // SCROLL REVEAL — toggle .visible as elements enter / leave view
    // ===================================================================
    (function () {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
            else entry.target.classList.remove('visible');
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      root.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    })();

    // ===================================================================
    // COUNT-UP STATS — reset + replay each time they re-enter view
    // ===================================================================
    (function () {
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting) {
              if (el._animFrame) cancelAnimationFrame(el._animFrame);
              if (el.dataset.text) {
                el.textContent = el.dataset.text;
              } else {
                if (RM) {
                  el.textContent = parseInt(el.dataset.count) + (el.dataset.suffix || '');
                  return;
                }
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const duration = 1800;
                const start = performance.now();
                const tick = (now) => {
                  const elapsed = now - start;
                  const progress = Math.min(elapsed / duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  el.textContent = Math.floor(eased * target) + suffix;
                  if (progress < 1) el._animFrame = requestAnimationFrame(tick);
                  else {
                    el.textContent = target + suffix;
                    el._animFrame = null;
                  }
                };
                el._animFrame = requestAnimationFrame(tick);
              }
            } else {
              if (el._animFrame) {
                cancelAnimationFrame(el._animFrame);
                el._animFrame = null;
              }
              el.textContent = '0';
            }
          });
        },
        { threshold: 0.5 }
      );
      const counters = root.querySelectorAll('.stat-num, .trust-stat-num');
      counters.forEach((el) => {
        if (el.dataset.count) el.textContent = '0';
        countObserver.observe(el);
      });
      cleanups.push(() => {
        countObserver.disconnect();
        counters.forEach((el) => {
          if (el._animFrame) cancelAnimationFrame(el._animFrame);
        });
      });
    })();

    // ===================================================================
    // EN/FR BILINGUAL TOGGLE — swaps [data-i18n] copy; default EN
    // ===================================================================
    (function () {
      const I18N = { "nav.services": { "en": "Services", "fr": "Services" }, "nav.industries": { "en": "Industries", "fr": "Secteurs" }, "nav.methodology": { "en": "Methodology", "fr": "Méthodologie" }, "nav.insights": { "en": "Insights", "fr": "Analyses" }, "nav.why": { "en": "Why Us", "fr": "Pourquoi nous" }, "nav.faq": { "en": "FAQ", "fr": "FAQ" }, "nav.cta": { "en": "Book a Consultation →", "fr": "Prendre rendez-vous →" }, "hero.eyebrow": { "en": "Independent Security Assurance", "fr": "Assurance de sécurité indépendante" }, "hero.tagline": { "en": "SECURITY THAT SIMPLY WORKS", "fr": "UNE SÉCURITÉ QUI FONCTIONNE" }, "hero.cta": { "en": "Get a Security Consultation", "fr": "Obtenir une consultation en sécurité" }, "hero.subnote": { "en": "30-day money-back guarantee · Senior-led engagements", "fr": "Garantie de remboursement de 30 jours · Mandats menés par des seniors" }, "eyebrow.trust": { "en": "Credentials &amp; Recognition", "fr": "Références et reconnaissance" }, "title.trust": { "en": "Trusted standards. <em>Independent</em> verification.", "fr": "Des normes éprouvées. Une vérification <em>indépendante</em>." }, "eyebrow.services": { "en": "What We Do", "fr": "Ce que nous faisons" }, "title.services": { "en": "Comprehensive <em>cybersecurity</em> services for resilient organisations.", "fr": "Des services de <em>cybersécurité</em> complets pour des organisations résilientes." }, "eyebrow.industries": { "en": "Sectors We Serve", "fr": "Secteurs desservis" }, "title.industries": { "en": "Sector expertise, <em>regulatory</em> fluency.", "fr": "Expertise sectorielle, aisance <em>réglementaire</em>." }, "eyebrow.methodology": { "en": "How We Work", "fr": "Notre méthode" }, "title.methodology": { "en": "A structured six-stage <em>engagement</em> process.", "fr": "Un processus de mandat <em>structuré</em> en six étapes." }, "eyebrow.engage": { "en": "How to Engage", "fr": "Modes de collaboration" }, "title.engage": { "en": "Clear ways to <em>work with us</em>.", "fr": "Des façons claires de <em>collaborer</em>." }, "eyebrow.why": { "en": "Why Choose Us", "fr": "Pourquoi nous choisir" }, "title.why": { "en": "Independent, expert-led security <em>that delivers</em> real answers.", "fr": "Une sécurité indépendante, menée par des experts, <em>qui livre</em> de vraies réponses." }, "eyebrow.coverage": { "en": "Global Standards, Local Delivery", "fr": "Normes mondiales, prestation locale" }, "title.coverage": { "en": "Senior-led security, measured by outcomes.", "fr": "Une sécurité menée par des seniors, mesurée par les résultats." }, "eyebrow.engagements": { "en": "Recent Engagements", "fr": "Mandats récents" }, "title.engagements": { "en": "Notable work, <em>anonymized</em>.", "fr": "Des mandats marquants, <em>anonymisés</em>." }, "eyebrow.insights": { "en": "Insights &amp; Research", "fr": "Analyses et recherche" }, "title.insights": { "en": "Research and <em>thought leadership</em>.", "fr": "Recherche et <em>leadership éclairé</em>." }, "eyebrow.team": { "en": "Our Team", "fr": "Notre équipe" }, "quote.team": { "en": "Senior security work needs <em>senior</em> consultants, not three layers of project management between you and the people doing the analysis.", "fr": "Un travail de sécurité de haut niveau exige des consultants <em>seniors</em>, pas trois couches de gestion de projet entre vous et les personnes qui réalisent l'analyse." }, "eyebrow.sample": { "en": "Before You Decide", "fr": "Avant de décider" }, "title.sample": { "en": "See the <em>report</em> before you commit.", "fr": "Voyez le <em>rapport</em> avant de vous engager." }, "eyebrow.faq": { "en": "Frequently Asked", "fr": "Questions fréquentes" }, "title.faq": { "en": "You have questions, <em>we have</em> answers.", "fr": "Vous avez des questions, <em>nous avons</em> les réponses." }, "eyebrow.data": { "en": "Data Handling", "fr": "Traitement des données" }, "title.data": { "en": "Your data stays <em>in Canada</em>, and under control.", "fr": "Vos données restent <em>au Canada</em>, et sous contrôle." }, "footer.tagline": { "en": "Independent security assurance for regulated and high-risk organisations.", "fr": "Assurance de sécurité indépendante pour les organisations réglementées et à haut risque." }, "footer.services": { "en": "Services", "fr": "Services" }, "footer.industries": { "en": "Industries", "fr": "Secteurs" }, "footer.resources": { "en": "Resources", "fr": "Ressources" }, "footer.company": { "en": "Company", "fr": "Entreprise" }, "footer.accessibility": { "en": "Accessibility", "fr": "Accessibilité" }, "footer.a11y": { "en": "Accessibility · WCAG 2.1 AA / AODA", "fr": "Accessibilité · WCAG 2.1 AA / LAPHO" }, "footer.quote": { "en": "Request a Quote", "fr": "Demander un devis" }, "footer.legal": { "en": "Trust & Legal", "fr": "Confiance et mentions légales" }, "footer.copyright": { "en": "© 2026 SynapseCyber Information Security. All rights reserved.", "fr": "© 2026 SynapseCyber Information Security. Tous droits réservés." } };
      const toggles = document.querySelectorAll('.lang-toggle');
      function setLang(lang) {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
          const d = I18N[el.getAttribute('data-i18n')];
          if (d && d[lang] != null) el.innerHTML = d[lang];
        });
        document.documentElement.setAttribute('lang', lang);
        toggles.forEach((t) => t.classList.toggle('is-fr', lang === 'fr'));
        try { localStorage.setItem('cx-lang', lang); } catch (e) { }
      }
      let cur = 'en';
      try { if (localStorage.getItem('cx-lang') === 'fr') cur = 'fr'; } catch (e) { }
      const handlers = [];
      toggles.forEach((t) => {
        const h = () => { cur = cur === 'fr' ? 'en' : 'fr'; setLang(cur); };
        t.addEventListener('click', h);
        handlers.push([t, h]);
      });
      if (cur === 'fr') setLang('fr');
      cleanups.push(() => handlers.forEach(([t, h]) => t.removeEventListener('click', h)));
    })();

    // ------------------------- teardown -------------------------
    return () => {
      cleanups.forEach((fn) => {
        try { fn(); } catch (e) { }
      });
    };
  }, []);

  return (
    <>
      <div ref={rootRef} className="synapsecyber-page">
        <section className="hero-intro">
          <div className="hero-bg-noise"></div>

          <svg className="hero-arc" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="arcGlowSoft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="25" />
              </filter>
              <filter id="arcGlowMega" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="60" />
              </filter>
            </defs>

            <path className="arc arc-mega" d="M 100 540 Q 700 60 1300 540" stroke="#DBEAFE" strokeWidth="6" fill="none" filter="url(#arcGlowMega)" opacity="0.5" />

            <path className="arc arc-soft" d="M 100 540 Q 700 60 1300 540" stroke="#DBEAFE" strokeWidth="3" fill="none" filter="url(#arcGlowSoft)" opacity="0.8" />

            <path className="arc arc-main" d="M 100 540 Q 700 60 1300 540" stroke="#DBEAFE" strokeWidth="2" fill="none" filter="url(#arcGlow)" />

            <path className="arc arc-core" d="M 100 540 Q 700 60 1300 540" stroke="#DBEAFE" strokeWidth="1" fill="none" />
          </svg>

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot"></span>
              <span data-i18n="hero.eyebrow">Independent Security Assurance</span>
            </div>
            <h1 className="brand-title">
              <span style={{ '--i': '0' }}>S</span><span style={{ '--i': '1' }}>y</span><span style={{ '--i': '2' }}>n</span><span style={{ '--i': '3' }}>a</span><span style={{ '--i': '4' }}>p</span><span style={{ '--i': '5' }}>s</span><span style={{ '--i': '6' }}>e</span><span style={{ '--i': '7' }}>C</span><span style={{ '--i': '8' }}>y</span><span style={{ '--i': '9' }}>b</span><span style={{ '--i': '10' }}>e</span><span style={{ '--i': '11' }}>r</span>
            </h1>
            <p className="brand-tagline" data-i18n="hero.tagline">SECURITY THAT SIMPLY WORKS</p>
            <a href="#quote" className="hero-cta-pill">
              <span data-i18n="hero.cta">Get a Security Consultation</span>
            </a>
            <p className="hero-subnote" data-i18n="hero.subnote">30-day money-back guarantee · Senior-led engagements</p>
          </div>
        </section>


        <section className="quote-section" id="quote">
          <div className="container">
            <div className="quote-panel reveal">


              <div className="quote-banner">
                <svg className="quote-banner-waves" viewBox="0 0 940 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <g transform="rotate(-10 470 190)">
                    <path d="M-120,-70 C120,-110 320,-30 540,-70 760,-110 940,-40 1060,-70 L1060,-12 C940,18 760,-52 540,-12 320,28 120,-52 -120,-12 Z" fill="#FFFFFF" opacity="0.16" />
                    <path d="M-120,42 C120,2 300,82 520,42 740,2 940,72 1060,42 L1060,98 C940,128 740,58 520,98 300,138 120,58 -120,98 Z" fill="#FFFFFF" opacity="0.28" />
                    <path d="M-120,152 C120,112 300,192 520,152 740,112 940,182 1060,152 L1060,208 C940,238 740,168 520,208 300,248 120,168 -120,208 Z" fill="#FFFFFF" opacity="0.20" />
                    <path d="M-120,258 C120,218 300,302 520,258 740,214 940,288 1060,258 L1060,332 C940,362 740,288 520,332 300,376 120,292 -120,332 Z" fill="#8FB6F9" opacity="0.32" />
                  </g>
                </svg>

                <div className="quote-banner-inner">
                  <div>
                    <div className="quote-banner-logo">
                      <span className="logo-dot">S</span>
                      SynapseCyber
                    </div>
                    <h2>Request a quote</h2>
                    <p className="quote-banner-sub">Fill the form below and we will reply with a custom quote for your needs.</p>
                  </div>


                  <div className="quote-banner-trust">
                    <div className="qbt-head">Why SynapseCyber</div>
                    <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Senior consultants only, no juniors on your account</div>
                    <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>10+ years, 40+ TRAs &amp; PIAs delivered</div>
                    <div className="qbt-row"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Audit-ready evidence your board accepts</div>
                  </div>
                </div>
              </div>


              <form className="quote-form-card" onSubmit={quoteForm.handleSubmit} noValidate>
                <p className="quote-form-intro">A senior consultant replies within one business day. No sales runaround, just a clear scoped quote.</p>

                <div className="quote-form-row">
                  <div className="form-field">
                    <label>Full name</label>
                    <div className="field-wrap">
                      <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="10" cy="6.5" r="3.2" />
                        <path d="M4 17c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" />
                      </svg>
                      <input type="text" name="name" placeholder="Jane Doe" aria-label="Full name" required />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Work email</label>
                    <div className="field-wrap">
                      <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="14" height="11" rx="1.5" />
                        <path d="M3 7l7 5 7-5" />
                      </svg>
                      <input type="email" name="email" placeholder="jane@company.com" aria-label="Work email" required />
                    </div>
                  </div>
                </div>

                <div className="quote-form-row">
                  <div className="form-field">
                    <label>Organisation</label>
                    <div className="field-wrap">
                      <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 17h14M5 17V5h7v12M12 17V9h4v8M7 8h2M7 11h2M7 14h2" />
                      </svg>
                      <input type="text" name="organisation" placeholder="Company name" aria-label="Organisation" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Service required</label>
                    <div className="field-wrap">
                      <svg className="field-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="10" cy="10" r="7" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                      </svg>
                      <select name="service" aria-label="Service required">
                        <option>Penetration Testing</option>
                        <option>Threat &amp; Risk Assessment (TRA)</option>
                        <option>Privacy Impact Assessment (PIA)</option>
                        <option>Red Team / Adversary Simulation</option>
                        <option>vCISO / Security Advisory</option>
                        <option>Incident Response</option>
                        <option>Not sure yet, help me scope</option>
                      </select>
                      <svg className="field-chevron" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5l4 4 4-4" /></svg>
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <label>Project details</label>
                  <textarea className="quote-textarea" name="message" aria-label="Project details" placeholder="Systems in scope, rough timeline, and any compliance drivers (PIPEDA, SOC 2, RCMP TRA)…" required></textarea>
                </div>

                <button className="form-submit-pro" type="submit" disabled={quoteForm.sending}>
                  <span>{quoteForm.sending ? 'Sending…' : 'Request quote'}</span>
                  <svg viewBox="0 0 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 7h12M9 2l5 5-5 5" />
                  </svg>
                </button>

                {quoteForm.error && (
                  <p role="alert" style={{ color: '#c0392b', marginTop: '14px', fontSize: '14px' }}>{quoteForm.error}</p>
                )}
                {quoteForm.sent && (
                  <p role="status" style={{ color: '#1a7f4b', marginTop: '14px', fontSize: '14px' }}>Thanks — your request was sent. We&apos;ll reply within one business day.</p>
                )}

                <div className="quote-card-footer">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="6.5" width="8" height="6" rx="1" />
                    <path d="M5 6.5V4a2 2 0 014 0v2.5" />
                  </svg>
                  <span>Your information stays private, used only to prepare your quote. <Link to="/legal/privacy">Privacy Policy</Link></span>
                </div>
              </form>


              <div className="quote-trust-row">
                <div className="quote-response">
                  <div className="quote-response-dot"></div>
                  <div>
                    <div className="quote-response-num">&lt; 4hrs</div>
                    <div className="quote-response-label">average response during business hours</div>
                  </div>
                </div>
                <div className="quote-pills">
                  <span className="quote-pill"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l3 3 5-6" /></svg>RCMP Harmonized TRA</span>
                  <span className="quote-pill"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l3 3 5-6" /></svg>GoC Reliability</span>
                  <span className="quote-pill"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l3 3 5-6" /></svg>Same-day scoping</span>
                  <span className="quote-pill"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l3 3 5-6" /></svg>Retest included</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="trust-section">
          <div className="container">
            <div className="trust-header reveal">
              <div className="section-eyebrow" data-i18n="eyebrow.trust">Credentials &amp; Recognition</div>
              <h2 className="trust-title" data-i18n="title.trust">Trusted standards. <em>Independent</em> verification.</h2>
              <p className="trust-lead">Senior consultants aligned with the frameworks your auditors, regulators, and boards already trust.</p>
            </div>

            <div className="creds-redesign reveal">
              <div className="creds-block">
                <div className="creds-block-head">
                  <span className="creds-block-num">01</span>
                  <span className="creds-block-label">Aligned Methodologies</span>
                  <div className="creds-block-line"></div>
                </div>
                <div className="creds-block-items">
                  <div className="creds-item">
                    <div className="creds-item-name">NIST SP 800-30</div>
                    <div className="creds-item-desc">Guide for Conducting Risk Assessments</div>
                    <div className="creds-item-source">National Institute of Standards and Technology</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">ISO 27005:2022</div>
                    <div className="creds-item-desc">Information Security Risk Management</div>
                    <div className="creds-item-source">International Organization for Standardization</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">OWASP RRM</div>
                    <div className="creds-item-desc">Risk Rating Methodology &amp; LLM Top 10</div>
                    <div className="creds-item-source">Open Worldwide Application Security Project</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">RCMP Harmonized TRA</div>
                    <div className="creds-item-desc">Threat &amp; Privacy Risk Assessment</div>
                    <div className="creds-item-source">Royal Canadian Mounted Police</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">ITSG-33</div>
                    <div className="creds-item-desc">IT Security Risk Management</div>
                    <div className="creds-item-source">Canadian Centre for Cyber Security</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">PBMM / Protected B</div>
                    <div className="creds-item-desc">Medium-Medium-Medium baseline</div>
                    <div className="creds-item-source">Government of Canada</div>
                  </div>
                </div>
              </div>

              <div className="creds-block">
                <div className="creds-block-head">
                  <span className="creds-block-num">02</span>
                  <span className="creds-block-label">Professional Credentials</span>
                  <div className="creds-block-line"></div>
                </div>
                <div className="creds-block-items">
                  <div className="creds-item">
                    <div className="creds-item-name">AZ-500</div>
                    <div className="creds-item-desc">Azure Security Engineer Associate</div>
                    <div className="creds-item-source">Microsoft</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">EC-Council</div>
                    <div className="creds-item-desc">Certified DevSecOps Engineer</div>
                    <div className="creds-item-source">International Council of E-Commerce Consultants</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">SANS SEC560</div>
                    <div className="creds-item-desc">Enterprise Penetration Testing</div>
                    <div className="creds-item-source">SANS Institute</div>
                  </div>
                  <div className="creds-item">
                    <div className="creds-item-name">Government of Canada</div>
                    <div className="creds-item-desc">Reliability Status · Secret in Progress</div>
                    <div className="creds-item-source">Public Services and Procurement Canada</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="trust-stats reveal">
              <div className="trust-stat">
                <div className="trust-stat-num" data-count="40" data-suffix="+">40+</div>
                <div className="trust-stat-label">TRAs &amp; PIAs Delivered</div>
              </div>
              <div className="trust-stat-divider"></div>
              <div className="trust-stat">
                <div className="trust-stat-num" data-count="10" data-suffix="+">10+</div>
                <div className="trust-stat-label">Years in Cybersecurity</div>
              </div>
              <div className="trust-stat-divider"></div>
              <div className="trust-stat">
                <div className="trust-stat-num" data-count="98" data-suffix="%">98%</div>
                <div className="trust-stat-label">Client Retention</div>
              </div>
              <div className="trust-stat-divider"></div>
              <div className="trust-stat">
                <div className="trust-stat-num" data-text="24/7">24/7</div>
                <div className="trust-stat-label">Incident Response</div>
              </div>
            </div>

            <div className="speaking-row reveal">
              <div className="speaking-label">As featured &amp; spoken at:</div>
              <div className="speaking-logos">
                <span className="speaking-logo">DEFCON <em>AppSec Village</em></span>
                <span className="speaking-dot">·</span>
                <span className="speaking-logo">ATLSECCON</span>
                <span className="speaking-dot">·</span>
                <span className="speaking-logo">SiberX</span>
                <span className="speaking-dot">·</span>
                <span className="speaking-logo">OWASP</span>
                <span className="speaking-dot">·</span>
                <span className="speaking-logo">BSides</span>
              </div>
            </div>
          </div>
        </section>

        <section className="founder" id="team">
          <div className="container">
            <div className="founder-grid reveal">
              <div className="founder-left">
                <div className="section-eyebrow" data-i18n="eyebrow.team">Our Team</div>
                <blockquote className="founder-quote" data-i18n="quote.team">Senior security work needs <em>senior</em> consultants, not three layers of project management between you and the people doing the analysis.</blockquote>
                <div className="founder-attrib">
                  <div className="founder-name">Rida Rashid</div>
                  <div className="founder-title">Founder &amp; Principal Consultant</div>
                </div>
              </div>

              <div className="founder-right">
                <div className="founder-meta">
                  <h5 className="founder-meta-label">How We Deliver</h5>
                  <p className="founder-meta-text">Every engagement is led by a senior consultant and independently reviewed: the person who tests is never the only person who signs off. No junior hand-offs, no project-management layers between you and the analysis.</p>
                </div>
                <div className="founder-meta">
                  <h5 className="founder-meta-label">Speaking &amp; Recognition</h5>
                  <div className="founder-speaking">
                    <span>DEFCON <em>AppSec Village</em></span>
                    <span>ATLSECCON</span>
                    <span>SiberX</span>
                    <span>OWASP Atlantic</span>
                  </div>
                </div>
                <div className="founder-meta">
                  <h5 className="founder-meta-label">Reach Out</h5>
                  <div className="founder-contact">
                    <a href="mailto:ridarashid.cyber@gmail.com">ridarashid.cyber@gmail.com</a>
                    <a href="#">LinkedIn &#8599;</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-grid reveal-stagger">
              <article className="team-card is-principal">
                <div className="team-role">Principal Consultant</div>
                <div className="team-name">Founder</div>
                <p className="team-cred">10+ years in offensive security and threat management across Sobeys, Flexiti, KPMG, CGI, and GoSecure. 40+ RCMP Harmonized TRAs/PIAs. DEFCON &amp; ATLSECCON speaker.</p>
              </article>
              <article className="team-card">
                <div className="team-role">Senior Penetration Tester</div>
                <div className="team-name">Offensive Security</div>
                <p className="team-cred">Manual, adversary-style testing: chained attack paths, Active Directory and AD CS abuse, and business-logic flaws automated scanners miss.</p>
              </article>
              <article className="team-card">
                <div className="team-role">Privacy / TRA Lead</div>
                <div className="team-name">Risk &amp; Compliance</div>
                <p className="team-cred">RCMP Harmonized TRA and PIA delivery across NS / NB / PEI government, Crown corporations, and healthcare. PIPEDA and provincial privacy alignment.</p>
              </article>
              <article className="team-card">
                <div className="team-role">vCISO &amp; Advisory</div>
                <div className="team-name">Governance</div>
                <p className="team-cred">Board-level reporting and program design: NIST CSF, ISO 27001, SOC 2, and OSFI E-23 readiness for regulated and high-growth clients.</p>
              </article>
            </div>

            <div className="team-capacity reveal">
              <b>Capacity for larger engagements.</b> For multi-stream or fixed-deadline work, our core consultants are supported by a vetted partner network of senior specialists, scaled to scope while every deliverable stays senior-led and independently reviewed.
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow" data-i18n="eyebrow.services">What We Do</div>
              <h2 className="section-title" data-i18n="title.services">Comprehensive <em>cybersecurity</em> services for resilient organisations.</h2>
              <p className="section-lead">Senior-led engagements that strengthen defences, minimise risk, and produce evidence your auditors, board, and regulators will accept.</p>
            </div>

            <div className="services-grid reveal-stagger">
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <h3>Threat &amp; Risk Assessment</h3>
                <p>RCMP Harmonized TRA methodology with risk cards and controls mapping.</p>
                <Link to="/threat-risk-assessment" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 L20 6 L20 12 C20 16 17 19 12 21 C7 19 4 16 4 12 L4 6 Z" />
                    <circle cx="12" cy="12" r="2.5" />
                    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
                  </svg>
                </div>
                <h3>Privacy Impact Assessment</h3>
                <p>PIPEDA, provincial privacy law, GDPR-aligned PIAs with full data flow mapping.</p>
                <Link to="/privacy-impact-assessment" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="11" width="14" height="10" rx="1" />
                    <path d="M8 11 V7 C8 4.8 9.8 3 12 3 C14.2 3 16 4.8 16 7 V11" />
                    <circle cx="12" cy="16" r="1.2" fill="currentColor" />
                  </svg>
                </div>
                <h3>Penetration Testing</h3>
                <p>Web, mobile, API, network, cloud. Manual testing by senior pentesters.</p>
                <Link to="/penetration-testing" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3 V21" />
                    <path d="M5 4 L17 4 L14 8 L17 12 L5 12 Z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
                <h3>Red Team &amp; Adversary Simulation</h3>
                <p>Full-scope simulation testing detection, response, and resilience.</p>
                <Link to="/red-team-adversary-simulation" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 6 L3 12 L8 18" />
                    <path d="M16 6 L21 12 L16 18" />
                    <path d="M14 4 L10 20" />
                  </svg>
                </div>
                <h3>Secure Code Review</h3>
                <p>SAST, manual review, threat modelling across major language stacks.</p>
                <Link to="/secure-code-review" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" strokeDasharray="3 2" />
                    <path d="M12 12 L18 6" />
                    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                  </svg>
                </div>
                <h3>Vulnerability Assessment</h3>
                <p>Systematic discovery using CVSS, EPSS, and SSVC prioritisation frameworks.</p>
                <Link to="/vulnerability-assessment" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="16" width="18" height="5" />
                    <rect x="6" y="10" width="12" height="6" />
                    <rect x="9" y="3" width="6" height="7" />
                  </svg>
                </div>
                <h3>Security Architecture Review</h3>
                <p>Evaluate design, segmentation, identity, and trust boundaries.</p>
                <Link to="/security-architecture-review" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 16 C4 16 2 14 2 11.5 C2 9 4 7 6.5 7 C7 4 10 2 13 2 C16.5 2 19 4.5 19.5 7.5 C21.5 8 23 10 23 12 C23 14.5 21 16 18 16 Z" />
                    <path d="M9 12 L11 14 L15 9" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Cloud Security Assessment</h3>
                <p>AWS, Azure, GCP. CIS benchmarks, IaC scanning, identity review.</p>
                <Link to="/cloud-security-assessment" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M4 21 C4 16.5 7.5 14 12 14 C16.5 14 20 16.5 20 21" />
                    <path d="M16 4 L18 6 L22 2" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>vCISO &amp; Advisory</h3>
                <p>Fractional security leadership: strategy, roadmap, board reporting.</p>
                <Link to="/vciso-advisory" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 L4 15 L11 15 L9 21 L20 10 L13 10 L15 3 Z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
                <h3>Incident Response</h3>
                <p>Same-day engagement for ransomware, BEC, exfiltration, and compromise.</p>
                <Link to="/incident-response" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="6" width="12" height="12" rx="1" />
                    <rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.2" />
                    <path d="M12 2 V6 M12 18 V22 M2 12 H6 M18 12 H22 M2 8 H6 M2 16 H6 M18 8 H22 M18 16 H22 M8 2 V6 M16 2 V6 M8 18 V22 M16 18 V22" />
                  </svg>
                </div>
                <h3>AI / LLM Security</h3>
                <p>OWASP LLM Top 10, MCP threat modelling, NIST AI RMF alignment.</p>
                <Link to="/ai-llm-security" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="8" ry="2.5" />
                    <path d="M4 5 V12 C4 13.4 7.6 14.5 12 14.5 C16.4 14.5 20 13.4 20 12 V5" />
                    <path d="M4 12 V19 C4 20.4 7.6 21.5 12 21.5 C16.4 21.5 20 20.4 20 19 V12" />
                  </svg>
                </div>
                <h3>SAP Security</h3>
                <p>ABAP code review, authorisation analysis, GRC for S/4HANA.</p>
                <Link to="/sap-security" className="read-more">Read more <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 5h10M7 1l4 4-4 4" /></svg></Link>
              </div>
            </div>
          </div>
        </section>


        <section id="industries">
          <div className="container">
            <div className="reveal" style={{ maxWidth: '700px' }}>
              <div className="section-eyebrow" data-i18n="eyebrow.industries">Sectors We Serve</div>
              <h2 className="section-title" data-i18n="title.industries">Sector expertise, <em>regulatory</em> fluency.</h2>
              <p className="section-lead">We work where the stakes and the compliance burden are highest, and we speak each sector's regulatory language.</p>
            </div>
            <div className="industries-grid reveal-stagger">
              <article className="industry-card">
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 10h16M5 10l7-5 7 5M6 10v8M10 10v8M14 10v8M18 10v8" /></svg></div>
                <div className="industry-name">Financial Services</div>
                <p className="industry-driver">Banks, lenders, and fintechs under federal prudential oversight.</p>
                <div className="industry-reg">OSFI B-13 · PCI DSS · SOC 2</div>
              </article>
              <article className="industry-card">
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6" /></svg></div>
                <div className="industry-name">Healthcare</div>
                <p className="industry-driver">Patient-facing systems and custodians of personal health information.</p>
                <div className="industry-reg">PIPEDA · Provincial Health Privacy</div>
              </article>
              <article className="industry-card">
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6" /></svg></div>
                <div className="industry-name">Government &amp; Crown Corporations</div>
                <p className="industry-driver">Federal, provincial, and municipal bodies handling protected data.</p>
                <div className="industry-reg">RCMP Harmonized TRA · ITSG-33 · Protected B</div>
              </article>
              <article className="industry-card">
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18H7z" /></svg></div>
                <div className="industry-name">SaaS &amp; Technology</div>
                <p className="industry-driver">Product teams proving security to enterprise buyers and auditors.</p>
                <div className="industry-reg">SOC 2 · ISO 27001 · OWASP</div>
              </article>
              <article className="industry-card">
                <div className="ind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></svg></div>
                <div className="industry-name">Critical Infrastructure</div>
                <p className="industry-driver">Operational technology and essential services where uptime is safety.</p>
                <div className="industry-reg">NIST CSF · OSFI E-23 · OT Security</div>
              </article>
            </div>
          </div>
        </section>

        <section className="methodology" id="methodology">
          <canvas id="method-canvas" aria-hidden="true"></canvas>
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow" data-i18n="eyebrow.methodology">How We Work</div>
              <h2 className="section-title" data-i18n="title.methodology">A structured six-stage <em>engagement</em> process.</h2>
              <p className="section-lead">From scoping through validation, every finding is documented, evidenced, and actionable.</p>
            </div>

            <div className="method-grid reveal-stagger">
              <div className="method-step" data-num="01">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="14" cy="14" r="10" />
                    <circle cx="14" cy="14" r="6" />
                    <circle cx="14" cy="14" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 01</div>
                <h4>Scoping</h4>
                <p className="method-desc">We start with the boundary: what's in, what's out, and what success looks like before any tool runs.</p>
                <ul>
                  <li>Define success criteria</li>
                  <li>Rules of engagement</li>
                  <li>Confirm authorisation</li>
                </ul>
              </div>

              <div className="method-step" data-num="02">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 14 L24 4" />
                    <path d="M14 14 m-10 0 a10 10 0 0 1 20 0" strokeDasharray="2 2" />
                    <path d="M14 14 m-6 0 a6 6 0 0 1 12 0" />
                    <circle cx="14" cy="14" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 02</div>
                <h4>Reconnaissance</h4>
                <p className="method-desc">Surface mapping, fingerprinting, and intelligence gathering across the agreed perimeter.</p>
                <ul>
                  <li>Information gathering</li>
                  <li>Discovery &amp; enumeration</li>
                  <li>Vulnerability scanning</li>
                </ul>
              </div>

              <div className="method-step" data-num="03">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3 L7 16 L13 16 L11 25 L21 12 L15 12 L17 3 Z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 03</div>
                <h4>Exploitation</h4>
                <p className="method-desc">Verified, manual exploitation by senior testers: no scanner-flagged noise, only proven impact.</p>
                <ul>
                  <li>Vulnerability verification</li>
                  <li>Lateral movement</li>
                  <li>False positive removal</li>
                </ul>
              </div>

              <div className="method-step" data-num="04">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="16" width="4" height="8" fill="currentColor" fillOpacity="0.3" />
                    <rect x="11" y="11" width="4" height="13" fill="currentColor" fillOpacity="0.5" />
                    <rect x="18" y="6" width="4" height="18" fill="currentColor" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 04</div>
                <h4>Analysis</h4>
                <p className="method-desc">Findings consolidated, severity assigned, business impact mapped to your control library.</p>
                <ul>
                  <li>Consolidate findings</li>
                  <li>Severity rating</li>
                  <li>Business impact mapping</li>
                </ul>
              </div>

              <div className="method-step" data-num="05">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3 L18 3 L23 8 L23 25 L6 25 Z" />
                    <path d="M18 3 L18 8 L23 8" />
                    <line x1="10" y1="14" x2="19" y2="14" />
                    <line x1="10" y1="18" x2="19" y2="18" />
                    <line x1="10" y1="22" x2="15" y2="22" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 05</div>
                <h4>Reporting</h4>
                <p className="method-desc">Board-ready executive summary plus technical findings with reproduction steps and remediation paths.</p>
                <ul>
                  <li>Executive summary</li>
                  <li>Technical findings</li>
                  <li>Prioritised remediation</li>
                </ul>
              </div>

              <div className="method-step" data-num="06">
                <div className="method-icon">
                  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3 L23 7 L23 14 C23 19 19 23 14 25 C9 23 5 19 5 14 L5 7 Z" />
                    <path d="M10 14 L13 17 L18 11" strokeWidth="2" />
                  </svg>
                </div>
                <div className="method-step-tag">Stage 06</div>
                <h4>Validation</h4>
                <p className="method-desc">Retest of remediated findings within the agreed window, plus a confirmation letter for your auditors.</p>
                <ul>
                  <li>Retest of remediations</li>
                  <li>Confirmation letter</li>
                  <li>Audit-ready evidence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="why">
          <div className="container">
            <div className="why-layout">
              <div className="why-intro reveal">
                <div className="section-eyebrow" data-i18n="eyebrow.why">Why Choose Us</div>
                <h2 className="section-title" data-i18n="title.why">Independent, expert-led security <em>that delivers</em> real answers.</h2>
                <p className="section-lead">Not automated scanner output. Senior consultants, conservative judgement, evidence-based reporting.</p>
                <div className="why-proof">
                  <div className="why-proof-item">
                    <div className="why-proof-num">98<span className="pct">%</span></div>
                    <div className="why-proof-label">Client retention</div>
                  </div>
                  <div className="why-proof-divider"></div>
                  <div className="why-proof-item">
                    <div className="why-proof-num">10<span className="pct">+</span></div>
                    <div className="why-proof-label">Years experience</div>
                  </div>
                </div>
              </div>

              <div className="why-cards reveal-stagger">
                <article className="why-card">
                  <div className="why-card-top">
                    <span className="why-tag">Reason 01</span>
                    <svg className="why-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="16" cy="16" r="3" fill="currentColor" />
                      <path d="M16 1 L16 6 M16 26 L16 31 M1 16 L6 16 M26 16 L31 16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="why-bignum">01</div>
                  <h4 className="why-card-title">Built for your context</h4>
                  <p className="why-card-text">Engagements that meet your specific risk profile, regulatory drivers, and audit timelines, not a template that gets re-skinned for every client.</p>
                  <div className="why-card-foot">
                    <span className="dot"></span>
                    <span>Tailored scoping in every engagement</span>
                  </div>
                </article>

                <article className="why-card">
                  <div className="why-card-top">
                    <span className="why-tag">Reason 02</span>
                    <svg className="why-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 28 C5 22 9 19 16 19 C23 19 27 22 27 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="24" cy="8" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="why-bignum">02</div>
                  <h4 className="why-card-title">Beyond the scanner</h4>
                  <p className="why-card-text">Senior testers use unpredictable, adversary-style methods that automated tools cannot replicate: chained attack paths, business logic flaws, and trust boundary violations.</p>
                  <div className="why-card-foot">
                    <span className="dot"></span>
                    <span>Manual testing led by senior consultants</span>
                  </div>
                </article>

                <article className="why-card">
                  <div className="why-card-top">
                    <span className="why-tag">Reason 03</span>
                    <svg className="why-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11 12 L21 12 M11 17 L21 17 M11 22 L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="24" cy="24" r="5" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 24 L23.5 25.5 L26 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="why-bignum">03</div>
                  <h4 className="why-card-title">Findings you can act on</h4>
                  <p className="why-card-text">Every finding contextualised to your environment, with prioritised remediation, reproduction steps, and evidence your team can act on Monday morning, not next quarter.</p>
                  <div className="why-card-foot">
                    <span className="dot"></span>
                    <span>Board-ready summaries, developer-ready details</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>


        <section id="engage">
          <div className="container">
            <div className="reveal" style={{ maxWidth: '700px' }}>
              <div className="section-eyebrow" data-i18n="eyebrow.engage">How to Engage</div>
              <h2 className="section-title" data-i18n="title.engage">Clear ways to <em>work with us</em>.</h2>
              <p className="section-lead">Procurement-ready from day one: cleared personnel, insured engagements, and a model that fits your scope.</p>
            </div>
            <div className="engage-assurance reveal">
              <div className="assurance-card">
                <h4>Clearance readiness</h4>
                <ul className="assurance-list">
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Government of Canada Reliability Status held</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Secret clearance in progress</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>SRCL-ready for classified procurement</li>
                </ul>
              </div>
              <div className="assurance-card">
                <h4>Insured &amp; accountable</h4>
                <ul className="assurance-list">
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Commercial general liability insurance</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Professional liability (errors &amp; omissions) coverage</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>NDA-backed, with named consultants on every statement of work</li>
                </ul>
              </div>
            </div>
            <div className="engage-grid reveal-stagger">
              <article className="engage-card">
                <div className="eng-num">Model 01</div>
                <h4>Fixed-Scope Assessment</h4>
                <div className="eng-best">Best for a defined deliverable</div>
                <p>A bounded engagement at a fixed price and timeline (penetration test, TRA, or PIA), scoped in a single 30-minute call.</p>
                <ul className="eng-feat">
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Fixed price, fixed timeline</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Board-ready report with retest included</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Senior-led and independently reviewed</li>
                </ul>
              </article>
              <article className="engage-card">
                <div className="eng-num">Model 02</div>
                <h4>Security Retainer</h4>
                <div className="eng-best">Best for continuous assurance</div>
                <p>Reserved senior capacity each month for recurring testing, release reviews, and on-call advisory as your environment evolves.</p>
                <ul className="eng-feat">
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Predictable monthly capacity</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Priority scheduling and response</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Continuity across releases and audits</li>
                </ul>
              </article>
              <article className="engage-card">
                <div className="eng-num">Model 03</div>
                <h4>vCISO Advisory</h4>
                <div className="eng-best">Best for program-level guidance</div>
                <p>Fractional security leadership: program design, board reporting, and regulatory readiness without a full-time executive hire.</p>
                <ul className="eng-feat">
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Board and audit-committee reporting</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Roadmaps for ISO 27001, SOC 2, OSFI E-23</li>
                  <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>Independent of any product or reseller</li>
                </ul>
              </article>
            </div>
          </div>
        </section>


        <section className="coverage">
          <div className="container">
            <div className="coverage-intro reveal">
              <div className="section-eyebrow" data-i18n="eyebrow.coverage">Global Standards, Local Delivery</div>
              <h3 className="coverage-intro-title" data-i18n="title.coverage">Senior-led security, measured by outcomes.</h3>
            </div>

            <div className="globe-container reveal">
              <canvas id="dot-globe" aria-hidden="true"></canvas>

              <div className="globe-stat globe-stat-left">
                <div className="globe-stat-num">12<span className="plus">+</span></div>
                <div className="globe-stat-label">regulated industries served</div>
              </div>

              <div className="globe-stat globe-stat-right">
                <div className="globe-stat-num">8<span className="plus">+</span></div>
                <div className="globe-stat-label">international frameworks aligned around the world</div>
              </div>
            </div>

            <div className="coverage-heading reveal">
              <h2>Trusted across industries</h2>
              <p>We bring senior-led assurance to regulated organisations across finance, healthcare, government, and technology.</p>
            </div>
          </div>
        </section>


        <section className="engagements">
          <div className="container">
            <div className="reveal" style={{ maxWidth: '760px' }}>
              <div className="section-eyebrow" data-i18n="eyebrow.engagements">Recent Engagements</div>
              <h2 className="section-title" data-i18n="title.engagements">Notable work, <em>anonymized</em>.</h2>
              <p className="section-lead">Engagement profiles from across regulated sectors. Client names withheld under NDA; methodology and deliverables disclosed.</p>
            </div>

            <div className="engagements-list reveal-stagger">
              <article className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector">Crown Corporation</span>
                  <span className="eng-year">2026</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">RCMP Harmonized TRA &amp; PIA Programme</h4>
                  <p className="eng-detail">86-row threat assessment matrix across 22 risk cards. 4-week delivery. Executive summary went to board with no edits.</p>
                  <div className="eng-frameworks">
                    <span>RCMP TRA</span><span>NIST SP 800-30</span><span>ISO 27005</span>
                  </div>
                </div>
              </article>

              <article className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector">Healthcare · Provincial Authority</span>
                  <span className="eng-year">2025</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">Privacy Impact Assessment: Patient-facing application</h4>
                  <p className="eng-detail">Flutter mobile app, 22 risk cards (RS-01 to RS-22). PIPEDA &amp; provincial alignment. Approved by Privacy Commissioner.</p>
                  <div className="eng-frameworks">
                    <span>RCMP PIA</span><span>PIPEDA</span><span>Provincial Privacy</span>
                  </div>
                </div>
              </article>

              <article className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector">Government · NG-911 Infrastructure</span>
                  <span className="eng-year">2025</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">Cyber Incident Response Plan: PSAP cutover</h4>
                  <p className="eng-detail">Critical 911 dispatch infrastructure. 86-row CIRP assessment matrix. Multi-vendor coordination across provincial emergency management.</p>
                  <div className="eng-frameworks">
                    <span>NIST CSF</span><span>OSFI E-23</span>
                  </div>
                </div>
              </article>

              <article className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector">Enterprise · Retail &amp; Supply Chain</span>
                  <span className="eng-year">2024 to 2026</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">SAP S/4HANA Security Validation Programme</h4>
                  <p className="eng-detail">1,551 SAST/DAST findings triaged across R1 to R4 releases. Risk adjustment memos under NIST SP 800-30 Rev.1, OWASP RRM, ISO 27005:2022 clause 8.6.3.</p>
                  <div className="eng-frameworks">
                    <span>SAP GRC</span><span>SAST / DAST</span><span>OWASP RRM</span>
                  </div>
                </div>
              </article>

              <article className="engagement-row">
                <div className="eng-meta">
                  <span className="eng-sector">Defence Sector · Naval / Marine</span>
                  <span className="eng-year">2023</span>
                </div>
                <div className="eng-body">
                  <h4 className="eng-title">Cyber Maturity Assessment: NIST CSF</h4>
                  <p className="eng-detail">Advanced maturity rating from 4/10 to 10/10 against NIST Cybersecurity Framework. Multi-stakeholder coordination across operational technology environments.</p>
                  <div className="eng-frameworks">
                    <span>NIST CSF</span><span>OT Security</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section id="insights">
          <div className="container">
            <div className="reveal" style={{ maxWidth: '760px' }}>
              <div className="section-eyebrow" data-i18n="eyebrow.insights">Insights &amp; Research</div>
              <h2 className="section-title" data-i18n="title.insights">Research and <em>thought leadership</em>.</h2>
              <p className="section-lead">Original research and frameworks our consultants present at international conferences and apply on every engagement.</p>
            </div>
            <div className="insights-grid reveal">
              <div className="sirp-card">
                <div className="sirp-tag">Proprietary Framework</div>
                <h3>S.I.R.P.</h3>
                <p className="sirp-sub">Our vulnerability-prioritization framework, built to cut through CVSS noise and rank what actually matters in your environment.</p>
                <div className="sirp-letters">
                  <div className="sirp-letter"><b>S</b><span>Severity</span></div>
                  <div className="sirp-letter"><b>I</b><span>Impact</span></div>
                  <div className="sirp-letter"><b>R</b><span>Reproducibility</span></div>
                  <div className="sirp-letter"><b>P</b><span>Priority</span></div>
                </div>
                <div className="sirp-inputs"><span>CVSS</span><span>OWASP RRM</span><span>EPSS</span><span>CISA SSVC</span></div>
              </div>
              <div className="insights-side">
                <div className="insight-block">
                  <h4>Speaking</h4>
                  <div className="insight-speaking">
                    <div className="insight-talk"><div className="venue">DEFCON AppSec Village</div><div className="topic">Agentic AI &amp; MCP security</div></div>
                    <div className="insight-talk"><div className="venue">ATLSECCON 2026</div><div className="topic">Securing agentic AI and the Model Context Protocol</div></div>
                  </div>
                </div>
                <div className="insight-block">
                  <h4>From the Blog</h4>
                  <div className="insight-post"><div className="ip-title">OWASP LLM Top 10 (2025): what changed</div><div className="ip-meta">Research note · coming soon</div></div>
                  <div className="insight-post"><div className="ip-title">Non-human identity governance in CI/CD</div><div className="ip-meta">Research note · coming soon</div></div>
                  <div className="insight-post"><div className="ip-soon">More research publishing soon</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="sample-report">
          <div className="container">
            <div className="report-grid reveal">
              <div className="report-mockup">
                <div className="doc-page doc-page-3"></div>
                <div className="doc-page doc-page-2"></div>
                <div className="doc-page doc-page-1">
                  <div className="doc-header">
                    <div className="doc-stamp">CONFIDENTIAL · REDACTED</div>
                    <div className="doc-title">SynapseCyber</div>
                    <div className="doc-sub">Penetration Test Report · Sample v2.1</div>
                  </div>
                  <div className="doc-section-label">Executive Summary</div>
                  <div className="doc-lines">
                    <div className="doc-line w90"></div>
                    <div className="doc-line w70"></div>
                    <div className="doc-line w80"></div>
                  </div>
                  <div className="doc-finding">
                    <div className="doc-finding-row">
                      <span className="doc-finding-label">CRITICAL · F-001</span>
                      <span className="doc-finding-cvss">CVSS 9.8</span>
                    </div>
                    <div className="doc-lines">
                      <div className="doc-line w80"></div>
                      <div className="doc-line w60"></div>
                    </div>
                  </div>
                  <div className="doc-section-label">Severity Distribution</div>
                  <div className="doc-chart">
                    <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '85%' }}></span><em>Crit</em></div>
                    <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '55%' }}></span><em>High</em></div>
                    <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '70%' }}></span><em>Med</em></div>
                    <div className="doc-chart-bar"><span className="doc-bar-fill" style={{ height: '35%' }}></span><em>Low</em></div>
                  </div>
                </div>
              </div>

              <div className="report-content">
                <div className="section-eyebrow" data-i18n="eyebrow.sample">Before You Decide</div>
                <h2 className="section-title" data-i18n="title.sample">See the <em>report</em> before you commit.</h2>
                <p className="section-lead">A redacted SynapseCyber penetration test report. Real findings, real reproduction steps, real remediation guidance, exactly the format your team receives.</p>

                <ul className="report-includes">
                  <li>Executive summary with risk ratings and business impact</li>
                  <li>Detailed technical findings with reproduction steps</li>
                  <li>Evidence screenshots and request/response captures</li>
                  <li>Prioritised remediation guidance per finding</li>
                  <li>Audit-ready findings letter formatted for regulators</li>
                </ul>

                {!sampleSent ? (
                  <form className="report-form" onSubmit={handleSampleDownload}>
                    <input type="email" name="email" placeholder="Work email" className="report-input" required />
                    <button className="report-btn" type="submit">Download sample <span className="arrow">→</span></button>
                  </form>
                ) : (
                  <p className="report-note" style={{ color: '#1a7f4b', fontSize: '14px' }}>
                    Thanks — your sample report is opening in a new tab. If a pop-up blocker stopped it,{' '}
                    <a href="/SynapseCyber-Sample-Penetration-Test-Report.pdf" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>open it here</a>.
                  </p>
                )}
                <p className="report-note">42-page PDF · No marketing follow-up</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow" data-i18n="eyebrow.faq">Frequently Asked</div>
              <h2 className="section-title" data-i18n="title.faq">You have questions, <em>we have</em> answers.</h2>
            </div>

            <div className="faq-list reveal-stagger">
              <details className="faq-item"><summary>What services does SynapseCyber offer?</summary><p>Threat &amp; risk assessments, privacy impact assessments, penetration testing, red team engagements, secure code review, vCISO advisory, AI/LLM security, SAP security, and 24/7 incident response, all delivered by senior consultants.</p></details>
              <details className="faq-item"><summary>What is your approach to penetration testing?</summary><p>Manual penetration testing by experienced specialists. Automated scanners are used for coverage, but the depth comes from human-led exploitation, business logic testing, and chained attack paths.</p></details>
              <details className="faq-item"><summary>Do you provide incident response services?</summary><p>Yes, same-day engagement for active incidents including ransomware, BEC, suspected data exfiltration, and web compromise. We also offer retainer arrangements with contracted SLA and quarterly tabletops.</p></details>
              <details className="faq-item"><summary>What compliance frameworks do you support?</summary><p>ISO 27001, SOC 2, PCI DSS, NIST SP 800-30/53, PIPEDA, GDPR, RCMP Harmonized TRA, OSFI E-23, and EU AI Act among others.</p></details>
              <details className="faq-item"><summary>How long does a typical engagement take?</summary><p>Small focused scopes run 5 to 7 working days, medium scopes 8 to 12, and enterprise engagements 12 to 25 working days. Fixed-scope quote within one working day of scoping call.</p></details>
              <details className="faq-item"><summary>Is a retest included in the engagement?</summary><p>Yes. Every engagement includes a free retest of remediated findings within an agreed window, plus a confirmation letter formatted for auditors, customers, and regulators.</p></details>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="cta-split reveal">
              <canvas id="cta-canvas" aria-hidden="true"></canvas>
              <div className="cta-box">
                <div className="tag">Before You Decide</div>
                <h3>Download a sample report →</h3>
                <p>A redacted SynapseCyber penetration test report. See the format, depth, and clarity your team will receive.</p>
                <a href="/SynapseCyber-Sample-Penetration-Test-Report.pdf" target="_blank" rel="noopener" className="btn btn-secondary">Get the sample</a>
              </div>
              <div className="cta-box">
                <div className="tag">Talk to Us</div>
                <h3>Book a scoping call →</h3>
                <p>A 30-minute call covers realistic effort, timeline, and a fixed-scope quote. Senior-led methodology.</p>
                <Link to="/quote" className="btn btn-primary">Schedule now <span className="arrow">→</span></Link>
              </div>
            </div>
          </div>
        </section>


        <section className="data-posture" style={{ padding: '72px 0' }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: '720px', marginBottom: '40px' }}>
              <div className="section-eyebrow" data-i18n="eyebrow.data">Data Handling</div>
              <h2 className="section-title" data-i18n="title.data" style={{ fontSize: 'clamp(26px,3vw,38px)' }}>Your data stays <em>in Canada</em>, and under control.</h2>
            </div>
            <div className="dp-grid reveal-stagger">
              <div className="dp-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg><h5>Canadian data residency</h5><p>Client data is stored and processed in Canada and never leaves Canadian jurisdiction.</p></div>
              <div className="dp-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg><h5>Secure evidence handling</h5><p>Findings and artefacts are encrypted in transit and at rest, exchanged over vetted channels only.</p></div>
              <div className="dp-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><h5>Retention &amp; destruction</h5><p>Defined retention windows with documented, certified destruction at engagement close.</p></div>
              <div className="dp-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h6M10 17h4" /></svg><h5>NDA-backed</h5><p>Every engagement runs under NDA; client identities are withheld unless disclosure is authorised.</p></div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
