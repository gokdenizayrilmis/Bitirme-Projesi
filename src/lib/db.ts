import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Veritabanı dosyasının yolu
const DB_PATH = path.join(process.cwd(), 'database', 'kampus.db');
const SCHEMA_PATH = path.join(process.cwd(), 'database', 'schema.sqlite.sql');
const SEED_PATH = path.join(process.cwd(), 'database', 'seed.sqlite.sql');

// Veritabanı klasörünü oluştur
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Veritabanı bağlantısı
let db: Database.Database | null = null;

export function getDatabase() {
  if (!db) {
    const isFirstRun = !fs.existsSync(DB_PATH);
    
    db = new Database(DB_PATH, { verbose: console.log });
    db.pragma('journal_mode = WAL'); // Performans için
    
    // İlk çalıştırmada şemayı ve örnek verileri yükle
    if (isFirstRun) {
      console.log('🗄️ Veritabanı ilk kez oluşturuluyor...');
      initializeDatabase(db);
    }
  }
  return db;
}

function initializeDatabase(database: Database.Database) {
  try {
    // Şemayı yükle
    if (fs.existsSync(SCHEMA_PATH)) {
      const schema = fs.readFileSync(SCHEMA_PATH, 'utf-8');
      database.exec(schema);
      console.log('✅ Şema oluşturuldu');
    }
    
    // Örnek verileri yükle
    if (fs.existsSync(SEED_PATH)) {
      const seed = fs.readFileSync(SEED_PATH, 'utf-8');
      database.exec(seed);
      console.log('✅ Örnek veriler eklendi');
    }
  } catch (error) {
    console.error('❌ Veritabanı başlatma hatası:', error);
    throw error;
  }
}

// Veritabanını kapat (uygulama kapanırken)
export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}

// Process sonlandığında veritabanını kapat
process.on('exit', closeDatabase);
process.on('SIGINT', () => {
  closeDatabase();
  process.exit(0);
});
