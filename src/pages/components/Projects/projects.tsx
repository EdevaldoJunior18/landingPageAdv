import p1 from "../../assets/images/130d69186251af27933c613f4a2c6b02b6d34ab5.png";

export default function Projects() {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="max-w-[960px] w-full px-4 py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-700 inline-block relative pb-2">
                        PROJETOS
                        <span className="block h-0.5 bg-gray-400 absolute bottom-0 left-0 right-0"></span>
                    </h2>
                </div>
                <p className="mt-4 text-lg text-center text-gray-500">
                    Confira alguns de nossos últimos projetos
                </p>

                <div className="flex justify-center gap-6 mt-6">
                    <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">
                        TODOS
                    </button>
                    <button className="text-gray-400 font-semibold">
                        APLICATIVOS
                    </button>
                    <button className="text-gray-400 font-semibold">
                        SITES
                    </button>
                    <button className="text-gray-400 font-semibold">
                        LANDING PAGES
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {[
                        { rotate: true, type: "phone" },
                        { rotate: false, type: "laptop" },
                        { rotate: true, type: "phone" },
                        { rotate: false, type: "laptop" },
                        { rotate: true, type: "phone" },
                        { rotate: false, type: "laptop" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-64"
                        >
                            <img
                                src={p1.src}
                                alt={`Projeto ${index + 1}`}
                                className={`w-32 h-auto ${item.rotate ? "rotate-12" : ""} ${item.type === "phone" ? "" : "scale-125"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}