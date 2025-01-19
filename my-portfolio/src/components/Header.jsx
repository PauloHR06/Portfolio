import React from 'react';

function Header() {
    return (
        <>
            <header className='text-white'>
                <div className='container w-full flex justify-between p-6'>
                    <div className='text-2xl font-bold'>Paulo Henrique Ribeiro</div>
                    <div>
                        <nav>
                            <ul className='flex space-x-10'>
                                <li><a href="#" className="hover:underline">Tecnologias</a></li>
                                <li><a href="#" className="hover:underline">Projetos</a></li>
                                <li><a href="#" className="hover:underline">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;