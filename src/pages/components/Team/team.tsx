import p2 from "../../assets/images/ed.png";
import { default as p1, default as p3 } from "../../assets/images/lena.jpg";

export default function Team() {
    return (
        <div className="max-w-7xl mx-auto mt-4 px-4 sm:mt-8 md:mt-16">
            <div className="w-full mx-auto sm:w-[960px] h-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
                    TIME
                </h2>
                <div className="border-b border-gray-900 w-12 sm:w-16 mx-auto mt-1 sm:mt-2"></div>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-center text-gray-600 font-bold">
                    Conheça o time que faz suas ideias saírem do papel
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-md md:text-base text-center text-gray-500">
                    Somos uma equipe de apaixonados por transformar ideias em produtos digitais de verdade. Unimos habilidades de
                </p>
                <p className="text-sm sm:text-md md:text-base text-center text-gray-500">
                    frontend, backend e gestão de projetos pra entregar soluções sob medida — de sites a sistemas completos. Trabalhamos
                </p>
                <p className="text-sm sm:text-md md:text-base text-center text-gray-500">
                    com organização, clareza e proximidade: aqui, quem conversa com você é quem põe a mão no código.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
                    <div className="text-center relative">
                        <img
                            src={p1.src}
                            alt="Guilherme Lena"
                            className="w-full max-w-[309.33px] h-auto mx-auto sm:w-[309.33px] sm:h-[309.33px]"
                        />
                        <div className="absolute bottom-0 left-0 w-3/4 bg-black bg-opacity-75 text-white p-1 sm:p-2 rounded-r-lg text-left">
                            <h3 className="text-lg sm:text-xl font-semibold">Guilherme Lena</h3>
                            <p className="text-xs sm:text-sm">CEO e desenvolvedor</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <img
                            src={p2.src}
                            alt="Edevaldo Junior"
                            className="w-full max-w-[309.33px] h-auto mx-auto sm:w-[309.33px] sm:h-[309.33px]"
                        />
                        <div className="absolute bottom-0 left-0 w-3/4 bg-black bg-opacity-75 text-white p-1 sm:p-2 rounded-r-lg text-left">
                            <h3 className="text-lg sm:text-xl font-semibold">Edevaldo Junior</h3>
                            <p className="text-xs sm:text-sm">CEO e desenvolvedor</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <img
                            src={p3.src}
                            alt="Guilherme Lena"
                            className="w-full max-w-[309.33px] h-auto mx-auto sm:w-[309.33px] sm:h-[309.33px]"
                        />
                        <div className="absolute bottom-0 left-0 w-3/4 bg-black bg-opacity-75 text-white p-1 sm:p-2 rounded-r-lg text-left">
                            <h3 className="text-lg sm:text-xl font-semibold">Guilherme Lena</h3>
                            <p className="text-xs sm:text-sm">CEO e desenvolvedor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}