import {
  BarChart3,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  PieChart,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time Calculation",
    description:
      "Hasil perhitungan langsung muncul tanpa perlu reload halaman.",
  },
  {
    icon: BarChart3,
    title: "Visualisasi Grafik",
    description:
      "Grafik interaktif yang berubah warna saat rugi (merah) dan untung (hijau).",
  },
  {
    icon: TrendingUp,
    title: "Analisis Profit",
    description:
      "Ketahui profit per unit dan target unit untuk mencapai balik modal.",
  },
  {
    icon: Shield,
    title: "Data Aman",
    description:
      "Semua kalkulasi dilakukan di browser Anda. Data tidak dikirim ke server.",
  },
  {
    icon: Clock,
    title: "Akses Cepat",
    description:
      "Tidak perlu install. Langsung hitung dari browser kapan saja, di mana saja.",
  },
  {
    icon: PieChart,
    title: "Laporan Lengkap",
    description:
      "Pro member mendapat akses ke laporan analisis lengkap dan export PDF.",
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-5xl">
            Kenapa <span className="text-primary">CekCuan</span>?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fitur yang dirancang untuk membantu keputusan bisnis Anda
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
