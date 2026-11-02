"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Calendar,
  Lock,
  ArrowRight,
  TrendingDown,
  Activity,
  Heart,
  Bug,
  CheckCircle2,
  Sparkles,
  Quote,
  ShieldCheck,
  Award,
  Zap,
  Code,
  Layers,
  MapPin,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import CvModal from "@/components/CvModal";

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Editorial Header & Value Narrative */}
      <section className="relative px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
            {/* Left Column */}
            <div className="w-full lg:w-7/12 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-label font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Immediate Joiner (0 Days Notice)
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-label uppercase tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  Mumbai, India (Open to Remote / Hybrid / Relocation)
                </span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-on-surface font-normal leading-[1.12] tracking-tight">
                Orchestrating High-Performing Teams,{" "}
                <span className="italic font-normal text-primary">Raising Predictability</span> &amp; Bridging Tech with Business.
              </h1>

              <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl font-light">
                Certified Senior Scrum Master (<strong>CSM®</strong>, <strong>SAFe® 6 SSM</strong>) with <strong>7+ years of IT experience</strong>, combining 4+ years of dedicated Agile delivery leadership with a strong technical foundation in software engineering (React.js, AWS, REST APIs). Proven track record orchestrating cross-functional squads (up to 25+ engineers) across BFSI, FinTech, and Telecom domains.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCvOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  View Full CV (Dossier)
                </button>
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container text-xs font-label uppercase tracking-wider font-semibold transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Get in Touch
                </button>
              </div>

              {/* Quick Contact Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-label text-on-surface-variant">
                <a href="mailto:balajinia@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  balajinia@gmail.com
                </a>
                <a href="tel:+917540015522" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +91-7540015522
                </a>
                <a
                  href="https://linkedin.com/in/balajipalani92"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors text-primary font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  linkedin.com/in/balajipalani92
                </a>
              </div>
            </div>

            {/* Right Verified Accreditations Card */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div className="bg-surface-container-low rounded-xl p-8 shadow-sm space-y-6 relative overflow-hidden border border-outline-variant/20">
                <div className="absolute -right-8 -top-8 w-36 h-36 bg-tertiary-container/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-medium">
                    Industry Credentials
                  </span>
                  <span className="font-label text-xs uppercase px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold tracking-wider">
                    Verified Scrum &amp; SAFe
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
                    <div className="text-xs font-label text-on-surface-variant">Scrum Alliance</div>
                    <div className="font-headline font-semibold text-base text-on-surface mt-0.5">CSM® Certified</div>
                    <div className="text-[11px] text-tertiary mt-1 font-label">Credential ID: 2022</div>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
                    <div className="text-xs font-label text-on-surface-variant">Scaled Agile Inc.</div>
                    <div className="font-headline font-semibold text-base text-on-surface mt-0.5">SAFe® 6 SSM</div>
                    <div className="text-[11px] text-primary mt-1 font-label">Credential ID: 2023</div>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
                    <div className="text-xs font-label text-on-surface-variant">Engineering Base</div>
                    <div className="font-headline font-semibold text-base text-on-surface mt-0.5">React.js &amp; AWS</div>
                    <div className="text-[11px] text-secondary mt-1 font-label">REST APIs &amp; CI/CD</div>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
                    <div className="text-xs font-label text-on-surface-variant">Academics</div>
                    <div className="font-headline font-semibold text-base text-on-surface mt-0.5">B.E. Computer Science</div>
                    <div className="text-[11px] text-tertiary mt-1 font-label">Anna University (2016)</div>
                  </div>
                </div>

                <p className="text-xs font-label text-on-surface-variant/90 italic leading-relaxed pt-2">
                  “Empowering technical squads through empirical feedback loops, user story slicing (INVEST), and automated Jira/Power BI telemetry.”
                </p>
              </div>
            </div>
          </div>

          {/* High-Impact Summary Bar */}
          <div className="mt-14 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-outline-variant/15">
            <div className="flex flex-col space-y-1">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Team Scale</span>
              <span className="font-headline text-3xl sm:text-4xl text-on-surface font-semibold">25+</span>
              <span className="text-xs text-secondary font-body">Cross-functional engineers &amp; QA led</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Predictability Lift</span>
              <span className="font-headline text-3xl sm:text-4xl text-primary font-semibold">68% → 88%+</span>
              <span className="text-xs text-secondary font-body">Sprint goal achievement across quarters</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Planning Efficiency</span>
              <span className="font-headline text-3xl sm:text-4xl text-tertiary font-semibold">-30%</span>
              <span className="text-xs text-secondary font-body">Planning overhead via automated DoR</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Total IT Experience</span>
              <span className="font-headline text-3xl sm:text-4xl text-on-surface font-semibold">7+ Yrs</span>
              <span className="text-xs text-secondary font-body">Agile Delivery + Software Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Narrative Section */}
      <section className="px-6 lg:px-12 py-16 bg-surface-container-low border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Visual Profile Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md bg-surface-container-lowest p-8 border border-outline-variant/20 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center font-headline text-2xl font-bold shadow-sm">
                    BP
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface">Balaji Palani</h3>
                    <p className="font-label text-xs text-primary font-semibold mt-0.5">
                      Senior Scrum Master | Technical Agile Delivery Lead
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-label text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                      0 Days Notice (Available Immediately)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-body text-on-surface-variant border-t border-surface-container pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label uppercase tracking-wider">Primary Domains:</span>
                    <strong className="text-on-surface">BFSI, FinTech, Telecom (Verizon)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-label uppercase tracking-wider">Certifications:</span>
                    <strong className="text-primary font-semibold">CSM® (2022) • SAFe® 6 SSM (2023)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-label uppercase tracking-wider">Degree:</span>
                    <strong className="text-on-surface">B.E. Computer Science (Anna Univ)</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-label uppercase tracking-wider">Location:</span>
                    <span className="text-on-surface">Mumbai (Open to Remote / Relocation)</span>
                  </div>
                </div>
              </div>

              {/* Delivery Philosophy Excerpt */}
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/20">
                <span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4 text-tertiary" />
                  Agile Leadership Creed
                </span>
                <p className="font-headline italic text-on-surface text-base leading-relaxed">
                  “Bridging engineering realities with executive business commitments requires more than facilitation; it demands technical fluency, unambiguous acceptance criteria, and actionable retrospectives.”
                </p>
              </div>
            </div>

            {/* Narrative & Core Competencies Ledger */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-surface-container-lowest p-8 lg:p-10 rounded-xl shadow-sm border border-outline-variant/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                    Professional Background
                  </span>
                  <span className="font-label text-xs text-primary font-bold">7+ Years Total IT</span>
                </div>

                <h2 className="font-headline text-2xl sm:text-3xl text-on-surface leading-tight">
                  Agile Delivery Leadership Backed by Solid Software Engineering
                </h2>

                <div className="space-y-4 font-body text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                  <p>
                    Balaji Palani combines <strong>4+ years of dedicated Agile delivery leadership</strong> with a foundational <strong>3+ years as a Frontend &amp; Cloud Engineer</strong> (React.js, AWS S3/Amplify/ECS, REST APIs). This technical literacy enables him to communicate seamlessly with architects, QA leads, and developers—diagnosing technical bottlenecks rather than treating sprint impediments as abstract tickets.
                  </p>
                  <p>
                    Throughout his tenure across <strong>MITS Global Consulting</strong> (UK BFSI &amp; FinTech), <strong>Incedo Inc</strong> (Verizon Telecom Enterprise SAFe), and <strong>CDP360 Technologies</strong>, Balaji has scaled squads from 6 to 25+ engineers, instituted automated Jira Definition of Ready (DoR) gates, and maintained transparent Power BI delivery telemetry.
                  </p>
                </div>
              </div>

              {/* Core Competencies Matrix */}
              <div className="space-y-4 pt-4 border-t border-surface-container">
                <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold block">
                  Core Competencies &amp; Toolkit
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Scrum Framework (CSM®)",
                    "Scaled Agile Framework (SAFe 6 SSM)",
                    "Agile Release Train (ART) Coordination",
                    "Scrum of Scrums (SoS)",
                    "Atlassian Jira (JQL & Automations)",
                    "Power BI Delivery Dashboards",
                    "User Story Slicing (INVEST)",
                    "Definition of Ready (DoR) & Done (DoD)",
                    "PI Planning & Capacity Forecasting",
                    "Blocker Resolution (48-hr SLA)",
                    "React.js & Web Architecture",
                    "AWS Cloud (S3, Amplify, ECS)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-xs font-label font-medium hover:bg-primary hover:text-on-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-label text-secondary flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-tertiary" />
                  CSM® &amp; SAFe® 6 SSM Authenticated
                </span>
                <Link
                  href="/experience"
                  className="text-xs font-label text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Explore Work Experience &amp; Roles
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Metrics & Telemetry Dashboard */}
      <section className="px-6 lg:px-12 py-16 bg-surface">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                Quantified Track Record
              </span>
              <h2 className="font-headline text-3xl lg:text-4xl text-on-surface mt-1">
                Measured Agile Outcomes Across Engagements
              </h2>
            </div>
            <p className="font-label text-xs text-on-surface-variant max-w-sm">
              Real-world improvements delivered across UK BFSI, FinTech, and Telecom enterprise environments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant font-medium">Sprint Predictability</span>
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label text-xs font-bold">+20% Shift</span>
              </div>
              <div>
                <div className="text-3xl font-headline font-semibold text-on-surface">68% → 88%+</div>
                <div className="text-xs text-secondary mt-0.5">MITS Global Consulting • UK BFSI Programme</div>
              </div>
              <div className="w-full pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-label text-on-surface-variant">
                    <span>Baseline (Pre-Coaching)</span>
                    <span>68%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-label text-primary font-semibold pt-1">
                    <span>Matured Squads</span>
                    <span>88%+</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant font-medium">Planning Overhead</span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs font-bold">-30% Time</span>
              </div>
              <div>
                <div className="text-3xl font-headline font-semibold text-on-surface">Automated DoR</div>
                <div className="text-xs text-secondary mt-0.5">Eliminated mid-sprint requirement ambiguity</div>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant">
                Enforced INVEST criteria and automated Jira validation rules before stories entered sprint planning.
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant font-medium">Carried Spillover</span>
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label text-xs font-bold">-70% Stories</span>
              </div>
              <div>
                <div className="text-3xl font-headline font-semibold text-on-surface">10 → &lt;3</div>
                <div className="text-xs text-secondary mt-0.5">Spillover reduction per sprint at CDP360</div>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant">
                Slashed mid-sprint scope creep by 30% via clear acceptance criteria and relative story sizing.
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase text-on-surface-variant font-medium">Blocker SLA</span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs font-bold">&lt; 48 Hours</span>
              </div>
              <div>
                <div className="text-3xl font-headline font-semibold text-on-surface">Centralized</div>
                <div className="text-xs text-secondary mt-0.5">Dependency tracking across QA, DevOps &amp; Vendors</div>
              </div>
              <div className="p-3 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant">
                Scrum of Scrums (SoS) representation to preempt infrastructure and interface bottlenecks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Career Snapshot Section */}
      <section className="px-6 lg:px-12 py-16 bg-surface-container-low border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                Career Chronology
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-on-surface mt-1">
                Recent Agile Leadership Roles
              </h2>
            </div>
            <Link
              href="/experience"
              className="text-xs font-label uppercase tracking-wider text-primary font-bold hover:underline flex items-center gap-1"
            >
              View All 4 Professional Roles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Role 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-xs font-label font-bold uppercase">
                  Current Post
                </span>
                <span className="text-xs font-label text-on-surface-variant">07/2024 – 03/2026</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                MITS Global Consulting
              </h3>
              <p className="font-label text-sm text-primary font-semibold">
                Senior Scrum Master • Client: UK BFSI &amp; FinTech Programme
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Facilitated Agile delivery across 3 distributed Scrum teams (25+ engineers, QA, UI/UX) delivering digital banking releases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Raised sprint delivery predictability from 68% to 88% via structured retrospectives (4Ls, Sailboat) and blocker tracking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Designed automated Jira and Power BI delivery dashboards for real-time risk visibility.</span>
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-xs font-label font-bold uppercase">
                  Telecom Enterprise SAFe
                </span>
                <span className="text-xs font-label text-on-surface-variant">09/2023 – 03/2024</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Incedo Inc
              </h3>
              <p className="font-label text-sm text-tertiary font-semibold">
                Scrum Master (SAFe Delivery) • Client: Verizon (Telecom)
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                  <span>Led Agile execution for a 10-member cross-functional engineering team within Verizon’s enterprise SAFe framework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                  <span>Orchestrated objectives, dependencies, and risks across 2 PI Planning events involving 5 Agile squads on the ART.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                  <span>Maintained a prepared, estimated, and prioritized backlog of 20+ user stories ready 2 sprints ahead.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Availability Callout */}
      <section className="px-6 lg:px-12 py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-high p-8 sm:p-12 lg:p-16 rounded-xl shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 border border-outline-variant/20">
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-label font-bold uppercase tracking-wider">
                Immediate Joiner (0 Days Notice)
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
                Seeking a dedicated <span className="italic font-normal text-primary">Senior Scrum Master</span> or Technical Agile Delivery Lead?
              </h2>
              <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Available immediately for full-time or contract engagements. Open to Remote, Hybrid, or on-site roles in Mumbai / Bangalore / Pune or relocation opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Get in Touch Directly
              </button>
              <a
                href="mailto:balajinia@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface text-xs font-label uppercase tracking-wider font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                Email: balajinia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
