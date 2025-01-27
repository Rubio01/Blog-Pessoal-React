import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }



    return (
        <>
            <div className="flex flex-col font-bold md:h-screen lg:flex-row ">
                <div className=' w-screen  flex justify-center items-center mr-5'>
                    <form className="py-10 flex justify-center items-center flex-col gap-4 w-3/4"
                        onSubmit={login}>
                        <h2 className="text-slate-900 text-5xl">Entrar</h2>
                        <div className="flex flex-col w-full">
                            <label htmlFor="usuario">Usuário</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Usuario"
                                className="border-l-2 border-b-2 border-slate-700 p-2 rounded"
                                value={usuarioLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                className="border-l-2 border-b-2 border-slate-700 p-2 rounded "
                                value={usuarioLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <button
                            type='submit' className='button3d flex justify-center'
                        >

                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>Entrar</span>
                            }
                        </button>

                        <hr className="border-slate-800 w-full" />

                        <p className='text-center'>
                            Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-[#4b6b86] hover:underline hover:text-[#b69fec]">
                                Cadastre-se
                            </Link>
                        </p>
                    </form>
                </div>

                <video src="https://ik.imagekit.io/hfg98coqx/teste4Login.mp4?updatedAt=1737729301937" loop autoPlay muted></video>

            </div>
        </>
    );
}

export default Login;
