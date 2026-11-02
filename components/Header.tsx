"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import CvModal from "./CvModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Overview & Bio" },
    { href: "/experience", label: "Experience & Roles" },
    { href: "/case-studies", label: "Delivery Case Studies" },
    { href: "/certifications", label: "Certifications & Stack" },
    { href: "/contact", label: "Contact & Hire" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          {/* Logo / Personal Brand */}
          <Link href="/" className="flex items-center gap-3.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform font-headline font-bold text-lg">
              BP
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-base tracking-tight text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Balaji Palani
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-label font-bold tracking-tight">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Immediate Joiner
                </span>
              </div>
              <span className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                CSM® • SAFe® 6 SSM • 7+ Yrs IT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm rounded-lg transition-all font-body ${
                    active
                      ? "bg-surface-container-high text-on-surface font-semibold shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons & Avatar */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCvOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container text-xs font-label uppercase tracking-wider font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              View CV
            </button>

            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary hover:opacity-95 text-xs font-label uppercase tracking-wider font-semibold transition-opacity shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Get in Touch
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-on-surface hover:bg-surface-container rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-surface-container bg-surface px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="mb-3 px-2 flex items-center justify-between">
              <span className="text-xs font-label text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Immediate Joiner (0 Days Notice)
              </span>
            </div>
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-body ${
                      active
                        ? "bg-surface-container-high text-on-surface font-semibold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCvOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-primary text-xs font-label uppercase tracking-wider font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  View Full CV Dossier
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
