'use client';

import Link from 'next/link';
import { ChevronLeft, Network, Sparkles, Users, Building2 } from 'lucide-react';

export default function UniConnectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="glass-surface mb-6 px-0">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Ana Sayfa</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyan-100 rounded-full">
              <Network className="text-cyan-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">UniConnect+</h1>
              <p className="text-gray-600">
                Öğrenciyi geliştiren, şirketi destekleyen, kampüsü birbirine
                bağlayan yenilikçi bir platform.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Özellikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-surface p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Öğrenci Gelişimi
            </h3>
            <p className="text-gray-600">
              Kariyer fırsatları, staj imkanları ve mentorluk programları ile
              öğrencilerin profesyonel gelişimini destekliyoruz.
            </p>
          </div>

          <div className="glass-surface p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="p-3 bg-green-50 rounded-lg w-fit mb-4">
              <Building2 className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Şirket Desteği
            </h3>
            <p className="text-gray-600">
              İş ortaklarımızla öğrencileri buluşturarak, staj ve iş imkanları
              sağlıyoruz.
            </p>
          </div>

          <div className="glass-surface p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
            <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
              <Sparkles className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Kampüs Bağlantısı
            </h3>
            <p className="text-gray-600">
              Öğrenciler, akademisyenler ve şirketleri bir araya getirerek
              güçlü bir ekosistem oluşturuyoruz.
            </p>
          </div>
        </div>

        {/* Bilgilendirme */}
        <div className="glass-surface p-8 rounded-xl border border-gray-100">
          <div className="text-center">
            <div className="inline-flex p-4 bg-cyan-50 rounded-full mb-4">
              <Network className="text-cyan-600" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Yakında Sizlerle!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UniConnect+ platformu şu anda geliştirme aşamasındadır. En kısa
              sürede tüm özellikleriyle hizmetinizde olacağız. Gelişmelerden
              haberdar olmak için duyurularımızı takip edin.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

