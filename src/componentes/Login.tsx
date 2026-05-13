import { Code2, LogIn } from "lucide-react";
import { useState } from 'react';
import { loginRequest } from "../services/auth";
import { createContaRequest } from "../services/auth";

interface LoginProps {
    onLogin: (name: string, email: string) => void;
}


export function Login({ onLogin }: LoginProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    // async function loginRequest(email, password) {

    // }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const userData = await loginRequest(email, password);
                onLogin(userData.user.name, userData.user.email);
            } else {
                const userData = await createContaRequest(name, email, password);
                console.log(userData.data.user);
                onLogin(userData.data.user.name, userData.data.user.email);
            }

        } catch (error) {
            if (isLogin) {
                console.error(error);
                alert("Email ou senha incorretos.");
            } else {
                console.error(error);
                alert("nome, Email ou senha incorretos.");
            }
        }

    };

    return (
        <div className="min-h-screen bg-white bg-grandient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className=" inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
                        <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-900 mb-2">DevTracker</span>
                    <p className="text-gray-600">Acompanhe sua evolução como desenvolverdor</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex gap-2 mb-6">
                        <button onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${isLogin
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Login
                        </button>

                        <button onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 px-4 rounded-lg font-medium 
                                transition-all 
                                ${!isLogin
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Cadastro
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label>
                                    Nome Completo
                                </label>
                                <input
                                    type='text'
                                    name={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Seu Nome"
                                    required
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        {isLogin && (
                            <div className="text-right">
                                <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
                                    Esqueceu a senha?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <LogIn className="w-5 h-5" />
                            {isLogin ? 'Entrar' : 'Criar conta'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}