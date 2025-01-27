import { Link } from 'react-router-dom'
import Tema from '../../../models/Temas'
import { MessageSquare, Heart, Share2, Pencil, Trash } from 'lucide-react';

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 sm:p-6">
                <header className='py-2 px-6  text-gray-900 font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>

                <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                    <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
                        <Pencil className="h-5 w-5 mr-1" />
                        <Link to={`/editartema/${tema.id}`} className="text-sm">Editar</Link>
                    </button>

                    <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                        <Trash className="h-5 w-5 mr-1" />
                        <Link to={`/deletartema/${tema.id}`} className="text-sm">Deletar</Link>
                    </button>
                </div>


            </div>

        </div>
    )
}

export default CardTemas