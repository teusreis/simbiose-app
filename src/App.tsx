import { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";
import RouanetCard from "./components/Rouanet/RouanetCard";
import Rouanet from "./data/Interfaces/Rouanet";

function App() {
    const [rouanet, setRouanet] = useState<Rouanet[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isLoadAll, setIsLoadAll] = useState(false);

    const getRouanet = async () => {
        setIsLoading(true);

        try {
            const params = {
                loadAll: isLoadAll,
            };

            const data = await api.get("/rouanet", { params });

            isLoadAll ? setRouanet(data.data) : setRouanet(data.data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getRouanet();
    }, [isLoadAll]);

    return (
        <div className="mx-auto max-w-6xl px-2 py-4">
            <h1 className="text-2xl mt-2 mb-10 font-semibold text-green-600 ">
                Ver outros Projetos do Proponente
            </h1>

            <main>
                {isLoading ? (
                    <div className="text-xl font-semibold text-gray-600">Carragando...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {rouanet.map((r) => (
                            <RouanetCard
                                key={r.id_projeto}
                                id={r.id_projeto}
                                nome={r.nome}
                                objetivo={r.objetivo}
                                valor_aprovado={r.valor_aprovado}
                                valor_captado={r.valor_captado}
                                segmento={r.segmento}
                                uf={r.uf}
                                municipio={r.municipio}
                                className=""
                            />
                        ))}
                    </div>
                )}
            </main>

            <footer className="flex justify-between items-center py-5 px-2">
                <div></div>
                {!isLoadAll && (
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsLoadAll(true)}
                    >
                        <span className="block">+</span>
                        VER TODOS
                    </div>
                )}
            </footer>
        </div>
    );
}

export default App;
