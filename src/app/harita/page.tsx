import {
  Compass,
  GraduationCap,
  Map,
  MapPin,
  Navigation,
  Route,
} from 'lucide-react';

const campusHighlights = [
  {
    title: 'Akademik Alanlar',
    description: 'Mühendislik, Mimarlık ve İktisadi Bilimler fakülteleri.',
    detail: 'Çevrim içi haritada blokların konumlarını etiketleyip kolay rota oluşturabileceksin.',
    icon: GraduationCap,
  },
  {
    title: 'Sosyal Noktalar',
    description: 'Kütüphane, yemekhaneler, öğrenci kulüp ofisleri.',
    detail: 'Yoğunluk bilgisi ve açık/kapalı durumları yakında eklenecek.',
    icon: MapPin,
  },
  {
    title: 'Ulaşım & Ring',
    description: 'Ring kalkış durakları, otoparklar ve servis noktaları.',
    detail: 'Gerçek zamanlı ring saatleri ve bildirimleri üzerinde çalışıyoruz.',
    icon: Route,
  },
];

const roadmapItems = [
  'Leaflet tabanlı etkileşimli kampüs haritası',
  'Arama ile bina veya laboratuvar bulma',
  'Favori konum kaydetme ve paylaşma',
  'Erişilebilirlik rotaları (rampa/asansör)',
];

export default function CampusMapPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-emerald-50 px-5 py-4 text-emerald-700">
            <Compass size={28} />
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-500">
                Kampüs Haritası
              </p>
              <h1 className="text-3xl font-bold text-gray-900">
                Fakülteler ve Önemli Noktalar
              </h1>
            </div>
          </div>
          <p className="text-base text-gray-600">
            Etkileşimli harita üzerinde güzergâh oluşturma, ring duraklarını
            görme ve konum paylaşma özellikleri üzerinde çalışıyoruz. Şimdilik
            öne çıkan alanları aşağıdan inceleyebilirsin.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white bg-white/90 p-6 shadow-lg shadow-emerald-50 backdrop-blur">
            <div className="flex items-center gap-3">
              <Navigation className="text-emerald-500" size={22} />
              <h2 className="text-lg font-semibold text-gray-900">
                Canlı Harita Hazırlanıyor
              </h2>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Leaflet tabanlı interaktif kampüs haritası, tüm fakülte blokları
              ve sosyal alanlarla birlikte yakında yayında olacak. Mobilde
              yönlendirme ve konum paylaşımı desteklenecek.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner">
            <div className="flex items-center gap-3">
              <Map className="text-emerald-600" size={22} />
              <h2 className="text-lg font-semibold text-gray-900">
                Yol Haritamız
              </h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {roadmapItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Öne Çıkan Bölgeler
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {campusHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-emerald-500" size={20} />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    {highlight.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

