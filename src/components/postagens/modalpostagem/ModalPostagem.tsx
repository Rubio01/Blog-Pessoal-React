import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';
import { MessageSquare } from 'lucide-react';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
    // Detectar largura da tela
    const larguraJanela = window.innerWidth;

    // Aplicar largura responsiva
    const estiloResponsivo = {
        width: larguraJanela < 768 ? '90%' : '75%',
        maxWidth: '800px',
    };

    return (
        <Popup 
            trigger={
                <button className='button3d-postagem'>
                    Nova Postagem
                </button>
            }
            modal
            contentStyle={estiloResponsivo}
        >
            <FormPostagem />
        </Popup>
    );
}

export default ModalPostagem;
