import { useParams } from "react-router-dom";


const Projeto = () => {
    const parametros = useParams()
    return(
        <h1>Projeto {parametros.id}</h1>
    );
};

export default Projeto;