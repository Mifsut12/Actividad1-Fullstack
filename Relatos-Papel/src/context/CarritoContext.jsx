import { Children, createContext } from "react";
import { useState } from "react";
import { Libro } from "../components/libro";
import { Carrito } from "../components/carrito";


export const CarritoContext = createContext();


//El carrito se comparte por toda la aplicación para las operaciones de borrado y de inserción de libros
export const CarritoProvider = ({ children }) => {
    //Al iniciar sesión de forma anonima el carrito por defecto estara vacio
    const [carrito ,setCarrito] = useState([])

    return (
        <CarritoContext.Provider value = {{carrito, setCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}


