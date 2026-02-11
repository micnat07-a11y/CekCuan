"use client";

import { PieChart, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Kalkulator Bisnis Terpercaya
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold uppercase italic leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">Analisis</span>
          <br />
          <span className="text-primary text-balance">Cuan Masa Depan</span>
        </h1>

        <p className="mt-4 font-display text-lg font-semibold uppercase tracking-widest text-primary md:text-xl">
          Hitung Balik Modalmu dalam Detik
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Hitung Break Even Point bisnis Anda secara real-time. Ketahui kapan
          modal kembali dan mulai meraih profit.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Mulai Hitung
            <ArrowDown className="h-4 w-4" />
          </a>
          <Link
            href="/fitur"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Pelajari Fitur
          </Link>
        </div>

        {/* Floating visual element */}
        <div className="relative mt-16 flex justify-center">
          <div className="animate-float">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
              <PieChart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div className="animate-float-delayed absolute -right-4 top-0 md:right-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card shadow-xl">
              <span className="font-display text-lg font-bold text-primary">
                %
              </span>
            </div>
          </div>
          <div className="animate-float-delayed absolute -left-4 top-4 md:left-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card shadow-xl">
              <span className="font-display text-lg font-bold text-primary">
                Rp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
