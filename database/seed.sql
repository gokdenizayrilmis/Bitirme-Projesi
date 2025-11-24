-- ================================================
-- ÖRNEK VERİLER (Test için)
-- ================================================

-- Admin kullanıcı (şifre: admin123 - hash'lenmiş hali)
INSERT INTO users (email, password_hash, full_name, role) VALUES
('admin@kampus.edu.tr', '$2b$10$YourHashedPasswordHere', 'Admin Kullanıcı', 'admin');

-- Örnek Duyurular
INSERT INTO announcements (title, content, category, priority, created_by) VALUES
('Kayıt Yenileme Başladı', 'Bahar dönemi kayıt yenileme işlemleri 15 Ocak''da başlıyor. Öğrenci işlerine mutlaka uğrayın.', 'akademik', 10, 1),
('Yılbaşı Konseri', 'Kampüste düzenlenecek yılbaşı konserine davetlisiniz! 31 Aralık, 19:00 - Açık Hava Tiyatrosu', 'sosyal', 5, 1),
('Kütüphane Çalışma Saatleri', 'Final haftası boyunca kütüphane 24 saat açık olacaktır.', 'genel', 7, 1);

-- Örnek Anket
INSERT INTO surveys (title, description, is_active, created_by) VALUES
('Kampüs Memnuniyet Anketi', 'Kampüsteki hizmetlerden ne kadar memnunsunuz?', true, 1);

INSERT INTO survey_questions (survey_id, question_text, question_type, options, order_index) VALUES
(1, 'Yemek kalitesinden memnun musunuz?', 'multiple_choice', '["Çok Memnunum", "Memnunum", "Kararsızım", "Memnun Değilim"]', 1),
(1, 'Kampüste en çok neye ihtiyaç var?', 'text', NULL, 2);

-- Örnek Yemek Yerleri
INSERT INTO cafeterias (name, description, location, latitude, longitude, opening_hours) VALUES
('Merkez Yemekhane', 'Ana kampüs yemekhanesi, öğrenci kartı ile öğle yemeği', 'Merkez Kampüs', 39.925533, 32.866287, '11:00-14:00'),
('Mühendislik Kafeteryası', 'Sandviç, çay, kahve ve atıştırmalıklar', 'Mühendislik Fakültesi', 39.926000, 32.867000, '08:00-18:00');

-- Örnek Kampüs Konumları
INSERT INTO campus_locations (name, type, latitude, longitude, icon_type) VALUES
('Mühendislik Fakültesi', 'fakülte', 39.926000, 32.867000, 'building'),
('Merkez Kütüphane', 'diğer', 39.925500, 32.866500, 'library'),
('Acil Toplanma Alanı 1', 'acil_toplanma', 39.925200, 32.866200, 'emergency'),
('Geri Dönüşüm Noktası', 'geri_dönüşüm', 39.925700, 32.866800, 'recycle');

-- Örnek Ulaşım Bilgileri
INSERT INTO transportation (route_name, route_type, schedule, stops) VALUES
('Ring 1', 'ring', '{"pazartesi": ["08:00", "09:00", "10:00", "16:00", "17:00"]}', '["Ana Kapı", "Mühendislik", "Merkez Kampüs", "Tıp Fakültesi"]'),
('Belediye Otobüsü 56', 'otobus', '{"pazartesi": ["07:30", "08:30", "17:00", "18:00"]}', '["Şehir Merkezi", "Kampüs Ana Giriş"]');
