import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db';

export const dynamic = 'force-dynamic';

// GET - Duyuruları listele
export async function GET() {
  try {
    const db = getDatabase();
    
    const announcements = db.prepare(`
      SELECT 
        id, title, content, category, priority, 
        image_url as imageUrl,
        published_at as publishedAt,
        expires_at as expiresAt
      FROM announcements 
      WHERE published = 1 
        AND (expires_at IS NULL OR expires_at > datetime('now'))
      ORDER BY priority DESC, published_at DESC
      LIMIT 50
    `).all();

    return NextResponse.json({
      success: true,
      data: announcements,
      count: announcements.length,
    });
  } catch (error) {
    console.error('Duyurular yüklenirken hata:', error);
    return NextResponse.json(
      { success: false, error: 'Duyurular yüklenemedi' },
      { status: 500 }
    );
  }
}

// POST - Yeni duyuru ekle (Admin için)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, category, priority = 0, imageUrl, expiresAt } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: 'Başlık ve içerik gereklidir' },
        { status: 400 }
      );
    }

    const db = getDatabase();
    
    const result = db.prepare(`
      INSERT INTO announcements (title, content, category, priority, image_url, expires_at, created_by)
      VALUES (?, ?, ?, ?, ?, ?, 1)
    `).run(title, content, category, priority, imageUrl, expiresAt);

    return NextResponse.json({
      success: true,
      data: { id: result.lastInsertRowid },
      message: 'Duyuru başarıyla eklendi',
    });
  } catch (error) {
    console.error('Duyuru eklenirken hata:', error);
    return NextResponse.json(
      { success: false, error: 'Duyuru eklenemedi' },
      { status: 500 }
    );
  }
}
