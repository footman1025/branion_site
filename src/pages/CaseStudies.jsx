import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import SEO from '../components/SEO';
import './CaseStudies.css';

const PRODUCTS = [
  { _id:'1', name:'NexusAI',       tagline:'AI-Powered Business Intelligence',      category:'AI / SaaS',     image:'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['GPT-4','Python','React','Analytics'], featured:true, link:'#' },
  { _id:'2', name:'ChainVault',    tagline:'DeFi Asset Management Protocol',        category:'Blockchain',    image:'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['Solidity','Ethereum','Web3','DeFi'], featured:true, link:'#' },
  { _id:'3', name:'DreamShop Pro', tagline:'Enterprise E-Commerce Platform',        category:'E-Commerce',    image:'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['React','Node.js','MongoDB','Stripe'], featured:true, link:'#' },
  { _id:'4', name:'DevOps Hub',    tagline:'Internal Developer Platform',           category:'DevOps',        image:'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['Kubernetes','Docker','GitOps','AWS'], featured:false, link:'#' },
  { _id:'5', name:'InfraBot',      tagline:'Infrastructure as Code Automation',     category:'DevOps',        image:'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['Terraform','Pulumi','AWS','GCP'], featured:false, link:'#' },
  { _id:'6', name:'ObserveX',      tagline:'Full-Stack Observability Platform',     category:'DevOps',        image:'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['Prometheus','Grafana','OpenTelemetry','AI'], featured:false, link:'#' },
  { _id:'7', name:'CloudShield',   tagline:'Enterprise Cybersecurity Suite',        category:'Cybersecurity', image:'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['AWS','Security','SOC2','GDPR'], featured:false, link:'#' },
  { _id:'8', name:'MediTrack',     tagline:'Healthcare Mobile Platform',            category:'Healthcare',    image:'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['React Native','HIPAA','iOS','Android'], featured:false, link:'#' },
  { _id:'9', name:'FinFlow',       tagline:'Real-Time Financial Dashboard',         category:'Fintech',       image:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['React','Node.js','PostgreSQL','SOC2'], featured:false, link:'#' },
  { _id:'10',name:'DeliverX',      tagline:'Smart Logistics Management',            category:'Logistics',     image:'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['React Native','Maps API','Node.js','MongoDB'], featured:false, link:'#' },
  { _id:'11',name:'NFTForge',      tagline:'NFT Minting & Marketplace Platform',    category:'Blockchain',    image:'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['Solidity','IPFS','React','OpenSea API'], featured:false, link:'#' },
  { _id:'12',name:'CartFlow',      tagline:'Headless Commerce Engine',              category:'E-Commerce',    image:'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', tags:['GraphQL','Next.js','PostgreSQL'], featured:false, link:'#' },
];

export default function CaseStudies() {
  const { t } = useLang();
  const c = t.caseStudiesPage || {};
  const [filter, setFilter] = useState('All');

  const categories = c.categories || [
    { key: 'All', label: 'All' },
    { key: 'E-Commerce', label: 'E-Commerce' },
    { key: 'Blockchain', label: 'Blockchain' },
    { key: 'AI / SaaS', label: 'AI / SaaS' },
    { key: 'Healthcare', label: 'Healthcare' },
    { key: 'Cybersecurity', label: 'Cybersecurity' },
    { key: 'Logistics', label: 'Logistics' },
    { key: 'Fintech', label: 'Fintech' },
    { key: 'DevOps', label: 'DevOps' },
  ];

  const localizedProducts = PRODUCTS.map((p) => {
    const loc = c.products?.find((x) => x._id === p._id);
    return loc?.tagline ? { ...p, tagline: loc.tagline } : p;
  });

  const filtered =
    filter === 'All'
      ? localizedProducts
      : localizedProducts.filter((p) => p.category === filter);

  const titleLines = (c.heroTitle || 'Case Studies &\nCompleted Projects').split('\n');

  return (
    <main className="cs-page">
      <SEO
        title="Case Studies"
        description={c.heroSubtitle || 'Explore DefiGate case studies and completed blockchain, AI, and product projects.'}
        path="/case-studies"
      />

      <section
        className="cs-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="cs-hero-overlay" aria-hidden="true" />
        <div className="cs-hero-container">
          <div className="cs-hero-content">
            <p className="cs-hero-brand">DefiGate</p>
            <h1 className="cs-hero-title">
              {titleLines.map((line) => (
                <span key={line} className="cs-hero-title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="cs-hero-sub">
              {c.heroSubtitle ||
                'We work with innovative entrepreneurs to launch products that solve real market needs and create delightful experiences for their users.'}
            </p>
            <div className="cs-hero-actions">
              <Link to="/contact" className="cs-hero-btn">
                {c.heroBtn || 'Book a call'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section cs-products-section">
        <div className="cs-container">
          <header className="cs-products-header">
            <span className="cs-section-tag">{c.heroEyebrow || 'Portfolio'}</span>
            <h2 className="cs-section-title">
              {c.sectionTitle || 'Selected work'}
            </h2>
            <p className="cs-section-sub">
              {c.sectionSub || 'Production builds across blockchain, AI, commerce, and infrastructure.'}
            </p>
          </header>

          <div className="cs-filter" role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={filter === cat.key}
                className={`cs-filter-btn ${filter === cat.key ? 'active' : ''}`}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="cs-grid">
            {filtered.map((p, index) => (
              <article className="cs-item" key={p._id}>
                <a href={p.link} className="cs-item-media">
                  <img loading="lazy" src={p.image} alt={p.name} className="cs-img" />
                  <span className="cs-item-index">{String(index + 1).padStart(2, '0')}</span>
                </a>
                <div className="cs-item-body">
                  <div className="cs-item-meta">
                    <span className="cs-item-cat">{p.category}</span>
                    {p.featured && (
                      <span className="cs-item-featured">{c.featuredLabel || 'Featured'}</span>
                    )}
                  </div>
                  <h3 className="cs-item-title">{p.name}</h3>
                  <p className="cs-item-desc">{p.tagline}</p>
                  <p className="cs-item-stack">{(p.tags || []).join(' · ')}</p>
                  <a href={p.link} className="cs-item-link">
                    {c.learnMore || 'Learn more'}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="cs-empty">{c.emptyMessage || 'No products found in this category.'}</p>
            )}
          </div>
        </div>
      </section>

      <section className="cs-cta">
        <div className="cs-cta-glow" aria-hidden="true" />
        <div className="cs-container cs-cta-inner">
          <p className="cs-cta-brand">DefiGate</p>
          <h2 className="cs-cta-title">{c.ctaTitle || 'Have a project in mind?'}</h2>
          <p className="cs-cta-sub">
            {c.ctaSubtitle ||
              "Let's build something great together. Our team is ready to start within 48 hours."}
          </p>
          <div className="cs-cta-actions">
            <Link to="/contact" className="cs-cta-btn">
              {c.ctaBtn || 'Start a project'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
