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
  'blue-500': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500', hover: 'group-hover:text-blue-600' },
  'green-500': { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-500', hover: 'group-hover:text-green-600' },
  'orange-500': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-500', hover: 'group-hover:text-orange-600' },
  'purple-500': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500', hover: 'group-hover:text-purple-600' },
  'pink-500': { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-500', hover: 'group-hover:text-pink-600' },
  'emerald-500': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-500', hover: 'group-hover:text-emerald-600' },
  'red-500': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-500', hover: 'group-hover:text-red-600' },
  'rose-500': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-500', hover: 'group-hover:text-rose-600' },
  'indigo-500': { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-500', hover: 'group-hover:text-indigo-600' },
  'gray-500': { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-500', hover: 'group-hover:text-gray-600' },
};

export default function ModuleCard({ title, description, href, icon: Icon, color }: ModuleCardProps) {
  const colors = colorMap[color] || colorMap['blue-500'];
  
  return (
    <Link href={href}>
      <div
        className={`
          group relative overflow-hidden rounded-2xl 
          bg-white shadow-md hover:shadow-xl 
          transition-all duration-300 
          border-2 border-transparent hover:${colors.border}
          p-6 h-full
        `}
      >
        <div className="flex items-center gap-4">
          <div
            className={`
              flex items-center justify-center 
              w-14 h-14 rounded-full 
              ${colors.bg} ${colors.text}
              group-hover:scale-110 transition-transform duration-300
            `}
          >
            <Icon size={28} strokeWidth={2} />
          </div>
          
          <div className="flex-1">
            <h3 className={`text-lg font-bold text-gray-900 ${colors.hover} transition-colors`}>
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </div>
          
          <svg
            className={`w-5 h-5 text-gray-400 ${colors.hover} group-hover:translate-x-1 transition-all`}
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
