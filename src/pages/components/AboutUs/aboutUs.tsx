export default function Sobre() {
    return (
        <div
            id="quem-somos"
            className="w-full py-8 bg-cover bg-center relative"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
                minHeight: '500px',
            }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="w-full lg:w-1/2 order-1 lg:order-none">
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold text-center text-white drop-shadow-md relative">
                            Sobre nós
                            <span className="block w-20 h-1 bg-white mt-2 mx-auto"></span>
                        </h2>
                    </div>
                    <p
                        className="text-white text-justify max-w-lg mx-auto lg:ml-16"
                        style={{
                            fontFamily: 'Inria Sans, sans-serif',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '1.5',
                            marginTop: '20px',
                        }}>
                        Fundado em abril de 2010, nosso escritório de advocacia nasceu com a missão de oferecer suporte jurídico de excelência. Priorizamos um atendimento próximo e individualizado, buscando construir relações de confiança com nossos clientes. Atuamos com clareza e dedicação, sempre em busca de soluções práticas e bem fundamentadas, valorizando a ética como pilar essencial em cada etapa do nosso trabalho, desde a primeira consulta até a conclusão dos casos.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center order-2 lg:order-none">
                    <div className="mb-6">
                        <h2 className="text-4xl font-bold text-center text-white drop-shadow-md relative">
                            Visite-nos
                            <span className="block w-20 h-1 bg-white mt-2 mx-auto"></span>
                        </h2>
                    </div>
                    <div className="w-full max-w-lg h-[250px] sm:h-[300px] lg:h-[255px]">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.219976697583!2d-53.46611858437256!3d-24.95123118400423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d4d7f5e8e9eb%3A0x5c7f8e8e8f8e8f8e!2sR.%20Curitiba%2C%202751%20-%20Alto%20Alegre%2C%20Cascavel%20-%20PR%2C%2085805-050%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1677654321098!5m2!1spt-BR!2sus"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
