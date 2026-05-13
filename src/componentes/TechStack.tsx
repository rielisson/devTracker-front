import { Code, Plus, CheckCircle2, Target } from 'lucide-react';

export function TechStack() {
  const knownTechs = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 85, color: 'bg-cyan-500' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'CSS/Tailwind', level: 80, color: 'bg-pink-500' },
  ];

  const learningTechs = [
    'Next.js',
    'GraphQL',
    'Docker',
    'PostgreSQL',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Tecnologias</h3>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          <Plus className="w-4 h-4" />
          Adicionar
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <h4 className="text-sm font-medium text-gray-700">Dominadas</h4>
        </div>
        <div className="space-y-4">
          {knownTechs.map((tech) => (
            <div key={tech.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{tech.name}</span>
                <span className="text-sm text-gray-600">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`${tech.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-4 h-4 text-orange-600" />
          <h4 className="text-sm font-medium text-gray-700">Aprendendo</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {learningTechs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
