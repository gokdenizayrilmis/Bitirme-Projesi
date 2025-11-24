
// Yardımcı fonksiyon: Tailwind renk kodunu hex'e çevir
function getColor(color: string, shade: number) {
  const colorMap: Record<string, Record<string, string>> = {
    red:    { "500": '#ef4444', "600": '#dc2626' },
    blue:   { "500": '#3b82f6', "600": '#2563eb' },
    orange: { "500": '#f59e42', "600": '#ea580c' },
    gray:   { "500": '#6b7280', "600": '#4b5563' },
  };
  return colorMap[color]?.[String(shade)] || '#6b7280';
}

import Link from 'next/link';
import { AlertTriangle, Phone, MapPin, ChevronLeft } from 'lucide-react';

export default function AcilDurumPage() {
  const acilTelefonlar = [
    { baslik: 'Ambulans', telefon: '112', renk: 'red' },
    { baslik: 'Polis', telefon: '155', renk: 'blue' },
    { baslik: 'İtfaiye', telefon: '110', renk: 'orange' },
    { baslik: 'Kampüs Güvenlik Numarası', telefon: '08502735', renk: 'gray' },
  ];

  const toplanmaAlanlari = [
    'Ana Kampüs - Merkez Meydan',
    'Mühendislik Fakültesi Bahçesi',
    'Spor Tesisleri Açık Alanı',
    'Rektörlük Binası Ön Bahçe',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-surface mb-6 px-0">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Ana Sayfa</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Acil Durum</h1>
              <p className="text-gray-600">Toplanma alanları ve acil iletişim</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-2">
        {/* Acil Telefonlar */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Phone size={24} className="text-red-600" />
            Acil Telefonlar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {acilTelefonlar.map((item) => (
              <a
                key={item.telefon}
                href={`tel:${item.telefon}`}
                className="glass-surface p-6 hover:shadow-lg transition-shadow border-l-4"
                style={{ borderLeftColor: getColor(item.renk, 500) }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.baslik}
                </h3>
                <p
                  className="text-2xl font-mono font-bold"
                  style={{ color: getColor(item.renk, 600) }}
                >
                  {item.telefon}
                </p>
              </a>
            ))}
          </div>
        // ...existing code...
        </section>

        {/* Toplanma Alanları */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin size={24} className="text-green-600" />
            Acil Toplanma Alanları
          </h2>
          <div className="glass-surface p-6">
            <p className="text-gray-700 mb-4">
              Deprem veya yangın gibi acil durumlarda aşağıdaki noktalara toplanın:
            </p>
            <ul className="space-y-3">
              {toplanmaAlanlari.map((alan, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-800">{alan}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Uyarı Notu */}
        <div className="mt-8 bg-yellow-200/40 backdrop-blur-sm border-l-4 border-yellow-400 p-6 rounded-r-xl text-white">
          <p className="text-yellow-900 font-medium">
            ⚠️ <strong>Önemli:</strong> Acil durumlarda sakin kalın, paniklemeden en yakın toplanma alanına gidin. 
            Asansör kullanmayın, merdivenleri kullanın.
          </p>
        </div>
      </main>
    </div>
  );
}
