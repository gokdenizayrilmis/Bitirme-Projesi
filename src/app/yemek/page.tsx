import { Apple, ChefHat, Clock, Coffee, UtensilsCrossed } from 'lucide-react';

const diningOptions = [
  {
    title: 'Ana Yemekhane',
    description: 'Günlük menü, çorba ve ana yemek seçenekleri.',
    note: 'Hafta içi 11.30 - 14.30 / 17.30 - 19.30',
  },
  {
    title: 'Kafeterya & Atıştırmalık',
    description: 'Sandviç, tost, tatlı ve kahve çeşitleri.',
    note: 'Hafta içi 08.00 - 21.00',
  },
  {
    title: 'Vejetaryen Köşesi',
    description: 'Bitkisel protein tabakları, salata barı ve günlük smoothie.',
    note: 'Salı & Perşembe günleri özel menü',
  },
];

const upcomingFeatures = [
  'Günlük menüleri canlı olarak görüntüleme',
  'Alerjen ve kalori bilgisi',
  'Yoğunluk durumu ve sıra tahmini',
  'Özel diyet filtreleri (vegan, glutensiz)',
];

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-orange-50 px-5 py-4 text-orange-600">
            <UtensilsCrossed size={28} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                Yemek & Kafeterya
              </p>
              <h1 className="text-3xl font-bold text-gray-900">Yemek Alanları</h1>
            </div>
          </div>
          <p className="text-base text-gray-600">
            Kampüs içindeki yemek alanlarının menüleri ve çalışma saatleri kısa
            süre içinde burada olacak. Şimdilik ana alanlar ve planlanan
            özellikleri inceleyebilirsin.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-white bg-white/90 p-6 shadow-lg shadow-orange-50">
          <div className="flex items-center gap-3">
            <ChefHat className="text-orange-500" size={22} />
            <h2 className="text-lg font-semibold text-gray-900">
              Öne Çıkan Alanlar
            </h2>
          </div>
          <div className="space-y-4">
            {diningOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {option.title}
                    </p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <Clock className="text-orange-400" size={18} />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  {option.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50 to-white p-6">
          <div className="flex items-center gap-3">
            <Coffee className="text-orange-500" size={20} />
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Yakında Geliyor
              </h3>
              <p className="text-sm text-gray-600">
                Menü deneyimini dijitalleştirmek için çalışıyoruz.
              </p>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {upcomingFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Apple className="mt-0.5 text-orange-400" size={14} />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

