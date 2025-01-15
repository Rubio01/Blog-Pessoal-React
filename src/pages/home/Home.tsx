
function Home() {
    return (
        <>
            <div className="bg-gray-900 flex justify-center">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white text-center'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4  ">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4
                                            hover:bg-violet-500 cursor-pointer'
                            >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home