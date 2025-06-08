import img from "../../assets/images/news.png";

const posts = [
    {
        id: 1,
        title: "Benefícios do Async/Await",
        date: "02/06",
        description:
            "O uso de Async/Await traz uma forma mais limpa e legível de lidar com código assíncrono em JavaScript. Em vez de se perder em múltiplos .then() de Promises encadeadas, o Async/Await permite escrever funções assíncronas com uma sintaxe que se assemelha ao código síncrono...",
        imageUrl: img,
    },
    {
        id: 2,
        title: "Benefícios do Async/Await",
        date: "02/06",
        description:
            "O uso de Async/Await traz uma forma mais limpa e legível de lidar com código assíncrono em JavaScript. Em vez de se perder em múltiplos .then() de Promises encadeadas, o Async/Await permite escrever funções assíncronas com uma sintaxe que se assemelha ao código síncrono...",
        imageUrl: img,
    },
    {
        id: 3,
        title: "Benefícios do Async/Await",
        date: "02/06",
        description:
            "O uso de Async/Await traz uma forma mais limpa e legível de lidar com código assíncrono em JavaScript. Em vez de se perder em múltiplos .then() de Promises encadeadas, o Async/Await permite escrever funções assíncronas com uma sintaxe que se assemelha ao código síncrono...",
        imageUrl: img,
    },
];

export default function BlogNews() {
    return (
        <section className="py-12 px-4 w-full flex justify-center">
            <div className="max-w-[960px] w-full">
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-1">
                    NOVIDADES DO NOSSO BLOG
                </h2>
                <div className="w-full max-w-[250px] h-0.5 bg-gray-400 mx-auto mb-12"></div>

                <div className="flex flex-col gap-12">
                    {posts.map((post, index) => (
                        <div
                            key={post.id}
                            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                } gap-6 items-center ${index === 0 || index === 2 ? "bg-gray-200" : ""
                                }`}
                            style={{ maxWidth: "100%", height: "240px" }}
                        >
                            {index === 1 ? (
                                <>
                                    <div
                                        className={`max-w-xl ${index === 1 ? "text-left" : "text-center md:text-left"} order-2 md:order-2 pl-4`}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-gray-800 inline-flex items-center gap-1 hover:underline"
                                        >
                                            Veja mais →
                                        </a>
                                    </div>
                                    <div className="relative order-1 md:order-1">
                                        <img
                                            src={img.src}
                                            alt="Illustration of technological solutions"
                                            className="w-[280px] h-[240px]"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-white px-4 py-2">
                                            <span className="text-xl font-bold text-blue-900">
                                                {post.date}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative flex justify-start">
                                        <img
                                            src={img.src}
                                            alt="Illustration of technological solutions"
                                            className="w-[280px] h-[240px]"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-white px-4 py-2">
                                            <span className="text-xl font-bold text-blue-900">
                                                {post.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`max-w-xl ${index === 1 ? "text-left" : "text-center md:text-left"} order-2 md:order-2 pl-4`}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-gray-800 inline-flex items-center gap-1 hover:underline"
                                        >
                                            Veja mais →
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}