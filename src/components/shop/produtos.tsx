import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import stripe from "@/lib/stripe"

export async function getProducts() {
    try {
        const stripeProducts = await stripe.products.list({
            limit: 18,
            expand: ["data.default_price"],
        })

        return stripeProducts.data.map((p) => {
            return {
                id: p.id,
                nome: p.name,
                descricao: p.description ?? "",
                preco: (p.default_price as Stripe.Price).unit_amount_decimal ?? "0",
                imagens: p.images,
                imagem: p.images[0],
                secao: p.metadata.secao,
                categoria: p.metadata.categoria
            }
        })
    } catch (e) {
        console.log(e)
    }
}


export const secoes = ['Star Wars', 'Consoles', 'Diversos']

export default async function ListaDeProdutos() {
    
    const products = await getProducts()

    console.log(products)

    return (
        <>
            {secoes.map((secao, k) => (
                <section key={k} className="w-11/12 mx-auto my-4 text-[#464646] md:my-8 xl:w-10/12">
                    <div className="flex justify-between items-center">
                        <Link
                            href={`categoria/${secao}`} 
                            className="text-[1.375rem] font-bold md:text-[1.375rem] xl:text-[2rem]">
                            {secao}
                        </Link>
                        <p className="text-sm text-[#2A7AE4] font-bold cursor-pointer md:text-base"> Ver tudo ➔</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 mb-8 md:grid-cols-4 xl:grid-cols-6">
                        {products?.filter((product) => product.secao === secao)
                            .map((produto, k) => (
                                <div
                                    key={k}
                                    className="text-sm font-bold flex flex-col gap-1"
                                >
                                    <Image
                                        src={produto.imagem}
                                        alt={"Imagem do produto " + produto.nome}
                                        width={156}
                                        height={174}
                                        className="w-full"
                                    />
                                    <h3 className="font-medium">{produto.nome}</h3>
                                    <p className="text-base">R$ {produto.preco}</p>
                                    <Link
                                        href={`categoria/${produto.categoria}/${produto.id}`}
                                        className="text-[#2A7AE4] md:text-base"
                                    >
                                        Ver Produto
                                    </Link>
                                </div>
                            ))}
                    </div>
                </section>
            ))}
        </>
    )
}

