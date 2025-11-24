import Link from "next/link";
import { Heart, Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Hakkımızda", href: "#" },
    { label: "İletişim", href: "#" },
    { label: "Gizlilik", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@kampusasistani.com", label: "E-posta" },
  ];

  return (
    <footer className="glass-footer mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Üst Bölüm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="font-bold text-lg bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Kampüs Asistanı
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Kampüs hayatınız için gereken her şey, tek bir yerde. Öğrencilerin kampüs deneyimini iyileştirmek için tasarlandı.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <MapPin size={14} />
              <span>Arel Üniversitesi, İstanbul</span>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Bağlantılar</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="text-white/50 text-xs mt-4">
              Geri bildirimleriniz bizim için değerlidir.
            </p>
          </div>
        </div>

        {/* Alt Bölüm - Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p className="flex items-center gap-1">
              © {currentYear} Kampüs Asistanı · Bitirme Projesi · Tüm hakları saklıdır
            </p>
            <p className="flex items-center gap-1">
              Yapıldı <Heart size={12} className="text-red-400 fill-red-400 animate-pulse" /> ile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
