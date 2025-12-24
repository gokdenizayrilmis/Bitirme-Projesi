'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Calendar,
  Users,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface BitirmeProjesi {
  id: number;
  baslik: string;
  aciklama: string;
  ogrenciSayisi: number;
  danisman: string;
  bolum: string;
  olusturmaTarihi: string;
  sonTarih: string;
  durum: 'aktif' | 'tamamlandi' | 'beklemede';
  katilimSayisi: number;
}

const bitirmeProjeleri: BitirmeProjesi[] = [
  {
    id: 1,
    baslik: 'Yapay Zeka Destekli Kampüs Yönetim Sistemi',
    aciklama:
      'Kampüs içi kaynak yönetimi, öğrenci takibi ve otomasyon sistemleri için yapay zeka tabanlı bir platform geliştirilmesi. Makine öğrenmesi algoritmaları kullanılarak verimlilik analizi yapılacak.',
    ogrenciSayisi: 4,
    danisman: 'Prof. Dr. Ahmet Yılmaz',
    bolum: 'Bilgisayar Mühendisliği',
    olusturmaTarihi: '2024-01-15',
    sonTarih: '2024-06-30',
    durum: 'aktif',
    katilimSayisi: 12,
  },
  {
    id: 2,
    baslik: 'Mobil Uygulama ile Kampüs Navigasyon Sistemi',
    aciklama:
      'AR (Artırılmış Gerçeklik) teknolojisi kullanılarak kampüs içi navigasyon sağlayan mobil uygulama. Bina içi yönlendirme, etkinlik bildirimleri ve interaktif harita özellikleri içerir.',
    ogrenciSayisi: 3,
    danisman: 'Doç. Dr. Zeynep Kaya',
    bolum: 'Yazılım Mühendisliği',
    olusturmaTarihi: '2024-02-01',
    sonTarih: '2024-07-15',
    durum: 'aktif',
    katilimSayisi: 8,
  },
  {
    id: 3,
    baslik: 'Sürdürülebilir Enerji Yönetim Sistemi',
    aciklama:
      'Kampüs binalarında enerji tüketimini optimize eden IoT tabanlı sistem. Sensör verileri ile gerçek zamanlı izleme ve analiz yapılacak.',
    ogrenciSayisi: 5,
    danisman: 'Prof. Dr. Mehmet Demir',
    bolum: 'Elektrik-Elektronik Mühendisliği',
    olusturmaTarihi: '2024-01-20',
    sonTarih: '2024-08-20',
    durum: 'aktif',
    katilimSayisi: 15,
  },
  {
    id: 4,
    baslik: 'Blockchain Tabanlı Akademik Belge Doğrulama Sistemi',
    aciklama:
      'Diploma, transkript ve sertifikaların güvenli şekilde saklanması ve doğrulanması için blockchain teknolojisi kullanılarak geliştirilecek sistem.',
    ogrenciSayisi: 4,
    danisman: 'Dr. Öğr. Üyesi Can Özkan',
    bolum: 'Bilgisayar Mühendisliği',
    olusturmaTarihi: '2023-12-10',
    sonTarih: '2024-05-30',
    durum: 'tamamlandi',
    katilimSayisi: 20,
  },
];

const ITEMS_PER_PAGE = 2;

export default function BitirmeProjeleriPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bitirmeProjeleri.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = bitirmeProjeleri.slice(startIndex, endIndex);

  const getStatusColor = (durum: string) => {
    switch (durum) {
      case 'aktif':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'tamamlandi':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'beklemede':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusLabel = (durum: string) => {
    switch (durum) {
      case 'aktif':
        return 'Aktif';
      case 'tamamlandi':
        return 'Tamamlandı';
      case 'beklemede':
        return 'Beklemede';
      default:
        return durum;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

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
            <div className="p-3 bg-indigo-100 rounded-full">
              <GraduationCap className="text-indigo-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bitirme Projeleri Anketleri
              </h1>
              <p className="text-gray-600">
                Mevcut bitirme projelerine katılım sağlayabilirsiniz
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-2 pb-12">
        {/* Proje Listesi */}
        <div className="space-y-6">
          {currentItems.map((proje) => (
            <article
              key={proje.id}
              className="glass-surface hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Sol Taraf - İkon ve Durum */}
                <div className="flex-shrink-0">
                  <div className="p-4 bg-indigo-50 rounded-xl inline-flex">
                    <FileText className="text-indigo-600" size={32} />
                  </div>
                </div>

                {/* Orta Kısım - İçerik */}
                <div className="flex-1 space-y-4">
                  {/* Başlık ve Durum */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {proje.baslik}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {proje.aciklama}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                        proje.durum
                      )}`}
                    >
                      {getStatusLabel(proje.durum)}
                    </span>
                  </div>

                  {/* Detaylar Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="text-gray-400" size={18} />
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {proje.ogrenciSayisi}
                        </span>{' '}
                        Öğrenci
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="text-gray-400" size={18} />
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {proje.bolum}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="text-gray-400" size={18} />
                      <span className="text-gray-600">
                        Son Tarih:{' '}
                        <span className="font-semibold text-gray-900">
                          {formatDate(proje.sonTarih)}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="text-gray-400" size={18} />
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {proje.katilimSayisi}
                        </span>{' '}
                        Katılım
                      </span>
                    </div>
                  </div>

                  {/* Danışman Bilgisi */}
                  <div className="pt-2">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">
                        Danışman:
                      </span>{' '}
                      {proje.danisman}
                    </p>
                  </div>
                </div>

                {/* Sağ Taraf - Buton */}
                <div className="flex-shrink-0 flex items-start">
                  <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
                    <span>Detaylar</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Önceki sayfa"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[40px] px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Sonraki sayfa"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Bilgilendirme */}
        <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
          <p className="text-indigo-900 text-sm">
            <strong>💡 Bilgi:</strong> Bitirme projelerine katılmak için ilgili
            projenin detay sayfasına giderek başvuru formunu doldurabilirsiniz.
            Projeler hakkında daha fazla bilgi için danışman öğretim üyeleri
            ile iletişime geçebilirsiniz.
          </p>
        </div>
      </main>
    </div>
  );
}

