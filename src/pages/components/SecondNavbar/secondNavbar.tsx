export default function Navbar() {
    return (
        <nav
            id="top"
            className="bg-[#1A1A1A] h-auto flex flex-col items-center justify-center px-4 py-2"
        >
            <div className="w-full">
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-12 justify-center items-center text-center">
                    <li>
                        <a
                            href="#top"
                            className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#FF5733]"
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#quem-somos"
                            className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#FF5733]"
                        >
                            ESCRITÓRIO
                        </a>
                    </li>
                    <li>
                        <a
                            href="#quem-somos"
                            className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#FF5733]"
                        >
                            QUEM SOMOS
                        </a>
                    </li>
                    <li>
                        <a
                            href="#atuação"
                            className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#FF5733]"
                        >
                            ATUAÇÃO
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contato"
                            className="text-white text-lg relative hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-4px] hover:after:h-[2px] hover:after:w-full hover:after:bg-[#FF5733]"
                        >
                            CONTATO
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}