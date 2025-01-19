import React from 'react';

function Header() {
    return (
        <>
            <header className='text-white'>
                <div className='container w-full flex justify-between p-6'>
                    <div className='text-2xl font-bold font-mono'>&lt;&gt; Paulo Ribeiro &lt; /&gt;</div>
                    <div>
                        <nav>
                            <ul className='flex space-x-10'>
                                <li><a href="#" className="hover:underline font-mono">Tecnologias</a></li>
                                <li><a href="#" className="hover:underline font-mono">Projetos</a></li>
                                <li><a href="#" className="hover:underline font-mono">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;