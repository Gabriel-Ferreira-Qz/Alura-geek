import { getProducts } from "@/components/shop/produtos"

import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
    const resposta = await getProducts()

    return resposta?.map((e) => ({
        categoria: e.categoria
    }))
}

export const dynamicParams = false

export default async function Categoria({ params }: { params: { categoria: string } }) {

    const { categoria } = params

    const products = await getProducts()

    return (
        <div className="grid grid-cols-2 gap-4 mt-4 mb-8 md:grid-cols-4 xl:grid-cols-6">
            {products?.filter((e) => e.categoria === categoria)
                .map((produto, k) => (
                    <div
                        key={k}
                        className="text-sm font-bold flex flex-col gap-1"
                    >
                        <Image
                            src={produto.imagem}
                            alt={"Imagem do produto " + produto.nome}
                            width={156}
                            height={176}
                            className="w-full"
                        />
                        <h3 className="font-medium">{produto.nome}</h3>
                        <p className="text-base">R$ {produto.preco}</p>
                        <Link
                            href={`/categoria/${categoria}/${produto.id}`}
                            className="text-[#2A7AE4] md:text-base"
                        >
                            Ver Produto
                        </Link>
                    </div>
                ))}
        </div>
    )
}