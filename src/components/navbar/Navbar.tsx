function Navbar() {

    return (
        <>
            <div className="w-full flex justify-center py-4 bg-gray-900 text-white">
                <div className="container flex flex-col items-center sm:flex-row sm:justify-between text-lg flex-wrap">
                    <h1 className="font-bold text-3xl">Blog Pessoal</h1>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <div className="hover:text-violet-300 cursor-pointer">
                            Postagens
                        </div>
                        <div className="hover:text-violet-300 cursor-pointer">
                            Temas
                        </div>
                        <div className="hover:text-violet-300 cursor-pointer">
                            Cadastrar tema
                        </div>
                        <div className="hover:text-violet-300 cursor-pointer">
                            Perfil
                        </div>
                        <div className="hover:text-violet-300 cursor-pointer">
                            Sair
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;