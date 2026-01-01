import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";


export const Header = ({carrito}) => {
    
    const navigate = useNavigate();
    const [nombre,setNombre] = useState("");


    function eventoCambio(e){
        setNombre(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault()
        navigate(`/components/busqueda/${nombre}` )
    }

    return (

        <>
            <header className = "header-footer">
                <h1 className="header-footer-text">Relatos de Papel</h1>
                <nav className ="nav">
                    <button onClick= { () =>  navigate("/components/carrito")}> Carrito</button>


                    <form onSubmit={handleSubmit}>
                    <label htmlFor="campoNombre">Introducir el nombre: </label>
                    <input type="text" name="campoNombre" id="campoNombre" value = {nombre} onChange = {eventoCambio} required/>
                    
                    <input type="submit" value="Buscar" /> 
                </form>
                </nav>

                
            </header>
        </>
        
    );
}
