import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { navLinks, services, site } from "@/content/site";
import Logo from "@/components/Logo";

const socialIcons: Record<string, typeof Linkedin> = {
  Linkedin,
  Github,
  Twitter,
  Instagram,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="divider-glow absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              {site.tagline}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 bg-slate-100 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-400/40 hover:text-blue-600"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <nav aria-label="Footer company links">
            <h3 className="font-display text-sm font-semibold tracking-wider text-slate-900 uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services links">
            <h3 className="font-display text-sm font-semibold tracking-wider text-slate-900 uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-slate-900 uppercase">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <a href={"mailto:" + site.email} className="transition-colors hover:text-blue-700">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span>{site.address}</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-blue-400/30 bg-blue-400/[0.06] px-4 py-2.5 text-sm font-semibold text-blue-600 transition-all hover:border-blue-400/60 hover:bg-blue-400/10"
            >
              Send us a message
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            Copyright © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Engineered in Kigali. Built to run anywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
