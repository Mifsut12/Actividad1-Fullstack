import { Navigate, useNavigate } from "react-router-dom";
import { VolverAlInicio } from "./volverAlInicio";
import { Articulo } from "./articulo";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Header } from "./header";
import { Footer } from "./footer";
export const Carrito = () => {

    //Importar el carrito
    let { carrito }   = useContext(CarritoContext)
    
    const navigate = useNavigate()
    //Valorar el carrito
    if (carrito.length > 0){
        return (

        <>
            
                <Header />
                <h1 className="h1">Tu Carrito</h1>
                <div className ="carrito">
                    
                    {carrito.map((articulo,index) => (
                        <Articulo
                            key = {index}
                            nombre = {articulo.name}
                            precio = {articulo.precio}
                            id = {articulo.id}
                        />
                    )

                    )}
                    
                    </div>

                    <button onClick={ () => navigate('/components/checkout')}>Proceder al pago</button>
                    <VolverAlInicio />
                    
                

                <Footer />
            
        </>
        
    )
    }else{
        return ( <>
        <Header />
        <p className="mensaje">En estos momentos no has añadido nada al carrito</p>
        <VolverAlInicio />
        <Footer />
        </>)

        
    }
    
}