import { Code2, LogOut, Settings, User} from 'lucide-react';


interface HeaderProps {
    name: string
    email: string;
}
export function Header({name, email}: HeaderProps) {

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7x1 mx-auto">
                <div className="flex items-center justify-between h-16 sm:px-6 md:px-30 lg:px-45">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Code2 className='w-6 h-6 text-gray-900'/>
                        </div>
                        <span className='text-xl font-bold text-gray-900'>DevTrack</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <button className='p-2 hover:bg-gray-100 rounded-lg trasintion-colors'>
                            <Settings className='w-5 h-5 text-gray-600' />
                        </button>
                        <div className='flex items-center gap-3 pl-4 border-1 border-gray-200'>
                            <div className='w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                                <User className='w-5 h-5 text-white' />
                            </div>
                            <div className='hidden sm:block'>
                                <p className='text-sm font-medium text-gray-900'>{name}</p>
                                <p className='text-sm text-gray-900'>{email}</p>
                            </div>
                        </div>
                        <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                            <LogOut/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}