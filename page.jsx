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
          "Strategic sourcing, category strategy, negotiation support and commercial interventions designed to unlock measurable value rather than short‑term savings only.",
        bullets: [
          "Category opportunity assessment",
          "Sourcing strategy development",
          "Commercial negotiation support",
          "Value tracking and benefit visibility",
          "End‑to‑end supply chain mapping and cost transparency",
          "Tail‑end spend management and optimisation",
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
          "Outsourced back‑office procurement support for sourcing and tender administration",
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
          "AI‑enabled spend analysis and opportunity identification",
          "Supplier performance analytics",
          "Data‑driven procurement dashboards and reporting",
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
          "Technology‑enabled project tracking, reporting and stakeholder visibility",
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
          "Helping organisations create clear, outcome‑focused role specifications aligned to transformation goals.",
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
          "Strengthening post‑award commercial management and supplier performance oversight.",
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
    text: "Building skills, strengthening expertise and providing specialist resources to support client delivery.",
    points: ["Building Skills & Expertise", "Providing Specialist Resources"],
    panelColor: "text-sky-700",
    accentBg: "from-sky-500 to-sky-700",
    glow: "shadow-[0_18px_40px_rgba(14,116,144,0.35)]",
    ring: "ring-sky-200/60",
  },
  {
    icon: Layers3,
    title: "Process",
    short: "Governance & Frameworks",
    text: "Optimising systems, policies and governance so procurement operates with consistency and best practice.",
    points: ["Optimising Systems & Policies", "Ensuring Best Practices"],
    panelColor: "text-lime-700",
    accentBg: "from-lime-500 to-green-700",
    glow: "shadow-[0_18px_40px_rgba(77,124,15,0.35)]",
    ring: "ring-lime-200/60",
  },
  {
    icon: Target,
    title: "Performance",
    short: "Results & Value",
    text: "Driving savings, value and stronger business outcomes through measurable commercial performance.",
    points: ["Driving Savings & Value", "Enhancing Business Outcomes"],
    panelColor: "text-orange-600",
    accentBg: "from-amber-400 to-orange-600",
    glow: "shadow-[0_18px_40px_rgba(234,88,12,0.35)]",
    ring: "ring-orange-200/60",
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
              <button
                key={label}
                onClick={() => scrollToSection(target)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
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
                <button
                  key={label}
                  className="text-left text-sm font-medium text-white/85"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToSection(target);
                  }}
                >
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
            <motion.h1
              className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              custom={2}
            >
              Helping organisations transform procurement, strengthen governance and deliver measurable commercial value.
            </motion.h1>
            <motion.p className="mt-6 max-w-3xl text-lg leading-8 text-white/75" variants={fadeUp} custom={3}>
              Expedient Ltd supports public and private sector organisations with procurement transformation, cost and value improvement, supplier performance, interim leadership and capability development. Our work is practical, delivery-focused and designed to create sustainable commercial outcomes.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4" variants={fadeUp} custom={4}>
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Speak to Expedient
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4 self-end"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
          >
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
              <p className="mt-4 text-sm text-white/60">
                Explore the services section to see how the framework is applied in practice.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pb-12 lg:grid-cols-4 lg:px-8">
          {metrics.map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-sm text-white/65">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeading
            eyebrow="About Expedient"
            title="A boutique model built for practical transformation"
            description="Expedient Ltd is a boutique procurement, commercial and supply chain consultancy supporting organisations to deliver measurable value, strengthen capability and lead complex transformation programmes across public and private sectors."
          />
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Briefcase,
              title: "What we do",
              text: "We are a specialist management consultancy focused on procurement, commercial transformation and supply chain performance. We help organisations improve procurement performance, strengthen commercial governance, enhance supplier outcomes and build lasting internal capability. Our work spans strategic advisory, interim resource solutions and professional development, supporting organisations through procurement transformation, cost and value improvement, supply chain resilience and capability building. We also support organisations in adopting modern technology to improve commercial performance, including designing and deploying procurement and commercial IT systems, introducing data‑driven decision tools and implementing AI‑enabled solutions within large organisations. Our approach ensures that technology adoption is practical, secure and aligned with organisational needs, with strong attention to cyber security, data protection and resilience against cyber threats.",
            },
            {
              icon: ShieldCheck,
              title: "How we work",
              text: "We work closely with business stakeholders to ensure procurement and commercial initiatives remain aligned with wider organisational priorities. Through the Expedient 3P framework — People, Process and Performance — we ensure that all stakeholders involved understand the change being delivered and remain fully engaged throughout the transformation journey. We believe there is no change without understanding change. This approach has helped our clients deliver measurable savings while building stronger internal capability. Our approach combines hands‑on consultancy delivery, practical engagement with business leaders and a flexible senior associate model to provide specialist expertise without large‑firm overheads.",
            },
            {
              icon: Globe2,
              title: "Global experience",
              text: "Experience across the UK, Europe and the Middle East spanning government, NHS, financial services and cross-border transformation programmes. Our practitioners have worked across multiple jurisdictions and understand regional procurement policies, regulatory frameworks and commercial practices. This allows them to navigate jurisdictional requirements, engage effectively with regional supplier ecosystems and negotiate strong local agreements while ensuring global commercial strategies remain competitive, compliant and financially robust.",
            },
            {
              icon: CheckCircle2,
              title: "Why boutique",
              text: "Our practitioners bring experience from working across multiple organisations and complex transformation environments. This means they are aware of common delivery risks and challenges that can arise during procurement and commercial change programmes. When potential issues emerge, they are able to anticipate them early and develop practical recovery plans based on prior experience. Expedient teams actively plan for what could go wrong and position programmes to succeed, ensuring risks are managed proactively and the likelihood of delivery failure is significantly reduced.",
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index + 1}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Services"
              title="Three pillars designed to move from strategy to delivery"
              description="The site is structured around advisory, resource solutions, and capability development so visitors can quickly understand where Expedient adds value."
            />
          </motion.div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 px-8 py-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Framework model</p>
              <h3 className="mt-3 text-3xl font-semibold">The 3P Framework of Expedient</h3>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/75">
                Driving success through People, Process and Performance. This framework sits at the centre of how Expedient helps organisations strengthen capability, optimise governance and deliver measurable value.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {threePs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="h-full rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white/10 p-3">
                          <Icon className="h-5 w-5 text-emerald-300" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">{item.title}</div>
                          <div className="text-sm text-white/70">{item.short}</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 text-sm leading-6 text-white/75">
                        {item.points.map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">3P framework in practice</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  How the 3P model drives savings, efficiency and stronger commercial outcomes
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  The 3P framework improves performance in a balanced and sustainable way. By combining the right capability, disciplined delivery processes and a clear focus on measurable outcomes, Expedient helps clients reduce cost leakage, improve procurement efficiency and generate more durable commercial value.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "People ensures the right expertise, specialist support and leadership are in place to accelerate delivery and strengthen commercial capability.",
                    "Process improves governance, sourcing discipline, supplier management and operating consistency — reducing inefficiency, duplication and risk.",
                    "Performance focuses attention on measurable savings, value creation, service improvement and stronger business outcomes rather than one-off cost cutting.",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <figure className="w-full max-w-[760px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                  <img
                    src={FRAMEWORK_IMAGE_PATH}
                    alt="The 3P Framework of Expedient"
                    className="block h-auto w-full object-contain"
                  />
                </figure>
              </div>
              </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 items-stretch">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = activeService === service.key;
              return (
                <motion.button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={index + 1}
                  className={`h-full rounded-[1.75rem] border px-6 py-5 text-left transition ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                      : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex rounded-2xl p-3 ${active ? "bg-white/10" : "bg-emerald-50 text-emerald-700"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className={`mt-1 text-sm leading-6 ${active ? "text-white/70" : "text-slate-600"}`}>
                        {service.intro}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={selectedService.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Selected pillar</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{selectedService.title}</h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{selectedService.intro}</p>
              </div>
              <div className="grid gap-4">
                {selectedService.offerings.map((offering, index) => (
                  <motion.div
                    key={offering.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 break-words shadow-sm"
                  >
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">{offering.title}</h4>
                    <p className="mb-4 text-sm leading-7 text-slate-600">{offering.description}</p>
                    <ul className="space-y-1">
                      {offering.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <SectionHeading
            eyebrow="Client sectors"
            title="Experience across regulated, public and growth environments"
            description="The sector section reassures visitors that Expedient understands both operational complexity and commercial pressure in a wide range of contexts."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index + 1}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <Building2 className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="text-base font-semibold">{sector}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="thinktank" className="scroll-mt-28 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Think tank
              </p>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Podcasts, articles and market insight
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/70 sm:text-lg">
                This section will become Expedient’s knowledge hub for market commentary, podcast recordings and published insight. As new content becomes available, registered members will be informed here.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {thinkTankContent.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index + 1}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Knowledge area</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
                <p className="mt-4 text-sm font-medium leading-6 text-white/85">{item.cta}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Register for updates</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Be notified as new insight is released</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  We will soon begin publishing podcast discussions, articles and market insight on the latest topics shaping procurement, commercial transformation and supply chain performance. When more insight comes through, you will be informed. If you have not yet registered for updates, please register here.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Next steps</div>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      A live registration form can be connected here when the website is published.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Member updates</div>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      Registered members will receive notifications as new content is added.
                    </p>
                  </div>
                </div>
                <form action={THINK_TANK_FORM_ACTION} method="POST" className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Register here
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="workwithus" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Work with us"
              title="Join the Expedient interim network"
              description="If you are interested in working with Expedient as an interim professional or specialist associate, you can register your interest here. We are interested in hearing from professionals who bring strong delivery experience, commercial judgement and practical transformation capability."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {workWithUsLevels.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  custom={index + 1}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">Register your interest</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Interim professional registration</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If you are interested in working with us, please register here. We welcome interest from interim professionals and specialist associates with strong delivery experience across procurement, commercial transformation and supply chain programmes.
            </p>

            <form action={WORK_WITH_US_FORM_ACTION} method="POST" className="mt-8 grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@organisation.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Current role / title</label>
                <input
                  type="text"
                  name="current_role"
                  placeholder="Interim Lead, Category Specialist, Programme Advisor..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Level</label>
                <select name="level" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none">
                  <option>Emerging Interim Professional</option>
                  <option>Experienced Interim Professional</option>
                  <option>Senior Interim Professional</option>
                  <option>Interim Professional</option>
                  <option>Specialist Associate</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Area of expertise</label>
                <textarea
                  rows="4"
                  name="expertise"
                  placeholder="Procurement, commercial transformation, category management, supplier performance, PMO, training, AI enablement..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Register as an Interim Associate
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <SectionHeading
              eyebrow="Associate model"
              title="Senior expertise, flexibly deployed"
              description="Associates include procurement leaders, category specialists, transformation advisors, governance experts and training facilitators - allowing capability to scale up or down based on delivery need."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Access to specialist capability when needed",
                "Flexible delivery model",
                "Stronger value than large-firm structures",
                "Senior attention throughout engagements",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] bg-gradient-to-br from-emerald-500 to-slate-900 p-[1px] shadow-2xl"
          >
            <div className="rounded-[2rem] bg-white p-8">
              <div className="grid gap-4">
                {[
                  ["Transformation programmes", "Structured teams for delivery-heavy change."],
                  ["Interim leadership gaps", "Experienced support to maintain continuity."],
                  ["Targeted interventions", "Specialist expertise for focused procurement challenges."],
                  ["Capability building", "Training and development aligned to transformation."],
                ].map(([title, text], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="font-semibold text-slate-900">{title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] bg-slate-950 px-8 py-10 text-white shadow-2xl sm:px-12 sm:py-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s discuss your procurement, supply chain or capability priorities.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Need help but not quite sure what the right approach is? Many clients start with a conversation. We are happy to discuss your situation and help advise the most practical way forward based on your organisation’s priorities.
            </p>

            <div className="mt-8 max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3 text-emerald-300">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">Get in touch</span>
                </div>
                <p className="mt-3 text-sm text-white/70">Send us an email and we will review your message and respond as soon as possible.</p>
                <a href="mailto:contact@goexpedient.com" className="mt-3 block text-lg font-semibold text-white">
                  contact@goexpedient.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

