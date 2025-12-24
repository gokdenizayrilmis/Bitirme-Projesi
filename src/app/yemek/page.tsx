'use client';

import { Apple, ChefHat, Clock, Coffee, UtensilsCrossed, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const diningOptions = [
  {
    title: 'UNI Gastro',
    description: 'Ana yemekler, burgerler ve atıştırmalıklar.',
    note: 'Hafta içi 11.30 - 14.30 / 17.30 - 19.30',
    menuImage: '/menus/unigastro.png',
  },
  {
    title: 'Tea Shop',
    description: 'Kek, pasta, sandviç çeşitleri ve sıcak içecekler.',
    note: 'Hafta içi 08.00 - 21.00',
    menuImage: '/menus/teashop.png',
  },
  {
    title: 'CoffeFactory',
    description: 'Özel kahve çeşitleri ve atıştırmalıklar.',
    note: 'Hafta içi 08.00 - 20.00',
    menuImage: '/menus/coffefactory.png',
  },
];

const upcomingFeatures = [
  'Günlük menüleri canlı olarak görüntüleme',
  'Alerjen ve kalori bilgisi',
  'Yoğunluk durumu ve sıra tahmini',
  'Özel diyet filtreleri (vegan, glutensiz)',
];

export default function DiningPage() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
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
                  <div className="flex-1">
                    <p className="text-base font-semibold text-gray-900">
                      {option.title}
                    </p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      {option.note}
                    </p>
                  </div>
                  <Clock className="text-orange-400" size={18} />
                </div>
                <button
                  onClick={() => setSelectedMenu(option.menuImage)}
                  className="mt-4 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg active:scale-[0.98]"
                >
                  Menüyü Gör
                </button>
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

      {/* Modal */}
      {selectedMenu && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedMenu(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-[95vw] overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMenu(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white hover:shadow-xl active:scale-95"
              aria-label="Kapat"
            >
              <X size={24} className="text-gray-700" />
            </button>
            <Image
              src={selectedMenu}
              alt="Menü"
              width={1920}
              height={1080}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}

