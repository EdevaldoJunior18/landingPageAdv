import { Gavel, Users, ShoppingCart, Briefcase } from "lucide-react";

export default function Area() {
    return (
        <div id="atuação" className="w-full bg-[#F7F7F7] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-left text-gray-900 relative">
                    Áreas de atuação
                    <span className="block w-20 h-1 bg-[#FF5733] mt-2"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                    <div className="text-gray-800">
                        <Gavel size={40} className="text-[#FF5733] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Direito Civil</h3>
                        <p className="text-gray-600">
                            Presta consultoria e assessoria legal em contratos e negócios de diversas espécies, atuando inclusive, no contencioso, defendendo os interesses de seus clientes na esfera judicial.
                        </p>
                    </div>

                    <div className="text-gray-800">
                        <Users size={40} className="text-[#FF5733] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Direito de Família</h3>
                        <p className="text-gray-600">
                            Aqui você pode tirar suas dúvidas sobre a área do Direito das Famílias e das Sucessões. Por que optar por advogado especialista em Direito de Família?
                        </p>
                    </div>

                    <div className="text-gray-800">
                        <ShoppingCart size={40} className="text-[#FF5733] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Direito do Consumidor</h3>
                        <p className="text-gray-600">
                            A relação de consumo é verificada em diversos negócios jurídicos, de modo que merece a devida proteção legal.
                        </p>
                    </div>

                    <div className="text-gray-800">
                        <Briefcase size={40} className="text-[#FF5733] mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Direito Trabalhista</h3>
                        <p className="text-gray-600">
                            Nesta área, o escritório atua com uma assessoria consultiva, mediante respostas e consultas, pareceres e teses sobre casos concretos, bem como exame e elaboração de contratos de trabalho, aconselhamento para empresas e orientações especiais a empregados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
