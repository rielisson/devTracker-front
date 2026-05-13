import { type LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  unit: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange' | 'cyan';
  trend: string;
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    text: 'text-blue-600',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    text: 'text-green-600',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    text: 'text-orange-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    icon: 'bg-cyan-100 text-cyan-600',
    text: 'text-cyan-600',
  },
};

export function StatCard({ title, value, unit, icon: Icon, color, trend }: StatCardProps) {
  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`text-sm font-medium ${colors.text}`}>{trend}</span>
      </div>
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="text-gray-500 text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
}
