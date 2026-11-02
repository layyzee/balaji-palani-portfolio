"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  Building,
  Layers,
  Wrench,
  Code,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

interface Role {
  id: string;
  category: string[];
  company: string;
  clientContext: string;
  tag: string;
  title: string;
  period: string;
  location: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  tags: string[];
  description: string;
  highlights: {
    title: string;
    description: string;
  }[];
  statBox: {
    label: string;
    value: string;
    sub: string;
  };
}

const roles: Role[] = [
  {
    id: "mits-global",
    category: ["enterprise", "squad", "bfsi"],
    company: "MITS Global Consulting",
    clientContext: "Client: UK BFSI & FinTech Programme",
    tag: "Recent Leadership",
    title: "Senior Scrum Master",
    period: "07/2024 – 03/2026",
    location: "Mumbai, India",
    accentColor: "bg-primary",
    badgeBg: "bg-primary-fixed",
    badgeText: "text-on-primary-fixed",
    metricLabel: "Predictability & Velocity Shift",
    metricValue: "68% → 88%+",
    metricSub: "Sprint goal achievement over consecutive quarters",
    tags: ["UK BFSI & FinTech", "3 Distributed Squads (25+ Eng)", "Automated Jira DoR", "Power BI Dashboards"],
    description:
      "Facilitated Agile delivery across 3 distributed cross-functional Scrum teams (25+ engineers, QA, and UI/UX designers) delivering critical digital banking channels and financial software releases under UK regulatory compliance.",
    highlights: [
      {
        title: "Multi-Team Delivery Leadership",
        description:
          "Orchestrated cross-functional collaboration between developers, automation testers, and product managers across 3 squads, ensuring cohesive release schedules.",
      },
      {
        title: "Requirement Readiness & Process Flow",
        description:
          "Implemented automated Definition of Ready (DoR) and Acceptance Criteria validation in Jira, reducing sprint planning cycle overhead by 30% and eliminating mid-sprint requirement ambiguity.",
      },
      {
        title: "Predictability & Velocity Stabilization",
        description:
          "Raised sprint goal delivery predictability from 68% to 88% over consecutive quarters by introducing structured retrospectives (4Ls, Sailboat) and enforcing accountable impediment tracking.",
      },
      {
        title: "Agile Coaching & Mentorship",
        description:
          "Mentored 2 junior Scrum Masters on Agile maturity diagnostics, team health-check frameworks, and collaborative story point estimation techniques, driving sustainable team autonomy.",
      },
      {
        title: "Backlog Refinement & Story Slicing",
        description:
          "Facilitated weekly estimation and user story slicing workshops with Product Owners, breaking complex epics into vertical, testable INVEST slices to accelerate team delivery flow.",
      },
      {
        title: "Dependency & Impediment SLA",
        description:
          "Established a centralized dependency tracker across shared QA, DevOps, and vendor services, resolving cross-team blockers within a strict 48-hour SLA to guarantee milestone delivery.",
      },
    ],
    statBox: {
      label: "Cycle Overhead Reduction",
      value: "-30%",
      sub: "Planning overhead eliminated via automated DoR",
    },
  },
  {
    id: "incedo-verizon",
    category: ["enterprise", "squad", "telecom"],
    company: "Incedo Inc",
    clientContext: "Client: Verizon (Telecom Enterprise)",
    tag: "Enterprise SAFe",
    title: "Scrum Master (SAFe Delivery)",
    period: "09/2023 – 03/2024",
    location: "Mumbai, India",
    accentColor: "bg-tertiary",
    badgeBg: "bg-secondary-container",
    badgeText: "text-on-secondary-container",
    metricLabel: "Backlog Readiness Buffer",
    metricValue: "2 Sprints Ahead",
    metricSub: "20+ INVEST-ready user stories continually prepared",
    tags: ["Verizon Telecom", "SAFe 6.0 ART", "PI Planning (5 Squads)", "Scrum of Scrums (SoS)"],
    description:
      "Led end-to-end Agile execution for a 10-member cross-functional engineering team within Verizon’s enterprise SAFe framework, coordinating milestones across high-availability telecommunications platforms.",
    highlights: [
      {
        title: "Enterprise SAFe Execution",
        description:
          "Aligned squad deliverables with enterprise program increments, facilitating full adherence to SAFe ceremonies, program milestones, and release gates.",
      },
      {
        title: "PI Planning & ART Coordination",
        description:
          "Orchestrated objectives, cross-team dependencies, and program risks across 2 Program Increment (PI) Planning events involving 5 Agile squads across the Agile Release Train (ART).",
      },
      {
        title: "Scrum of Scrums (SoS) Leadership",
        description:
          "Represented the squad in bi-weekly Scrum of Scrums, proactively identifying and escalating cross-train bottlenecks, shared infrastructure constraints, and cross-team interface dependencies.",
      },
      {
        title: "Product Backlog Refinement",
        description:
          "Partnered with Product Owners to lead bi-weekly backlog grooming, maintaining a prepared, estimated, and prioritized backlog of 20+ user stories ready 2 sprints ahead.",
      },
      {
        title: "Stakeholder Visibility & Health Reports",
        description:
          "Generated bi-weekly sprint health reports and delivery metrics for 10+ senior business and engineering stakeholders, enabling timely scope adjustments and risk remediation.",
      },
      {
        title: "High-Impact Ceremony Cadence",
        description:
          "Facilitated daily standups, sprint reviews, and retrospectives focused on measurable sprint focus, eliminating low-value meeting drag.",
      },
    ],
    statBox: {
      label: "ART Coordination Scale",
      value: "5 Squads",
      sub: "Synchronized across 2 PI Planning cycles",
    },
  },
  {
    id: "cdp360",
    category: ["squad", "technical"],
    company: "CDP360 Technologies Pvt Ltd",
    clientContext: "International E-Commerce, EdTech & FinTech",
    tag: "Squad Scrum Master",
    title: "Scrum Master",
    period: "06/2022 – 07/2023",
    location: "Chennai / Remote, India",
    accentColor: "bg-secondary",
    badgeBg: "bg-surface-container",
    badgeText: "text-on-surface-variant",
    metricLabel: "Carried Spillover Mitigation",
    metricValue: "10 → <3 Stories",
    metricSub: "Slashed carried-forward spillover per sprint",
    tags: ["E-Commerce & EdTech", "Jira & Trello Workflows", "AWS S3/Amplify/ECS", "6 Client Releases"],
    description:
      "Led Agile delivery for a dedicated engineering team (6 Developers, 2 QA Engineers) across international E-commerce, EdTech, and FinTech digital products, successfully shipping 6 major client releases.",
    highlights: [
      {
        title: "Cross-Functional Release Delivery",
        description:
          "Managed end-to-end sprint cycles for high-pace digital products, successfully coordinating and shipping 6 major client production releases.",
      },
      {
        title: "Workflow & Board Optimization",
        description:
          "Reconfigured Jira and Trello board workflows, transitions, and automated notification rules, eliminating communication friction and establishing clear stakeholder delivery visibility.",
      },
      {
        title: "Scope Stability & Story Quality",
        description:
          "Collaborated with Product Owners to institute unambiguous Acceptance Criteria, slashing mid-sprint scope changes by 30% and reducing carried-forward spillover stories from 10 to under 3 per sprint.",
      },
      {
        title: "Technical Barrier Elimination",
        description:
          "Leveraged software engineering background to help developers diagnose and resolve deployment bottlenecks across AWS cloud services (S3, Amplify, ECS) and React Native mobile builds.",
      },
      {
        title: "Continuous Retrospective Action",
        description:
          "Facilitated targeted retrospectives focused on root-cause analysis, fostering psychological safety and establishing measurable team agreements.",
      },
    ],
    statBox: {
      label: "Major Releases Shipped",
      value: "6 Releases",
      sub: "Successfully deployed to production",
    },
  },
  {
    id: "azure-soft",
    category: ["technical"],
    company: "Azure Soft Tech Solutions",
    clientContext: "Customer-Facing Digital Platforms & Cloud Apps",
    tag: "Engineering Foundation",
    title: "Frontend Developer (Agile Engineer)",
    period: "12/2018 – 05/2022",
    location: "Chennai, India",
    accentColor: "bg-outline-variant",
    badgeBg: "bg-surface-container",
    badgeText: "text-on-surface-variant",
    metricLabel: "Production Deployments",
    metricValue: "15+ Apps",
    metricSub: "Scalable web & mobile apps engineered in React.js",
    tags: ["React.js & React Native", "AWS (S3, Amplify, ECS)", "CI/CD Pipelines", "Code Reviews & SDLC"],
    description:
      "Core engineering role providing the technical bedrock for Balaji's agile delivery leadership. Architected and developed 15+ scalable web and mobile applications using React.js, React Native, Redux, and modern JavaScript toolchains.",
    highlights: [
      {
        title: "Modern Web & Mobile Engineering",
        description:
          "Developed high-performance UI components, customer dashboards, and API integrations using React.js, Redux, and modern JavaScript across multi-tier applications.",
      },
      {
        title: "Cloud Deployment & CI/CD",
        description:
          "Automated deployments of 10+ production applications on AWS infrastructure (S3, Amplify, ECS), maintaining CI/CD pipeline stability and zero-downtime releases.",
      },
      {
        title: "Agile Team Participation",
        description:
          "Actively contributed to daily stand-ups, story estimation (Planning Poker), and sprint planning, bridging technical implementation feasibility with business acceptance criteria.",
      },
      {
        title: "Code Quality & Process Efficiency",
        description:
          "Advocated for automated unit testing, pull request code reviews, and reusable component libraries, reducing production defects and accelerating feature delivery cycles.",
      },
    ],
    statBox: {
      label: "Technical Engineering",
      value: "3.5+ Yrs",
      sub: "Hands-on software development foundation",
    },
  },
];

export default function ExperiencePage() {
  const [filter, setFilter] = useState("all");

  const filteredRoles =
    filter === "all"
      ? roles
      : roles.filter((role) => role.category.includes(filter));

  return (
    <div className="w-full bg-surface pb-20">
      {/* Header Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-surface-container-low border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-label uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Professional Experience (7+ Years IT)
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
                Work Experience &amp; Delivery Leadership
              </h1>
              <p className="font-body text-base text-on-surface-variant leading-relaxed font-light">
                A chronology of dedicated Agile delivery across BFSI, FinTech, and Telecom enterprise systems, reinforced by hands-on software engineering literacy in React.js and AWS Cloud.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
              {[
                { id: "all", label: "All Roles (4)" },
                { id: "enterprise", label: "Enterprise SAFe & BFSI" },
                { id: "squad", label: "Squad Scrum Master" },
                { id: "technical", label: "Technical & Engineering" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-label uppercase tracking-wider font-semibold transition-all ${
                    filter === item.id
                      ? "bg-primary text-on-primary shadow-sm"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline List Section */}
      <section className="w-full bg-surface py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {filteredRoles.map((role) => (
            <article
              key={role.id}
              className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Accent Left Bar */}
              <div className={`absolute top-0 left-0 w-1.5 h-full ${role.accentColor}`}></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Metadata Column */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-1 rounded ${role.badgeBg} ${role.badgeText} text-xs font-label font-bold uppercase tracking-wider`}>
                        {role.tag}
                      </span>
                    </div>

                    <h2 className="font-headline text-2xl lg:text-3xl text-on-surface font-semibold pt-1">
                      {role.company}
                    </h2>
                    <p className="font-label text-sm text-primary font-bold tracking-tight">
                      {role.title}
                    </p>
                    <div className="text-xs font-label text-tertiary font-semibold">
                      {role.clientContext}
                    </div>
                    <div className="text-xs font-label text-on-surface-variant flex items-center gap-1.5 pt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{role.period} • {role.location}</span>
                    </div>
                  </div>

                  {/* Inline Metric Card */}
                  <div className="bg-surface-container-low p-4 rounded-lg space-y-2 border border-outline-variant/15">
                    <div className="flex items-center justify-between text-xs font-label">
                      <span className="text-on-surface font-semibold">{role.metricLabel}</span>
                      <span className="text-primary font-bold">{role.metricValue}</span>
                    </div>
                    <div className="text-[11px] font-label text-on-surface-variant">
                      {role.metricSub}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {role.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-[11px] font-label font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Accomplishments Column */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <p className="font-body text-base text-on-surface leading-relaxed">
                    {role.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {role.highlights.map((h, i) => (
                      <div key={i} className="bg-surface-container-low p-4 rounded-lg space-y-1.5 border border-outline-variant/10">
                        <div className="flex items-center gap-2 text-primary">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span className="font-label text-xs font-bold uppercase tracking-wider">
                            {h.title}
                          </span>
                        </div>
                        <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                          {h.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Stat Bar */}
                  <div className="bg-surface-container-high rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-semibold block">
                          {role.statBox.label}
                        </span>
                        <span className="text-xs text-on-surface font-body">
                          {role.statBox.sub}
                        </span>
                      </div>
                    </div>
                    <span className="font-headline text-2xl text-primary font-bold">
                      {role.statBox.value}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
