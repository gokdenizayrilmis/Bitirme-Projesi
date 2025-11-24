export interface Announcement {
  id: number;
  title: string;
  content: string;
  category: 'genel' | 'akademik' | 'sosyal' | 'önemli';
  priority: number;
  imageUrl?: string;
  published: boolean;
  publishedAt: Date;
  expiresAt?: Date;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}
