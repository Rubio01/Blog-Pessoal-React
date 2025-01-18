import Postagem from "./Postagem";

export default interface Temas{
    id: number;
    descricao: string;
    Postagem?: Postagem | null;
}