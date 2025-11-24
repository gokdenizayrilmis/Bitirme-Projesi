# 🚀 Kampüs Asistanı - Başlangıç Rehberi

## ✅ Tamamlananlar

- [x] Next.js projesi kurulu
- [x] Klasör yapısı oluşturuldu
- [x] Veritabanı şeması tasarlandı
- [x] Ana sayfa (Linktree menü) hazır
- [x] Acil Durum modülü (statik) ✅
- [x] Rehberlik modülü (statik) ✅
- [x] Zorbalık bildir formu ✅
- [x] TypeScript tipleri tanımlandı
- [x] UI componentleri (Button, Card) hazır

## 🏃 Sonraki Adımlar

### 1. Projeyi Çalıştır ve Test Et

```bash
cd bitirme-projesi
npm run dev
```

Tarayıcıda http://localhost:3000 adresine git. Ana sayfayı ve oluşturulan modülleri test et.

### 2. Backend Seçimi Yap

**ÖNERİ: Supabase (Kolay & Hızlı)**

1. [Supabase](https://supabase.com) hesabı aç (ücretsiz)
2. Yeni proje oluştur
3. SQL Editor'den `database/schema.sql` dosyasını çalıştır
4. `database/seed.sql` ile örnek verileri ekle
5. Supabase kütüphanesini yükle:
   ```bash
   npm install @supabase/supabase-js
   ```

**Alternatif: Node.js + PostgreSQL**
- PostgreSQL kur
- Prisma ORM kullan
- Express.js ile API yaz (daha fazla kod)

### 3. Geri Bildirim Formu API'si (İlk API'n)

`src/app/api/geri-bildirim/route.ts` dosyasını oluştur:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  // TODO: Veritabanına kaydet
  console.log('Geri bildirim:', body);
  
  return NextResponse.json({ 
    success: true, 
    message: 'Geri bildiriminiz alındı!' 
  });
}
```

### 4. Geri Bildirim Form Sayfası Oluştur

`src/app/geri-bildirim/page.tsx` - Zorbalık bildir formuna benzer şekilde yap.

### 5. Duyurular Modülü (Backend'den Veri Çekme)

```typescript
// src/app/duyurular/page.tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!);

export default async function DuyurularPage() {
  const { data: duyurular } = await supabase
    .from('announcements')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  return (
    <div>
      {/* Duyuruları listele */}
    </div>
  );
}
```

### 6. Harita Modülü (Leaflet)

```bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

Leaflet CSS'ini `layout.tsx`'e ekle:
```tsx
import 'leaflet/dist/leaflet.css';
```

### 7. Admin Paneli (En Sona Bırak)

- Basit bir login sayfası
- Duyuru ekleme formu
- Şikayet/Bildirim listesi

---

## 📁 Dosya Yapısı Özeti

```
src/
├── app/
│   ├── page.tsx              ✅ Ana sayfa (Linktree)
│   ├── acil-durum/           ✅ Statik sayfa
│   ├── rehberlik/            ✅ Statik + Form
│   ├── geri-bildirim/        ⏳ Form yap
│   ├── duyurular/            ⏳ Backend'den veri çek
│   ├── yemek/                ⏳ Liste göster
│   ├── ulasim/               ⏳ Saatler
│   ├── harita/               ⏳ Leaflet
│   ├── geri-donusum/         ⏳ Leaflet (geri dönüşüm noktaları)
│   ├── anketler/             ⏳ Anket sistemi
│   └── admin/                ⏳ En sona
│
├── components/
│   ├── ui/                   ✅ Button, Card
│   └── layout/               ✅ ModuleCard
│
├── types/                    ✅ TypeScript tipleri
└── lib/                      ⏳ Veritabanı bağlantısı eklenecek
```

---

## 🎯 İlerleme Stratejisi (Senin Yol Haritası)

### Faz 1: Statik Modüller (✅ Bitti)
- Ana sayfa
- Acil durum
- Rehberlik
- Zorbalık bildir formu

### Faz 2: Form Modülleri (Sonraki)
1. **Geri Bildirim Formu** - Zorbalık formuna benzer
2. API route'u oluştur
3. Formu backend'e bağla

### Faz 3: Dinamik İçerik (Backend Gerekli)
4. Duyurular sayfası
5. Yemek yerleri listesi
6. Ulaşım bilgileri

### Faz 4: Harita
7. Kampüs haritası (Leaflet + işaretleyiciler)
8. Geri dönüşüm haritası

### Faz 5: Anket Sistemi
9. Anket listesi
10. Anket detay ve cevaplama

### Faz 6: Admin Paneli
11. Admin login
12. Duyuru yönetimi
13. Bildirim/rapor görüntüleme

---

## 🛠️ Gerekli Kurulumlar

### Şu An Yüklü Olanlar:
- ✅ Next.js 16
- ✅ Tailwind CSS 4
- ✅ TypeScript
- ✅ lucide-react (iconlar)

### Eklenecekler:
```bash
# Backend için (Supabase kullanacaksan)
npm install @supabase/supabase-js

# Harita için
npm install leaflet react-leaflet
npm install -D @types/leaflet

# Form validasyonu için (opsiyonel ama tavsiye)
npm install react-hook-form zod @hookform/resolvers
```

---

## 💡 İpuçları

1. **Küçük Adımlarla İlerle**: Her modülü tek tek bitir, test et, sonra geçişe geç.
2. **Git Kullan**: Her önemli değişiklikten sonra commit at.
3. **Mobil Öncelikli Test Et**: Chrome DevTools'da mobil görünümü sürekli kontrol et.
4. **Önce Çalışır Hale Getir, Sonra Güzelleştir**: Fonksiyonellik > Tasarım

---

## 🆘 Yardıma İhtiyacın Olursa

- "Geri bildirim formunu nasıl yapacağım?" diye sor
- "Duyuruları nasıl çekerim?" diye sor
- "Leaflet haritasını nasıl kurarım?" diye sor

Copilot her adımda seninle! 🚀
