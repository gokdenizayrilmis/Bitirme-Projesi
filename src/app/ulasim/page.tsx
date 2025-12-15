import { Bus, ChevronRight, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type BusLine = {
  code: string;
  route: string;
  description: string;
  timing: string;
  url: string;
};

const busLines: BusLine[] = [
  {
    code: '76TM',
    route: 'Tepekent - Avcılar Metrobüs',
    description: 'Kampüsten Avcılar Metrobüs hattına doğrudan erişim sağlar.',
    timing: 'Yoğun saatlerde ortalama 15-20 dk aralıklarla çalışır.',
    url: 'https://iett.istanbul/RouteStation/RouteDetail?hkod=76TM&routename=TEPEKENT%20-%20AVCILAR%20METROB%C3%9CS',
  },
  {
    code: '401T',
    route: 'Tepekent - Arel Üni. - Haramidere',
    description: 'Haramidere sanayi hattına ve metrobüs bağlantısına ulaşım sunar.',
    timing: 'Hafta içi sabah-akşam yoğun, gün içinde seyreltilmiş seferler.',
    url: 'https://iett.istanbul/RouteDetail?hkod=401T&routename=AREL%20%C3%9CN%C4%B0VERS%C4%B0TES%C4%B0%20-TEPEKENT%20-%20HARAM%C4%B0DERE',
  },
  {
    code: 'HT48',
    route: 'Tepekent - Arel Üni. - Avcılar Metrobüs',
    description: 'Avcılar Metrobüs hattına alternatif güzergâh üzerinden ulaşım sağlar.',
    timing: 'Gün boyunca düzenli sefer; hafta sonu saatleri değişiklik gösterebilir.',
    url: 'https://iett.istanbul/RouteDetail?hkod=HT48&routename=AREL%20%C3%9CN%C4%B0VERS%C4%B0TES%C4%B0%20-TEPEKENT%20-%20AVCILAR%20METROB%C3%9CS',
  },
];

export default function UlasimPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3 text-blue-700">
            <Bus size={24} />
            <div>
              <p className="text-xs uppercase tracking-wide text-blue-500">
                Kampüs Ulaşımı
              </p>
              <h1 className="text-2xl font-bold text-gray-900">
                Ulaşım Hatları
              </h1>
            </div>
          </div>
          <p className="text-base text-gray-600">
            Kampüse ulaşım sağlayan İETT hatları ve bağlantı linklerini mobil
            öncelikli, hızlı erişilebilir kartlarla keşfet.
          </p>
        </header>

        <section className="flex flex-col gap-4">
          {busLines.map((line) => (
            <Link
              key={line.code}
              href={line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-200 hover:bg-gray-50 hover:shadow-md"
            >
              <div className="flex h-full items-center">
                <span className="inline-flex min-w-[72px] justify-center rounded-xl bg-yellow-400 px-4 py-2 text-base font-bold tracking-wide text-gray-900 shadow-sm">
                  {line.code}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 text-left">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {line.route}
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                    <ExternalLink size={14} />
                    İETT
                  </span>
                </div>
                <p className="text-sm text-gray-600">{line.description}</p>
                <p className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Clock size={16} />
                  {line.timing}
                </p>
              </div>

              <div className="flex items-center text-gray-300 transition group-hover:text-gray-600">
                <ChevronRight size={22} />
              </div>
            </Link>
          ))}
        </section>

        <footer className="text-center text-xs text-gray-500">
          Sefer saatleri ve güzergâh bilgileri İETT verilerine göre değişiklik
          gösterebilir. Güncel bilgiler için ilgili hat sayfasını kontrol edin.
        </footer>
      </div>
    </div>
  );
}

