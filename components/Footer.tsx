import React from "react";
import Link from "next/link";
import { Download, History, BarChart2, ShieldCheck, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-12 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Agile Delivery Philosophy */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold block">
              Agile Delivery Philosophy
            </span>
            <blockquote className="font-headline text-lg lg:text-xl text-on-surface italic leading-relaxed">
              “True agility is not dogma or rigid ceremony. It is combining disciplined process governance with hands-on technical literacy—eliminating blockers, building psychological safety, and establishing a predictable cadence of user value.”
            </blockquote>
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-label text-xs font-bold text-on-surface uppercase tracking-wider">
                Balaji Palani
              </span>
              <span className="text-xs text-on-surface-variant font-body">
                Senior Scrum Master | Technical Agile Delivery Lead (CSM®, SAFe® 6 SSM)
              </span>
            </div>
          </div>

          {/* Column 2: Executive Curations */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold block mb-4">
              Dossier Navigation
            </span>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link
                  href="/"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Overview &amp; Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <History className="w-4 h-4 text-primary" />
                  <span>Work Experience &amp; Roles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <BarChart2 className="w-4 h-4 text-primary" />
                  <span>Delivery Case Studies</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Certifications &amp; Stack</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold block mb-4">
              Direct Contact
            </span>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <a
                  href="https://linkedin.com/in/balajipalani92"
                  target="_blank"
                  rel="noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>linkedin.com/in/balajipalani92</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:balajinia@gmail.com"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>balajinia@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917540015522"
                  className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91-7540015522</span>
                </a>
              </li>
              <li>
                <div className="text-on-surface-variant flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Mumbai, India (Open to Remote / Relocation)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-label text-on-surface-variant">
          <p>© 2026 Balaji Palani. Professional Agile Delivery Dossier.</p>
          <div className="flex items-center gap-6">
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Immediate Joiner (0 Days Notice)
            </span>
            <span className="text-primary font-semibold">CSM® • SAFe® 6 SSM Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
