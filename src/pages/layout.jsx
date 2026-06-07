import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';
import { CSS } from './Home.jsx';

export default function Layout() {
    const { pathname } = useLocation();
    const { t, i18n } = useTranslation();
    const isHome = pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });
    const [isHovered, setIsHovered] = useState(false);

    // Apply theme to document
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Close the mobile menu whenever the route changes.
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    // Nav scroll behavior — force "scrolled" look on every non-home page
    // (home page has dark hero behind transparent nav; inner pages are light, so
    // the nav must be opaque from the start to remain visible).
    useEffect(() => {
        const nav = document.querySelector('nav');
        if (!nav) return;

        if (!isHome) {
            nav.classList.add('scrolled');
            return; // no scroll listener needed on inner pages
        }

        const update = () => {
            if (window.scrollY > 60) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => {
            window.removeEventListener('scroll', update);
            nav.classList.remove('scrolled');
        };
    }, [isHome]);

    useEffect(() => {
        const RM =
            (typeof window !== 'undefined' &&
                window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
            false;

        const isMobile =
            (typeof window !== 'undefined' &&
                window.matchMedia &&
                (window.matchMedia('(max-width: 820px)').matches ||
                    window.matchMedia('(pointer: coarse)').matches)) ||
            false;
        // Phones/tablets: skip this decorative field entirely so inner pages
        // hold zero WebGL contexts and the home page holds only the globe.
        // Multiple contexts were exhausting GPU memory and reloading the tab.
        if (isMobile) return;

        const canvas = document.querySelector('#footer-canvas');
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
        camera.position.z = 6;

        function resize() {
            const w = canvas.clientWidth, h = canvas.clientHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        resize();
        window.addEventListener('resize', resize);

        const count = 400;
        const positions = new Float32Array(count * 3);
        const speeds = [];
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            speeds.push(0.002 + Math.random() * 0.008);
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

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

        const mat = new THREE.PointsMaterial({
            color: 0x60a5fa, size: 0.06, map: softSprite, transparent: true, opacity: 0.85, depthWrite: false,
        });
        const points = new THREE.Points(geo, mat);
        scene.add(points);

        let rafId;
        function animate() {
            if (RM) { renderer.render(scene, camera); return; }
            const pos = geo.attributes.position.array;
            for (let i = 0; i < count; i++) {
                pos[i * 3 + 1] += speeds[i];
                if (pos[i * 3 + 1] > 6) pos[i * 3 + 1] = -6;
            }
            geo.attributes.position.needsUpdate = true;
            points.rotation.y += 0.0005;
            renderer.render(scene, camera);
            rafId = requestAnimationFrame(animate);
        }

        // Only render while the footer is actually on-screen and the tab is
        // visible — the footer sits at the very bottom, so this loop was
        // burning GPU/CPU for the entire page when nothing was even visible.
        let onScreen = false, running = false;
        const sync = () => {
            const shouldRun = onScreen && !document.hidden;
            if (shouldRun && !running) { running = true; rafId = requestAnimationFrame(animate); }
            else if (!shouldRun && running) { running = false; if (rafId) cancelAnimationFrame(rafId); }
        };
        const io = new IntersectionObserver((entries) => { onScreen = entries[0].isIntersecting; sync(); }, { threshold: 0 });
        io.observe(canvas);
        document.addEventListener('visibilitychange', sync);

        const onLost = (e) => { e.preventDefault(); if (rafId) cancelAnimationFrame(rafId); };
        canvas.addEventListener('webglcontextlost', onLost, false);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            io.disconnect();
            document.removeEventListener('visibilitychange', sync);
            canvas.removeEventListener('webglcontextlost', onLost);
            window.removeEventListener('resize', resize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="synapsecyber-page">
            <style dangerouslySetInnerHTML={{ __html: CSS }} />

            {/* 1. YAHAN HOME.JSX SE TOPBAR AUR NAV CUT KAR KE PASTE KAREIN */}


            {/* Yeh Outlet wo jagah hai jahan aapke beech ke 12 pages automatically aayenge */}
            <div className="topbar">
                <div className="container">
                    <div><span className="pulse"></span>24/7 Incident Response · Active</div>
                    <div><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: '5px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg><a href="tel:+19025550100">+1 902 555 0100</a> &nbsp;·&nbsp; <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: '5px' }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg><a href="mailto:ridarashid.cyber@gmail.com">ridarashid.cyber@gmail.com</a></div>
                </div>
            </div>

            <nav>
                <div className="container">
                    <Link to="/" className="logo"><span className="logo-mark"></span>SynapseCyber</Link>
                    <div className="nav-links">
                        <Link to="/#services">{t('nav.services')}</Link>
                        <Link to="/#industries">{t('nav.industries')}</Link>
                        <Link to="/#methodology">{t('nav.methodology')}</Link>
                        <Link to="/#insights">{t('nav.insights')}</Link>
                        <Link to="/#why">{t('nav.why')}</Link>
                        <Link to="/#faq">{t('nav.faq')}</Link>
                        <Link to="/quote" className="nav-cta">{t('nav.cta')}</Link>
                        <button className="theme-toggle" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                            )}
                        </button>
                        <button className={`lang-toggle ${i18n.language === 'fr' ? 'is-fr' : ''}`} type="button" aria-label="Switch language / Changer de langue" onClick={toggleLang}><span className="lang-en">EN</span><span className="lang-sep">|</span><span className="lang-fr">FR</span></button>
                    </div>
                    <button className={`nav-toggle ${menuOpen ? 'is-open' : ''}`} type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <div className="container">
                        <Link to="/#services" onClick={() => setMenuOpen(false)}>{t('nav.services')}</Link>
                        <Link to="/#industries" onClick={() => setMenuOpen(false)}>{t('nav.industries')}</Link>
                        <Link to="/#methodology" onClick={() => setMenuOpen(false)}>{t('nav.methodology')}</Link>
                        <Link to="/#insights" onClick={() => setMenuOpen(false)}>{t('nav.insights')}</Link>
                        <Link to="/#why" onClick={() => setMenuOpen(false)}>{t('nav.why')}</Link>
                        <Link to="/#faq" onClick={() => setMenuOpen(false)}>{t('nav.faq')}</Link>
                        <div className="mm-cta">
                            <div className="mm-controls">
                                <button className="theme-toggle" type="button" aria-label="Toggle theme" onClick={toggleTheme}>
                                    {theme === 'light' ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                                    )}
                                </button>
                                <button className={`lang-toggle ${i18n.language === 'fr' ? 'is-fr' : ''}`} type="button" aria-label="Switch language / Changer de langue" onClick={toggleLang}><span className="lang-en">EN</span><span className="lang-sep">|</span><span className="lang-fr">FR</span></button>
                            </div>
                            <Link to="/quote" className="btn btn-primary" onClick={() => setMenuOpen(false)}>{t('nav.cta')}</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer>
                <canvas id="footer-canvas" aria-hidden="true"></canvas>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <Link to="/" className="logo"><span className="logo-mark"></span>SynapseCyber</Link>
                            <p>{t('footer.tagline')}</p>
                            <div className="socials">
                                <a href="#" aria-label="LinkedIn" title="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
                                </a>
                                <a href="#" aria-label="X (formerly Twitter)" title="X">
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.5h7.59l5.24 6.93L18.9 1.5zm-1.29 18.8h2.04L6.48 3.6H4.3l13.31 16.7z"/></svg>
                                </a>
                                <a href="mailto:ridarashid.cyber@gmail.com" aria-label="Email us" title="Email us">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                                </a>
                            </div>
                            <div className="footer-lang"><button className={`lang-toggle ${i18n.language === 'fr' ? 'is-fr' : ''}`} type="button" aria-label="Switch language / Changer de langue" onClick={toggleLang}><span className="lang-en">EN</span><span className="lang-sep">|</span><span className="lang-fr">FR</span></button></div>
                        </div>
                        <div className="footer-col"><h5>{t('footer.services')}</h5><ul><li><Link to="/penetration-testing">Penetration Testing</Link></li><li><Link to="/threat-risk-assessment">Threat &amp; Risk Assessment</Link></li><li><Link to="/privacy-impact-assessment">Privacy Impact Assessment</Link></li><li><Link to="/red-team-adversary-simulation">Red Team</Link></li><li><Link to="/vciso-advisory">vCISO Advisory</Link></li><li><Link to="/incident-response">Incident Response</Link></li></ul></div>
                        <div className="footer-col"><h5>{t('footer.industries')}</h5><ul><li><Link to="/industries/financial-services">Financial Services</Link></li><li><Link to="/industries/healthcare">Healthcare</Link></li><li><Link to="/industries/government">Government &amp; Crown Corps</Link></li><li><Link to="/industries/saas-technology">SaaS &amp; Technology</Link></li><li><Link to="/industries/critical-infrastructure">Critical Infrastructure</Link></li></ul></div>
                        <div className="footer-col"><h5>{t('footer.resources')}</h5><ul><li><Link to="/resources/sample-report">Sample Pentest Report</Link></li><li><Link to="/resources/tra-methodology">TRA Methodology Guide</Link></li><li><Link to="/resources/blog">Blog &amp; Research</Link></li><li><Link to="/resources/case-studies">Case Studies</Link></li></ul></div>
                        <div className="footer-col"><h5>{t('footer.company')}</h5><ul><li><Link to="/about">About</Link></li><li><Link to="/careers">Careers</Link></li><li><Link to="/contact">Contact</Link></li><li><Link to="/quote">{t('footer.quote')}</Link></li></ul></div>
                        <div className="footer-col"><h5>{t('footer.legal')}</h5><ul><li><Link to="/trust">Trust &amp; Assurance</Link></li><li><Link to="/security">Security &amp; Disclosure</Link></li><li><Link to="/legal/privacy">Privacy Policy</Link></li><li><Link to="/legal/terms">Terms of Use</Link></li><li><Link to="/legal/accessibility">Accessibility</Link></li></ul></div>
                    </div>
                    <details className="a11y" id="accessibility">
                        <summary>{t('footer.a11y')}</summary>
                        <p>SynapseCyber is committed to digital accessibility. This site targets conformance with WCAG 2.1 Level AA and aligns with the Accessibility for Ontarians with Disabilities Act (AODA) and the Accessible Canada Act. It honours your operating system's reduced-motion preference, supports keyboard navigation, and meets AA colour-contrast ratios. If you encounter a barrier, email <a href="mailto:ridarashid.cyber@gmail.com">ridarashid.cyber@gmail.com</a> and we will respond promptly.</p>
                    </details>
                    <div className="footer-bottom">
                        <div>{t('footer.copyright')}</div>
                        <div className="certs-row">
                            <span className="cert">RCMP TRA Aligned</span>
                            <span className="cert">ISO 27001</span>
                            <span className="cert">SOC 2</span>
                            <span className="cert">GoC Reliability</span>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}