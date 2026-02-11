"use client";

import React from "react"

import { useState } from "react";
import {
  Crown,
  Check,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Phone,
  Building2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  "Kalkulasi BEP tanpa batas",
  "Export laporan PDF & Excel",
  "Analisis multi-produk sekaligus",
  "Grafik perbandingan skenario",
  "Prioritas customer support",
  "Akses semua update fitur baru",
];

export default function RegistrasiPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format email tidak valid";
    if (!formData.phone.trim())
      newErrors.phone = "Nomor telepon wajib diisi";
    if (!formData.password) newErrors.password = "Password wajib diisi";
    else if (formData.password.length < 8)
      newErrors.password = "Password minimal 8 karakter";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Password tidak sama";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const getPasswordStrength = () => {
    const len = formData.password.length;
    if (len === 0) return { label: "", color: "" };
    if (len < 6) return { label: "Lemah", color: "text-destructive" };
    if (len < 8) return { label: "Cukup", color: "text-chart-4" };
    if (len < 12) return { label: "Kuat", color: "text-primary" };
    return { label: "Sangat Kuat", color: "text-primary" };
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg rounded-2xl border border-primary/30 bg-card p-10 text-center md:p-14">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold uppercase italic text-foreground md:text-4xl">
            Registrasi <span className="text-primary">Berhasil!</span>
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Selamat datang di CekCuan Pro,{" "}
            <strong className="text-foreground">{formData.fullName}</strong>!
            Cek email Anda di{" "}
            <strong className="text-foreground">{formData.email}</strong> untuk
            instruksi aktivasi akun Pro.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/fitur"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
            >
              Lihat Fitur Pro
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const strength = getPasswordStrength();

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

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        {/* Page header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pro Member
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold uppercase italic text-foreground md:text-6xl">
            Daftar <span className="text-primary">Pro Member</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Buka akses penuh ke semua fitur CekCuan. Satu kali bayar, akses
            selamanya tanpa batasan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Benefits Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold uppercase text-foreground">
                    CekCuan Pro
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Investasi untuk bisnis Anda
                  </p>
                </div>
              </div>

              <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">Rp</span>
                  <span className="font-display text-5xl font-bold text-foreground">
                    99.000
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sekali bayar, akses selamanya
                </p>
              </div>

              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Yang Anda Dapatkan
              </h3>
              <ul className="flex flex-col gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-border bg-secondary p-4">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      Garansi 30 hari.
                    </strong>{" "}
                    Jika tidak puas, uang kembali 100%. Tanpa pertanyaan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-6">
                <h2 className="font-display text-xl font-bold uppercase text-foreground">
                  Buat Akun Pro
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Isi data berikut untuk membuat akun CekCuan Pro Anda
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="reg-fullname"
                    className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    Nama Lengkap <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="reg-fullname"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className={`w-full rounded-lg border ${errors.fullName ? "border-destructive" : "border-border"} bg-secondary py-3 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="reg-email"
                    className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full rounded-lg border ${errors.email ? "border-destructive" : "border-border"} bg-secondary py-3 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                    placeholder="email@contoh.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone & Business */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="reg-phone"
                      className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                      No. Telepon{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="reg-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full rounded-lg border ${errors.phone ? "border-destructive" : "border-border"} bg-secondary py-3 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                      placeholder="08xxxxxxxxxx"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="reg-business"
                      className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                      Nama Bisnis
                    </label>
                    <input
                      id="reg-business"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        handleChange("businessName", e.target.value)
                      }
                      className="w-full rounded-lg border border-border bg-secondary py-3 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Opsional"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="reg-password"
                    className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    Password <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        handleChange("password", e.target.value)
                      }
                      className={`w-full rounded-lg border ${errors.password ? "border-destructive" : "border-border"} bg-secondary py-3 pl-4 pr-10 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                      placeholder="Minimal 8 karakter"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.password}
                    </p>
                  )}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              formData.password.length >= level * 3
                                ? formData.password.length >= 12
                                  ? "bg-primary"
                                  : formData.password.length >= 8
                                    ? "bg-chart-4"
                                    : "bg-destructive"
                                : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                      <p
                        className={`mt-1 text-xs font-medium ${strength.color}`}
                      >
                        {strength.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="reg-confirm-password"
                    className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    Konfirmasi Password{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="reg-confirm-password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    className={`w-full rounded-lg border ${errors.confirmPassword ? "border-destructive" : "border-border"} bg-secondary py-3 px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
                    placeholder="Ulangi password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    id="reg-terms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      handleChange("agreeTerms", e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                  />
                  <label
                    htmlFor="reg-terms"
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    Saya menyetujui{" "}
                    <span className="text-foreground underline cursor-pointer">
                      Syarat & Ketentuan
                    </span>{" "}
                    dan{" "}
                    <span className="text-foreground underline cursor-pointer">
                      Kebijakan Privasi
                    </span>{" "}
                    CekCuan.
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="-mt-3 text-xs text-destructive">
                    {errors.agreeTerms}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
                >
                  Daftar & Bayar Rp 99.000
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Sudah punya akun?{" "}
                  <span className="text-primary font-semibold cursor-pointer hover:underline">
                    Masuk di sini
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
