import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import "./ListaPostagem.css"

import CardPostagens from "../cardpostagens/CardPostagens";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaPostagens() {
    const navigate = useNavigate();
    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarPostagens();
    }, [postagens.length]);

    return (
        <div className="h-screen flex flex-col bg-[#efefef]">
            {/* Header - você pode adicionar uma barra de navegação aqui se desejar */}
            <div className="bg-[#a1b9d19d] p-4  ">
                <h1 className="text-2xl font-bold text-center text-[#ffffff]">Feed</h1>
            </div>

            {/* Feed Container com scroll */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6 lg:max-w-3xl lg:px-8">
                    {postagens.length === 0 ? (
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
                            {postagens.map((postagem) => (
                                <CardPostagens key={postagem.id} postagem={postagem} />

                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListaPostagens;