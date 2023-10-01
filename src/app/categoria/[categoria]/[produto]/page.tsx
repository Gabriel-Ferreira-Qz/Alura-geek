import { getProducts } from "@/components/shop/produtos"
import Image from "next/image"
import Link from "next/link"

interface Params {
    params: {
        categoria: string,
        produto: string
    }
}

export async function generateStaticParams() {
    const produtos = await getProducts()

    return produtos ? produtos.map((e) => ({
        categoria: e.categoria,
        produto: e.id
    })) : []
}

async function getPost(produto: string) {
    const produtos = await getProducts()

    const produtoSelecionado = produtos?.filter((e) => e.id === produto)

    return produtoSelecionado
}

export const dynamicParams = false

export default async function Produto({ params }: Params) {

    const { produto, categoria } = params

    const post = await getPost(produto)

    const api = await getProducts()

    const produtoSimilar = api?.filter((e) => e.id !== produto && e.categoria === categoria)

    return (
        <section>
            <div>
                {post?.map((produto, k) => (
                    <div
                        key={k}
                        className="text-[#464646]"
                    >
                        <Image
                            src={produto.imagem}
                            width={360}
                            height={192}
                            alt="teste"
                            className="w-full h-[50vh] object-cover"
                        />
                        <div className="w-11/12 mx-auto">
                            <div className="my-4">
                                <h1 className="text-[1.375rem] font-medium">{produto.nome}</h1>
                                <h3 className="text-base font-bold my-2">R$ {produto.preco}</h3>
                                <p className="text-sm">{produto.descricao}</p>
                            </div>

                            <div>
                                <h2 className="text-[1.375rem] font-bold">Produtos similares</h2>
                                <div className="grid grid-cols-2 gap-4 mt-4 mb-8 md:grid-cols-4 xl:grid-cols-6">
                                    {produtoSimilar?.map((produto, k) => (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}