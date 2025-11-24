import Link from 'next/link';
import { Heart, Phone, Mail, Shield, BookOpen, ChevronLeft } from 'lucide-react';

export default function RehberlikPage() {
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
            <div className="p-3 bg-rose-100 rounded-full">
              <Heart className="text-rose-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rehberlik & Psikolojik Destek</h1>
              <p className="text-gray-600">Seni dinlemeye hazırız</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-2 space-y-6">
        {/* İletişim Kartı */}
        <section className="glass-surface p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Phone size={24} className="text-rose-600" />
            İletişim Bilgileri
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-gray-500" />
              <span className="text-gray-800">0312 XXX XX XX (Dahili: 1234)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-500" />
              <a href="mailto:pdr@kampus.edu.tr" className="text-blue-600 hover:underline">
                pdr@kampus.edu.tr
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Randevu saatleri: Pazartesi - Cuma, 09:00 - 17:00
            </p>
          </div>
        </section>

        {/* Zorbalık Bildir */}
        <section className="glass-surface p-6 border-2 border-orange-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Shield size={24} className="text-orange-600" />
            Zorbalığa Karşı Duyarlıyız
          </h2>
          <p className="text-gray-700 mb-4">
            Fiziksel, sözlü veya siber zorbalığa maruz kaldıysan ya da tanık olduysan, 
            seni dinlemeye hazırız. Kimliğin gizli kalır.
          </p>
          <Link
            href="/rehberlik/zorbalik-bildir"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Anonim Bildirim Yap →
          </Link>
        </section>

        {/* Stres Yönetimi Rehberi */}
        <section className="glass-surface p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen size={24} className="text-blue-600" />
            Stres Yönetimi İpuçları
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">1. Düzenli Uyku</h3>
              <p className="text-gray-700">
                Günde 7-8 saat uyumak, zihinsel sağlığın için kritik önem taşır. Uyku düzeni oluştur.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">2. Fiziksel Aktivite</h3>
              <p className="text-gray-700">
                Günde 30 dakika yürüyüş yapmak bile stres hormonlarını azaltır. Kampüs spor tesislerinden faydalanabilirsin.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">3. Nefes Egzersizleri</h3>
              <p className="text-gray-700">
                Stresli anlarda: 4 saniye nefes al, 4 saniye tut, 4 saniye ver. 5 kez tekrarla.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">4. Sosyal Bağlantılar</h3>
              <p className="text-gray-700">
                Arkadaşlarınla vakit geçirmek, yalnızlık hissini azaltır. Kulüplere katılmayı düşün.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">5. Profesyonel Yardım</h3>
              <p className="text-gray-700">
                Bazen konuşmak yeterlidir. Psikolojik danışmanlarımız seni dinlemeye hazır.
              </p>
            </div>
          </div>
        </section>

        {/* Önemli Not */}
        <div className="bg-[#e3f0ff] border-l-4 border-[#0057ff] p-6 rounded-r-xl">
          <p className="text-[#0057ff] font-medium">
            💙 <strong>Unutma:</strong> Yalnız değilsin. Her öğrenci zaman zaman zorlanır. 
            Yardım istemek güçlülük göstergesidir.
          </p>
        </div>
      </main>
    </div>
  );
}
