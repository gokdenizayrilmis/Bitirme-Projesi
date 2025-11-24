-- SQLite için Kampüs Asistanı Veritabanı Şeması
-- PostgreSQL'den farklı olarak SERIAL yerine INTEGER PRIMARY KEY AUTOINCREMENT kullanılır

-- Kullanıcılar Tablosu
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT DEFAULT 'user', -- 'admin' veya 'user'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Duyurular Tablosu
CREATE TABLE IF NOT EXISTS announcements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT, -- 'genel', 'akademik', 'sosyal', 'önemli'
    priority INTEGER DEFAULT 0,
    image_url TEXT,
    published INTEGER DEFAULT 1, -- SQLite'da BOOLEAN yerine INTEGER (0/1)
    published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    created_by INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Anketler Tablosu
CREATE TABLE IF NOT EXISTS surveys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    is_active INTEGER DEFAULT 1,
    is_anonymous INTEGER DEFAULT 0,
    start_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    end_date DATETIME,
    created_by INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Anket Soruları
CREATE TABLE IF NOT EXISTS survey_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    survey_id INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    question_type TEXT NOT NULL, -- 'multiple_choice', 'text', 'rating', 'yes_no'
    options TEXT, -- JSON string: '["A", "B", "C"]'
    is_required INTEGER DEFAULT 0,
    order_index INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (survey_id) REFERENCES surveys(id) ON DELETE CASCADE
);

-- Anket Cevapları
CREATE TABLE IF NOT EXISTS survey_responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    survey_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,
    user_id INTEGER,
    answer_text TEXT,
    answer_choice TEXT,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (survey_id) REFERENCES surveys(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES survey_questions(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Zorbalık Bildirimleri (Anonim)
CREATE TABLE IF NOT EXISTS bullying_reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    report_type TEXT,
    location TEXT,
    incident_date DATE,
    description TEXT NOT NULL,
    witness_count INTEGER DEFAULT 0,
    is_resolved INTEGER DEFAULT 0,
    priority_level TEXT DEFAULT 'medium',
    admin_notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Geri Bildirim & Öneriler
CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    title TEXT,
    message TEXT NOT NULL,
    contact_email TEXT,
    is_anonymous INTEGER DEFAULT 0,
    status TEXT DEFAULT 'pending',
    admin_response TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Yemek Yerleri
CREATE TABLE IF NOT EXISTS cafeterias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    location TEXT,
    latitude REAL,
    longitude REAL,
    opening_hours TEXT,
    phone TEXT,
    menu_url TEXT,
    image_url TEXT,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Kampüs Harita İşaretleri
CREATE TABLE IF NOT EXISTS campus_locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT,
    description TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    icon_type TEXT,
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Ulaşım Bilgileri
CREATE TABLE IF NOT EXISTS transportation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    route_name TEXT NOT NULL,
    route_type TEXT,
    schedule TEXT, -- JSON string
    stops TEXT, -- JSON string
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_announcements_published ON announcements(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_surveys_active ON surveys(is_active, end_date);
CREATE INDEX IF NOT EXISTS idx_bullying_priority ON bullying_reports(is_resolved, priority_level);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_campus_type ON campus_locations(type, is_active);
