import ModuleCard from '@/components/layout/ModuleCard';
import {
  Bell,
  Map,
  UtensilsCrossed,
  Bus,
  Recycle,
  AlertTriangle,
  Heart,
  ClipboardList,
  Shield,
  GraduationCap,
  Network,
} from 'lucide-react';

export default function Home() {
  // Arka plan ve overlay sadece ana sayfa için
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232946] via-[#1a2233] to-[#232946]" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              'url(/campus-bg.jpg), url(https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[#232946]/80" />
      </div>
      <HomeContent />
    </>
  );
}

function HomeContent() {
  const modules = [
    {
      title: 'Duyurular',
      description: 'Kampüsteki güncel duyurular ve haberler',
      href: '/duyurular',
      icon: Bell,
      color: 'blue-500',
    },
    {
      title: 'Kampüs Haritası',
      description: 'Fakülteler ve önemli noktaların konumları',
      href: '/harita',
      icon: Map,
      color: 'green-500',
    },
    {
      title: 'Yemek Yerleri',
      description: 'Kafeterya ve yemekhaneler',
      href: '/yemek',
      icon: UtensilsCrossed,
      color: 'orange-500',
    },
    {
      title: 'Ulaşım',
      description: 'Ring ve otobüs saatleri',
      href: '/ulasim',
      icon: Bus,
      color: 'purple-500',
    },
    {
      title: 'Geri Dönüşüm',
      description: 'Geri dönüşüm kutuları haritası',
      href: '/geri-donusum',
      icon: Recycle,
      color: 'emerald-500',
    },
    {
      title: 'Acil Durum',
      description: 'Toplanma alanları ve acil telefonlar',
      href: '/acil-durum',
      icon: AlertTriangle,
      color: 'red-500',
    },
    {
      title: 'Rehberlik & Destek',
      description: 'Psikolojik destek ve zorbalık bildirimi',
      href: '/rehberlik',
      icon: Heart,
      color: 'rose-500',
    },
    {
      title: 'Anket & Geri Bildirim',
      description: 'Önerilerini paylaş, kampüsü birlikte geliştirelim',
      href: '/geri-bildirim',
      icon: ClipboardList,
      color: 'indigo-500',
    },
    {
      title: 'Bitirme Projeleri ile İlgili Anketler',
      description: 'Mevcut bitirme projelerine katılım sağlayın',
      href: '/bitirme-projeleri',
      icon: GraduationCap,
      color: 'violet-500',
    },
    {
      title: 'UniConnect+',
      description:
        'Öğrenciyi geliştiren, şirketi destekleyen, kampüsü birbirine bağlayan yenilikçi bir platform.',
      href: '/uniconnect',
      icon: Network,
      color: 'cyan-500',
    },
    {
      title: 'Admin Panel',
      description: 'Yönetim paneli',
      href: '/admin',
      icon: Shield,
      color: 'gray-500',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {modules.map((module) => (
          <ModuleCard
            key={module.href}
            title={module.title}
            description={module.description}
            href={module.href}
            icon={module.icon}
            color={module.color}
          />
        ))}
      </div>
    </div>
  );
}
