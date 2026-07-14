import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MessageSquareText,
  Moon,
  Quote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TestTube2,
  X,
  Zap
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['home', 'Home'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['learning', 'Learning'],
  ['about', 'About'],
  ['contact', 'Ask Ankita']
];

const skills = [
  'Quality strategy', 'API testing', 'Database validation', 'ETL testing',
  'AI & RAG testing', 'Playwright', 'Python', 'SQL', 'Postman',
  'Payment testing', 'Product thinking', 'Release confidence'
];

const projects = [
  {
    icon: BrainCircuit,
    eyebrow: 'AI QUALITY',
    title: 'Testing an AI-powered operations platform',
    summary: 'Designed end-to-end validation across chat, RAG, agents, connectors, structured data, knowledge graphs, and user-facing workflows.',
    details: [
      'Mapped complete system flows before automating them',
      'Validated AI outputs for correctness, context use, explainability, and failure handling',
      'Tested across UI, APIs, databases, logs, queues, and downstream data stores'
    ],
    tags: ['AI testing', 'RAG', 'Agents', 'System testing']
  },
  {
    icon: Database,
    eyebrow: 'DATA QUALITY',
    title: 'Validating ingestion and ETL pipelines',
    summary: 'Tested data movement from source connectors through parsing, processing, storage, analytics, and AI consumption.',
    details: [
      'Checked schema, transformations, duplicates, missing data, retries, and sync states',
      'Compared source data with Athena, OpenSearch, MongoDB, and Neo4j outputs',
      'Built scenario coverage for structured and unstructured files'
    ],
    tags: ['ETL', 'Athena', 'OpenSearch', 'Neo4j']
  },
  {
    icon: Code2,
    eyebrow: 'QA AUTOMATION',
    title: 'Building practical automation from real product risks',
    summary: 'Created a scalable automation direction using Python, Playwright, APIs, reusable flows, and product-aware regression coverage.',
    details: [
      'Focused automation on high-risk journeys instead of raw test count',
      'Used page objects, reusable fixtures, data-driven tests, and API helpers',
      'Connected automation thinking with observability and defect diagnosis'
    ],
    tags: ['Python', 'Playwright', 'API automation', 'Framework design']
  },
  {
    icon: ShieldCheck,
    eyebrow: 'PAYMENTS',
    title: 'Protecting subscription and payment journeys',
    summary: 'Validated payment gateways, subscription changes, renewals, webhooks, failures, retries, and cross-platform consistency.',
    details: [
      'Covered Stripe and Nexio payment scenarios',
      'Verified backend events and state changes beyond the UI',
      'Tested web, Android, and iOS customer journeys'
    ],
    tags: ['Stripe', 'Nexio', 'Webhooks', 'Mobile testing']
  }
];

const experience = [
  {
    company: 'Fermi Development Private Limited',
    role: 'SDET / QA Engineer',
    period: 'Feb 2026 — Present',
    copy: 'Owning quality across an AI-powered operations platform involving connectors, data pipelines, chat, knowledge systems, analytics, workflows, and agent-based experiences.',
    highlights: ['AI and RAG validation', 'ETL and connector testing', 'Backend and database validation', 'Release risk communication']
  },
  {
    company: 'Bridging Technologies',
    role: 'Software Test Engineer',
    period: 'Sep 2024 — Feb 2026',
    copy: 'Tested complex products across web, Android, iOS, APIs, subscriptions, payment gateways, and backend workflows while improving product and release confidence.',
    highlights: ['Payment gateway testing', 'API and database testing', 'Cross-platform regression', 'Independent feature ownership']
  },
  {
    company: 'Tiara IT Services',
    role: 'QA Engineer',
    period: 'Jan 2024 — Sep 2024',
    copy: 'Built the foundation of my QA practice through functional testing, regression, defect reporting, requirement understanding, and close collaboration with product teams.',
    highlights: ['Functional testing', 'Regression testing', 'Defect analysis', 'Product understanding']
  }
];

const learningCards = [
  { icon: BrainCircuit, title: 'AI quality evaluation', text: 'Learning how to evaluate RAG, LLM agents, grounding, retrieval quality, and real-world failure modes.' },
  { icon: Code2, title: 'Automation architecture', text: 'Building scalable Playwright and Python skills through practical product-based automation.' },
  { icon: Layers3, title: 'System design for testers', text: 'Understanding services, queues, data stores, observability, and how failures travel across a system.' },
  { icon: BookOpen, title: 'Writing in public', text: 'Turning lessons, bugs, experiments, and technical concepts into useful articles and field notes.' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [form, setForm] = useState({ name: '', email: '', topic: 'Discuss a QA opportunity', message: '' });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`${form.topic} — Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`);
    return `mailto:hello@ankitanandal.com?subject=${subject}&body=${body}`;
  }, [form]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={theme === 'dark' ? 'app dark' : 'app light'}>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span className="brand-mark">AN</span>
            <span>Ankita Nandal</span>
          </button>
          <div className="nav-links desktop-nav">
            {navItems.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme"><Moon size={18} /></button>
            <button className="btn small desktop-cta" onClick={() => scrollTo('contact')}>Start a conversation <ArrowRight size={16} /></button>
            <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
        {menuOpen && <div className="mobile-panel">{navItems.map(([id,label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</div>}
      </header>

      <main>
        <section id="home" className="hero container section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Product-minded quality engineering</div>
            <h1>I test beyond the <span>visible screen.</span></h1>
            <p className="hero-lead">I’m Ankita, an SDET who understands products deeply and tests across user journeys, APIs, data pipelines, databases, automation, integrations, and AI systems.</p>
            <div className="hero-actions">
              <button className="btn" onClick={() => scrollTo('work')}>Explore my work <ArrowRight size={18} /></button>
              <a className="btn ghost" href="/Ankita_Nandal_Resume.pdf" target="_blank" rel="noreferrer"><Download size={18} /> View resume</a>
            </div>
            <div className="social-row">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><ExternalLink size={18}/> LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><Code2 size={18}/> GitHub</a>
              <a href="mailto:hello@ankitanandal.com"><Mail size={18}/> Email</a>
            </div>
          </div>
          <div className="hero-grid">
            <div className="bento primary-card">
              <span className="status"><i /> Currently building</span>
              <h3>Quality systems for complex AI and data products</h3>
              <p>Connecting product understanding, technical validation, automation, and clear risk communication.</p>
            </div>
            <div className="bento metric"><strong>2.5+</strong><span>years in quality engineering</span></div>
            <div className="bento metric"><strong>3</strong><span>product environments</span></div>
            <div className="bento quote-card"><Quote size={22}/><p>“Quality is not a final checkpoint. It is how the product is understood, challenged, and improved.”</p></div>
          </div>
        </section>

        <section className="marquee-section"><div className="marquee">{[...skills, ...skills].map((s,i)=><span key={i}><CheckCircle2 size={14}/>{s}</span>)}</div></section>

        <section id="work" className="container section-pad">
          <div className="section-heading">
            <div><div className="eyebrow">SELECTED WORK</div><h2>How I approach difficult quality problems</h2></div>
            <p>Case studies that show the product context, technical depth, decisions, risks, and outcomes behind the testing.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return <article className="project-card" key={p.title}>
                <div className="project-top"><span className="project-icon"><Icon/></span><span className="project-no">0{i+1}</span></div>
                <small>{p.eyebrow}</small>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
                <button className="text-btn" onClick={() => setActiveProject(activeProject === i ? null : i)}>View approach <ChevronDown className={activeProject===i?'rotated':''} size={18}/></button>
                {activeProject === i && <div className="project-details">{p.details.map(d=><div key={d}><CheckCircle2 size={16}/><span>{d}</span></div>)}</div>}
              </article>
            })}
          </div>
        </section>

        <section id="experience" className="experience section-pad"><div className="container">
          <div className="section-heading"><div><div className="eyebrow">EXPERIENCE</div><h2>Growing from feature testing to quality ownership</h2></div><p>My career has moved steadily toward deeper system understanding, broader ownership, and stronger product judgement.</p></div>
          <div className="timeline">{experience.map((e,i)=><div className="timeline-item" key={e.company}>
            <div className="timeline-dot">{i+1}</div>
            <div className="timeline-card"><div className="timeline-head"><div><h3>{e.company}</h3><p>{e.role}</p></div><span>{e.period}</span></div><p>{e.copy}</p><div className="tags">{e.highlights.map(h=><span key={h}>{h}</span>)}</div></div>
          </div>)}</div>
        </div></section>

        <section id="learning" className="container section-pad">
          <div className="section-heading"><div><div className="eyebrow">LEARNING IN PUBLIC</div><h2>What I’m learning, building, and understanding next</h2></div><p>This section will grow into practical notes, articles, experiments, and lessons from real quality problems.</p></div>
          <div className="learning-grid">{learningCards.map(c=>{const Icon=c.icon;return <article className="learning-card" key={c.title}><Icon/><h3>{c.title}</h3><p>{c.text}</p><span>Notes coming soon <ArrowRight size={15}/></span></article>})}</div>
          <div className="article-preview">
            <div><span className="status"><i/> First article in progress</span><h3>How I learned to test an AI system beyond the answer on screen</h3><p>A practical story about tracing retrieval, tools, data, logs, system states, and failure patterns instead of judging only the final response.</p></div>
            <button className="btn ghost">Read when published <BookOpen size={18}/></button>
          </div>
        </section>

        <section id="about" className="about section-pad"><div className="container about-grid">
          <div><div className="eyebrow">ABOUT ME</div><h2>I care about the reason a product fails—not only the place where it fails.</h2></div>
          <div className="about-copy"><p>I began with functional and regression testing, then moved deeper into APIs, databases, payments, data pipelines, automation, and AI systems. My strongest skill is connecting these layers into one complete product story.</p><p>I work best when I can understand the user, the business goal, the architecture, and the release risk together. I ask questions early, challenge unclear assumptions, explore beyond assigned test cases, and communicate issues in a way that helps teams act.</p><div className="principles"><div><SearchCheck/><span><b>Investigate deeply</b>Trace failures across the system.</span></div><div><TestTube2/><span><b>Test with intent</b>Prioritise real risk over test count.</span></div><div><MessageSquareText/><span><b>Communicate clearly</b>Turn technical findings into decisions.</span></div><div><Zap/><span><b>Keep learning</b>Build understanding through practice.</span></div></div></div>
        </div></section>

        <section id="contact" className="container section-pad">
          <div className="contact-shell">
            <div className="contact-copy"><div className="eyebrow">ASK ANKITA</div><h2>Have a product, quality, or collaboration question?</h2><p>Tell me what you are working on, what is difficult, or what you would like to discuss. Your message will open in your email app.</p><div className="contact-points"><span><CheckCircle2/> Thoughtful quality conversations</span><span><CheckCircle2/> Product and testing opportunities</span><span><CheckCircle2/> Technical collaboration and knowledge sharing</span></div></div>
            <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); window.location.href=mailto;}}>
              <label>Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>
              <label>Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label>
              <label>What would you like to discuss?<select value={form.topic} onChange={e=>setForm({...form,topic:e.target.value})}><option>Discuss a QA opportunity</option><option>Ask about my work</option><option>Collaborate on a project</option><option>Discuss product quality</option><option>Something else</option></select></label>
              <label>Message<textarea required rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me a little about it..."/></label>
              <button className="btn" type="submit">Start a conversation <ArrowRight size={18}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer><div className="container footer"><div><b>Ankita Nandal</b><span>SDET & Product-Minded Quality Engineer</span></div><div className="footer-links"><a href="mailto:hello@ankitanandal.com">Email</a><a href="https://www.linkedin.com">LinkedIn</a><a href="https://github.com">GitHub</a></div><span>© {new Date().getFullYear()} ankitanandal.com</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
