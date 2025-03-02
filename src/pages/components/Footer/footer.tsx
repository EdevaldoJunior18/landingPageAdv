export default function Footer() {
    return (
        <footer id="contato" className="w-full bg-[#FFFFFF] py-6 sm:py-10 text-black flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto flex items-center">
            </div>
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start text-left space-y-6 md:space-y-0 py-4 sm:py-6">
                <div className="w-full md:w-1/3 flex flex-col items-start">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">CONTATO</h3>
                    <p className="text-sm sm:text-base text-gray-600">44 9999-9999 - João</p>
                    <p className="text-sm sm:text-base text-gray-600">44 9999-9999 - João</p>
                    <p className="text-sm sm:text-base text-gray-600">joao@contato.com</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-start md:items-center text-left md:text-center">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">HORÁRIO DE ATENDIMENTO</h3>
                    <p className="text-sm sm:text-base text-gray-600">Segunda à Sexta: 08h - 18h</p>
                    <p className="text-sm sm:text-base text-gray-600">Sábado: 08h - 16h</p>
                    <p className="text-sm sm:text-base text-gray-600">Domingo: Não há atendimento</p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">ENDEREÇO</h3>
                    <p className="text-sm sm:text-base text-gray-600">R. Curitiba, 2751 - Centro, Cascavel - PR</p>
                    <p className="text-sm sm:text-base text-gray-600">CEP: 85876-564</p>
                </div>
            </div>

            <div className="w-full border-t-2 border-gray-300 max-w-7xl mx-auto mt-6 sm:mt-10"></div>

            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-balck-500 px-4">
                Copyright 2025 • Desenvolvido por DevSpray
            </div>
        </footer>
    );
}