import { useState, useContext, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tema from "../../../models/Temas"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { MessageSquare, Heart, Pencil, Trash, IterationCw } from 'lucide-react';
import { ToastAlerta } from "../../../utils/ToastAlerta"


function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Tema apagado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar o tema.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center pt-10'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl justify-between'>

                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="p-4 sm:p-6 ">
                        <header className='py-2 px-6  text-gray-900 font-bold text-2xl'>
                            Tema
                        </header>
                        <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>

                        <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                            <button className="flex items-center text-gray-600 hover:text-green-500 transition-colors" onClick={retornar}>
                                <IterationCw className="h-5 w-5 mr-1" />
                                <span>Manter</span>
                            </button>

                            <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors" onClick={deletarTema}>
                                <Trash className="h-5 w-5 mr-1" />
                                {isLoading ?
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    /> :
                                    <span>Deletar</span>
                                }
                            </button>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
export default DeletarTema