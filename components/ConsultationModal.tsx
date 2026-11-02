"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, User, Mail, Building, Briefcase, Phone } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Senior Scrum Master (Full-Time / Contract)",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

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

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">
              Message Transmitted
            </h3>
            <p className="font-body text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-on-surface">{formData.name}</strong>. Your inquiry has been routed to Balaji Palani (<strong className="text-primary">balajinia@gmail.com</strong>). Since Balaji is an <span className="text-emerald-700 font-semibold">Immediate Joiner (0 Days Notice)</span>, expect a prompt reply.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow hover:opacity-95"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-label font-bold uppercase tracking-wider">
                Immediate Joiner (0 Days Notice)
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-on-surface">
                Get in Touch with Balaji
              </h2>
              <p className="font-body text-xs sm:text-sm text-on-surface-variant">
                Available for Senior Scrum Master, Technical Agile Delivery Lead, or Agile Coach opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1">
                    Your Name / Recruiter
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. BFSI / FinTech / Telecom"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1">
                    Role / Requirement Type
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-on-surface-variant absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
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
                <label className="block text-xs font-label uppercase tracking-wider text-on-surface-variant font-medium mb-1">
                  Message / Role Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline the role location (Remote/Hybrid/Mumbai/Bangalore/Relocation), domain, and interview process..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-label uppercase tracking-wider text-on-surface-variant hover:text-on-surface"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label uppercase tracking-wider font-semibold shadow hover:opacity-95 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Transmitting..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
