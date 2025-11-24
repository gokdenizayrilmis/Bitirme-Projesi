'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Bell, Calendar, Tag } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: string;
  priority: number;
  imageUrl?: string;
  publishedAt: string;
  expiresAt?: string;
}

export default function DuyurularPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/duyurular');
      const result = await response.json();
      
      if (result.success) {
        setAnnouncements(result.data);
      } else {
        setError('Duyurular yüklenemedi');
      }
    } catch (err) {
      setError('Bağlantı hatası');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'Tümü', color: 'gray' },
    { value: 'genel', label: 'Genel', color: 'blue' },
    { value: 'akademik', label: 'Akademik', color: 'green' },
    { value: 'sosyal', label: 'Sosyal', color: 'purple' },
    { value: 'önemli', label: 'Önemli', color: 'red' },
  ];

  // Kategori için canlı renk ve label map'i
  const categoryStyleMap: Record<string, { bg: string; text: string; label: string }> = {
    genel:    { bg: 'bg-[#e3f0ff]', text: 'text-[#0057ff]', label: 'Genel' },
    akademik: { bg: 'bg-[#e6ffe6]', text: 'text-[#43d9ad]', label: 'Akademik' },
    sosyal:   { bg: 'bg-[#f3e8ff]', text: 'text-[#6c63ff]', label: 'Sosyal' },
    önemli:   { bg: 'bg-[#ffe3e3]', text: 'text-[#e63946]', label: 'Önemli' },
    all:      { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Tümü' },
  };

  const filteredAnnouncements = selectedCategory === 'all'
    ? announcements
    : announcements.filter(a => a.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

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
            <div className="p-3 bg-blue-100 rounded-full">
              <Bell className="text-blue-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Duyurular</h1>
              <p className="text-gray-600">Kampüsteki güncel haberler</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-2">
        {/* Kategori Filtreleri */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`
                px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all
                ${selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Duyurular yükleniyor...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
            <p className="text-red-900">❌ {error}</p>
          </div>
        )}

        {/* Duyuru Listesi */}
        {!loading && !error && (
          <div className="space-y-4">
            {filteredAnnouncements.length === 0 ? (
              <div className="glass-surface p-12 text-center">
                <Bell size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Henüz duyuru bulunmuyor</p>
              </div>
            ) : (
              filteredAnnouncements.map((announcement) => (
                <article
                  key={announcement.id}
                  className="glass-surface hover:shadow-lg transition-shadow p-6"
                >
                  {/* Kategori Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-white/40 ${categoryStyleMap[announcement.category]?.bg || 'bg-gray-100'} ${categoryStyleMap[announcement.category]?.text || 'text-gray-700'}`}
                    >
                      <Tag size={12} />
                      {categoryStyleMap[announcement.category]?.label || announcement.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} />
                      {formatDate(announcement.publishedAt)}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {announcement.title}
                  </h2>

                  {/* İçerik */}
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {announcement.content}
                  </p>

                  {/* Görsel (varsa) */}
                  {announcement.imageUrl && (
                    <img
                      src={announcement.imageUrl}
                      alt={announcement.title}
                      className="mt-4 rounded-lg w-full object-cover max-h-64"
                    />
                  )}
                </article>
              ))
            )}
          </div>
        )}

        {/* Bilgilendirme */}
        <div className="mt-8 bg-[#e3f0ff] border-l-4 border-[#0057ff] p-6 rounded-r-xl">
          <p className="text-[#0057ff] text-sm font-medium">
            💡 <strong>İpucu:</strong> Önemli duyuruları kaçırmamak için bu sayfayı sık sık ziyaret edin.
          </p>
        </div>
      </main>
    </div>
  );
}
