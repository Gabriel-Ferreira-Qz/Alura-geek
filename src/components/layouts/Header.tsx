import Image from "next/image"
import Link from "next/link"

import Logo from "../../../public/Logo.svg" 
import Lupa from "../../../public/Icone.svg"

export default function Header(): JSX.Element {
    return (
        <header className="flex items-center justify-between w-11/12 mx-auto py-4 xl:w-10/12 xl:py-8">
            <div className="flex gap-8 items-center md:w-full">
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt="Logo da empresa 'AluraGeek'"
                        className="w-28 xl:w-[176px]"
                    />
                </Link>
                <div className="relative w-2/4 hidden md:inline-block xl:w-5/12 ">
                    <input
                        type="text"
                        placeholder="O que deseja encontrar?"
                        className="bg-[#F5F5F5] rounded-full px-4 py-3 w-full"
                    />

                    <Image
                        src={Lupa}
                        alt="Ícone de pesquisa"
                        className="absolute top-[24%] right-[3%]"
                    />
                </div>
            </div>

            <Link
                href="/login"
                className="border border-[#2A7AE4] py-3 px-[2.938rem] text-[#2A7AE4] font-semibold xl:py-4 xl:px-[4.375rem] xl:font-normal"
            >
                Login
            </Link>

            <div className="md:hidden">
                <Image
                    src={Lupa}
                    alt="Ícone de pesquisa"
                />
            </div>
        </header>
    )
}