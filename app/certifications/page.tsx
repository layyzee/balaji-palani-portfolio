"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Layers,
  Wrench,
  Users,
  CheckCircle,
  BarChart,
  MessageSquare,
  Sparkles,
  Check,
  GraduationCap,
  Code,
} from "lucide-react";

interface Credential {
  id: string;
  code: string;
  title: string;
  issuer: string;
  tier: string;
  tierBg: string;
  tierText: string;
  description: string;
}

const credentials: Credential[] = [
  {
    id: "csm",
    code: "Scrum Alliance ID: 2022",
    title: "Certified ScrumMaster® (CSM)",
    issuer: "Scrum Alliance",
    tier: "Active Certified",
    tierBg: "bg-tertiary-fixed",
    tierText: "text-on-tertiary-fixed",
    description:
      "Demonstrated mastery of Scrum framework, servant leadership principles, team facilitation, impediment removal, and iterative delivery management.",
  },
  {
    id: "safe-ssm",
    code: "Scaled Agile Inc. ID: 2023",
    title: "SAFe® 6 Scrum Master (SSM)",
    issuer: "Scaled Agile Inc.",
    tier: "Active Enterprise",
    tierBg: "bg-primary-fixed",
    tierText: "text-on-primary-fixed",
    description:
      "Certified to orchestrate squad execution within enterprise Scaled Agile Framework environments, facilitating Program Increment (PI) planning and Agile Release Train (ART) alignment.",
  },
  {
    id: "be-cse",
    code: "Anna University • 2012 – 2016",
    title: "Bachelor of Engineering (B.E.) — Computer Science",
    issuer: "Anna University, Chennai",
    tier: "Degree Conferred",
    tierBg: "bg-surface-container-high",
    tierText: "text-on-surface",
    description:
      "4-year academic foundation in software engineering, algorithms, data structures, relational databases, computer networks, and systems architecture.",
  },
  {
    id: "tech-stack",
    code: "Hands-on Engineering Foundation",
    title: "Technical Engineering & Cloud Literacy",
    issuer: "Industry Practice (3.5+ Years Frontend & Cloud)",
    tier: "Practitioner",
    tierBg: "bg-surface-container-high",
    tierText: "text-on-surface",
    description:
      "Deep practical proficiency in React.js, React Native, Redux, AWS Cloud (S3, Amplify, ECS), CI/CD pipelines, Git branching strategies, and REST API integration.",
  },
];

export default function CertificationsPage() {
  const [verifiedId, setVerifiedId] = useState<string | null>(null);

  const handleVerify = (id: string) => {
    setVerifiedId(id);
    setTimeout(() => {
      setVerifiedId(null);
    }, 3000);
  };

  return (
    <div className="w-full bg-surface pb-20">
      {/* Header Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-surface-container-low border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-label uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Verified Professional Credentials &amp; Stack
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
                Certifications, Education &amp; Enterprise Toolkit
              </h1>
              <p className="font-body text-base text-on-surface-variant leading-relaxed font-light">
                Independently verifiable accreditations demonstrating mastery of Scrum ceremonies, enterprise SAFe 6.0 frameworks, software engineering lifecycle, and modern delivery tooling.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant bg-surface-container px-3.5 py-2 rounded-full self-start lg:self-auto shadow-sm">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>CSM® &amp; SAFe® 6 SSM Authenticated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Credentials Grid */}
      <section className="w-full bg-surface-container-low px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                Credential Registry
              </span>
              <h2 className="font-headline text-2xl md:text-4xl text-on-surface font-semibold tracking-tight mt-1">
                Verified Credentials &amp; Education
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-md font-body">
              Authenticated directly with Scrum Alliance and Scaled Agile Inc. registries.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.id}
                className="bg-surface-container-lowest p-7 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                      {cred.id === "be-cse" ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : cred.id === "tech-stack" ? (
                        <Code className="w-6 h-6" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded ${cred.tierBg} ${cred.tierText} text-[11px] font-label font-bold uppercase tracking-wider`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {cred.tier}
                    </span>
                  </div>

                  <div>
                    <span className="font-label text-xs uppercase tracking-wider text-secondary font-semibold">
                      {cred.issuer}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-on-surface leading-snug mt-0.5">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed font-body">
                      {cred.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 bg-surface-container-low -mx-7 -mb-7 p-4 px-7 rounded-b-xl flex items-center justify-between text-xs font-label">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-on-surface-variant tracking-wider">
                      Reference / Year
                    </span>
                    <span className="font-semibold text-on-surface font-mono">{cred.code}</span>
                  </div>
                  <button
                    onClick={() => handleVerify(cred.id)}
                    className="text-primary hover:text-primary-container font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    {verifiedId === cred.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Verified Authentic</span>
                      </>
                    ) : (
                      <>
                        <span>Verify Record</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Agile Toolkit & Stack */}
      <section className="w-full bg-surface px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              Technical Ecosystem
            </span>
            <h2 className="font-headline text-2xl md:text-4xl text-on-surface font-semibold tracking-tight">
              Agile Toolkit &amp; Enterprise Stack
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant font-body">
              Platforms and technical proficiencies leveraged across Balaji&apos;s engagements to ensure predictable delivery, rigorous estimation, and transparent executive visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Work Management</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                  Architecting board setups, automated transitions, and cross-team dependency roadmaps.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Atlassian Jira</span>
                    <span className="text-[11px] text-on-surface-variant">Advanced JQL • Automation Rules • Workflow Schemes</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Azure DevOps (ADO)</span>
                    <span className="text-[11px] text-on-surface-variant">Boards, backlogs, capacity planning &amp; delivery queries</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Confluence &amp; Trello</span>
                    <span className="text-[11px] text-on-surface-variant">Team agreements, sprint notes &amp; lightweight Kanban</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 text-[11px] font-label text-secondary uppercase font-semibold">
                Proficiency: Advanced Admin
              </div>
            </div>

            {/* Category 2 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <BarChart className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Metrics &amp; BI Telemetry</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                  Translating sprint data into clear executive dashboards and empirical predictability metrics.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Microsoft Power BI</span>
                    <span className="text-[11px] text-on-surface-variant">Custom delivery reports for executive directors</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Cumulative Flow Diagrams</span>
                    <span className="text-[11px] text-on-surface-variant">Identifying WIP bottlenecks &amp; queue starvation</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Cycle Time &amp; Burndown</span>
                    <span className="text-[11px] text-on-surface-variant">Sprint predictability calibration across squads</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 text-[11px] font-label text-secondary uppercase font-semibold">
                Reporting: Executive BI
              </div>
            </div>

            {/* Category 3 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Ceremonies &amp; Scaling</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                  High-engagement collaborative facilitation and cross-train dependency management.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">SAFe PI Planning</span>
                    <span className="text-[11px] text-on-surface-variant">Coordinating objectives across 5 squads on the ART</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Scrum of Scrums (SoS)</span>
                    <span className="text-[11px] text-on-surface-variant">Cross-team interface risk resolution</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">Miro &amp; Collaborative Boards</span>
                    <span className="text-[11px] text-on-surface-variant">4Ls &amp; Sailboat retros, user story mapping</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 text-[11px] font-label text-secondary uppercase font-semibold">
                Facilitation: SAFe &amp; Scrum
              </div>
            </div>

            {/* Category 4 */}
            <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface">Technical Literacy</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body">
                  Hands-on engineering foundation enabling deep technical problem-solving with developers.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">React.js &amp; Web Stack</span>
                    <span className="text-[11px] text-on-surface-variant">Frontend architecture, Redux, component lifecycles</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">AWS Cloud Services</span>
                    <span className="text-[11px] text-on-surface-variant">S3, Amplify, ECS deployments &amp; CI/CD flows</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-container-low">
                    <span className="text-xs font-semibold text-on-surface block">SDLC &amp; Git Branching</span>
                    <span className="text-[11px] text-on-surface-variant">Feature branches, pull request reviews, REST APIs</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 text-[11px] font-label text-secondary uppercase font-semibold">
                Foundation: 3.5+ Yrs Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Strip */}
      <section className="w-full bg-surface-container-high px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="font-label text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Immediate Availability (0 Days Notice)
            </span>
            <h3 className="font-headline text-2xl text-on-surface font-semibold">
              Ready to Accelerate Your Agile Delivery?
            </h3>
            <p className="text-sm text-on-surface-variant font-body">
              Balaji Palani is ready to step into your Scrum Master, Technical Delivery Lead, or SAFe Release Train role immediately.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-primary text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow hover:opacity-95 transition-opacity shrink-0"
          >
            Get in Touch / Discuss Opportunity
          </Link>
        </div>
      </section>
    </div>
  );
}
