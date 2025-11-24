-- ================================================
-- KAMPÜS ASİSTANI - VERİTABANI ŞEMASI
-- PostgreSQL için tasarlanmıştır
-- ================================================

-- Kullanıcılar Tablosu (Admin girişi için)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user', -- 'admin' veya 'user'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Duyurular Tablosu
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100), -- 'genel', 'akademik', 'sosyal', 'önemli'
    priority INTEGER DEFAULT 0, -- Yüksek sayı = daha üstte gösterilir
    image_url VARCHAR(500), -- Opsiyonel görsel
    published BOOLEAN DEFAULT true,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP, -- Opsiyonel: Duyurunun geçerlilik süresi
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Anketler Tablosu
CREATE TABLE surveys (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    is_anonymous BOOLEAN DEFAULT false,
    start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP,
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Anket Soruları
CREATE TABLE survey_questions (
    id SERIAL PRIMARY KEY,
    survey_id INTEGER REFERENCES surveys(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL, -- 'multiple_choice', 'text', 'rating', 'yes_no'
    options JSONB, -- Çoktan seçmeli için seçenekler: ["A", "B", "C"]
    is_required BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Anket Cevapları
CREATE TABLE survey_responses (
    id SERIAL PRIMARY KEY,
    survey_id INTEGER REFERENCES surveys(id) ON DELETE CASCADE,
    question_id INTEGER REFERENCES survey_questions(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL, -- Anonim ankette NULL
    answer_text TEXT, -- Açık uçlu cevaplar için
    answer_choice VARCHAR(255), -- Çoktan seçmeli cevaplar için
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Zorbalık Bildirimleri (Anonim)
CREATE TABLE bullying_reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(100), -- 'fiziksel', 'sözlü', 'siber', 'diğer'
    location VARCHAR(255), -- Kampüs içindeki konum
    incident_date DATE,
    description TEXT NOT NULL,
    witness_count INTEGER DEFAULT 0,
    is_resolved BOOLEAN DEFAULT false,
    priority_level VARCHAR(50) DEFAULT 'medium', -- 'low', 'medium', 'high'
    admin_notes TEXT, -- Admin'in ekleyeceği notlar
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Geri Bildirim & Öneriler
CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100), -- 'yemek', 'ulaşım', 'temizlik', 'güvenlik', 'diğer'
    title VARCHAR(500),
    message TEXT NOT NULL,
    contact_email VARCHAR(255), -- Opsiyonel: Geri dönüş isterse
    is_anonymous BOOLEAN DEFAULT false,
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'reviewed', 'resolved'
    admin_response TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Yemek Yerleri (Statik veya dinamik)
CREATE TABLE cafeterias (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    opening_hours VARCHAR(255), -- Örn: "08:00-20:00"
    phone VARCHAR(50),
    menu_url VARCHAR(500), -- PDF veya başka kaynak
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Kampüs Harita İşaretleri
CREATE TABLE campus_locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100), -- 'fakülte', 'yemekhane', 'acil_toplanma', 'geri_dönüşüm', 'diğer'
    description TEXT,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    icon_type VARCHAR(50), -- Haritada gösterilecek icon tipi
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ulaşım Bilgileri (Ring/Otobüs Saatleri)
CREATE TABLE transportation (
    id SERIAL PRIMARY KEY,
    route_name VARCHAR(255) NOT NULL, -- "Ring 1", "Ring 2", "Otobüs 56"
    route_type VARCHAR(50), -- 'ring', 'otobus', 'minibus'
    schedule JSONB, -- { "pazartesi": ["08:00", "09:00"], ... }
    stops JSONB, -- Durak listesi
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================================
-- İNDEXLER (Performans için)
-- ================================================

CREATE INDEX idx_announcements_published ON announcements(published, published_at DESC);
CREATE INDEX idx_surveys_active ON surveys(is_active, end_date);
CREATE INDEX idx_bullying_reports_priority ON bullying_reports(is_resolved, priority_level);
CREATE INDEX idx_feedback_status ON feedback(status, created_at DESC);
CREATE INDEX idx_campus_locations_type ON campus_locations(type, is_active);

-- ================================================
-- TRİGGERLAR (Otomatik Güncelleme)
-- ================================================

-- updated_at otomatik güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Her tabloya trigger ekle
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at BEFORE UPDATE ON announcements
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_surveys_updated_at BEFORE UPDATE ON surveys
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bullying_reports_updated_at BEFORE UPDATE ON bullying_reports
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_feedback_updated_at BEFORE UPDATE ON feedback
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cafeterias_updated_at BEFORE UPDATE ON cafeterias
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_transportation_updated_at BEFORE UPDATE ON transportation
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
