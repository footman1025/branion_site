import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LangProvider } from './context/LangContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CookieBanner from './components/CookieBanner';
import PageProgress from './components/PageProgress';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Products = lazy(() => import('./pages/Products'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Refer = lazy(() => import('./pages/Refer'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Web3Dev = lazy(() => import('./pages/Web3Dev'));
const NFTDev = lazy(() => import('./pages/NFTDev'));
const NFTMarketplace = lazy(() => import('./pages/NFTMarketplace'));
const CryptoCheckout = lazy(() => import('./pages/CryptoCheckout'));
const CryptoWallets = lazy(() => import('./pages/CryptoWallets'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const MetaverseDev = lazy(() => import('./pages/MetaverseDev'));
const AIRecommendations = lazy(() => import('./pages/AIRecommendations'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Careers = lazy(() => import('./pages/Careers'));
const JobDetail = lazy(() => import('./pages/JobDetail'));
const JobApply = lazy(() => import('./pages/JobApply'));

// Loading fallback component
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: '#6b7280',
      fontSize: '14px'
    }}>
      Loading...
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

/* Fades page content in after navigation completes */
function PageContent({ children }) {
  const { isRunning } = useNavigation();
  return (
    <div
      style={{
        opacity:       isRunning ? 0 : 1,
        transform:     isRunning ? 'translateY(10px)' : 'translateY(0)',
        transition:    isRunning ? 'none' : 'opacity 0.28s ease, transform 0.28s ease',
        pointerEvents: isRunning ? 'none' : 'auto',
        willChange:    'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: 100,
        right: 36,
        width: 44,
        height: 44,
        borderRadius: 10,
        background: '#0ea5e9',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(14,165,233,0.4)',
        zIndex: 1998,
        transition: 'background 0.15s, transform 0.15s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#0284c7'}
      onMouseLeave={e => e.currentTarget.style.background = '#0ea5e9'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LangProvider>
        <BrowserRouter>
        <NavigationProvider>
        <PageProgress />
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <PageContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/web3-development" element={<Web3Dev />} />
            <Route path="/smart-payments" element={<Web3Dev />} />
            <Route path="/nft-development" element={<NFTDev />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/nft-marketplace" element={<NFTMarketplace />} />
            <Route path="/crypto-checkout" element={<CryptoCheckout />} />
            <Route path="/crypto-wallets" element={<CryptoWallets />} />
            <Route path="/web3-mvps" element={<CryptoWallets />} />
            <Route path="/real-estate-tokenization" element={<RealEstate />} />
            <Route path="/metaverse-development" element={<MetaverseDev />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<JobDetail />} />
            <Route path="/careers/:slug/apply" element={<JobApply />} />
          </Routes>
          </PageContent>
        </Suspense>
        <Footer />
        <Chatbot />
        <ScrollToTopBtn />
        <CookieBanner />
        </NavigationProvider>
      </BrowserRouter>
    </LangProvider>
    </HelmetProvider>
  );
}
