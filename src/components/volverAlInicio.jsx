import { useNavigate } from "react-router-dom";
import { Inicio } from "./inicio";

export const VolverAlInicio = () => {

    const navigate = useNavigate();
    return (

        <>
            <button onClick={ () => {navigate("/components/inicio")}}>Volver a la página principal</button>
        </>
        
    );
}