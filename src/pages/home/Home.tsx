import { useContext, useEffect, useState } from "react"
import { Sparkles, MessageSquare } from 'lucide-react';
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import { AuthContext } from "../../contexts/AuthContext"
import Carrossel from "./Carrossel"
import "./home.css"

function Home() {
    const { usuario } = useContext(AuthContext)

    const [text, setText] = useState('');
  const fullText = "Compartilhe suas ideias...";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#efefef] min-h-screen relative overflow-hidden">
      <div className="design-element design-element-1" />
      <div className="design-element design-element-2" />
      
      <div className="flex flex-col justify-between lg:flex-row min-h-screen">
        <div className="mx-auto lg:w-1/2 flex lg:justify-center lg:items-center px-8 relative">
          <div className="w-full mt-10 lg:mx-auto lg:max-w-xl space-y-6 lg:mb-20 text-center lg:text-start">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <h2 className="text-4xl md:text-6xl font-bold welcome">
                Bem Vinde! {usuario.nome}
              </h2>
            </div>
            
            <h2 className="modern-title">
              {text}
              <span className="animate-blink"></span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600">
              Expresse aqui seus pensamentos e opiniões
            </p>
                        < div className="pt-4">
                       
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