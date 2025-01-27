import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import './Navbar.css';
import {
  Home,
  ScrollText,
  Tags,
  PlusCircle,
  UserCircle,
  LogOut,
  Laptop,
  Coffee
} from 'lucide-react';
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
  }

  let component: ReactNode

  if (usuario.token !== "") {

    component = (
      <div className='w-full bg-[#5b80a0] text-gray-100 py-4 px-12 flex flex-col items-center flex-wrap md:flex-row md:justify-between'>
        <div className="text-center flex items-center md:gap-2">
          <Link to="/home" className="text-2xl font-bold flex items-center gap-4 md:gap-2">
            <Coffee className="h-8 w-8" />
            Blog Pessoal
          </Link>
        </div>

        <div className='flex flex-wrap text-center justify-center gap-5 md:gap-2'>
          <Link to='/home' className="custom-button flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to='/postagens' className="custom-button flex items-center gap-1">
            <ScrollText className="h-4 w-4" />
            Postagens
          </Link>
          <Link to='/temas' className='custom-button flex items-center gap-1'>
            <Tags className="h-4 w-4" />
            Temas
          </Link>
          <Link to='/cadastrartema' className='custom-button flex items-center gap-1'>
            <PlusCircle className="h-4 w-4" />
            Cadastrar tema
          </Link>
          <Link to='Perfil' className="custom-button flex items-center gap-1">
            <UserCircle className="h-4 w-4" />
            Perfil
          </Link>
          <Link to='/login' onClick={logout} className='custom-button flex items-center gap-1'>
            <LogOut className="h-4 w-4" />
            Sair
          </Link>
        </div>
      </div>

    )

  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar