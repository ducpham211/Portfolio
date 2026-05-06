import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, Code2, 
  Server, Database, Layout, Terminal, Menu, X, Download
} from 'lucide-react';
import avatarImage from './assets/picture/Avatar.jpg';

// --- CONFIG & DATA ---

const PROJECTS = [
  {
    title: "Pitch Management System",
    description: "A comprehensive backend system for sports field booking. Implemented stateless JWT auth, real-time WebSocket notifications, and asynchronous payment processing via Stripe.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Stripe API"],
    link: "https://github.com/ducpham211/pitch-management-system",
    isPrimary: true
  },
  {
    title: "Auto Audit Logging",
    description: "Production-ready Spring Boot starter library for automated audit logging with Data Masking for sensitive fields and large object filtering.",
    tech: ["Java", "Spring Boot", "AOP", "JUnit 5"],
    link: "https://github.com/ducpham211/auto-audit-logging",
    isPrimary: true
  },
  {
    title: "SportGear E-commerce",
    description: "Full-stack e-commerce application with cart management, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "Supabase", "Momo Pay"],
    link: "https://github.com/ducpham211/SportGear-E-commerce-Platform"
  },
  {
    title: "Football Master Manager",
    description: "A comprehensive management system tailored for football teams, focusing on performance tracking and scheduling.",
    tech: ["TypeScript", "React", "Node.js"],
    link: "https://github.com/ducpham211/football-master-manager"
  },
  {
    title: "Booking Hotel Platform",
    description: "A responsive platform for browsing and booking hotels seamlessly with interactive UI components.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    link: "https://github.com/ducpham211/booking-hotel-platform"
  }
];

const SKILLS = [
  { category: "Backend", items: ["Java", "Node.js", "Express.js"] },
  { category: "Database & Tools", items: ["PostgreSQL", "Git", "Flyway"] },
  { category: "Frontend", items: ["TypeScript", "React", "Tailwind CSS"] },
  { category: "Concepts", items: ["RESTful APIs", "Security (JWT)", "WebSockets"] }
];

// --- COMPONENTS ---

const SpotlightCard = ({ children, className = "", isPrimary = false, href }) => {
  const divRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const content = (
    <>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </>
  );

  const cardClasses = `group block relative overflow-hidden rounded-3xl glass-card transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/5 ${className} ${isPrimary ? 'md:col-span-2 p-6 md:p-10' : 'p-6 md:p-8'}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        whileHover={{ y: -5 }}
        className={cardClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cardClasses}
    >
      {content}
    </div>
  );
};

const Section = ({ children, id, className = "" }) => (
  <section 
    id={id}
    className={`py-20 md:py-32 px-6 max-w-6xl mx-auto overflow-hidden ${className}`}
  >
    {children}
  </section>
);

const Navbar = ({ isDark, toggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
          <Terminal className="text-brand-500" size={24} />
          <span>ducpham<span className="text-brand-500">.dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-brand-500 dark:text-neutral-400 dark:hover:text-brand-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Let's Talk
          </a>
          <button 
            onClick={toggleDark}
            className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleDark} className="p-2 text-neutral-600 dark:text-neutral-400">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 dark:text-neutral-400"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border p-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-neutral-800 dark:text-neutral-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-brand-500"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};

// --- APP COMPONENT ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage, default to light if not explicitly set to 'dark'
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDark = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Background Effects matching Firecrawl's sleek look */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-60" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-500/20 dark:bg-brand-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <Navbar isDark={isDark} toggleDark={toggleDark} />

      <main className="relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-20 md:py-0 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ 
              duration: 0.7, 
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-brand-500 rounded-full blur-[20px] opacity-30 animate-pulse" style={{ animationDuration: '3s' }} />
            <img 
              src={avatarImage} 
              alt="Pham Viet Duc" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-2 border-brand-500/50 relative z-10 shadow-xl"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium mb-6 text-neutral-600 dark:text-neutral-300 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Intern/Fresher roles
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white leading-[1.1]"
          >
            Building robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-orange-400 bg-[length:200%_auto] animate-gradient">backend systems</span><br className="hidden md:block"/> one line at a time.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 leading-relaxed"
          >
            I'm Pham Viet Duc, a passionate Backend Developer specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-orange-400 bg-[length:200%_auto] animate-gradient">Java, Spring Boot, Node js</span> and scalable database architectures. Let's build something exceptional.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center pb-6"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600 transition-all active:scale-95 shadow-lg shadow-brand-500/25"
            >
              View My Work
            </a>
            <a 
              href="/pdf/PhamVietDuc-Backend-Developer.pdf"
              download="PhamVietDuc-Backend-Developer.pdf"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </motion.div>
        </section>

        {/* ABOUT & EXPERIENCE */}
        <Section id="about" className="border-t border-light-border dark:border-dark-border">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">About Me</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 text-lg">
                I am an Information Technology student at UIT - VNU.HCM with a profound interest in 
                server-side architecture and data management. My journey involves continuous slearning, 
                exploring modern frameworks, and writing clean, maintainable code.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                I thrive in solving complex problems, optimizing database queries, and architecting systems 
                that can scale seamlessly under load.
              </p>

              <div className="mt-10 flex gap-4">
                <a href="https://github.com/ducpham211" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-xl hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/viet-duc-pham-898459337/" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              id="experience"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-white">Experience & Education</h2>
              
              <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-10">
                {/* Exp 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-light-bg dark:border-dark-bg" />
                  <span className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-1 block">Jan 2026 - May 2026</span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Backend Developer Intern</h3>
                  <h4 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">HD Bank</h4>
                  <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <li>Mastered the backend development lifecycle from Core Java to Spring Boot.</li>
                    <li>Focused on database architecture, secure API design, and complex business logic implementation resulting in an independent capstone project.</li>
                  </ul>
                </div>

                {/* Edu 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-light-bg dark:border-dark-bg" />
                  <span className="text-sm font-semibold text-brand-500 tracking-wider uppercase mb-1 block">2023 - Present</span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Bachelor of Information Technology</h3>
                  <h4 className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-3">University of Information Technology (UIT)</h4>
                   <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <li>GPA: 8.4/10</li>
                    <li>Academic focus on Software Engineering, Data Structures, Algorithms, and System Architecture.</li>
                  </ul>
                </div>

                {/* Qualifications */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-light-bg dark:border-dark-bg" />
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Qualifications</h3>
                  <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <li>IELTS: 6.0</li>
                    <li>The Complete Full-Stack Web Development Bootcamp on Udemy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* TECH STACK */}
        <Section className="bg-neutral-50 dark:bg-[#0f0f0f] border-y border-light-border dark:border-dark-border max-w-none px-6 relative overflow-hidden">
          {/* Subtle background glow for section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white tracking-tight">Technical Arsenal</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">Modern tools and technologies I use to architect robust, scalable applications.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                  className="h-full"
                >
                  <SpotlightCard className="!p-6 h-full flex flex-col group">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-700 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      {idx === 0 && <Server className="text-brand-500" size={24} />}
                      {idx === 1 && <Database className="text-blue-500" size={24} />}
                      {idx === 2 && <Layout className="text-pink-500" size={24} />}
                      {idx === 3 && <Code2 className="text-purple-500" size={24} />}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-6 text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {skillGroup.category}
                    </h3>
                    
                    <div className="flex flex-col gap-2.5 mt-auto">
                      {skillGroup.items.map((item, i) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                          key={i} 
                          className="w-full px-3 py-2 text-sm font-medium rounded-lg bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-brand-500/50 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-500/5 transition-all shadow-sm flex items-center justify-between group/item"
                        >
                          <span>{item}</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover/item:bg-brand-500 transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <motion.div 
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white tracking-tight">Featured Projects</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                A selection of my recent backend and full-stack work. 
                Focusing on clean code, scalability, and robust architecture.
              </p>
            </div>
            <a 
              href="https://github.com/ducpham211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-500 font-medium hover:text-brand-600 flex items-center gap-1 group"
            >
              View all on GitHub <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className={project.isPrimary ? 'md:col-span-2' : ''}
              >
                <SpotlightCard 
                  href={project.link} 
                  isPrimary={project.isPrimary}
                  className="h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`font-bold text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors ${project.isPrimary ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-brand-500 group-hover:text-white transition-all shrink-0">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                  
                  <p className={`text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed ${project.isPrimary ? 'text-lg max-w-3xl' : ''}`}>
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-light-border dark:border-dark-border">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-semibold rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 group-hover:border-brand-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA / CONTACT */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900 dark:bg-[#111] border border-neutral-800 p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-full bg-gradient-to-b from-brand-500/20 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Let's build together.</h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto relative z-10">
              I'm actively looking for a Backend Fresher or Intern position. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            
            <a 
              href="mailto:ducp07052@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-xl font-bold text-lg hover:bg-brand-600 transition-all active:scale-95 shadow-lg shadow-brand-500/25 relative z-10"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-light-border dark:border-dark-border text-center">
        <p className="text-neutral-500 dark:text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Pham Viet Duc.
        </p>
      </footer>
    </div>
  );
}
