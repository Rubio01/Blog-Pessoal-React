import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate("/")
        }
    }, [usuario.token])
    var foto = "";
    if (usuario.foto == "") {
        foto = "https://imgur.com/1FbI7o4.jpg"
    } else {
        foto = usuario.foto
    }

    return (
        <div className='w-full min-h-screen overflow-hidden'>
            <img
                className='w-full h-72 object-cover border-b-8 border-white rounded-2xl'
                src="https://imgur.com/7ZctaGH.png" alt="Capa do Perfil" />

            <img
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                src={foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div
                className="relative mt-[-6rem] h-72 flex flex-col rounded-2xl
                bg-[#2f5075ff] text-white text-2xl items-center justify-center"
            >
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>
        </div>
    )
}

export default Perfil