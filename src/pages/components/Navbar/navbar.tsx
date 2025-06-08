import logo from "../../assets/images/9323756420_b517a0c4-077f-48e6-9e97-450e7b662b72 1.png";

export default function Navbar() {
    return (
        <nav className="bg-white w-full flex justify-center">
            <div className="w-full max-w-[960px] min-h-[215px] flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <img src={logo.src} alt="Logo" className="w-[110px] h-[119px]" />
                </div>

                <div className="flex items-center gap-6">
                    {["HOME", "SERVIÇOS", "PROJETOS", "TIME", "CONTATOS"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-black text-[20px] leading-[20px] font-normal hidden sm:inline-block"
                            style={{ fontFamily: "Bebas Neue" }}
                        >
                            {item}
                        </a>
                    ))}

                    <button
                        className="p-2 rounded-full text-black hover:text-gray-600 focus:outline-none"
                        aria-label="Toggle Dark Mode"
                    >
                        <svg
                            className="w-6 h-6 sm:w-7 sm:h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.99z"
                                />
                            </svg>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}