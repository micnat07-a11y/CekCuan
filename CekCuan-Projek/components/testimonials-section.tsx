"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Kartika",
    role: "Owner Coffee Shop",
    location: "Jakarta",
    avatar: "RK",
    rating: 5,
    text: "CekCuan bantu saya hitung kapan coffee shop saya balik modal. Ternyata dengan harga kopi Rp 25.000, saya cuma butuh jual 400 cup. Sekarang saya bisa atur strategi lebih tepat!",
  },
  {
    name: "Dimas Prasetyo",
    role: "Online Seller",
    location: "Bandung",
    avatar: "DP",
    rating: 5,
    text: "Sebagai seller online, saya sering bingung tentukan harga. CekCuan langsung kasih gambaran profit per unit dan target BEP. Grafiknya juga keren, jadi gampang dipahami!",
  },
  {
    name: "Siti Nurhaliza",
    role: "Pemilik UMKM Keripik",
    location: "Surabaya",
    avatar: "SN",
    rating: 5,
    text: "Awalnya cuma iseng coba, tapi setelah lihat hasilnya langsung beli Pro. Fitur multi-produk sangat membantu karena saya punya 5 varian keripik dengan HPP berbeda-beda.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimoni" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-5xl">
            Dipercaya <span className="text-primary">Pebisnis</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Apa kata mereka tentang CekCuan
          </p>
        </div>

        {/* Desktop: show all 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[activeIndex]} />
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Testimoni selanjutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} &middot; {testimonial.location}
            </p>
          </div>
        </div>
        <Quote className="h-5 w-5 shrink-0 text-primary/30" />
      </div>

      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={`star-${testimonial.name}-${i}`}
            className="h-4 w-4 fill-chart-4 text-chart-4"
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </div>
  );
}
