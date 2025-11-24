import Link from 'next/link';
import { Shield, ChevronLeft } from 'lucide-react';

export default function ZorbalikBildirPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-surface mb-6 px-0">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link 
            href="/rehberlik" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Rehberlik</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-full">
              <Shield className="text-orange-600" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Zorbalık Bildir</h1>
              <p className="text-gray-600">Kimliğin gizli kalacak</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-2">
        {/* Bilgilendirme */}
          <div className="bg-[#e3f0ff] border-l-4 border-[#0057ff] p-6 rounded-r-xl mb-6">
            <p className="text-[#0057ff] font-medium">
              🔒 <strong>Gizlilik:</strong> Bu form tamamen anonimdir. Hiçbir kişisel bilgin kaydedilmez.
              Raporun kampüs yönetimine iletilecek ve gerekli önlemler alınacaktır.
            </p>
          </div>

        {/* Form */}
        <form className="glass-surface p-6 space-y-6">
          {/* Zorbalık Türü */}
          <div>
            <label htmlFor="reportType" className="block text-sm font-medium text-gray-900 mb-2">
              Zorbalık Türü *
            </label>
            <select
              id="reportType"
              name="reportType"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black placeholder:text-gray-400"
            >
                <option value="" className="text-black">Seçiniz</option>
                <option value="fiziksel" className="text-black">Fiziksel Zorbalık</option>
                <option value="sozlu" className="text-black">Sözlü/Psikolojik Zorbalık</option>
                <option value="siber" className="text-black">Siber Zorbalık</option>
                <option value="cinsel" className="text-black">Cinsel Taciz</option>
                <option value="ayrimcilik" className="text-black">Ayrımcılık</option>
                <option value="diger" className="text-black">Diğer</option>
            </select>
          </div>

          {/* Olay Yeri */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
              Olay Yeri
            </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Örn: Mühendislik Fakültesi kantini"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black placeholder:text-gray-400"
              />
          </div>

          {/* Olay Tarihi */}
          <div>
            <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-900 mb-2 text-black placeholder:text-black">
              Olay Tarihi (Yaklaşık)
            </label>
            <input
              type="date"
              id="incidentDate"
              name="incidentDate"
                placeholder="gg.aa.yyyy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black placeholder:text-gray-400"
            />
          </div>

          {/* Tanık Sayısı */}
          <div>
            <label htmlFor="witnessCount" className="block text-sm font-medium text-gray-900 mb-2">
              Tanık Sayısı (Yaklaşık)
            </label>
              <input
                type="number"
                id="witnessCount"
                name="witnessCount"
                min="0"
                defaultValue="0"
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black placeholder:text-gray-400"
              />
          </div>

          {/* Açıklama */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
              Olayın Detayları *
            </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                placeholder="Lütfen olayı mümkün olduğunca detaylı anlatın. Ne oldu, kim tarafından, nasıl hissettiğiniz..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-black placeholder:text-gray-400"
              />
          </div>

          {/* Öncelik */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Aciliyet Durumu
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priority" value="low" className="w-4 h-4 text-orange-600" />
                <span className="text-gray-700">Düşük - Geçmişte yaşandı</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priority" value="medium" defaultChecked className="w-4 h-4 text-orange-600" />
                <span className="text-gray-700">Orta - Tekrar edebilir</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="priority" value="high" className="w-4 h-4 text-orange-600" />
                <span className="text-gray-700">Yüksek - Acil müdahale gerekli</span>
              </label>
            </div>
          </div>

          {/* Butonlar */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Anonim Gönder
            </button>
            <Link
              href="/rehberlik"
              className="px-6 py-3 rounded-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-center"
            >
              İptal
            </Link>
          </div>
        </form>

        {/* Destek Mesajı */}
          <div className="bg-[#e3f0ff] border-l-4 border-[#0057ff] p-8 rounded-r-xl  mt-8">
            <p className="text-[#0057ff] font-medium">
              💙 Raporun aldıktan sonra kampüs yönetimi durumu değerlendirecek. 
                Eğer acil bir durumdaysan, lütfen doğrudan bizi ara: 0850 273 5 735
            </p>
          </div>
      </main>
    </div>
  );
}
