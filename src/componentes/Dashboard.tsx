import { Clock, TrendingUp, Target, Code2, Award } from 'lucide-react';
import { Header } from "./Header";
import { StatCard } from "./StatCards";
import { TimeChart } from './TimeChart';
import { TechStack } from './TechStack';

interface DashboardProps {
    name: string;
    email: string
}

export function Dashboard({ name, email }: DashboardProps) {
    const stats = {
        totalHours: 248,
        streak: 15,
        techsLearned: 12,
        monthGoal: 75,
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <Header email={email} name={name} />
            <main className="max-w-7xl mx-auto px-6 sm:px-6 lg-px-8 py-8">
                <div className="mb-12">
                    <h1 className="text-3xl mb-2 font-bold">Bem vindo {name}!  👋 </h1>
                    <p className="text-gray-900">Continue sua jornada de aprendizado</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Horas Totais"
                        value={stats.totalHours}
                        unit="horas"
                        icon={Clock}
                        color="blue"
                        trend="+12%"
                    />
                    <StatCard
                        title="Sequência"
                        value={stats.streak}
                        unit="dias"
                        icon={TrendingUp}
                        color="green"
                        trend="+3 dias"
                    />
                    <StatCard
                        title="Tecnologias"
                        value={stats.techsLearned}
                        unit="aprendidas"
                        icon={Code2}
                        color="orange"
                        trend="+2 este mês"
                    />
                    <StatCard
                        title="Meta Mensal"
                        value={stats.monthGoal}
                        unit="%"
                        icon={Target}
                        color="cyan"
                        trend="75/100h"
                    />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3  gap-6 mb-8'>
                    <div className='lg:col-span-2'>
                        <TimeChart />
                    </div>
                    <div>
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-yellow-500" />
                                <h3 className="font-semibold text-gray-900">Conquistas Recentes</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: '15 dias seguidos', date: 'Hoje' },
                                    { name: '100 horas de estudo', date: 'Há 3 dias' },
                                    { name: '5 tecnologias dominadas', date: 'Há 1 semana' },
                                ].map((achievement, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                            <Award className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900 text-sm">{achievement.name}</p>
                                            <p className="text-xs text-gray-600">{achievement.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <TechStack />            
                </div>
            </main >
        </div >
    )
}