import { ArrowRight, Sparkles, Check } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Kalkulasi BEP tanpa batas",
  "Export laporan PDF & Excel",
  "Analisis multi-produk",
];

export function CtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-10 md:p-16">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Pro Member
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-5xl text-balance">
              Siap Analisis <span className="text-primary">Cuan</span> Lebih
              Dalam?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Daftar sekarang dan buka akses penuh ke semua fitur CekCuan. Satu
              kali bayar, akses selamanya tanpa batasan.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/registrasi"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
              >
                Daftar Pro Sekarang
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/fitur"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                Lihat Semua Fitur
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Mulai dari{" "}
              <span className="font-semibold text-foreground">Rp 99.000</span>{" "}
              &middot; Garansi 30 hari uang kembali
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
