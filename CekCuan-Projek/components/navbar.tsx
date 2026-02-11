"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  usageLimit: number;
}

export function Navbar({ usageLimit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
            CekCuan
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#simulator"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Simulator
          </a>
          <a
            href="#testimoni"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimoni
          </a>
          <Link
            href="/fitur"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="/registrasi"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Daftar Pro
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5">
            <div
              className={`h-2 w-2 rounded-full ${usageLimit > 0 ? "bg-primary" : "bg-destructive"}`}
            />
            <span className="text-xs font-semibold text-foreground">
              SISA LIMIT: {usageLimit}
            </span>
          </div>
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          <div className="flex flex-col gap-3">
            <a
              href="#simulator"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Simulator
            </a>
            <a
              href="#testimoni"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Testimoni
            </a>
            <Link
              href="/fitur"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Fitur
            </Link>
            <Link
              href="/registrasi"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Daftar Pro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
