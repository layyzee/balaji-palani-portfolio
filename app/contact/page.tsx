"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Building,
  User,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Linkedin,
  Zap,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "Senior Scrum Master (Full-Time)",
    workMode: "Open to Remote / Hybrid / Relocation",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-surface pb-24">
      {/* Header */}
      <section className="px-6 lg:px-12 py-12 lg:py-16 bg-surface-container-low border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-label uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Immediate Joiner (0 Days Notice)
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
            Connect Directly with Balaji Palani
          </h1>
          <p className="font-body text-base text-on-surface-variant max-w-2xl leading-relaxed font-light">
            Available immediately for Senior Scrum Master, Technical Agile Delivery Lead, or Enterprise SAFe Delivery roles. Open to Remote, Hybrid, Mumbai, Bangalore, Pune, or global relocation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/15 space-y-6">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold block">
                Direct Contact Coordinates
              </span>
              <h2 className="font-headline text-2xl text-on-surface font-semibold">
                Balaji Palani
              </h2>
              <div className="space-y-4 text-sm font-body text-on-surface-variant leading-relaxed">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-medium">Email Address</strong>
                    <a href="mailto:balajinia@gmail.com" className="text-primary hover:underline font-semibold">
                      balajinia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-medium">Direct Phone / WhatsApp</strong>
                    <a href="tel:+917540015522" className="text-on-surface hover:text-primary font-semibold">
                      +91-7540015522
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-medium">LinkedIn Profile</strong>
                    <a
                      href="https://linkedin.com/in/balajipalani92"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      linkedin.com/in/balajipalani92
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-on-surface block font-medium">Current Location &amp; Mobility</strong>
                    <span>Mumbai, India (Open to Remote / Hybrid / Relocation across tier-1 tech hubs).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-800 block font-medium">Notice Period</strong>
                    <span className="text-emerald-700 font-semibold">Immediate Joiner (0 Days Notice)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container flex items-center justify-between text-xs font-label">
                <span className="text-secondary">Typical Response Time</span>
                <span className="font-bold text-on-surface">Within 2 to 4 Hours</span>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-3 border border-outline-variant/15">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-label text-xs font-bold uppercase tracking-wider">
                  Verified Industry Credentials
                </span>
              </div>
              <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                Certified ScrumMaster® (CSM — Scrum Alliance, 2022) and SAFe® 6 Scrum Master (SSM — Scaled Agile Inc., 2023) with Bachelor of Engineering in Computer Science (Anna University).
              </p>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 sm:p-10 rounded-xl shadow-sm border border-outline-variant/15">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">
                    Message Delivered
                  </h3>
                  <p className="font-body text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-on-surface">{formData.name}</strong>. Balaji will review your inquiry and connect via <strong className="text-primary">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-6">
                    <Link
                      href="/"
                      className="px-6 py-3 rounded-lg bg-primary text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow"
                    >
                      Return to Portfolio
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                      Direct Message
                    </span>
                    <h2 className="font-headline text-2xl font-bold text-on-surface">
                      Send Role or Opportunity Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                        Your Name / Recruiter
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Talent Acquisition"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
                        <input
                          required
                          type="email"
                          placeholder="recruiter@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. BFSI / FinTech / Telecom"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                        Position Type
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3 pointer-events-none" />
                        <select
                          value={formData.roleType}
                          onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                        >
                          <option>Senior Scrum Master (Full-Time)</option>
                          <option>Technical Agile Delivery Lead</option>
                          <option>SAFe 6 Scrum Master / Release Train</option>
                          <option>Agile Delivery Consultant (Contract)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                      Work Model &amp; Location
                    </label>
                    <select
                      value={formData.workMode}
                      onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                    >
                      <option>Remote (Global / India)</option>
                      <option>Hybrid (Mumbai)</option>
                      <option>Hybrid (Bangalore / Pune / Hyderabad)</option>
                      <option>On-Site / Open to Relocation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1.5">
                      Role Details / Interview Process
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details on squad scale, project scope, domain, and next steps..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-label text-emerald-700 font-semibold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-600" />
                      Immediate Joiner (0 Days Notice)
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow hover:opacity-95 transition-opacity disabled:opacity-50"
                    >
                      {loading ? "Transmitting..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
