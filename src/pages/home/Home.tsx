
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center h-[79.8vh]">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 text-center">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white hover:bg-violet-500
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-64 h-64 md:w-80 md:h-80'
                            
                            
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home