import datosLibros from "../datos/datos";
import { NotFound } from "./noEncontrado";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { VolverAlInicio } from "./volverAlInicio";
import { Header } from "./header";
import { Footer } from "./footer";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";


export const Buscar = () => {

    let { carrito }   = useContext(CarritoContext)
    function añadirAlCarrito(id){
    //Control de erorres
            let libro = datosLibros.find((libroAbuscar) => libroAbuscar.id == id)

            if(libro == undefined){
                navigate("/components/fracaso")
            }else{
                carrito.push(libro)
                navigate("/components/exito")
            }
        }


    const navigate = useNavigate()
    const [libroABuscar, setAutorABuscar] = useState(useParams())
    
        
    const libro = datosLibros.find((libroAbuscar) => libroAbuscar.name == libroABuscar.nombre)

    console.log(libroABuscar.nombre)
    if(libro != undefined){
        return(<>
        <Header />
            <div className="libroIndividual">
                
                <h3> {libro.name}</h3>
                <p>Autor: {libro.autor}</p>
                <p>Genero: {libro.Genero}</p>
                <p>Precio: {libro.precio}</p>
                <button onClick = {() => añadirAlCarrito(libro.id)}>Añadir al Carrito</button>
            </div>
            
        <VolverAlInicio />

        <Footer />
    </>)
    }else{
    
        return(<> <NotFound /> </>)
    }
        
        
   

   
    
}


