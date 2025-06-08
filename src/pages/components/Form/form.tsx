import React from 'react';

const Form = () => {
    return (
        <div className="w-full bg-white flex justify-center items-center py-12">
            <div className="max-w-[960px] w-full px-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 uppercase border-b-2 border-gray-400 pb-2">Fale Conosco</h2>
                <form className="w-full mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Nome:"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email:"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Telefone / Whatsapp:"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Empresa:"
                        className="w-full p-2 border rounded"
                    />
                    <div className="flex space-x-2">
                        <select className="w-1/2 p-2 border rounded">
                            <option>UF:</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Cidade:"
                            className="w-1/2 p-2 border rounded"
                        />
                    </div>
                    <textarea
                        placeholder="Deixe sua mensagem aqui:"
                        className="w-full p-2 border rounded h-24"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white p-2 rounded"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;