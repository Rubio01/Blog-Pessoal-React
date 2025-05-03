import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {
    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (!usuario?.token) {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate("/")
        }
    }, [usuario?.token])

    const foto = usuario?.foto?.trim() === ""
        ? "https://imgur.com/1FbI7o4.jpg"
        : usuario?.foto;

    return (
        <div className='w-full h-screen flex flex-col'>
            <img
                className='w-full h-1/2 object-cover border-b-8 border-white rounded-2xl'
                src="https://imgur.com/7ZctaGH.png"
                alt="Capa do Perfil"
            />

            <img
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                src={foto}
                alt={`Foto de perfil de ${usuario?.nome || "Usuário"}`}
            />

            <div
                className="relative mt-[-6rem] h-1/2 flex flex-col rounded-2xl
                bg-[#2f5075ff] text-white text-2xl items-center justify-center"
            >
                <div className='mt-[-10rem] text-center'>
                    <p>Nome: {usuario?.nome}</p>
                    <p>Email: {usuario?.usuario}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Perfil
