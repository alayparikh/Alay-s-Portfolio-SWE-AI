import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

const roles = [
  'Software Engineer',
  'Backend Platform Builder',
  'AI Systems Engineer',
  'RAG & LLM Practitioner',
  'Cloud-Native Developer',
];

const skills = [
  {
    category: 'Languages & Frameworks',
    color: '#00d4ff',
    items: [
      ['Java / Spring Boot', 96],
      ['Python / Flask', 92],
      ['JavaScript / React', 88],
      ['REST APIs / Microservices', 94],
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    color: '#3b82f6',
    items: [
      ['AWS Lambda / SNS / SQS / RDS', 94],
      ['Docker / Kubernetes', 84],
      ['Terraform / CloudFormation', 88],
      ['GCP / Azure / Vercel', 78],
    ],
  },
  {
    category: 'AI & Data Systems',
    color: '#7c3aed',
    items: [
      ['RAG Architecture', 92],
      ['LLM Agents / Tool Calling', 90],
      ['Vector DBs / Embeddings', 86],
      ['Semantic Search / Prompting', 88],
    ],
  },
  {
    category: 'Data, DevOps & Quality',
    color: '#10b981',
    items: [
      ['Advanced SQL / Query Optimization', 93],
      ['Jenkins / GitHub Actions / GitLab', 86],
      ['JUnit / Selenium / API Testing', 84],
      ['CloudWatch / Splunk / BI', 82],
    ],
  },
];

const experiences = [
  {
    company: 'Mythics',
    mark: 'M',
    role: 'Software Engineer',
    location: 'Atlanta, GA',
    period: 'Mar 2024 - Present',
    color: '#00d4ff',
    bullets: [
      'Owned backend architecture and Java/Spring Boot microservices for a transaction-heavy Order to Cash platform supporting 1,000 restaurant locations.',
      'Designed event-driven cart, checkout, inventory validation, and shipment workflows using AWS SNS and Lambda.',
      'Implemented transactionally consistent Amazon RDS models for order, shipment, billing, and financial processing reliability.',
      'Built Terraform-based CI/CD pipelines with Git reviews, pull requests, automated quality checks, testing, and deployments.',
      'Designed RAG knowledge retrieval and hybrid pipelines combining vector embeddings with SQL joins for structured enterprise queries.',
      'Built LLM-powered agents that automate investigations by correlating service logs, telemetry, and relational datasets.',
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'RAG', 'Terraform', 'LLM Agents'],
  },
  {
    company: 'Amazon Web Services',
    mark: 'A',
    role: 'Software Development Engineer',
    location: 'Atlanta, GA',
    period: 'Sep 2022 - Mar 2024',
    color: '#f59e0b',
    bullets: [
      'Designed and delivered IRIS, a Java/Spring service that detected infrastructure configuration gaps at build time across AWS regions.',
      'Built RESTful APIs with validation, error handling, JUnit, API testing, and BDD-style CI/CD validation.',
      'Designed SQL-backed services for onboarding and configuration data, enabling self-service integration for internal teams.',
      'Implemented event-driven workflows and ETL pipelines using AWS SNS and SQS.',
      'Owned on-call, incident triage, post-incident reviews, root cause analysis, and preventative reliability fixes.',
      'Developed React UI components surfacing operational insights and service health.',
    ],
    tags: ['Java', 'Spring', 'AWS SNS/SQS', 'SQL', 'React', 'JUnit'],
  },
  {
    company: 'Infosys Limited USA',
    mark: 'I',
    role: 'Systems Engineer',
    location: 'Remote',
    period: 'Jan 2021 - Sep 2022',
    color: '#3b82f6',
    bullets: [
      'Built observability dashboards and automated alerting to surface service anomalies early.',
      'Analyzed logs and operational metrics to identify recurring failure patterns and reduce repeat incidents.',
      'Applied debugging and root cause analysis techniques on distributed systems while supporting Agile delivery teams.',
    ],
    tags: ['Observability', 'Dashboards', 'RCA', 'Agile'],
  },
  {
    company: 'Terminal Trend',
    mark: 'T',
    role: 'Software Engineer',
    location: 'Ahmedabad, GJ',
    period: 'Jan 2019 - Dec 2019',
    color: '#10b981',
    bullets: [
      'Developed Python and Flask backend services with RESTful JSON APIs backed by NoSQL databases.',
      'Built React frontend components and integrated them with backend APIs for responsive user-facing workflows.',
      'Delivered modular backend services using object-oriented design and REST API best practices.',
    ],
    tags: ['Python', 'Flask', 'React', 'NoSQL', 'REST APIs'],
  },
];

const projectCards = [
  ['AI', 'Enterprise RAG Pipelines', 'Built RAG pipelines integrating relational databases, service logs, and operational documentation so teams can query enterprise knowledge through natural language.', ['RAG', 'SQL', 'Embeddings', 'Docs']],
  ['SQL', 'Schema-Aware Retrieval', 'Implemented schema-aware retrieval and natural-language-to-SQL workflows for transactional and financial questions requiring structured reasoning.', ['NL2SQL', 'Joins', 'RDS', 'Query Optimization']],
  ['AG', 'Agentic Investigation Workflows', 'Designed LLM agent orchestration using tool calling, structured response schemas, and telemetry correlation for automated operational investigations.', ['LLM Agents', 'Tool Calling', 'Telemetry', 'Schemas']],
  ['SEC', 'Permission-Scoped AI Execution', 'Implemented permission-scoped execution patterns that keep AI interactions safer when touching production-adjacent systems and enterprise data.', ['Access Control', 'MCP', 'Safety', 'GenAI']],
];

function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const colors = ['#00d4ff', '#3b82f6', '#7c3aed', '#10b981'];
    let particles = [];
    let nodes = [];
    let mouse = { x: 0, y: 0 };
    let frame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      nodes = Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        if (Math.hypot(dx, dy) < 120) {
          node.x -= dx * 0.01;
          node.y -= dy * 0.01;
        }
        nodes.forEach((other, j) => {
          if (j <= i) return;
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            const grad = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            grad.addColorStop(0, `rgba(0,212,255,${alpha})`);
            grad.addColorStop(1, `rgba(124,58,237,${alpha})`);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,212,255,0.4)';
        ctx.fill();
      });
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      const time = Date.now() * 0.001;
      for (let i = 0; i < 4; i += 1) {
        const y = (canvas.height / 5) * (i + 1);
        const offset = (time * 60 + i * 200) % canvas.width;
        const grad = ctx.createLinearGradient(offset - 200, y, offset + 100, y);
        grad.addColorStop(0, 'rgba(0,212,255,0)');
        grad.addColorStop(0.5, 'rgba(0,212,255,0.06)');
        grad.addColorStop(1, 'rgba(0,212,255,0)');
        ctx.beginPath();
        ctx.moveTo(offset - 200, y);
        ctx.lineTo(offset + 100, y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      frame = requestAnimationFrame(draw);
    };

    const onMouseMove = (event) => {
      mouse = { x: event.clientX, y: event.clientY };
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas id="animated-bg" ref={ref} aria-hidden="true" />;
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let pos = { x: 0, y: 0 };
    let ring = { x: 0, y: 0 };
    let frame;
    const move = (event) => {
      pos = { x: event.clientX, y: event.clientY };
      dotRef.current.style.transform = `translate(${event.clientX - 6}px, ${event.clientY - 6}px)`;
    };
    const over = (event) => {
      ringRef.current.classList.toggle('hovering', Boolean(event.target.closest('a, button, input, textarea, [data-cursor-hover]')));
    };
    const down = () => dotRef.current.classList.add('clicking');
    const up = () => dotRef.current.classList.remove('clicking');
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.12;
      ring.y += (pos.y - ring.y) * 0.12;
      ringRef.current.style.transform = `translate(${ring.x - 20}px, ${ring.y - 20}px)`;
      frame = requestAnimationFrame(animate);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);
    animate();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('skill-card')) {
            entry.target.querySelectorAll('.skill-bar b').forEach((bar) => {
              bar.style.setProperty('--bar-width', bar.dataset.level);
            });
          }
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const nav = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.3 });
    nav.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container nav-shell">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>AP<span>.</span></a>
        <nav className={`site-nav ${open ? 'open' : ''}`}>
          {nav.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); go(id); }}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <a className="btn-primary nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Hire Me?</a>
        <button className={`nav-toggle ${open ? 'open' : ''}`} type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const doneTyping = !deleting && displayText === current;
    const doneDeleting = deleting && displayText === '';
    const delay = doneTyping ? 1800 : deleting ? 40 : 70;
    const timer = setTimeout(() => {
      if (doneTyping) setDeleting(true);
      else if (doneDeleting) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setDisplayText(current.slice(0, displayText.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [deleting, displayText, roleIndex]);

  return (
    <section id="home" className="section hero-section">
      <div className="hero-glow hero-glow-top" />
      <div className="hero-glow hero-glow-side" />
      <div className="container hero-grid reveal">
        <div className="hero-copy">
          <div className="availability"><span /><p>Available for opportunities</p></div>
          <h1><span>Alay</span><span className="gradient-text">Parikh</span></h1>
          <div className="typewriter"><span>{displayText}</span><i /></div>
          <p className="hero-summary">Hands-on Software Engineer with 5+ years designing scalable backend services, modern web applications, and AI-powered platforms across AWS, GCP, Java/Spring Boot, Python, React, SQL, RAG, and LLM agents.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:alayparikh98@gmail.com">Get in Touch</a>
            <a className="btn-outline" href="#projects">View Projects</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/alayparikh" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href="https://linkedin.com/in/alayparikh" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="mailto:alayparikh98@gmail.com" aria-label="Email">@</a>
          </div>
        </div>
        <aside className="stats-card glass-card">
          <div className="stats-grid">
            <div><strong>5+</strong><span>Years Experience</span></div>
            <div><strong>1000</strong><span>Locations Supported</span></div>
            <div><strong>RAG</strong><span>Enterprise AI Systems</span></div>
            <div><strong>AWS</strong><span>Cloud-Native Delivery</span></div>
          </div>
          <TagCloud tags={['Java', 'Spring Boot', 'Python', 'React', 'SQL', 'LLM Agents']} compact />
        </aside>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll</span><b>↓</b></a>
    </section>
  );
}

function TagCloud({ tags, compact = false }) {
  return (
    <div className={`tag-cloud ${compact ? 'compact' : ''}`}>
      {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
    </div>
  );
}

function SectionIntro({ label, title, subtitle, centered = false, children }) {
  return (
    <div className={`section-intro ${centered ? 'centered' : ''} reveal`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="soft-glow left" />
      <div className="container">
        <SectionIntro label="About Me" title="Building reliable software and intelligent systems" subtitle="I work across the full software lifecycle, from requirements and architecture to implementation, testing, deployment, documentation, and production support.">
          <TagCloud tags={['Atlanta, GA', 'Open to Remote', '5+ YOE', 'MS Computer Science']} />
        </SectionIntro>
        <div className="about-grid">
          <div className="bio-copy reveal">
            <p>At <strong>Mythics</strong>, I own backend architecture and development for Java/Spring Boot microservices powering transaction-heavy Order to Cash workflows. I design event-driven integrations, relational data models, Terraform-backed CI/CD, and AI retrieval layers for operational intelligence.</p>
            <p>At <strong>Amazon Web Services</strong>, I built IRIS, a Java/Spring service that detected infrastructure configuration gaps at build time across isolated and advanced AWS regions, improving regional launch reliability and preventing production failures.</p>
            <p>I bring production engineering instincts to AI: RAG pipelines over SQL-backed enterprise data, hybrid retrieval, tool-calling agents, structured response schemas, and permission-scoped execution for safer AI interaction with operational systems.</p>
          </div>
          <aside className="profile-card glass-card reveal">
            {[
              ['degree:', 'M.S. Computer Science'],
              ['school:', 'University of Texas at Arlington'],
              ['email:', 'alayparikh98@gmail.com'],
              ['phone:', '+1 (408) 483-1223'],
              ['location:', 'Atlanta, GA'],
            ].map(([label, value]) => (
              <div className="profile-row" key={label}><span>{label}</span><p>{value}</p></div>
            ))}
          </aside>
        </div>
        <div className="capability-grid">
          {[
            ['01', 'Backend Architecture', 'Java, Spring Boot, RESTful APIs, microservices, object-oriented design, LLD, API contracts, and high-throughput transactional workflows.', '#00d4ff'],
            ['02', 'Cloud Platforms', 'AWS Lambda, SNS, SQS, ECS, EKS, RDS, CloudFormation, GCP, Docker, Kubernetes, Terraform, and CI/CD automation.', '#3b82f6'],
            ['03', 'AI Systems', 'RAG architecture, LLM agents, vector databases, embeddings, semantic search, prompt engineering, MCP, Codex, and Claude Code.', '#7c3aed'],
            ['04', 'Reliability', 'Observability dashboards, production support, incident triage, root cause analysis, operational telemetry, CloudWatch, Splunk, and long-term stability fixes.', '#10b981'],
          ].map(([num, title, text, color]) => (
            <article className="capability-card glass-card reveal" style={{ '--card-color': color }} key={title}>
              <b>{num}</b><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="soft-glow right" />
      <div className="container">
        <SectionIntro label="Technical Skills" title="SWE and AI stack proficiency" subtitle="Production experience spanning backend services, cloud infrastructure, AI retrieval systems, data persistence, DevOps, observability, and testing." />
        <div className="skill-grid">
          {skills.map((group) => (
            <article className="skill-card glass-card reveal" style={{ '--card-color': group.color }} key={group.category}>
              <h3>{group.category}</h3>
              {group.items.map(([name, level]) => (
                <div className="skill-bar" key={name}>
                  <span>{name}</span>
                  <b data-level={`${level}%`} />
                </div>
              ))}
            </article>
          ))}
        </div>
        <div className="tag-cloud tools reveal">
          {['Java', 'Python', 'React', 'Node.js', 'Next.js', 'Amazon RDS', 'MySQL', 'BigQuery', 'MongoDB', 'Terraform', 'Jira', 'Tableau', 'Power BI', 'GenAI', 'MCP', 'Codex', 'Claude Code'].map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionIntro label="Experience" title="Career Timeline" subtitle="5+ years of progressive software engineering experience across enterprise platforms, AWS services, distributed systems, and AI-enabled workflows." />
        <div className="timeline-layout">
          <div className="timeline">
            <div className="timeline-label">Work Experience</div>
            {experiences.map((exp, index) => (
              <article className={`timeline-item reveal ${open === index ? 'open' : ''}`} style={{ '--item-color': exp.color }} key={exp.company}>
                <button className="timeline-head" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                  <span className="company-mark">{exp.mark}</span>
                  <span><b>{exp.role}</b><small>{exp.company} · {exp.location}</small></span>
                  <em>{exp.period}</em>
                </button>
                <div className="timeline-body">
                  <ul>{exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <TagCloud tags={exp.tags} compact />
                </div>
              </article>
            ))}
          </div>
          <aside className="education-panel reveal">
            <div className="timeline-label purple">Education</div>
            <div className="glass-card education-card">
              <span>Graduate</span>
              <h3>M.S. Computer Science</h3>
              <p>University of Texas at Arlington</p>
              <small>Dec 2021 · USA</small>
            </div>
            <div className="glass-card resume-card">
              <p>Full resume details are represented throughout this portfolio with a SWE/AI focus.</p>
              <a className="btn-primary" href="mailto:alayparikh98@gmail.com?subject=Resume%20Request%20-%20Alay%20Parikh">Request Resume</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="soft-glow left" />
      <div className="container">
        <div className="section-intro split reveal">
          <div>
            <span className="section-label">Projects</span>
            <h2 className="section-title">AI Systems & Intelligent Platform Engineering</h2>
          </div>
          <a className="btn-outline" href="https://github.com/alayparikh" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="project-grid">
          {projectCards.map(([icon, title, text, tags]) => (
            <article className="project-card glass-card reveal" key={title}>
              <div className="project-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <TagCloud tags={tags} compact />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = data.get('subject') || 'Portfolio Contact';
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:alayparikh98@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" />
      <div className="container">
        <SectionIntro centered label="Contact" title="Let's Work Together" subtitle="Open to software engineering and AI platform roles, especially work involving backend systems, cloud architecture, RAG, LLM agents, and production reliability." />
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Available for new opportunities</h3>
            <p>I bring practical backend depth and AI systems experience to teams shipping reliable, intelligent production software.</p>
            <a className="contact-item" href="mailto:alayparikh98@gmail.com"><span>@</span><b>Email</b><em>alayparikh98@gmail.com</em></a>
            <a className="contact-item" href="tel:+14084831223"><span>#</span><b>Phone</b><em>+1 (408) 483-1223</em></a>
            <div className="contact-item"><span>*</span><b>Location</b><em>Atlanta, GA</em></div>
          </div>
          <form className="contact-form glass-card reveal" onSubmit={submit}>
            <div className="form-row">
              <label>Name<input name="name" placeholder="Your name" required /></label>
              <label>Email<input name="email" type="email" placeholder="your@email.com" required /></label>
            </div>
            <label>Subject<input name="subject" placeholder="What's this about?" /></label>
            <label>Message<textarea name="message" rows="5" placeholder="Tell me about your role, project, or opportunity..." required /></label>
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Alay Parikh. Software Engineer & AI Portfolio.</p>
        <div>
          <a href="https://github.com/alayparikh" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/alayparikh" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <>
      <AnimatedBackground />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
