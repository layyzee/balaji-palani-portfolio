"use client";

import React from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Code,
  Layers,
} from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-surface-container-lowest w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-surface-container flex items-center justify-between bg-surface-container-low shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-label text-[11px] uppercase tracking-widest text-primary font-bold">
                Official Curriculum Vitae
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-label font-bold">
                ✓ Immediate Joiner (0 Days Notice)
              </span>
            </div>
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">
              Balaji Palani
            </h2>
            <p className="text-xs text-on-surface-variant font-label">
              Senior Scrum Master | Technical Agile Delivery Lead
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              title="Print CV"
            >
              <Printer className="w-5 h-5" />
            </button>
            <a
              href="/balaji-palani-cv.pdf"
              download="Balaji_Palani_Senior_Scrum_Master_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container text-xs font-label uppercase tracking-wider font-semibold transition-colors"
              title="Download PDF Resume"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href="mailto:balajinia@gmail.com?subject=Job%20Opportunity%20-%20Balaji%20Palani"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow hover:opacity-95 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Contact Directly
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-body text-on-surface text-sm">
          {/* Contact Bar */}
          <div className="bg-surface-container-low p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs font-label">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:balajinia@gmail.com" className="hover:underline font-medium text-on-surface">
                balajinia@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium text-on-surface">+91-7540015522</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-on-surface-variant">Mumbai, India (Open to Remote / Hybrid / Relocation)</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-primary" />
              <a
                href="https://linkedin.com/in/balajipalani92"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-primary font-semibold"
              >
                linkedin.com/in/balajipalani92
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2 border-b border-surface-container pb-6">
            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
              Professional Summary
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Certified Senior Scrum Master (<strong>CSM®</strong>, <strong>SAFe® 6 SSM</strong>) with <strong>7+ years of IT experience</strong>, combining 4+ years of dedicated Agile delivery leadership with a strong technical foundation in software engineering (React.js, AWS, REST APIs). Proven track record of orchestrating cross-functional teams (up to 25+ engineers) across BFSI, FinTech, and Telecom domains. Expert in facilitating Scrum and SAFe ceremonies, driving Agile Release Trains (ART), resolving complex cross-team dependencies, and raising sprint delivery predictability from ~68% to 88%+. Skilled in building automated Jira/Power BI delivery dashboards, coaching teams on story slicing (INVEST), and bridging technical engineering squads with executive business stakeholders.
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-3 border-b border-surface-container pb-6">
            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
              <Award className="w-5 h-5 text-tertiary" />
              Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-on-surface">Certified ScrumMaster® (CSM)</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Scrum Alliance • Credential ID: 2022</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold font-label uppercase">
                  Active
                </span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-on-surface">SAFe® 6 Scrum Master (SSM)</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Scaled Agile Inc. • Credential ID: 2023</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[11px] font-bold font-label uppercase">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Core Competencies & Technical Skills */}
          <div className="space-y-4 border-b border-surface-container pb-6">
            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Core Competencies &amp; Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
              <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                <span className="font-bold text-on-surface block font-label uppercase tracking-wider text-[11px]">
                  Agile Frameworks &amp; Scaling
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  Scrum, Scaled Agile Framework (SAFe 6.0), Kanban, Scrum of Scrums (SoS), Lean Agile, Agile Release Train (ART) facilitation.
                </p>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                <span className="font-bold text-on-surface block font-label uppercase tracking-wider text-[11px]">
                  Ceremonies &amp; Delivery Management
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  Sprint Planning, Daily Stand-ups, Backlog Refinement, Sprint Retrospectives, Sprint Reviews, PI Planning, Release Planning, Capacity Forecasting.
                </p>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                <span className="font-bold text-on-surface block font-label uppercase tracking-wider text-[11px]">
                  Coaching &amp; Process Governance
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  Definition of Ready (DoR), Definition of Done (DoD), User Story Slicing (INVEST criteria), Relative Estimation, Blocker Resolution SLAs, Team Health Assessments.
                </p>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg space-y-1">
                <span className="font-bold text-on-surface block font-label uppercase tracking-wider text-[11px]">
                  Agile Tools &amp; Analytics
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  Atlassian Jira (Advanced JQL, Automation Rules, Workflow Schemes, Board Setup), Confluence, Azure DevOps (ADO), Power BI, Miro, Trello.
                </p>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg space-y-1 md:col-span-2">
                <span className="font-bold text-on-surface block font-label uppercase tracking-wider text-[11px]">
                  Technical Engineering Literacy
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  Software Engineering Lifecycle (SDLC), CI/CD flow, Git branching strategies, AWS Cloud (S3, Amplify, ECS), React.js, Web Architecture, Microservices &amp; REST APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6 border-b border-surface-container pb-6">
            <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Professional Experience
            </h3>

            {/* Role 1 */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    MITS Global Consulting — Senior Scrum Master
                  </h4>
                  <span className="text-xs font-label text-tertiary font-semibold">
                    Client: UK BFSI &amp; FinTech Programme • Mumbai, India
                  </span>
                </div>
                <span className="text-xs font-label text-on-surface-variant shrink-0 font-medium">
                  07/2024 – 03/2026
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li>
                  <strong>Multi-Team Delivery Leadership:</strong> Facilitated Agile delivery across 3 distributed cross-functional Scrum teams (25+ engineers, QA, and UI/UX designers) delivering critical digital banking and financial software releases.
                </li>
                <li>
                  <strong>Requirement Readiness &amp; Process Flow:</strong> Implemented automated Definition of Ready (DoR) and Acceptance Criteria validation in Jira, reducing sprint planning cycle overhead by 30% and eliminating mid-sprint requirement ambiguity.
                </li>
                <li>
                  <strong>Predictability &amp; Velocity Stabilization:</strong> Raised sprint goal delivery predictability from 68% to 88% over consecutive quarters by introducing structured retrospectives (4Ls, Sailboat) and enforcing accountable impediment tracking.
                </li>
                <li>
                  <strong>Agile Coaching &amp; Mentorship:</strong> Mentored 2 junior Scrum Masters on Agile maturity diagnostics, team health-check frameworks, and collaborative story point estimation techniques, driving sustainable team autonomy.
                </li>
                <li>
                  <strong>Backlog Refinement &amp; Story Slicing:</strong> Facilitated weekly estimation and user story slicing workshops with Product Owners, breaking complex epics into vertical, testable slices and improving team delivery flow.
                </li>
                <li>
                  <strong>Automated Metrics &amp; Executive Reporting:</strong> Designed and maintained automated Jira and Power BI delivery dashboards (Cycle Time, Cumulative Flow, Sprint Burndown), providing executive leadership and client directors with real-time risk visibility.
                </li>
                <li>
                  <strong>Dependency &amp; Impediment Resolution:</strong> Established a centralized dependency tracker across shared QA, DevOps, and vendor services, resolving cross-team blockers within a strict 48-hour SLA to guarantee milestone delivery.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-3 pt-4 border-t border-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    Incedo Inc — Scrum Master (SAFe Delivery)
                  </h4>
                  <span className="text-xs font-label text-tertiary font-semibold">
                    Client: Verizon (Telecom) • Mumbai, India
                  </span>
                </div>
                <span className="text-xs font-label text-on-surface-variant shrink-0 font-medium">
                  09/2023 – 03/2024
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li>
                  <strong>Enterprise SAFe Execution:</strong> Led end-to-end Agile execution for a 10-member cross-functional engineering team within Verizon’s enterprise SAFe framework, ensuring alignment with program-level milestones.
                </li>
                <li>
                  <strong>PI Planning &amp; ART Coordination:</strong> Orchestrated objectives, cross-team dependencies, and program risks across 2 Program Increment (PI) Planning events involving 5 Agile squads across the Agile Release Train (ART).
                </li>
                <li>
                  <strong>Scrum of Scrums (SoS):</strong> Represented the team in bi-weekly Scrum of Scrums, proactively identifying and escalating cross-train bottlenecks, shared infrastructure constraints, and cross-team interface dependencies.
                </li>
                <li>
                  <strong>Product Backlog Refinement:</strong> Partnered with Product Owners to lead bi-weekly backlog grooming, maintaining a prepared, estimated, and prioritized backlog of 20+ user stories ready 2 sprints ahead.
                </li>
                <li>
                  <strong>Ceremony Facilitation:</strong> Led high-impact Daily Standups, Sprint Planning, Sprint Reviews, and Retrospectives, driving measurable improvements in sprint focus and cross-team collaboration.
                </li>
                <li>
                  <strong>Stakeholder Visibility:</strong> Generated bi-weekly sprint health reports and delivery metrics for 10+ senior business and engineering stakeholders, enabling timely scope adjustments and risk remediation.
                </li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="space-y-3 pt-4 border-t border-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    CDP360 Technologies Pvt Ltd — Scrum Master
                  </h4>
                  <span className="text-xs font-label text-tertiary font-semibold">
                    Chennai / Remote, India
                  </span>
                </div>
                <span className="text-xs font-label text-on-surface-variant shrink-0 font-medium">
                  06/2022 – 07/2023
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li>
                  <strong>Cross-Functional Delivery:</strong> Led Agile delivery for a dedicated engineering team (6 Developers, 2 QA Engineers) across international E-commerce, EdTech, and FinTech digital products, successfully shipping 6 major client releases.
                </li>
                <li>
                  <strong>Workflow Optimization:</strong> Reconfigured Jira and Trello board workflows, transitions, and automated notification rules, eliminating communication friction and establishing clear stakeholder delivery visibility.
                </li>
                <li>
                  <strong>Scope Stability &amp; Story Quality:</strong> Collaborated with Product Owners to institute unambiguous Acceptance Criteria, slashing mid-sprint scope changes by 30% and reducing carried-forward spillover stories from 10 to under 3 per sprint.
                </li>
                <li>
                  <strong>Technical Barrier Elimination:</strong> Leveraged software engineering background to help developers diagnose and resolve deployment bottlenecks across AWS cloud services (S3, Amplify, ECS) and React Native mobile builds.
                </li>
                <li>
                  <strong>Continuous Retrospective Action:</strong> Facilitated targeted retrospectives focused on root-cause analysis, fostering psychological safety and establishing measurable team agreements.
                </li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="space-y-3 pt-4 border-t border-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-headline text-base font-bold text-on-surface">
                    Azure Soft Tech Solutions — Frontend Developer (Agile Engineer)
                  </h4>
                  <span className="text-xs font-label text-tertiary font-semibold">
                    Chennai, India
                  </span>
                </div>
                <span className="text-xs font-label text-on-surface-variant shrink-0 font-medium">
                  12/2018 – 05/2022
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <li>
                  <strong>Modern Web &amp; Mobile Engineering:</strong> Architected and developed 15+ scalable web and mobile applications using React.js, React Native, Redux, and modern JavaScript toolchains across customer-facing digital platforms.
                </li>
                <li>
                  <strong>Cloud Deployment:</strong> Automated deployments of 10+ production applications on AWS infrastructure (S3, Amplify, ECS), maintaining CI/CD pipeline stability and zero-downtime releases.
                </li>
                <li>
                  <strong>Agile Team Participation:</strong> Actively contributed to daily stand-ups, story estimation (Planning Poker), and sprint planning, bridging technical implementation feasibility with business acceptance criteria.
                </li>
                <li>
                  <strong>Code Quality &amp; Process Efficiency:</strong> Advocated for automated unit testing, pull request code reviews, and reusable component libraries, reducing production defects and accelerating feature delivery cycles.
                </li>
              </ul>
            </div>
          </div>

          {/* Domain Expertise & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-wider">
                Industry Domain Expertise
              </h4>
              <div className="text-xs space-y-2 text-on-surface-variant">
                <div>
                  <strong className="text-on-surface block">Banking, Financial Services &amp; FinTech (BFSI)</strong>
                  <span>Digital banking channels, payment workflows, financial transaction compliance, secure microservices.</span>
                </div>
                <div>
                  <strong className="text-on-surface block">Telecommunications &amp; Enterprise Platforms</strong>
                  <span>Multi-vendor systems, enterprise SAFe ART synchronization, high-availability customer platforms (Verizon).</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low space-y-2">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Education
              </h4>
              <div className="text-xs space-y-1 text-on-surface-variant">
                <strong className="text-on-surface block text-sm">
                  Bachelor of Engineering (B.E.) in Computer Science and Engineering
                </strong>
                <p>Anna University • Chennai, India</p>
                <p className="font-label text-on-surface-variant">2012 – 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
