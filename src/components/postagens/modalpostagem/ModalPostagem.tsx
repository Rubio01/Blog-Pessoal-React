import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';
import { MessageSquare } from 'lucide-react';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='button3d-postagem'>
                             
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;