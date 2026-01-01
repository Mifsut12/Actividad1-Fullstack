import { useNavigate } from "react-router-dom";
import { VolverAlInicio } from "./volverAlInicio";
import { Articulo } from "./articulo";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Header } from "./header";
import { Footer } from "./footer";
export const Checkout = () => {

    function pedido(){
        alert("Pedido tramitado, gracias por confiar en Relatos de Papel")
        carrito.splice(0, carrito.length)
        navigate("/components/inicio")
    }


    function CalcularPrecio(){
        let precioTotal = 0
        carrito.forEach((articulo) => precioTotal += articulo.precio)
        return precioTotal.toFixed(2)
    }

    //Importar el carrito
    let { carrito }   = useContext(CarritoContext)
    
    const navigate = useNavigate()
    //Valorar el carrito
    if (carrito.length > 0){
        return (

        <>
           
                <Header />
                <div className="checkout">
                    <h1 className="h1">Tu Carrito</h1>
                    {carrito.map((articulo,index) => (
                        <Articulo
                            key = {index}
                            nombre = {articulo.name}
                            precio = {articulo.precio}
                            id = {articulo.id}
                        />
                    )

                    )}
                    
                        
                    <p>Precio total : <CalcularPrecio /></p>
                    <button onClick={ () => pedido()}>Tramitar pedido</button>
                    <VolverAlInicio />
                    
                </div>
          <Footer />
        </>
        
    )
    }else{
        return ( <>
        <Header />
        <p>En estos momentos no has añadido nada al carrito</p>
        <VolverAlInicio />
        <Footer />
        </>)

        
    }
    
}