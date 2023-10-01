import Link from "next/link";

export default function Banner(): JSX.Element {
    return (
        <section className="bg-[url('../../public/BannerMobile.svg')] bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col gap-2 pt-20 pb-4 w-11/12 mx-auto text-white md:gap-5 md:pt-40 md:pb-8 xl:w-10/12">
                <h1 className="text-2xl font-bold md:text-[3.25rem]">Dezembro Promocional</h1>
                <p className="text-sm font-semibold md:text-[1.375rem]">Produtos selecionados com 33% de desconto</p>
                <Link 
                    href="/" 
                    className="bg-[#2A7AE4] py-3 px-4 text-sm font-semibold w-fit md:text-sm xl:text-base xl:font-normal"
                >
                    Ver Consoles
                </Link>
            </div>
        </section>
    )
}