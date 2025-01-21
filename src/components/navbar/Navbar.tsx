import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full bg-indigo-900 text-white py-4 px-8 flex flex-col items-center flex-wrap md:flex-row md:justify-between'>
                
                <div className="text-center">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
                </div>

               
                <div className='flex flex-wrap text-center justify-center gap-4 '>
                    <span>Postagens</span>
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                    <span>Perfil</span>
                    <Link to='/login' onClick={logout} className='hover:underline'>Sair</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar