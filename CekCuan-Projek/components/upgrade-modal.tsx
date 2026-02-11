"use client";

import { X, Check, Crown } from "lucide-react";
import Link from "next/link";

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

const proFeatures = [
  "Kalkulasi tak terbatas",
  "Export laporan ke PDF",
  "Analisis multi-produk",
  "Grafik perbandingan skenario",
  "Prioritas support",
  "Update fitur terbaru",
];

export function UpgradeModal({ open, onClose }: UpgradeModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Tutup modal"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/10">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          aria-label="Tutup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase italic text-foreground">
            Upgrade ke <span className="text-primary">Pro</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Limit gratis Anda sudah habis. Upgrade untuk akses tanpa batas.
          </p>
        </div>

        <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-sm text-muted-foreground">Rp</span>
            <span className="font-display text-4xl font-bold text-foreground">
              99.000
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Sekali bayar, akses selamanya
          </p>
        </div>

        <ul className="mb-6 flex flex-col gap-3">
          {proFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/registrasi"
          onClick={onClose}
          className="block w-full rounded-lg bg-primary py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
        >
          Daftar Pro Sekarang
        </Link>
      </div>
    </div>
  );
}
