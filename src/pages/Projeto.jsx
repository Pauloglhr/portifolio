import { useParams } from "react-router-dom";
import projetos from "@/json/projetos.json";

const Projeto = () => {
    const parametros = useParams();
    const projetoAtual = projetos.find((projeto) => {
        return projeto.id === Number(parametros.id)
    })
    return(
        <h1>{projetoAtual.titulo}</h1>
    );
};

export default Projeto;