import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Temas";
import CardTemas from "../cardtemas/CardTemas";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTemas()
    }, [temas.length])

    return (
        <>
            <div className="h-screen flex flex-col bg-[#efefef]">
                <div className="flex-1 overflow-y-auto no-scrollbar">
                    <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-2xl lg:px-8">
                        {temas.length === 0 ? (
                            <div className="h-full flex items-center justify-center">
                                <DNA
                                    visible={true}
                                    height="200"
                                    width="200"
                                    ariaLabel="dna-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="dna-wrapper mx-auto"
                                />
                            </div>
                        ) : (

                            <div className="space-y-6 pb-6">
                                {temas.map((tema) => (
                                    <CardTemas key={tema.id} tema={tema} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}

export default ListaTemas;