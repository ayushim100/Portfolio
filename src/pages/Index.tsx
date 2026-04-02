import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Github, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38_92%_55%/0.08),transparent_60%)]" />
    <div className="relative z-10 max-w-5xl flex flex-col-reverse md:flex-row md:items-center md:gap-16">
      <div className="flex-1">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4"
        >
          Full Stack Developer
        </motion.p>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          Ayushi<br />
          <span className="text-primary glow-accent">Maheshwari</span>
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8"
        >
          Building scalable products at the intersection of design & engineering.
          IIT Kanpur graduate with 3+ years of full-stack experience.
        </motion.p>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="flex flex-wrap gap-4"
        >
          <a href="mailto:ayushim100@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm hover:opacity-90 transition-opacity">
            <Mail size={16} /> Get in Touch
          </a>
          <a href="https://github.com/ayushim100" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg font-heading font-medium text-sm text-foreground hover:border-primary/50 transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="tel:+917302547099" className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg font-heading font-medium text-sm text-foreground hover:border-primary/50 transition-colors">
            <Phone size={16} /> +91-7302547099
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={1}
        className="mb-8 md:mb-0 shrink-0"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_hsl(38_92%_55%/0.15)]">
          <img src={profilePhoto} alt="Ayushi Maheshwari" width={512} height={512} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="text-muted-foreground animate-bounce" size={24} />
    </motion.div>
  </section>
);

const experiences = [
  {
    role: "Web Developer",
    company: "First Response Healthcare",
    period: "Oct 2024 – Present",
    highlights: [
      "Built a scalable healthcare booking backend enabling mobile users to book services handling 1000 bookings/day",
      "Developed a management dashboard for tracking bookings, teams, and services with RBAC and group-based access control",
      "Implemented lead management, team roster scheduling, and service modules, improving operational efficiency and visibility",
      "Integrated AWS, Kafka, Stripe, MirrorFly, Sentry to support real-time workflows, monitoring, and production reliability",
    ],
    tech: ["Next.js", "React.js", "Spring Boot", "Java", "Kotlin", "Redis", "Kafka", "AWS", "Stripe", "MirrorFly", "Sentry", "JavaScript", "TypeScript"],
  },
  {
    role: "SDE-I",
    company: "MoveInSync",
    period: "Sep 2023 – Jun 2024",
    highlights: [
      "Optimized Property Management platform used by 50 internal searvices for quick debugging using Angular & Spring Boot",
      "Enhanced user experience by implementing virtual scrolling, resulting in a 3x improvement in UI rendering",
      "Leveraged Kafka to streamline data processing, ensuring efficient real-time data flow and communication for multiple clients",
    ],
    tech: ["Angular", "Spring Boot", "Kafka", "Android", "Java", "Kotlin", "JavaScript", "TypeScript"],
  },
  {
    role: "Software Engineer",
    company: "Samsung R&D Institute",
    period: "Jun 2022 – Sep 2023",
    highlights: [
      "Implemented a robust Android based workout tracking application using Kotlin & MVVM architecture",
      "Integrated coroutines & Retrofit to handle asynchronous network calls for smooth data retrieval & updating",
      "Designed UML diagrams to ensure a clear understanding of the project’s structure",
      "Conferred with prestigious Samsung Software Competency (Professional) certificate, held by only 1% of employees",
      "Awarded with SPOT award for constant design changes & code quality improvements in Q1 2023"
    ],
    tech: ["Kotlin", "MVVM", "Retrofit", "Coroutines", "Android", "Java", "JavaScript", "TypeScript"],
  },
  {
    role: "FrontEnd Development Intern",
    company: "MFL EduClub",
    period: "Jan 2022 – Jun 2022",
    highlights: [
      "Developed a web-app using ReactJS with reusable class-based components & HTTP server (client side routing)",
      "Integrated app with Redux store & service worker to enhance performance by reducing API calls",
    ],
    tech: ["React", "Redux", "REST APIs", "JavaScript", "TypeScript"],
  },
  {
    role: "Software Development Intern",
    company: "MoveInSync",
    period: "May 2021 – Aug 2021",
    highlights: [
      "Built a chat system for employees, to raise issues regarding office assets & integrated it with admin dashboard",
      "Worked on transforming & adding attributes on SVG based images using Angular & D3.js",
      "Received Letter of Recommendation (LoR) for valuable & effective contribution to the company"
    ],
    tech: ["Angular", "D3.js", "JavaScript", "TypeScript"],
  },
];

const Experience = () => (
  <section className="py-24 px-6 md:px-16 lg:px-24" id="experience">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Experience" title="Where I've Worked" />
      <div className="space-y-8 mt-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                <p className="text-primary text-sm font-medium">{exp.company}</p>
              </div>
              <span className="text-muted-foreground text-sm font-heading shrink-0">{exp.period}</span>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-secondary-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary inline-block" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs font-heading bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Angular", "React Native", "JavaScript", "TypeScript", "Bootstrap", "Tailwind", "HTML5/CSS3", "ShadcnUI"],
  },
  {
    title: "Backend",
    skills: ["C/C++", "Node.js", "Spring Boot", "Nest.js", "Express.js", "Kotlin", "Java", "Kafka", "Python"],
  },
  {
    title: "Mobile",
    skills: ["Android", "Kotlin", "React Native"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "GCP", "Docker"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "BitBucket", "JIRA", "Jenkins", "Sentry", "Figma", "CI/CD", "Agile", "Firebase"],
  },
  {
    title: "Competencies ",
    skills: ["Problem Solving", "Design Analysis", "Unit Testing", "Root Cause Analysis", "Debugging", "Team Leadership"],
  }
];

const Skills = () => (
  <section className="py-24 px-6 md:px-16 lg:px-24 relative" id="skills">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(38_92%_55%/0.05),transparent_60%)]" />
    <div className="max-w-5xl mx-auto relative z-10">
      <SectionTitle label="Skills" title="My Toolkit" />
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg font-body">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const projects = [
  {
    title: "Sawariya Collection",
    description: "Fashion e-commerce website with WhatsApp integration for seamless customer interaction. Built with Vite, React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind", "Lovable"],
  },
  {
    title: "Aquamind – IIT Kanpur",
    description: "Designed a thermally insulated dual-section bottle. Conducted market & feasibility analysis, pricing, break-even, and risk mitigation strategies.",
    tech: ["Product Design", "Market Analysis"],
  },
  {
    title: "Meeting App Design",
    description: "Crafted UI/UX templates with chat and poll features. Created wireframes and interactive Figma prototypes following Material Design guidelines.",
    tech: ["Figma", "UX Research", "Material Design"],
  },
];

const Projects = () => (
  <section className="py-24 px-6 md:px-16 lg:px-24" id="projects">
    <div className="max-w-5xl mx-auto">
      <SectionTitle label="Projects" title="Selected Work" />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="glass-card rounded-xl p-6 flex flex-col hover:border-primary/30 transition-colors group"
          >
            <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-heading">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-24 px-6 md:px-16 lg:px-24 relative" id="education">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(38_92%_55%/0.05),transparent_60%)]" />
    <div className="max-w-5xl mx-auto relative z-10">
      <SectionTitle label="Education" title="Academic Background" />
      <div className="space-y-6 mt-12">
        {[
          { degree: "B.Tech", institute: "Indian Institute of Technology, Kanpur", year: "2018 – 2022", grade: "CPI: 8.1/10" },
          { degree: "Class XII (MP Board)", institute: "Rawatpura High School, Bankhedi", year: "2018", grade: "87.2%" },
          { degree: "Class X (CBSE)", institute: "Jawahar Navodaya Vidyalaya, Hoshangabad", year: "2016", grade: "10.0/10.0" },
        ].map((e, i) => (
          <motion.div
            key={i}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            className="glass-card rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground text-sm">{e.institute}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary font-heading font-semibold text-sm">{e.grade}</span>
              <span className="text-muted-foreground text-sm">{e.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionTitle = ({ label, title }: { label: string; title: string }) => (
  <div>
    <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-2">{label}</p>
    <h2 className="font-heading text-3xl md:text-4xl font-bold">{title}</h2>
    <div className="gradient-line h-px w-24 mt-4" />
  </div>
);

const Footer = () => (
  <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="font-heading text-xl font-bold">Let's Connect</h3>
        <p className="text-muted-foreground text-sm mt-1">Open to exciting opportunities and collaborations.</p>
      </div>
      <div className="flex gap-4">
        <a href="mailto:ayushim100@gmail.com" className="glass-card p-3 rounded-lg hover:border-primary/50 transition-colors">
          <Mail size={20} className="text-foreground" />
        </a>
        <a href="https://github.com/ayushim100" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-lg hover:border-primary/50 transition-colors">
          <Github size={20} className="text-foreground" />
        </a>
        <a href="tel:+917302547099" className="glass-card p-3 rounded-lg hover:border-primary/50 transition-colors">
          <Phone size={20} className="text-foreground" />
        </a>
      </div>
    </div>
  </footer>
);

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4"
  >
    <div className="max-w-5xl mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between">
      <span className="font-heading font-bold text-lg">AM<span className="text-primary">.</span></span>
      <div className="hidden md:flex items-center gap-6 text-sm font-heading">
        {["experience", "skills", "projects", "education"].map((s) => (
          // <a key={s} href={`#${s}`} className="text-muted-foreground hover:text-foreground transition-colors capitalize">{s}</a>
          <a
            key={s}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="text-muted-foreground hover:text-foreground transition-colors capitalize"
          >
            {s}
          </a>
        ))}
      </div>
      <a href="mailto:ayushim100@gmail.com" className="text-sm font-heading bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity">
        Hire Me
      </a>
    </div>
  </motion.nav>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <Footer />
  </div>
);

export default Index;
