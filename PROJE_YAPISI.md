# 🏛️ Kampüs Asistanı - Proje Yapısı

## 📂 Klasör Organizasyonu

```
bitirme-projesi/
├── public/                    # Statik dosyalar (logo, görseller)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Ana layout
│   │   ├── page.tsx           # Ana sayfa (Linktree menü)
│   │   ├── globals.css        # Global stiller
│   │   │
│   │   ├── duyurular/         # Duyurular modülü
│   │   │   └── page.tsx
│   │   ├── harita/            # Kampüs haritası
│   │   │   └── page.tsx
│   │   ├── yemek/             # Yemek yerleri
│   │   │   └── page.tsx
│   │   ├── ulasim/            # Ulaşım bilgileri
│   │   │   └── page.tsx
│   │   ├── geri-bildirim/     # Öneri formu
│   │   │   └── page.tsx
│   │   ├── geri-donusum/      # Geri dönüşüm haritası
│   │   │   └── page.tsx
│   │   ├── acil-durum/        # Acil durum bilgileri
│   │   │   └── page.tsx
│   │   ├── rehberlik/         # Psikolojik destek & Zorbalık bildirimi
│   │   │   ├── page.tsx
│   │   │   └── zorbalik-bildir/
│   │   │       └── page.tsx
│   │   ├── anketler/          # Anket merkezi
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── admin/             # Admin paneli
│   │   │   ├── page.tsx
│   │   │   ├── duyurular/
│   │   │   ├── anketler/
│   │   │   └── raporlar/
│   │   │
│   │   └── api/               # API Route'ları
│   │       ├── duyurular/
│   │       │   └── route.ts
│   │       ├── anketler/
│   │       │   └── route.ts
│   │       ├── zorbalik/
│   │       │   └── route.ts
│   │       └── geri-bildirim/
│   │           └── route.ts
│   │
│   ├── components/            # Yeniden kullanılabilir componentler
│   │   ├── ui/                # UI elementleri
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   └── layout/            # Layout componentleri
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── ModuleCard.tsx
│   │
│   ├── lib/                   # Utility fonksiyonları
│   │   ├── db.ts              # Veritabanı bağlantısı
│   │   └── utils.ts           # Yardımcı fonksiyonlar
│   │
│   └── types/                 # TypeScript tipleri
│       ├── announcement.ts
│       ├── survey.ts
│       └── user.ts
│
├── database/                  # Veritabanı dosyaları
│   ├── schema.sql             # Tablo şemaları
│   └── seed.sql               # Örnek veriler
│
└── package.json

```

## 🎯 Modül Önceliklendirmesi

### Faz 1: Temel (Statik İçerik - VERİTABANI GEREKMİYOR)
1. ✅ Ana Sayfa (Linktree menü)
2. ✅ Acil Durum (Statik içerik)
3. ✅ Rehberlik - Stres Yönetimi (Statik içerik)

### Faz 2: Form Modülleri
4. Geri Bildirim Formu
5. Zorbalık Bildir (Anonim)

### Faz 3: Dinamik İçerik
6. Duyurular (Backend'den çek)
7. Yemek Yerleri
8. Ulaşım Bilgileri

### Faz 4: Harita Entegrasyonu
9. Kampüs Haritası (Leaflet)
10. Geri Dönüşüm Haritası

### Faz 5: Anket Sistemi
11. Anket Listeleme
12. Anket Detay & Katılım

### Faz 6: Admin Paneli
13. Admin Girişi
14. Duyuru Yönetimi
15. Anket Oluşturma
16. Raporları Görüntüleme

## 🛠️ Backend Teknoloji Önerisi

**Önerim: Supabase** (PostgreSQL + Hazır Auth + Realtime)
- Ücretsiz tier yeterli
- Auth sistemi hazır
- REST API otomatik
- Row Level Security (RLS) ile güvenlik kolay

**Alternatif: Node.js + PostgreSQL**
- Daha fazla kontrol
- Express.js ile custom API
- Daha çok kod yazman gerekir

