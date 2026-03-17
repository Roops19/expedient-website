import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  LineChart,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Target,
  Users,
  UserRound,
  X,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

const services = [
  {
    key: "advisory",
    icon: LineChart,
    title: "Advisory",
    intro:
      "Delivery-focused support to improve commercial outcomes, strengthen governance and reshape how procurement operates.",
    offerings: [
      {
        title: "Procurement Transformation",
        description:
          "We help organisations redesign procurement operating models, clarify roles, improve governance and align procurement more closely to business strategy.",
        bullets: [
          "Operating model design",
          "Future procurement operating model design",
          "Governance improvement",
          "Stakeholder alignment",
        ],
      },
      {
        title: "Cost & Value Transformation",
        description:
          "Strategic sourcing, category strategy, negotiation support and commercial interventions designed to unlock measurable value rather than short-term savings only.",
        bullets: [
          "Category opportunity assessment",
          "Sourcing strategy development",
          "Commercial negotiation support",
          "Value tracking and benefit visibility",
          "End-to-end supply chain mapping and cost transparency",
          "Tail-end spend management and optimisation",
        ],
      },
      {
        title: "RFP & Tender Advisory",
        description:
          "Support to design and run structured procurement exercises that deliver both compliance and strong commercial outcomes.",
        bullets: [
          "RFP design",
          "Evaluation model development",
          "Supplier engagement strategy",
          "Commercial negotiation support",
          "Tender governance and compliance assurance",
          "Outsourced back-office procurement support for sourcing and tender administration",
        ],
      },
      {
        title: "Procurement Policy, Governance & Social Value",
        description:
          "Development of procurement policies, governance frameworks and social value integration aligned with organisational priorities.",
        bullets: [
          "Policy development",
          "Governance framework design",
          "Social value integration",
          "Procurement compliance improvement",
        ],
      },
      {
        title: "Supply Chain Resilience",
        description:
          "Helping organisations strengthen supplier resilience, risk management and continuity planning.",
        bullets: [
          "Supplier risk frameworks",
          "Critical supplier analysis",
          "Resilience strategy",
          "Continuity planning",
        ],
      },
      {
        title: "Innovation & SME Engagement",
        description:
          "Approaches that improve market engagement, encourage innovation and create better access for SMEs.",
        bullets: [
          "Market engagement strategy",
          "SME participation improvement",
          "Innovation sourcing",
          "Supplier ecosystem development",
        ],
      },
      {
        title: "Procurement Analytics & Spend Intelligence",
        description:
          "Using data, analytics and modern tools to create visibility of spend, identify value opportunities and support stronger commercial decision making.",
        bullets: [
          "Spend analytics and spend visibility",
          "AI-enabled spend analysis and opportunity identification",
          "Supplier performance analytics",
          "Data-driven procurement dashboards and reporting",
        ],
      },
      {
        title: "Technology & AI Enablement",
        description:
          "Supporting organisations to adopt modern technology that strengthens procurement, commercial performance and decision making.",
        bullets: [
          "Design and deployment of procurement and commercial IT systems",
          "AI-enabled analytics and decision-support tools",
          "Data governance, cyber security and protection frameworks",
          "Technology adoption aligned with procurement and business strategy",
        ],
      },
      {
        title: "Project & Programme Management",
        description:
          "Structured delivery support for complex procurement and commercial transformation programmes using modern project management approaches.",
        bullets: [
          "Agile delivery approaches for iterative transformation",
          "Traditional Waterfall governance for structured programmes",
          "Digital collaboration tools and modern programme dashboards",
          "Technology-enabled project tracking, reporting and stakeholder visibility",
        ],
      },
    ],
  },
  {
    key: "resource",
    icon: Users,
    title: "Resource Solutions",
    intro:
      "Support to define the real need, shape the role and access the right interim or specialist expertise at pace.",
    offerings: [
      {
        title: "Interim Procurement Leadership",
        description:
          "Experienced interim leaders to maintain continuity during transformation, restructuring or leadership gaps.",
        bullets: [
          "Interim CPO / Head of Procurement",
          "Programme leadership",
          "Transformation leadership",
          "Procurement team stabilisation",
        ],
      },
      {
        title: "Resource Need Definition",
        description:
          "Clarifying the real capability or capacity gap before recruiting or deploying interim support.",
        bullets: [
          "Role design",
          "Capability gap analysis",
          "Delivery model design",
          "Team structure review",
        ],
      },
      {
        title: "Job Specification Development",
        description:
          "Helping organisations create clear, outcome-focused role specifications aligned to transformation goals.",
        bullets: [
          "Role definition",
          "Responsibility frameworks",
          "Outcome definition",
          "Recruitment support",
        ],
      },
      {
        title: "Specialist Associate Solutions",
        description:
          "Access to experienced procurement and commercial specialists through the Expedient associate network.",
        bullets: [
          "Category specialists",
          "Commercial advisors",
          "Transformation specialists",
          "Programme delivery experts",
        ],
      },
    ],
  },
  {
    key: "training",
    icon: GraduationCap,
    title: "Capability & Training",
    intro:
      "Practical programmes that help teams operate more strategically and build stronger commercial capability.",
    offerings: [
      {
        title: "Procurement Fundamentals",
        description:
          "Building strong foundations for procurement professionals developing their core capability.",
        bullets: [
          "Procurement lifecycle",
          "Commercial fundamentals",
          "Supplier engagement",
          "Governance basics",
        ],
      },
      {
        title: "Strategic Sourcing & Category Management",
        description:
          "Helping teams apply structured category thinking and strategic sourcing approaches.",
        bullets: [
          "Category strategy",
          "Market analysis",
          "Strategic sourcing process",
          "Opportunity identification",
        ],
      },
      {
        title: "Negotiation & Commercial Skills",
        description:
          "Practical negotiation capability designed for procurement and commercial professionals.",
        bullets: [
          "Negotiation preparation",
          "Commercial positioning",
          "Supplier negotiation",
          "Outcome management",
        ],
      },
      {
        title: "Contract Management",
        description:
          "Strengthening post-award commercial management and supplier performance oversight.",
        bullets: [
          "Contract governance",
          "Performance management",
          "Supplier relationship management",
          "Value delivery tracking",
        ],
      },
      {
        title: "Leadership Development",
        description:
          "Supporting procurement leaders to lead teams, transformation and stakeholder engagement effectively.",
        bullets: [
          "Leadership capability",
          "Stakeholder engagement",
          "Change leadership",
          "Team development",
        ],
      },
    ],
  },
];

const sectors = [
  "Government",
  "NHS & Healthcare",
  "Financial Services",
  "Energy & Infrastructure",
  "International Programmes",
  "Private Sector Growth Environments",
  "Technology Sector",
];

const workWithUsLevels = [
  {
    title: "Emerging Interim Professionals",
    text:
      "For early-career professionals building experience in procurement, commercial delivery, project support and stakeholder engagement.",
  },
  {
    title: "Experienced Interim Professionals",
    text:
      "For practitioners with established delivery experience who can support transformation programmes, sourcing activity, analysis and implementation.",
  },
  {
    title: "Senior Interims & Specialists",
    text:
      "For experienced interim leaders, subject matter specialists and senior consultants who can lead delivery, advise clients and strengthen programme outcomes.",
  },
];

const thinkTankContent = [
  {
    title: "Podcast Recordings",
    text:
      "We will be launching a series of talks covering the latest topics shaping procurement, commercial transformation, supplier performance, AI enablement and market change. New recordings will be published here as they are released.",
    cta: "Registered members will be notified when new podcast sessions go live.",
  },
  {
    title: "Published Articles",
    text:
      "This section will feature short articles, practical commentary and point-of-view pieces on the issues organisations are dealing with right now across procurement, governance, transformation delivery, technology and capability building.",
    cta: "Subscribers will receive updates when new articles are published.",
  },
  {
    title: "Market Knowledge",
    text:
      "We will share timely insights on emerging priorities in the market, including regulatory shifts, operating model trends, supplier resilience, digital procurement and commercial best practice.",
    cta: "Register for updates to receive new market insight releases.",
  },
];

const threePs = [
  {
    icon: Users,
    title: "People",
    short: "Capability & Expertise",
    points: ["Building Skills & Expertise", "Providing Specialist Resources"],
  },
  {
    icon: Layers3,
    title: "Process",
    short: "Governance & Frameworks",
    points: ["Optimising Systems & Policies", "Ensuring Best Practices"],
  },
  {
    icon: Target,
    title: "Performance",
    short: "Results & Value",
    points: ["Driving Savings & Value", "Enhancing Business Outcomes"],
  },
];

const metrics = [
  ["£5bn+", "Spend leadership"],
  ["30-60%", "Savings delivered"],
  ["200+", "Professionals developed"],
  ["Frameworks", "Created & deployed"],
];

const THINK_TANK_FORM_ACTION = "https://formspree.io/f/your-thinktank-form-id";
const WORK_WITH_US_FORM_ACTION = "https://formspree.io/f/your-workwithus-form-id";
const FRAMEWORK_IMAGE_PATH = "/images/3p-framework.jpg";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export default function ExpedientAnimatedWebsite() {
  const scrollToSection = (targetId) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    const headerOffset = 104;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = sectionTop - headerOffset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    if (window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState("advisory");

  const selectedService = useMemo(
    () => services.find((service) => service.key === activeService) || services[0],
    [activeService]
  );

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0">
                <div className="absolute left-0 top-1 h-3 w-10 -skew-y-[18deg] rounded-sm bg-white" />
                <div className="absolute left-0 top-4 h-3 w-10 -skew-y-[18deg] rounded-sm bg-emerald-600" />
                <div className="absolute left-0 top-7 h-3 w-10 -skew-y-[18deg] rounded-sm bg-white" />
              </div>
              <div className="leading-none">
                <div className="text-[1.35rem] font-semibold tracking-[0.12em] text-white sm:text-[1.7rem] lg:text-[1.95rem]">EXPEDIENT</div>
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Sectors", "sectors"],
              ["Think Tank", "thinktank"],
              ["Work with us", "workwithus"],
              ["Contact", "contact"],
            ].map(([label, target]) => (
              <button key={label} onClick={() => scrollToSection(target)} className="text-sm font-medium text-white/80 transition hover:text-white">
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button className="rounded-xl border border-white/10 p-2 text-white md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["About", "about"],
                ["Services", "services"],
                ["Sectors", "sectors"],
                ["Think Tank", "thinktank"],
                ["Work with us", "workwithus"],
                ["Contact", "contact"],
              ].map(([label, target]) => (
                <button key={label} className="text-left text-sm font-medium text-white/85" onClick={() => { setMobileOpen(false); scrollToSection(target); }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <section id="home" className="relative scroll-mt-28 overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
              <Handshake className="h-4 w-4 text-emerald-300" />
              Boutique Advisory • Resource Solutions • Capability Development & Training
            </div>
            <motion.h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" variants={fadeUp} custom={2}>
              Helping organisations transform procurement, strengthen governance and deliver measurable commercial value.
            </motion.h1>
            <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-white/75" variants={fadeUp} custom={3}>
              Expedient Ltd supports public and private sector organisations with procurement transformation, cost and value improvement, supplier performance, interim leadership and capability development. Our work is practical, delivery-focused and designed to create sustainable commercial outcomes.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap gap-4" variants={fadeUp} custom={4}>
              <button onClick={() => scrollToSection("services")} className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                Explore services
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Speak to Expedient
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-4 self-end" initial="hidden" animate="visible" variants={fadeUp} custom={5}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/10 p-2">
                  <Network className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">The Expedient 3P Framework</h3>
              </div>
              <p className="text-sm leading-7 text-white/75">
                Our 3P framework brings together <strong>People</strong>, <strong>Process</strong> and <strong>Performance</strong> to help organisations build capability, improve operating discipline and deliver stronger financial and operational outcomes.
              </p>
              <p className="mt-4 text-sm text-white/60">Explore the services section to see how the framework is applied in practice.</p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pb-12 lg:grid-cols-4 lg:px-8">
          {metrics.map(([value, label], index) => (
            <motion.div key={label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + index * 0.08 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-sm text-white/65">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeading eyebrow="About Expedient" title="A boutique model built for practical transformation" description="Expedient Ltd is a boutique procurement, commercial and supply chain consultancy supporting organisations to deliver measurable value, strengthen capability and lead complex transformation programmes across public and private sectors." />
        </motion.div>
      </section>
    </div>
  );
}
