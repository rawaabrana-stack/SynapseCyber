import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './pages/layout.jsx';
import Home from './pages/Home.jsx';
import AILLMSecurity from './pages/AILLMSecurity.jsx';
import CloudSecurityAssessment from './pages/CloudSecurityAssessment.jsx';
import IncidentResponse from './pages/IncidentResponse.jsx';
import PenetrationTesting from './pages/PenetrationTesting.jsx';
import PrivacyImpactAssessment from './pages/PrivacyImpactAssessment.jsx';
import RedTeamAdversarySimulation from './pages/RedTeamAdversarySimulation.jsx';
import SapSecurity from './pages/SapSecurity.jsx';
import SecureCodeReview from './pages/SecureCodeReview.jsx';
import SecurityArchitectureReview from './pages/SecurityArchitectureReview.jsx';
import ThreatRiskAssessment from './pages/ThreatRiskAssessment.jsx';
import VCISOAdvisory from './pages/VCISOAdvisory.jsx';
import VulnerabilityAssessment from './pages/VulnerabilityAssessment.jsx';

// Industries
import FinancialServices from './pages/industries/FinancialServices.jsx';
import Healthcare from './pages/industries/Healthcare.jsx';
import Government from './pages/industries/Government.jsx';
import SaasTechnology from './pages/industries/SaasTechnology.jsx';
import CriticalInfrastructure from './pages/industries/CriticalInfrastructure.jsx';

// Resources
import SampleReport from './pages/resources/SampleReport.jsx';
import TraMethodology from './pages/resources/TraMethodology.jsx';
import Blog from './pages/resources/Blog.jsx';
import CaseStudies from './pages/resources/CaseStudies.jsx';

// Company
import About from './pages/company/About.jsx';
import Careers from './pages/company/Careers.jsx';
import Contact from './pages/company/Contact.jsx';
import Quote from './pages/company/Quote.jsx';

// Trust & Legal
import Trust from './pages/legal/Trust.jsx';
import Security from './pages/legal/Security.jsx';
import Privacy from './pages/legal/Privacy.jsx';
import Terms from './pages/legal/Terms.jsx';
import Accessibility from './pages/legal/Accessibility.jsx';

// Scrolls to top on navigation, or to the hash target if one is present.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Wait a tick so the new page has mounted
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <title>SynapseCyber - Information Security</title>
        <meta name="description" content="Independent security assurance for regulated and high-risk organisations." />
      </Helmet>

      <Routes>
        {/* Layout parent route hai, isliye header/footer har jagah dikhega */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ai-llm-security" element={<AILLMSecurity />} />
          <Route path="/cloud-security-assessment" element={<CloudSecurityAssessment />} />
          <Route path="/incident-response" element={<IncidentResponse />} />
          <Route path="/penetration-testing" element={<PenetrationTesting />} />
          <Route path="/privacy-impact-assessment" element={<PrivacyImpactAssessment />} />
          <Route path="/red-team-adversary-simulation" element={<RedTeamAdversarySimulation />} />
          <Route path="/sap-security" element={<SapSecurity />} />
          <Route path="/secure-code-review" element={<SecureCodeReview />} />
          <Route path="/security-architecture-review" element={<SecurityArchitectureReview />} />
          <Route path="/threat-risk-assessment" element={<ThreatRiskAssessment />} />
          <Route path="/vciso-advisory" element={<VCISOAdvisory />} />
          <Route path="/vulnerability-assessment" element={<VulnerabilityAssessment />} />

          {/* Industries */}
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/government" element={<Government />} />
          <Route path="/industries/saas-technology" element={<SaasTechnology />} />
          <Route path="/industries/critical-infrastructure" element={<CriticalInfrastructure />} />

          {/* Resources */}
          <Route path="/resources/sample-report" element={<SampleReport />} />
          <Route path="/resources/tra-methodology" element={<TraMethodology />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />

          {/* Trust & Legal */}
          <Route path="/trust" element={<Trust />} />
          <Route path="/security" element={<Security />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/accessibility" element={<Accessibility />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;