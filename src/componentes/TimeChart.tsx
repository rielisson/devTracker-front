import { BarChart3 } from 'lucide-react';

export function TimeChart() {
  const weekData = [
    { day: 'Dom', hours: 2 },
    { day: 'Seg', hours: 4 },
    { day: 'Ter', hours: 3 },
    { day: 'Qua', hours: 8 },
    { day: 'Qui', hours: 4 },
    { day: 'Sex', hours: 3 },
    { day: 'Sáb', hours: 6 },
  ];

  const maxHours = Math.max(...weekData.map(d => d.hours));

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Horas de Estudo - Última Semana</h3>
        </div>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Esta semana</option>
          <option>Último mês</option>
          <option>Último ano</option>
        </select>
      </div>

      <div className="flex items-end gap-4 h-48 ">
        {weekData.map((data) => {
          const heightPercent = (data.hours / maxHours) * 100;
          return (
            <div key={data.day} className="flex-1 flex flex-col items-center gap-3 h-full">
              <div className="w-full flex flex-col items-center justify-end flex-1">
                <span className="text-sm font-semibold text-gray-900 mb-2">
                  {data.hours}
                </span>
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500 cursor-pointer"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">{data.day}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-600 mb-1">Total da Semana</p>
          <p className="text-xl font-bold text-gray-900">27h</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Média Diária</p>
          <p className="text-xl font-bold text-gray-900">3.9h</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Melhor Dia</p>
          <p className="text-xl font-bold text-gray-900">Sáb (6h)</p>
        </div>
      </div>
    </div>
  );
}
