import { Leaf, MapPin, Recycle, Trash2 } from 'lucide-react';

const recyclePoints = [
  {
    title: 'Mühendislik Fakültesi Girişi',
    description: 'Kâğıt + plastik çift bölmeli kutu',
    status: 'Yoğun saatler: 10.00 - 14.00',
  },
  {
    title: 'Kütüphane Önü',
    description: 'Cam + metal + elektronik atık',
    status: 'Hafta içi 08.00 - 22.00 erişilebilir',
  },
  {
    title: 'Yurtlar Bölgesi',
    description: 'Organik atık kompost ünitesi',
    status: 'Pilot uygulama, öğrenci kulüpleriyle yönetiliyor',
  },
];

export default function RecyclingPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-emerald-50 px-5 py-4 text-emerald-600">
            <Recycle size={28} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Geri Dönüşüm
              </p>
              <h1 className="text-3xl font-bold text-gray-900">
                Kampüs Geri Dönüşüm Haritası
              </h1>
            </div>
          </div>
          <p className="text-base text-gray-600">
            Geri dönüşüm kutularının konumlarını ve kategori bilgilerini tek
            ekranda toplayan yeni harita üzerinde çalışıyoruz. Aşağıda aktif
            noktaların kısa bir özetini bulabilirsin.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-50">
          <div className="flex items-center gap-3">
            <MapPin className="text-emerald-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">
              Öne Çıkan Noktalar
            </h2>
          </div>
          <div className="space-y-4">
            {recyclePoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {point.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {point.description}
                    </p>
                  </div>
                  <Trash2 className="text-emerald-400" size={18} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {point.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6">
          <div className="flex items-center gap-3">
            <Leaf className="text-emerald-500" size={22} />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Yakında Haritada
              </h3>
              <p className="text-sm text-gray-600">
                Konum bazlı filtreleme ve bildirimlerin üzerinde çalışıyoruz.
              </p>
            </div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Recycling map’i Leaflet ile görüntüleme</li>
            <li>Kutu doluluk oranı bildirimleri</li>
            <li>Kulüp etkinlikleri ve sürdürülebilirlik projeleri</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

