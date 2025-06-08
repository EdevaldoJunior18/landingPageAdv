import img from "../../assets/images/97d4e24afba1d8c410736532198ffc2807f2ee30.png";

export default function Sobre() {
    return (
        <div
            id="quem-somos"
            className="w-full bg-white relative flex justify-center items-center pt-[50px] pb-[50px]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-[960px] flex flex-col lg:flex-row justify-center items-center gap-8">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] uppercase tracking-tight font-bebas">
                        NÓS
                        <br />
                        CONSTRUÍMOS
                    </h2>
                    <h3 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#1a1a1a] uppercase tracking-tight font-bebas">
                        SOLUÇÕES TECNOLÓGICAS
                    </h3>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-[#4a4a4a] leading-relaxed font-oswald">
                        Transforme ideias em experiências digitais únicas com a criatividade e inovação da nossa fábrica de software.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full max-w-[426px] sm:max-w-[426px]">
                        <img
                            src={img.src}
                            alt="Illustration of technological solutions"
                            className="w-[426px] h-[342px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
