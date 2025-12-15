"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap, User, Monitor } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "https://arel.edu.tr/", label: "İstanbul Arel Üniversitesi", icon: GraduationCap, external: true },
    { href: "https://arelim.arel.edu.tr/", label: "Arelim", icon: User, external: true },
    { href: "https://areluzem.arel.edu.tr/", label: "Arel Uzem", icon: Monitor, external: true },
  ];

  return (
    <nav className="glass-header sticky top-0 z-50 w-full border-b border-white/10 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2.5 font-bold tracking-tight transition-all"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">🎓</span>
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-xl text-transparent">
              Kampüs Asistanı
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/30 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon size={18} />
                    <span className="font-medium">{link.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
