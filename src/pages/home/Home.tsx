import { useContext, useEffect, useState } from "react"
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import { AuthContext } from "../../contexts/AuthContext"
import Carrossel from "./Carrossel"
import "./home.css"

function Home() {
    const { usuario } = useContext(AuthContext)

    const [text, setText] = useState('');
    const fullText = usuario.nome;
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            if (isDeleting) {
                setText(fullText.substring(0, currentIndex - 1));
                currentIndex--;

                if (currentIndex === 0) {
                    isDeleting = false;
                    timeoutId = setTimeout(type, 1000);
                    return;
                }
            } else {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;

                if (currentIndex === fullText.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(type, 2000);
                    return;
                }
            }

            timeoutId = setTimeout(type, isDeleting ? 50 : 150);
        };

        timeoutId = setTimeout(type, 1000);
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <div className="bg-[#efefef] min-h-screen">
            <div className="flex flex-col justify-between lg:flex-row min-h-screen">
                {/* Welcome Text Section */}
                <div className=" mx-auto  lg:w-1/2 flex lg:justify-center lg:items-center px-8">
                    <div className="w-full mt-10 lg:mx-auto lg:max-w-xl space-y-6 lg:mb-20 text-center lg:text-start">
                        <h2 className=" text-4xl md:text-6xl text-slate-950 font-bold ">
                            Seja Bem Vinde!
                        </h2>
                        <h2 className="modern-title">
                            {text}
                            <span className="animate-blink"></span>
                        </h2>
                        <p className="text-xl md:text-2xl">
                            Expresse aqui seus pensamentos e opniões </p>
                        <div className="pt-4">
                            <ModalPostagem />
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="lg:w-1/2 h-[500px] lg:h-screen">
                    <Carrossel />
                </div>
            </div>
        </div>
    )
}

export default Home