import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  'blue-500': { bg: 'bg-[#e0e7ff]/80', text: 'text-[#0057ff]', border: 'border-[#0057ff]', hover: 'group-hover:text-[#0057ff]' },
  'green-500': { bg: 'bg-[#d1fae5]/80', text: 'text-[#43d9ad]', border: 'border-[#43d9ad]', hover: 'group-hover:text-[#43d9ad]' },
  'orange-500': { bg: 'bg-[#fff3e0]/80', text: 'text-[#ff8906]', border: 'border-[#ff8906]', hover: 'group-hover:text-[#ff8906]' },
  'purple-500': { bg: 'bg-[#ede9fe]/80', text: 'text-[#6c63ff]', border: 'border-[#6c63ff]', hover: 'group-hover:text-[#6c63ff]' },
  'pink-500': { bg: 'bg-[#fce7f3]/80', text: 'text-[#eebbc3]', border: 'border-[#eebbc3]', hover: 'group-hover:text-[#eebbc3]' },
  'emerald-500': { bg: 'bg-[#d1fae5]/80', text: 'text-[#43d9ad]', border: 'border-[#43d9ad]', hover: 'group-hover:text-[#43d9ad]' },
  'red-500': { bg: 'bg-[#fee2e2]/80', text: 'text-[#e63946]', border: 'border-[#e63946]', hover: 'group-hover:text-[#e63946]' },
  'rose-500': { bg: 'bg-[#ffe4e6]/80', text: 'text-[#eebbc3]', border: 'border-[#eebbc3]', hover: 'group-hover:text-[#eebbc3]' },
  'indigo-500': { bg: 'bg-[#e0e7ff]/80', text: 'text-[#6c63ff]', border: 'border-[#6c63ff]', hover: 'group-hover:text-[#6c63ff]' },
  'gray-500': { bg: 'bg-[#f5f7fa]/80', text: 'text-[#232946]', border: 'border-[#232946]', hover: 'group-hover:text-[#232946]' },
};

export default function ModuleCard({ title, description, href, icon: Icon, color }: ModuleCardProps) {
  const colors = colorMap[color] || colorMap['blue-500'];

  return (
    <Link href={href}>
      <div
        className={`
          glass-surface group relative overflow-hidden rounded-2xl
          shadow-md hover:shadow-xl transition-all duration-300
          border border-transparent hover:${colors.border} hover:border-2
          p-6 h-full
          hover:scale-[1.03]
        `}
        style={{ boxShadow: '0 4px 24px 0 rgba(35,41,70,0.10)' }}
      >
        <div className="flex items-center gap-4">
          <div
            className={`
              flex items-center justify-center
              w-14 h-14 rounded-full
              ${colors.bg} ${colors.text}
              group-hover:scale-110 transition-transform duration-300 drop-shadow-sm
            `}
          >
            <Icon size={28} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <h3 className={`text-lg font-bold ${colors.text} ${colors.hover} transition-colors`}>
              {title}
            </h3>
            {description && (
              <p className="text-sm mt-1 line-clamp-2 text-black">
                {description}
              </p>
            )}
          </div>

          <svg
            className={`w-5 h-5 ${colors.text} ${colors.hover} group-hover:translate-x-1 transition-all`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
