import {
  BarChart3,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  PieChart,
  FileText,
  Layers,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Crown,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Real-time Calculation",
    description:
      "Hasil perhitungan langsung muncul tanpa perlu reload. Ubah angka, lihat hasil instan.",
  },
  {
    icon: BarChart3,
    title: "Visualisasi Grafik Interaktif",
    description:
      "Grafik AreaChart yang menampilkan garis pendapatan vs total biaya dengan penanda titik BEP.",
  },
  {
    icon: TrendingUp,
    title: "Analisis Profit per Unit",
    description:
      "Ketahui margin profit setiap unit yang terjual dan target unit untuk balik modal.",
  },
  {
    icon: Shield,
    title: "Data 100% Privat",
    description:
      "Semua kalkulasi dilakukan di browser Anda. Data bisnis tidak dikirim ke server manapun.",
  },
  {
    icon: Clock,
    title: "Akses Kapan Saja",
    description:
      "Tidak perlu install aplikasi. Langsung hitung dari browser di desktop maupun mobile.",
  },
  {
    icon: PieChart,
    title: "Laporan Analisis Lengkap",
    description:
      "Pro member mendapat akses laporan analisis mendalam dengan breakdown biaya detail.",
  },
  {
    icon: FileText,
    title: "Export PDF & Excel",
    description:
      "Download hasil analisis dalam format PDF atau Excel untuk presentasi dan dokumentasi.",
  },
  {
    icon: Layers,
    title: "Multi-Produk Sekaligus",
    description:
      "Analisis BEP untuk beberapa produk sekaligus dan bandingkan performanya.",
  },
];

const comparison = [
  { feature: "Kalkulasi BEP", free: true, pro: true },
  { feature: "Grafik interaktif", free: true, pro: true },
  { feature: "Batas penggunaan", free: "3x / hari", pro: "Tanpa batas" },
  { feature: "Analisis multi-produk", free: false, pro: true },
  { feature: "Export PDF & Excel", free: false, pro: true },
  { feature: "Perbandingan skenario", free: false, pro: true },
  { feature: "Laporan lengkap", free: false, pro: true },
  { feature: "Prioritas support", free: false, pro: true },
  { feature: "Update fitur baru", free: false, pro: true },
];

export default function FiturPage() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
              CekCuan
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold uppercase italic text-foreground md:text-6xl text-balance">
            Fitur <span className="text-primary">CekCuan</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Semua yang Anda butuhkan untuk menganalisis kelayakan bisnis dan
            menghitung titik balik modal dengan presisi.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-base font-bold uppercase text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-5xl">
              Gratis vs <span className="text-primary">Pro</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Bandingkan apa yang Anda dapatkan
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-border bg-secondary px-6 py-4">
              <div className="text-sm font-semibold text-foreground">
                Fitur
              </div>
              <div className="text-center text-sm font-semibold text-muted-foreground">
                Gratis
              </div>
              <div className="flex items-center justify-center gap-2">
                <Crown className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Pro</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparison.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-3.5 ${
                  index < comparison.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm text-foreground">{row.feature}</div>
                <div className="flex items-center justify-center">
                  {typeof row.free === "boolean" ? (
                    row.free ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {row.free}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {typeof row.pro === "boolean" ? (
                    row.pro ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )
                  ) : (
                    <span className="text-xs font-semibold text-primary">
                      {row.pro}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-10 text-center md:p-14">
            <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-4xl text-balance">
              Mulai Analisis <span className="text-primary">Tanpa Batas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
              Upgrade ke CekCuan Pro sekarang dan buka semua fitur premium.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/registrasi"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
              >
                Daftar Pro - Rp 99.000
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                Coba Gratis Dulu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
