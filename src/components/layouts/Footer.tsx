import Image from "next/image"

import Logo from "../../../public/Logo.svg"
import Link from "next/link"
 

interface Link {
    nome: string
    href: string
}

const links: Link[] = [
    {
        nome: "Quem somos nós",
        href: "#"
    },
    {
        nome: "Política de privacidade",
        href: "#"
    },
    {
        nome: "Programa fidelidade",
        href: "#"
    },
    {
        nome: "Nossas lojas",
        href: "#"
    },
    {
        nome: "Quero ser franqueado",
        href: "#"
    },
    {
        nome: "Anuncie aqui",
        href: "#"
    }
]


export default function Footer(): JSX.Element {
    return (
        <section className="text-center bg-[#EAF2FD] text-[#464646] py-4 md:py-8 xl:py-16">
            <div className="md:flex md:gap-24 md:w-11/12 md:mx-auto xl:grid xl:grid-cols-2 xl:gap-28 xl:w-10/12">
                <div className="md:text-start xl:flex xl:justify-between">
                    <div>
                        <Image
                            src={Logo}
                            alt="Logo da empresa 'Alura Geek'"
                            width={176}
                            height={50}
                            className="inline-block max-w-none"
                        />
                    </div>

                    <div className="flex flex-col gap-4 mt-4 md:gap-6 xl:m-0">
                        {links.map((link, k) => (
                            <Link
                                key={k}
                                href={link.href}
                                className="font-medium"
                            >
                                {link.nome}
                            </Link>
                        ))}
                    </div>
                </div>

                <form className="mt-8 w-11/12 mx-auto md:mt-0 xl:w-full">
                    <h5 className="font-bold text-start">Fale conosco</h5>

                    <fieldset className="flex flex-col gap-4 my-2">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="py-4 px-3 rounded shadow-md"
                        />
                        <textarea
                            name="menssagem"
                            placeholder="Escreva sua mensagem"
                            className="rounded shadow-md resize-none px-4 pt-4 pb-8 "
                        ></textarea>

                        <button className="text-start w-fit py-3 px-4 bg-[#2A7AE4] text-zinc-50">Enviar mensagem</button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}