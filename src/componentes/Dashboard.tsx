import { Header } from "./Header";

interface DashboardProps {
    name: string;
}

export function Dashboard({name}: DashboardProps)  {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="w-full max-w-md">
                <div className="w-max h-8 flex flex-col mt-15 ml-20">
                    <h1 className="text-center mb-2 text-3xl font-bold">Bem vindo {name}!  👋 </h1>
                    <p className="text-gray-900">Continue sua jornada de aprendizado</p>
                </div>
            </div>
        </div>
    )
}