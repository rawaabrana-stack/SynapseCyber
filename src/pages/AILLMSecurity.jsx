import React from "react";

/* ── Content ──────────────────────────────────────────────── */

const fit = [
  ["You're shipping an AI feature", "An LLM-backed capability is going in front of users or customers, and conventional testing won't cover it."],
  ["You're building agents", "Autonomous or tool-using agents that can take real actions, call APIs, or move data on your behalf."],
  ["A customer is asking about your AI", "A security questionnaire or enterprise buyer now wants evidence that your AI is safe to rely on."],
  ["You're adopting third-party AI", "You need the risk of a vendor's model, agent, or MCP integration assessed before you connect it."],
];

const stats = [
  ["OWASP LLM Top 10", "2025 edition"],
  ["Agentic + MCP", "Beyond the model"],
  ["NIST AI RMF", "Findings mapped"],
  ["Retest included", "Controls validated"],
];

const facts = [
  ["Methodology", "AI-specific threat modelling and adversarial testing against the OWASP LLM Top 10, extended to agents, tools, and MCP."],
  ["vs application pen test", "A conventional pen test checks the app around the model; an AI/LLM review tests the model, its prompts, its outputs, and the agents it drives. Different attack surface."],
  ["Typical duration", "2–4 weeks, depending on the number of AI features, agent autonomy, and connected tools."],
  ["Includes", "System mapping, threat model, prompt-injection and jailbreak testing, agentic/MCP review, NIST AI RMF gap analysis, and a retest."],
  ["When it's useful", "Before an AI feature ships, before adopting a third-party model or agent, or when a customer requires AI assurance."],
  ["Output", "An AI/LLM threat model, adversarial test results, agentic and tool-security findings, an AI RMF gap analysis, and a prioritised remediation plan."],
];
const lastReviewed = "June 2026";

const gives = [
  "A threat model of your AI system across the OWASP LLM Top 10",
  "Evidence of how it holds up against prompt injection and jailbreaks",
  "A clear view of what your agents and tools can be made to do",
  "Non-human-identity and guardrail recommendations you can act on",
  "Findings mapped to the NIST AI RMF, ready for assurance conversations",
  "A prioritised fix list with a retest to confirm the controls hold",
];

const risks = [
  "Indirect prompt injection turning your own data sources into attacker instructions",
  "Model output trusted downstream and acted on without checks",
  "Agents with tool access steered into actions you never intended",
  "Over-privileged non-human identities an attacker can ride",
  "Sensitive data leaking through prompts, context, or logs",
  "No defensible answer when a customer or regulator asks how your AI is secured",
];

const triggers = [
  ["Before an AI feature ships", "The review belongs in the release path, not after an incident — AI behaviour is hard to predict from code review alone."],
  ["When agents gain tool access", "The moment a model can take actions, call tools, or move data, the risk profile changes entirely."],
  ["Adopting a third-party model or MCP server", "Assess what you're connecting — and what it can reach — before you connect it to your environment."],
  ["When a customer requires AI assurance", "Enterprise buyers increasingly make demonstrable AI security a condition of the deal."],
];

const scope = [
  ["LLM application threat modelling", "Map risks across the OWASP LLM Top 10 for your AI features."],
  ["Prompt injection & jailbreak testing", "Probe direct and indirect injection and guardrail bypass."],
  ["Insecure output handling", "Test how model output is trusted and used downstream."],
  ["Agentic system review", "Assess autonomous agents, tool use, and action boundaries."],
  ["MCP & tool security", "Review Model Context Protocol servers and connected tools for abuse paths."],
  ["Non-human identity governance", "Govern the identities and credentials agents act under."],
];

const steps = [
  ["System & data-flow mapping", "Understand the AI architecture, what data reaches the model, the tools it can call, and how much autonomy each agent has."],
  ["Threat modelling", "Model risks against the OWASP LLM Top 10 and agentic-security guidance, tailored to your specific features."],
  ["Prompt-injection & jailbreak testing", "Probe direct and indirect injection, guardrail bypass, and system-prompt extraction."],
  ["Output-handling & data-exposure testing", "Test how model output is trusted downstream, and whether sensitive data leaks through prompts, context, or logs."],
  ["Agentic & tool-abuse testing", "Assess what agents can be made to do through their tools, and where their action boundaries can be crossed."],
  ["MCP & non-human-identity review", "Review Model Context Protocol servers, the tools exposed through them, and the identities and credentials agents act under."],
  ["NIST AI RMF alignment", "Map findings to the NIST AI Risk Management Framework and prioritise remediation by risk."],
  ["Remediation & retest", "Deliver fixes, then validate that the controls hold under the same attacks they're meant to stop."],
];

const tiers = [
  ["Single AI feature", "One LLM-backed feature, no autonomous agents, a contained set of inputs and outputs.", "≈ 1–2 weeks"],
  ["Agentic system", "One or more agents with tool access, MCP integrations, and multiple data sources.", "≈ 2–3 weeks"],
  ["AI platform / multi-agent", "Several features or a multi-agent system, broad tooling, and assurance evidence for buyers.", "≈ 3–5 weeks"],
];

const frameworks = ["OWASP LLM Top 10 (2025)", "OWASP Agentic Security", "MITRE ATLAS", "NIST AI RMF", "ISO/IEC 42001"];

const deliverables = [
  "AI / LLM threat model",
  "Prompt-injection and jailbreak test results",
  "Agentic, MCP, and tool-security findings",
  "Non-human identity governance recommendations",
  "NIST AI RMF gap analysis",
  "Prioritised remediation plan and retest",
];

const includes = [
  ["Scoping call", "A 30-minute call to map the AI system, its autonomy and tooling, and the review approach."],
  ["AI / LLM threat model", "Risks across the OWASP LLM Top 10, tailored to your features rather than a generic list."],
  ["Adversarial test results", "Prompt-injection, jailbreak, and output-handling findings with reproduction detail."],
  ["Agentic & tool-security findings", "What your agents, tools, and MCP integrations can be made to do."],
  ["NIST AI RMF gap analysis", "Findings mapped to the framework, ready for assurance and procurement conversations."],
  ["Prioritised plan & retest", "A sequenced remediation plan and a retest to confirm the fixes actually hold."],
];

const sectors = ["AI-native & SaaS products", "Financial services & fintech", "Healthcare & life sciences", "Public sector & government", "Legal & professional services", "Customer support & chat platforms"];

const why = [
  ["AI-native testing", "We test the model, its prompts, its outputs, and the agents — not just the application around them."],
  ["Agentic depth", "Autonomous agents, tool use, and MCP are core to the work, not a box ticked at the end."],
  ["Adversary mindset", "Prompt injection and jailbreaks tested the way a real attacker actually probes them."],
  ["Framework-mapped", "Findings tied to the OWASP LLM Top 10 and the NIST AI RMF, so they stand up to scrutiny."],
  ["Privacy and AI together", "Where personal data is involved, Law 25 and data-exposure risk are assessed alongside the model."],
  ["Plain-English findings", "Risk your board can understand and your engineers can act on — no jargon padding."],
];

const faqs = [
  ["How is this different from a normal penetration test?", "A conventional pen test assesses the application around the model — its APIs, authentication, and infrastructure. An AI/LLM review tests the model itself: how it can be manipulated through prompts, how its output is trusted downstream, and, for agents, what its tools and identities can be made to do. The attack surface is different, so the testing is too. Many programmes run both."],
  ["What is prompt injection?", "Prompt injection is when attacker-controlled text is interpreted by the model as an instruction. Direct injection comes from the user; indirect injection hides in content the model reads — a web page, document, email, or tool result — and can hijack the model's behaviour without the user doing anything. It's the most important class of LLM vulnerability, and the hardest to fully eliminate."],
  ["Do you test agents and tool use?", "Yes — agentic systems are a core part of the work. Once a model can call tools, query APIs, or move data, an attacker who can influence it can potentially take those actions too. We assess what each agent can do, where its action boundaries can be crossed, and how the tools and MCP integrations it relies on can be abused."],
  ["What is MCP, and why does it matter for security?", "The Model Context Protocol is an open standard for connecting models to external tools and data sources. It's powerful, but every connected server and tool is new attack surface, and the identities agents act under are often over-privileged. We review MCP servers, the tools exposed through them, and the non-human identities involved."],
  ["Is there an AI law we need to comply with in Canada?", "Not an AI-specific one. The proposed federal AI law (AIDA, part of Bill C-27) died when Parliament was prorogued in January 2025 and hasn't been reintroduced, and the government has signalled it will regulate AI mainly through privacy law and policy rather than a single AI statute. In practice the bar is set by PIPEDA and Quebec's Law 25 where personal data is involved, the Treasury Board Directive on Automated Decision-Making for federal systems, sector guidance, and frameworks like the NIST AI RMF, OWASP, and ISO/IEC 42001. If you serve EU users, the EU AI Act may also apply. We map findings so you're aligned to whichever of these touches you."],
  ["What do we receive at the end?", "An AI/LLM threat model, prompt-injection and jailbreak test results, agentic, MCP, and tool-security findings, non-human-identity recommendations, a NIST AI RMF gap analysis, and a prioritised remediation plan with a retest."],
];

const related = [
  ["Application Threat Modelling", "Structured threat modelling for the wider application around the model."],
  ["Penetration Testing", "Exploit-driven testing of the app and infrastructure the AI runs on."],
  ["Privacy Impact Assessment", "For the personal data your AI collects, processes, and exposes."],
];

/* ── Icons for the \u201Cwhy work with us\u201D cards ──────────────── */
const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4" fill="currentColor" stroke="none"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="3" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="21" y2="12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8 6h8M7.6 7.8 10.8 16.2M16.4 7.8 13.2 16.2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="9" width="8" height="10" rx="4"/><path d="M12 9V6M9.2 6.2A3 3 0 0 1 14.8 6.2M5 11h3M16 11h3M5 16h3M16 16h3M5 7l2 1.6M19 7l-2 1.6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><polyline points="8.5 13.5 10.5 15.5 14 12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6 20 12c0 4-3 7-8 9-5-2-8-5-8-9L4 6Z"/><polyline points="9 12 11 14 15 10"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-4 4v-4H4Z"/><line x1="8" y1="10.5" x2="16" y2="10.5"/></svg>,
];

const Plus = () => (
  <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);
const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

/* ── Page ─────────────────────────────────────────────────── */

export default function AILLMSecurity() {
  return (
    <div className="sc-page">
      <style>{CSS}</style>

      {/* HERO */}
      <header className="sc-hero">
        <div className="sc-wrap">
          <nav className="sc-crumb"><a href="/">Home</a><span className="s">/</span><a href="/#services">Services</a><span className="s">/</span><span>AI / LLM Security</span></nav>
          <div className="sc-hgrid">
            <div className="sc-htext">
              <div className="sc-eb">AI &amp; Emerging Tech</div>
              <h1 className="sc-h1">AI / LLM <em>Security</em></h1>
              <p className="sc-lead">Secure the systems built on large language models and autonomous agents — prompt injection, agent and tool abuse, and the new attack surface that traditional testing does not cover, aligned to emerging AI standards.</p>
              <div className="sc-trust"><span>OWASP LLM Top 10 (2025)</span><span>Agentic &amp; MCP review</span><span>NIST AI RMF aligned</span><span>Canadian senior-led delivery</span></div>
              <div className="sc-cta-row"><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a><a href="/#services" className="sc-btn sec">All services</a></div>
            </div>
            <div className="sc-bigicon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.2"/><path d="M12 2 V6 M12 18 V22 M2 12 H6 M18 12 H22 M2 8 H6 M2 16 H6 M18 8 H22 M18 16 H22 M8 2 V6 M16 2 V6 M8 18 V22 M16 18 V22"/></svg>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <div className="sc-strip">
        <div className="sc-wrap">
          <span>Tests the attack surface a normal pen test misses</span>
          <span>Agentic, MCP &amp; tool coverage</span>
          <span>NIST AI RMF–mapped findings</span>
          <span>Senior practitioner end to end</span>
        </div>
      </div>

      {/* WHO THIS IS FOR */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Who This Is For</div>
          <h2 className="sc-h2">This engagement is a <em>fit</em> if&hellip;</h2>
          <div className="sc-fit">
            {fit.map(([h, p], i) => (
              <div className="sc-fitcard" key={h}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Overview</div>
          <h2 className="sc-h2">What this <em>engagement</em> delivers.</h2>
          <p className="sc-p">AI features introduce risks conventional application testing was never designed to find: prompt injection, insecure handling of model output, training-data poisoning, and — in agentic systems — tools and identities an attacker can hijack to act on your behalf. We threat-model and test these systems against the OWASP Top 10 for LLM Applications (2025) and emerging agentic-security guidance.</p>
          <p className="sc-p">For autonomous and tool-using systems, we extend into the Model Context Protocol (MCP) attack surface and non-human-identity governance, then map findings to the NIST AI Risk Management Framework. With no AI-specific federal law in force in Canada, these international frameworks, the Treasury Board Directive on Automated Decision-Making, and Quebec&rsquo;s Law 25 set the bar.</p>
          <p className="sc-p" style={{ marginTop: 22, fontWeight: 600, color: "var(--ink)" }}>By the end of the engagement you have:</p>
          <ul className="sc-list">{gives.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
      </section>

      {/* QUICK FACTS + STATS */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Quick Facts</div>
          <h2 className="sc-h2">AI / LLM Security, <em>at a glance</em>.</h2>
          <div className="sc-stats">
            {stats.map(([v, l]) => (
              <div className="sc-stat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>
            ))}
          </div>
          <div className="sc-factsbox">
            <div className="sc-factshd">
              <strong>Engagement summary</strong>
              <span className="rev">Last reviewed: {lastReviewed}</span>
            </div>
            <dl>
              {facts.map(([dt, dd]) => (
                <div className="sc-factrow" key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why It Matters</div>
          <h2 className="sc-h2">AI features fail <em>differently</em> from ordinary software.</h2>
          <p className="sc-p">The model will do things you didn&rsquo;t program it to do, produce output you didn&rsquo;t anticipate, and — once it can use tools — take actions an attacker can steer. Instructions and data arrive on the same channel, so a malicious document, web page, or email can become a command. Conventional testing wasn&rsquo;t built for any of this.</p>
          <p className="sc-p">An AI/LLM review treats the model, its prompts, its outputs, and the agents and identities it acts under as the attack surface — then tests them the way an adversary would, and maps what it finds to a framework you can stand behind.</p>
          <p className="sc-p" style={{ marginTop: 22, fontWeight: 600, color: "var(--ink)" }}>Without an AI-specific review, organisations risk:</p>
          <ul className="sc-list warn">{risks.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">When It&rsquo;s Needed</div>
          <h2 className="sc-h2">When to run an <em>AI security review</em>.</h2>
          <p className="sc-p">The review earns its place whenever an AI capability is about to be relied on — by your users, your business, or a customer assessing you.</p>
          <div className="sc-grid">
            {triggers.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">What&rsquo;s Covered</div>
          <h2 className="sc-h2">Scope of the <em>review</em>.</h2>
          <div className="sc-grid">
            {scope.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">How We Work</div>
          <h2 className="sc-h2">A structured AI <em>method</em>.</h2>
          <div className="sc-steps">
            {steps.map(([h, p], i) => (
              <div className="sc-step" key={h}>
                <span className="sc-stepn">{String(i + 1).padStart(2, "0")}</span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE / QUOTE TIERS */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Engagement Scope</div>
          <h2 className="sc-h2">What shapes the <em>quote</em>.</h2>
          <p className="sc-p">Every engagement is scoped and priced before it starts. What moves the number is how many AI features are in scope, how much autonomy the agents have, and how many tools and integrations they reach — not hourly surprises.</p>
          <div className="sc-tiers">
            {tiers.map(([h, p, d]) => (
              <div className="sc-tier" key={h}>
                <h4>{h}</h4><p>{p}</p><div className="dur">{d}</div>
              </div>
            ))}
          </div>
          <div className="sc-quote-note">A fixed-scope quote within one working day. We commit to a number before you commit to us.</div>
        </div>
      </section>

      {/* STANDARDS + WHAT YOU RECEIVE */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-twocol">
            <div>
              <div className="sc-eb">Standards &amp; Frameworks</div>
              <h2 className="sc-h2">Aligned to emerging <em>standards</em>.</h2>
              <div className="sc-chips">{frameworks.map((f) => <span className="sc-chip" key={f}>{f}</span>)}</div>
            </div>
            <div>
              <div className="sc-eb">What You Receive</div>
              <h2 className="sc-h2">A defensible AI <em>posture</em>.</h2>
              <ul className="sc-list">{deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVERY ENGAGEMENT INCLUDES */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">In Every Engagement</div>
          <h2 className="sc-h2">What&rsquo;s <em>always</em> included.</h2>
          <div className="sc-grid">
            {includes.map(([h, p]) => (
              <div className="sc-card" key={h}>
                <span className="sc-tick"><Tick /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">Sectors We Serve</div>
          <h2 className="sc-h2">Wherever AI is <em>going into production</em>.</h2>
          <p className="sc-p">We secure AI systems across the sectors deploying them fastest — and those under the closest scrutiny when they do.</p>
          <div className="sc-chips">{sectors.map((s) => <span className="sc-chip" key={s}>{s}</span>)}</div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Why Work With Us</div>
          <h2 className="sc-h2">Grounded reasons clients <em>choose us</em>.</h2>
          <div className="sc-why">
            {why.map(([h, p], i) => (
              <div className="sc-whycard" key={h}>
                <span className="sc-whyic">{whyIcons[i]}</span>
                <h4>{h}</h4><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-eb">FAQ</div>
          <h2 className="sc-h2">Frequently asked <em>questions</em>.</h2>
          <div className="sc-faq">
            {faqs.map(([q, a]) => (
              <details className="sc-faqitem" key={q}>
                <summary>{q}<Plus /></summary>
                <div className="a">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="sc-sec alt">
        <div className="sc-wrap">
          <div className="sc-eb">Where To Next</div>
          <h2 className="sc-h2">Often scoped <em>alongside</em> this.</h2>
          <div className="sc-rel">
            {related.map(([h, p]) => (
              <a className="sc-relcard" href="/#services" key={h}>
                <h4>{h} <span className="ar">&rarr;</span></h4><p>{p}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sc-sec">
        <div className="sc-wrap">
          <div className="sc-cta">
            <h3>Scope your AI / LLM security review</h3>
            <p>Book a 30-minute scoping call. We confirm the AI system, its autonomy and tooling, and a fixed-scope quote.</p>
            <div className="sc-cta-row" style={{ justifyContent: "center" }}><a href="/#quote" className="sc-btn pri">Book a scoping call <span>&rarr;</span></a></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-page{--bg:#F8FAFC;--bg2:#F1F5F9;--srf:#fff;--ink:#0F172A;--ink2:#334155;--ink3:#64748B;--line:#E2E8F0;--line2:#CBD5E1;--acc:#2563EB;--accs:#DBEAFE;--warn:#DC2626;--disp:"Fraunces",Georgia,serif;--sans:"Manrope",system-ui,sans-serif;--mono:"JetBrains Mono",monospace;font-family:var(--sans);background:var(--bg);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
[data-theme="dark"] .sc-page{--bg:#0F172A;--bg2:#1E293B;--srf:#1E293B;--ink:#F1F5F9;--ink2:#CBD5E1;--ink3:#94A3B8;--line:#334155;--line2:#475569;--acc:#3B82F6;--accs:#1E3A5F}
.sc-page *{box-sizing:border-box;margin:0;padding:0}
.sc-page a{color:inherit;text-decoration:none}
.sc-page svg{display:block}
.sc-wrap{max-width:1140px;margin:0 auto;padding:0 28px}
.sc-sec{padding:72px 0}
.sc-sec.alt{background:var(--bg2)}
.sc-eb{font-family:var(--mono);font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:var(--acc);margin-bottom:14px}
.sc-h2{font-family:var(--disp);font-weight:500;font-size:clamp(26px,3.2vw,38px);letter-spacing:-.02em;line-height:1.1;color:var(--ink);max-width:760px;margin-bottom:14px}
.sc-h2 em{font-style:italic;color:var(--acc)}
.sc-p{font-size:16.5px;line-height:1.72;color:var(--ink2);max-width:780px}
.sc-p+.sc-p{margin-top:15px}
.sc-btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:8px;font-weight:600;font-size:14.5px;font-family:var(--sans);cursor:pointer;border:none;transition:all .2s}
.sc-btn.pri{background:var(--ink);color:#fff}.sc-btn.pri:hover{background:var(--acc);transform:translateY(-2px);box-shadow:0 10px 22px rgba(37,99,235,.28)}
[data-theme="dark"] .sc-btn.pri{background:var(--acc);color:#fff}
.sc-btn.sec{background:transparent;color:var(--ink);border:1px solid var(--line2)}.sc-btn.sec:hover{border-color:var(--ink)}
.sc-hero{position:relative;overflow:hidden;border-bottom:1px solid var(--line);background:radial-gradient(circle at 15% -10%,rgba(37,99,235,.07),transparent 42%),linear-gradient(to bottom,var(--bg2),var(--bg));padding:42px 0 64px}
.sc-hero::before{content:"";position:absolute;inset:0;background-image:radial-gradient(var(--line) 1px,transparent 1px);background-size:26px 26px;-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,.4),transparent 60%);mask-image:linear-gradient(to bottom,rgba(0,0,0,.4),transparent 60%);opacity:.5}
.sc-crumb{font-family:var(--mono);font-size:11.5px;color:var(--ink3);display:flex;gap:8px;align-items:center;margin-bottom:26px;flex-wrap:wrap;position:relative}
.sc-crumb a:hover{color:var(--acc)}.sc-crumb .s{opacity:.5}
.sc-hgrid{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;position:relative}
.sc-htext{max-width:720px}
.sc-h1{font-family:var(--disp);font-weight:500;font-size:clamp(33px,4.6vw,52px);line-height:1.04;letter-spacing:-.025em;margin-bottom:20px}
.sc-h1 em{font-style:italic;color:var(--acc)}
.sc-lead{font-size:18px;line-height:1.62;color:var(--ink2);max-width:60ch;margin-bottom:26px}
.sc-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin-bottom:28px}
.sc-trust span{font-size:13px;color:var(--ink2);display:inline-flex;gap:7px;align-items:center}
.sc-trust span::before{content:"✓";color:var(--acc);font-weight:800}
.sc-cta-row{display:flex;gap:12px;flex-wrap:wrap}
.sc-bigicon{width:96px;height:96px;border-radius:22px;background:var(--accs);color:var(--acc);display:grid;place-items:center;box-shadow:0 18px 38px -14px rgba(37,99,235,.4)}
.sc-bigicon svg{width:46px;height:46px}
@media(max-width:860px){.sc-hgrid{grid-template-columns:1fr}.sc-bigicon{width:64px;height:64px}.sc-bigicon svg{width:32px;height:32px}}

/* trust strip */
.sc-strip{background:linear-gradient(to right,var(--accs),#EFF6FF);border-bottom:1px solid var(--line)}
.sc-strip .sc-wrap{display:flex;flex-wrap:wrap;gap:8px 26px;padding-top:15px;padding-bottom:15px;align-items:center;justify-content:center}
.sc-strip span{font-size:13px;color:var(--ink2);font-weight:500;display:inline-flex;gap:7px;align-items:center}
.sc-strip span::before{content:"✓";color:var(--acc);font-weight:800}

/* fit cards */
.sc-fit{display:grid;grid-template-columns:repeat(auto-fit,minmax(238px,1fr));gap:16px;margin-top:34px}
.sc-fitcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:26px 22px 22px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-fitcard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-fitcard .n{font-family:var(--mono);font-size:13px;color:var(--acc);font-weight:500;display:block;margin-bottom:14px}
.sc-fitcard h4{font-family:var(--disp);font-weight:500;font-size:18px;letter-spacing:-.01em;margin-bottom:8px}
.sc-fitcard p{font-size:14px;color:var(--ink3);line-height:1.6}

/* stats */
.sc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin-top:30px;margin-bottom:26px}
.sc-stat{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px}
.sc-stat .v{font-family:var(--disp);font-weight:500;font-size:21px;letter-spacing:-.01em;color:var(--ink);margin-bottom:4px}
.sc-stat .l{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink3)}

/* quick facts table */
.sc-factsbox{background:var(--srf);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.sc-factshd{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 24px;border-bottom:1px solid var(--line);background:var(--bg2);flex-wrap:wrap}
.sc-factshd strong{font-family:var(--disp);font-weight:500;font-size:17px}
.sc-factshd .rev{font-family:var(--mono);font-size:11.5px;color:var(--ink3)}
.sc-factrow{display:grid;grid-template-columns:210px 1fr;gap:16px;padding:15px 24px;border-top:1px solid var(--line)}
.sc-factrow:first-child{border-top:none}
.sc-factrow dt{font-weight:600;font-size:14px;color:var(--ink)}
.sc-factrow dd{font-size:14.5px;color:var(--ink2);line-height:1.6}
@media(max-width:680px){.sc-factrow{grid-template-columns:1fr;gap:4px}}

.sc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:34px}
.sc-card{background:var(--srf);border:1px solid var(--line);border-radius:13px;padding:20px 22px;display:flex;gap:14px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-card:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 14px 30px -16px rgba(15,23,42,.16)}
.sc-tick{flex:none;width:26px;height:26px;border-radius:7px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-top:2px}
.sc-tick svg{width:14px;height:14px}
.sc-card h4{font-weight:600;font-size:15px;margin-bottom:4px}
.sc-card p{font-size:13.5px;color:var(--ink3);line-height:1.55}

.sc-steps{margin-top:34px;max-width:880px}
.sc-step{display:grid;grid-template-columns:auto 1fr;gap:22px;padding:24px 0;border-top:1px solid var(--line)}
.sc-step:first-child{border-top:none}
.sc-stepn{font-family:var(--mono);font-size:13px;width:44px;height:44px;border-radius:11px;background:var(--ink);color:#fff;display:grid;place-items:center}
[data-theme="dark"] .sc-stepn{background:var(--acc);color:#fff}
.sc-step h4{font-family:var(--disp);font-weight:500;font-size:18px;margin-bottom:6px;letter-spacing:-.01em}
.sc-step p{font-size:15px;color:var(--ink2);line-height:1.6;max-width:66ch}

/* scope tiers */
.sc-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
@media(max-width:780px){.sc-tiers{grid-template-columns:1fr}}
.sc-tier{background:var(--srf);border:1px solid var(--line);border-radius:15px;padding:26px 24px;display:flex;flex-direction:column;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-tier:hover{transform:translateY(-3px);border-color:var(--acc);box-shadow:0 16px 34px -18px rgba(37,99,235,.22)}
.sc-tier h4{font-family:var(--disp);font-weight:500;font-size:19px;margin-bottom:10px;letter-spacing:-.01em}
.sc-tier p{font-size:14px;color:var(--ink3);line-height:1.6;flex:1}
.sc-tier .dur{margin-top:16px;font-family:var(--mono);font-size:12.5px;color:var(--acc);border-top:1px solid var(--line);padding-top:14px}
.sc-quote-note{margin-top:18px;font-size:14.5px;color:var(--ink2);background:var(--accs);border:1px solid #BFDBFE;border-radius:12px;padding:16px 20px;display:flex;gap:11px;align-items:center;font-weight:500}
.sc-quote-note::before{content:"⚡";font-size:17px}

.sc-twocol{display:grid;grid-template-columns:1fr 1fr;gap:44px}@media(max-width:820px){.sc-twocol{grid-template-columns:1fr;gap:36px}}
.sc-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.sc-chip{font-family:var(--mono);font-size:12.5px;color:var(--ink2);background:var(--srf);border:1px solid var(--line);border-radius:8px;padding:9px 14px;transition:border-color .2s,color .2s}
.sc-chip::before{content:"▪";color:var(--acc);margin-right:8px}.sc-chip:hover{border-color:var(--acc);color:var(--ink)}

.sc-list{list-style:none;display:grid;gap:13px;max-width:820px;margin-top:14px}
.sc-list li{position:relative;padding-left:32px;font-size:15.5px;color:var(--ink2);line-height:1.55}
.sc-list li::before{content:"";position:absolute;left:0;top:1px;width:21px;height:21px;border-radius:50%;background:var(--accs);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232563EB' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.sc-list.warn li::before{background:#FEE2E2;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23DC2626' stroke-width='3.4' stroke-linecap='round'%3E%3Cline x1='7' y1='7' x2='17' y2='17'/%3E%3Cline x1='17' y1='7' x2='7' y2='17'/%3E%3C/svg%3E")}

/* why work with us */
.sc-why{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
@media(max-width:860px){.sc-why{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.sc-why{grid-template-columns:1fr}}
.sc-whycard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;transition:all .35s cubic-bezier(.16,1,.3,1)}
.sc-whycard:hover{transform:translateY(-3px);border-color:var(--line2);box-shadow:0 16px 34px -18px rgba(15,23,42,.18)}
.sc-whyic{width:42px;height:42px;border-radius:11px;background:var(--accs);color:var(--acc);display:grid;place-items:center;margin-bottom:16px}
.sc-whyic svg{width:22px;height:22px}
.sc-whycard h4{font-family:var(--disp);font-weight:500;font-size:17px;margin-bottom:8px;letter-spacing:-.01em}
.sc-whycard p{font-size:14px;color:var(--ink3);line-height:1.6}

/* faq */
.sc-faq{margin-top:30px;max-width:860px}
.sc-faqitem{border:1px solid var(--line);border-radius:12px;background:var(--srf);margin-bottom:12px;overflow:hidden;transition:border-color .2s}
.sc-faqitem[open]{border-color:var(--line2)}
.sc-faqitem summary{list-style:none;cursor:pointer;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;gap:16px;font-weight:600;font-size:15.5px;color:var(--ink);transition:color .2s}
.sc-faqitem summary::-webkit-details-marker{display:none}
.sc-faqitem summary:hover{color:var(--acc)}
.sc-faqitem summary .ic{flex:none;width:20px;height:20px;color:var(--acc);transition:transform .25s}
.sc-faqitem[open] summary .ic{transform:rotate(45deg)}
.sc-faqitem .a{padding:0 22px 20px;font-size:14.5px;color:var(--ink2);line-height:1.7;max-width:74ch}

/* related */
.sc-rel{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
@media(max-width:780px){.sc-rel{grid-template-columns:1fr}}
.sc-relcard{background:var(--srf);border:1px solid var(--line);border-radius:14px;padding:24px;transition:all .3s;display:block}
.sc-relcard:hover{transform:translateY(-3px);border-color:var(--acc);box-shadow:0 16px 34px -18px rgba(37,99,235,.22)}
.sc-relcard h4{font-family:var(--disp);font-weight:500;font-size:17px;margin-bottom:8px;display:flex;align-items:center;gap:8px;letter-spacing:-.01em}
.sc-relcard h4 .ar{color:var(--acc);transition:transform .25s}
.sc-relcard:hover h4 .ar{transform:translateX(4px)}
.sc-relcard p{font-size:13.5px;color:var(--ink3);line-height:1.55}

.sc-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#0B1120,#13203A);border-radius:18px;padding:52px 44px;text-align:center;border:1px solid rgba(255,255,255,.06)}
.sc-cta::before{content:"";position:absolute;top:-60px;right:-40px;width:280px;height:280px;background:radial-gradient(circle,rgba(37,99,235,.28),transparent 68%)}
.sc-cta h3{font-family:var(--disp);font-weight:500;font-size:clamp(23px,3vw,32px);color:#fff;margin-bottom:12px;letter-spacing:-.015em;position:relative}
.sc-cta p{color:#94A3B8;font-size:15.5px;max-width:540px;margin:0 auto 26px;line-height:1.6;position:relative}
.sc-cta .sc-btn.pri{background:var(--acc);color:#fff}.sc-cta .sc-btn.pri:hover{background:#fff;color:var(--ink)}

@media(max-width:720px){.sc-grid{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.sc-page *{transition:none!important}}
`;
