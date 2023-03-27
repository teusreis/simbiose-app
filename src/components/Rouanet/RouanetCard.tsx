import React from "react";
import HeartIcon from "../../assets/icons/HeartIcon";
import Button from "../gererics/Button";

interface props {
    className?: string;
    id: number;
    segmento: string;
    nome: string;
    objetivo?: string;
    uf: string;
    municipio: string;
    valor_captado: string;
    valor_aprovado: string;
}

function RouanetCard({
    id,
    className,
    nome,
    objetivo,
    valor_captado,
    valor_aprovado,
    uf,
    municipio,
    segmento,
}: props) {
    const sliceObjetivo = (): string => {
        return objetivo ? objetivo.slice(0, 150) : "---";
    };

    const formatMoney = (moneyValue: string): string => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(Number(moneyValue));
    };

    return (
        <div
            className={`${className} border border-gray-300 rounded px-4 py-5 shadow-md flex flex-col gap-3`}
        >
            <span className="block rounded p-2 font-bold text-opacity-50 mb-2 bg-yellow-300 text-yellow-700 bg-opacity-30">
                {segmento}
            </span>

            <h2 className="font-semibold mb-1 text-lg">{nome}</h2>

            <span className="flex items-center">
                {municipio} . {uf}
            </span>

            <p>{sliceObjetivo()}</p>

            <div className="mt-auto">
                Aprovado{" "}
                <span className="font-semibold mb-2">
                    {formatMoney(valor_aprovado)}
                </span>
            </div>
            <div>
                Captado{" "}
                <span className="font-semibold mb-2">
                    {formatMoney(valor_captado)}
                </span>
            </div>

            <div className="flex gap-2 items-center">
                <Button>ADICIONAR</Button>

                <HeartIcon />
            </div>
        </div>
    );
}

export default RouanetCard;
