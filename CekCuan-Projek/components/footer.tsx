import { TrendingUp, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                CekCuan
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Kalkulator BEP interaktif untuk membantu keputusan bisnis Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Menu
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#simulator"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Simulator BEP
              </a>
              <Link
                href="/fitur"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Fitur
              </Link>
              <a
                href="#testimoni"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Testimoni
              </a>
              <Link
                href="/registrasi"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Daftar Pro
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:support@cekcuan.id"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                support@cekcuan.id
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                +62 812-3456-7890
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CekCuan Team. Semua hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
