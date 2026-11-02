"use client";

import React from "react";
import Link from "next/link";
import {
  Timer,
  Rocket,
  Smile,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Layers,
  Shield,
  Activity,
  Award,
  BarChart2,
  Code,
} from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="w-full bg-surface pb-20">
      {/* Header Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-surface-container-low border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-label uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Empirical Case Studies &amp; Agile Telemetry
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
                Agile Transformations &amp; Delivery Case Studies
              </h1>
              <p className="font-body text-base text-on-surface-variant leading-relaxed font-light">
                Documenting tangible, telemetry-backed outcomes engineered across UK BFSI, FinTech, and Telecom enterprise environments—combining process governance with software engineering fluency.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant bg-surface-container px-3.5 py-2 rounded-full self-start lg:self-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Jira &amp; Power BI Validated
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Bento Grid */}
      <section className="w-full py-16 px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold block mb-1">
              Cross-Engagement Benchmarks
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-on-surface font-semibold">
              Before vs. After Agile Interventions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    Sprint Predictability
                  </span>
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-headline text-xl text-on-surface font-semibold">
                  Sprint Goal Delivery Rate
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Steadily lifted across 3 distributed squads in the UK BFSI &amp; FinTech programme through structured ceremonies.
                </p>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-label">
                    <span className="text-on-surface-variant">Baseline (Initial Ingestion)</span>
                    <span className="font-semibold text-secondary">68% Completion</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-label">
                    <span className="text-primary font-semibold">Matured Squads (Consecutive Quarters)</span>
                    <span className="font-bold text-primary">88%+ (+20% Shift)</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                <span>Implemented targeted retrospectives (4Ls, Sailboat) and collaborative story estimation.</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    Requirement Governance
                  </span>
                  <div className="p-2 rounded bg-tertiary/10 text-tertiary">
                    <Timer className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-headline text-xl text-on-surface font-semibold">
                  Sprint Planning Overhead
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Automated Definition of Ready (DoR) and Acceptance Criteria validation in Jira Software.
                </p>
              </div>

              <div className="space-y-3 py-2 text-xs font-label">
                <div className="p-3 bg-surface-container-low rounded-lg flex justify-between items-center">
                  <span className="text-on-surface-variant">Planning Cycle Overhead</span>
                  <span className="font-bold text-primary text-sm">-30% Reduction</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg flex justify-between items-center">
                  <span className="text-on-surface-variant">Mid-Sprint Ambiguity</span>
                  <span className="font-bold text-tertiary text-sm">Eliminated</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg flex justify-between items-center">
                  <span className="text-on-surface-variant">Backlog Buffer Horizon</span>
                  <span className="font-bold text-on-surface text-sm">2 Sprints Ahead</span>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Enforced strict INVEST criteria before user stories qualified for sprint estimation.</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    Dependency Control
                  </span>
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-headline text-xl text-on-surface font-semibold">
                  Blocker Resolution SLA
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Centralized dependency tracker across QA, DevOps, and vendor services with strict SLA gates.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-headline text-4xl font-bold text-on-surface">&lt; 48</span>
                    <span className="font-label text-sm text-on-surface-variant"> Hours</span>
                  </div>
                  <span className="text-xs font-label uppercase px-2 py-1 bg-surface-container-high text-primary font-bold rounded">
                    Guaranteed SLA
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-primary h-full" style={{ width: "94%" }}></div>
                </div>
                <div className="flex justify-between text-[11px] font-label text-on-surface-variant">
                  <span>Cross-Team Interfaces</span>
                  <span className="text-primary font-bold">Zero Blocked Milestones</span>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low rounded-lg text-xs font-body text-on-surface-variant flex items-start gap-2.5">
                <Award className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                <span>Preempted cross-train bottlenecks via bi-weekly Scrum of Scrums (SoS) representation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: UK BFSI Digital Banking Transformation */}
      <section className="w-full bg-surface-container-low py-20 px-6 lg:px-12 border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 font-label text-xs uppercase tracking-widest text-primary font-bold">
                <span className="px-2.5 py-0.5 rounded bg-primary text-on-primary">Case Study 01</span>
                <span>Flagship BFSI Transformation</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight">
                Stabilizing Predictability Across 3 Distributed Banking Squads
              </h2>
              <p className="font-label text-sm text-on-surface-variant uppercase tracking-wider">
                MITS Global Consulting • Client: UK BFSI &amp; FinTech Programme • 25+ Engineers, QA &amp; Designers
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-on-surface text-xs font-label font-medium shadow-sm">
                20-Month Tenure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface text-on-surface text-xs font-label font-medium shadow-sm">
                Jira &amp; Power BI Telemetry
              </span>
            </div>
          </div>

          {/* Triple Cards: Challenge, Intervention, Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Challenge */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-error">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface font-semibold">The Challenge</h3>
                <ul className="space-y-3 text-sm font-body text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-2"></span>
                    <span><strong>Low Delivery Predictability:</strong> Sprint goal fulfillment hovered around 68% due to constant scope modifications mid-sprint.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-2"></span>
                    <span><strong>Lengthy Planning Sessions:</strong> Sprint planning dragged out for hours because user stories lacked clear Acceptance Criteria.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-error shrink-0 mt-2"></span>
                    <span><strong>Cross-Team Dependency Blockers:</strong> Features stalled waiting on shared QA automation and DevOps release pipelines.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">
                Diagnosis: Requirement Ambiguity
              </div>
            </div>

            {/* The Intervention */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface font-semibold">The Intervention</h3>
                <ul className="space-y-3 text-sm font-body text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span><strong>Automated Definition of Ready (DoR):</strong> Integrated Jira validation rules ensuring stories complied with INVEST criteria before estimation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span><strong>Weekly Story Slicing Workshops:</strong> Partnered with POs to deconstruct multi-week monolith epics into vertical 1-to-2 day testable slices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                    <span><strong>Centralized Blocker Governance:</strong> Built an automated dependency tracker with a strict 48-hour SLA across shared services.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 text-xs font-label uppercase tracking-widest text-primary font-semibold">
                Execution: Rigor + Automation
              </div>
            </div>

            {/* The Results */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface font-semibold">The Results</h3>
                <div className="space-y-3 pt-1">
                  <div className="p-3 rounded-lg bg-surface-container-low space-y-0.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Predictability</span>
                      <span className="font-headline text-xl font-bold text-primary">68% → 88%+</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">Sustained predictability across 3 squads delivering digital banking channels.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low space-y-0.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Planning Time</span>
                      <span className="font-headline text-xl font-bold text-tertiary">−30% Overhead</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">Engineers spent less time arguing scope and more time coding testable increments.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low space-y-0.5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Scrum Mentorship</span>
                      <span className="font-headline text-xl font-bold text-on-surface">2 Mentored</span>
                    </div>
                    <p className="font-body text-xs text-on-surface-variant">Junior Scrum Masters upskilled on team health checks and autonomy.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 text-xs font-label uppercase tracking-widest text-tertiary font-semibold">
                Verified Outcome
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Verizon Telecom Enterprise SAFe ART */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12 border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-label text-xs uppercase tracking-widest text-tertiary font-bold">
              <span className="px-2.5 py-0.5 rounded bg-tertiary text-on-tertiary">Case Study 02</span>
              <span>Enterprise Telecom SAFe 6.0</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl text-on-surface tracking-tight">
              Synchronizing 5 Agile Squads Across the Verizon Telecom Release Train
            </h2>
            <p className="font-label text-sm text-on-surface-variant uppercase tracking-wider">
              Incedo Inc • Client: Verizon (Telecom Enterprise) • Mumbai, India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-4">
              <h3 className="font-headline text-xl font-semibold text-on-surface">PI Planning &amp; ART Coordination</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Led end-to-end Agile execution for a 10-member cross-functional engineering team within Verizon’s enterprise SAFe framework. Coordinated objectives, cross-team dependencies, and program risks across 2 Program Increment (PI) Planning events involving 5 Agile squads on the Agile Release Train.
              </p>
              <div className="p-4 bg-surface-container-low rounded-lg space-y-2">
                <span className="font-label text-xs uppercase tracking-wider text-on-surface font-semibold block">Key Governance Action:</span>
                <p className="text-xs text-on-surface-variant font-body">
                  Represented the squad in bi-weekly Scrum of Scrums (SoS), preempting cross-train bottlenecks, shared infrastructure constraints, and cross-team interface dependencies.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-4">
              <h3 className="font-headline text-xl font-semibold text-on-surface">Backlog Readiness &amp; Stakeholder Reporting</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Partnered with Product Owners to lead bi-weekly backlog grooming, maintaining a prepared, estimated, and prioritized backlog of 20+ user stories ready 2 sprints ahead.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-container-low rounded-lg text-center">
                  <div className="font-headline text-3xl text-primary font-bold">2 Sprints</div>
                  <span className="text-xs font-label text-on-surface-variant">Prepared Backlog Buffer</span>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg text-center">
                  <div className="font-headline text-3xl text-tertiary font-bold">10+</div>
                  <span className="text-xs font-label text-on-surface-variant">Senior Stakeholders Kept Informed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
