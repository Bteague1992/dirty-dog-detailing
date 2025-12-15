"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { companyInfo } from "@/data/company-info";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/fleet-maintenance", label: "Fleet Maintenance" },
  // { href: "#gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dirtydog-silver/20 bg-dirtydog-black/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-dirtydog-offwhite hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
        >
          <Image
            src="/images/dirty-dog-logo-2.png"
            alt="Dirty Dog Detailing Logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <span className="hidden lg:block">Dirty Dog Detailing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dirtydog-offwhite hover:text-dirtydog-green transition-colors border-b-2 border-transparent hover:border-dirtydog-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="default" className="hidden lg:block ml-4">
            <Link
              target="_blank"
              href={companyInfo.bookingUrl}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-dirtydog-offwhite hover:text-dirtydog-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-dirtydog-silver/20 bg-dirtydog-black",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-base font-medium text-dirtydog-offwhite hover:text-dirtydog-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link
              target="_blank"
              href={companyInfo.bookingUrl}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
