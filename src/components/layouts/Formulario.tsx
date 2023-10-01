export default function Formulario(): JSX.Element {
    return (
        <section className="bg-[#F5F5F5]">
            <form className=" flex flex-col gap-4 text-center pt-24 pb-20 mx-auto w-4/5 md:pt-11 md:pb-16 md:w-2/5 xl:py-24 xl:w-4/12">
                <h2 className="font-bold text-[#464646]">Iniciar Sessão</h2>

                <input
                    type="email"
                    placeholder="Escreva seu email"
                    className="py-4 px-3 rounded shadow-md"
                />

                <input
                    type="password"
                    placeholder="Escreva sua senha"
                    className="py-4 px-3 rounded shadow-md"
                />

                <button 
                    type="submit"
                    className="py-3 px-8 w-fit mx-auto bg-[#2A7AE4] text-zinc-50 font-semibold xl:py-5 xl:w-full xl:mx-0"
                >
                    Entrar
                </button>
            </form>
        </section>
    )
}   