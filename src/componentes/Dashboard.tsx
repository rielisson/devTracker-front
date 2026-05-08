import { useState } from "react";
import { Header } from "./Header";


export function Dashboard(name: string) {
    const [userName, setUserName] = useState("");
    setUserName(name);
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="w-full max-w-md">
                <div className="bg-white">
                    <h1>Bem vindo {userName}</h1>
                </div>
            </div>
        </div>
    )
}