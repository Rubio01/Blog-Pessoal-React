import { Link } from 'react-router-dom'
import { MessageSquare, Heart, Share2, Pencil, Trash } from 'lucide-react';
import Postagem from '../../../models/Postagem'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {

    const { usuario } = useContext(AuthContext)
    return (
        <article key={postagem.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 sm:p-6">
                {/* Author Info */}
                <div className="flex items-center mb-4">
                    <img
                        className="h-10 w-10 rounded-full"
                        src={`https://api.dicebear.com/7.x/avatars/svg?seed=${postagem.usuario?.nome}`}
                        alt="Avatar"
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {postagem.usuario?.nome}
                        </p>
                        <p className="text-xs text-gray-500">
                            {new Date(postagem.data).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    </div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {postagem.titulo}
                    </h2>
                    <p className="text-gray-700">
                        {postagem.texto}
                    </p>
                </div>

                {/* Tema Tag */}
                <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {postagem.tema?.descricao}
                    </span>
                </div>

                {/* Renderização condicional para o Administrador e para usuários */}
                {usuario.nome == "Rubio" || usuario.nome == "root" ? (<div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Heart className="h-5 w-5 mr-1" />
                        <span className="text-sm">Curtir</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <MessageSquare className="h-5 w-5 mr-1" />
                        <span className="text-sm">Comentar</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Share2 className="h-5 w-5 mr-1" />
                        <span className="text-sm">Compartilhar</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
                        <Pencil className="h-5 w-5 mr-1" />
                        <Link to={`/editarpostagem/${postagem.id}`} className="text-sm">Editar</Link>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                        <Trash className="h-5 w-5 mr-1" />
                        <Link to={`/deletarpostagem/${postagem.id}`} className="text-sm">Deletar</Link>
                    </button>
                </div>)

                    : (<div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                            <Heart className="h-5 w-5 mr-1" />
                            <span className="text-sm">Curtir</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                            <MessageSquare className="h-5 w-5 mr-1" />
                            <span className="text-sm">Comentar</span>
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                            <Share2 className="h-5 w-5 mr-1" />
                            <span className="text-sm">Compartilhar</span>
                        </button>
                    </div>)}

            </div>
        </article>

    )
}

export default CardPostagem