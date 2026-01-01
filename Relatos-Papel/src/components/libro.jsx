import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import datosLibros from "../datos/datos";
import  { NotFound } from "./noEncontrado";
import { CarritoContext } from "../context/CarritoContext";
import { Header } from "./header";
import { Footer } from "./footer";



export const Libro = () => {
  // importo el carrito
  let { carrito }   = useContext(CarritoContext)

  //Funcione encargada de buscar el libro y añadirlo al carrito
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
  const { id } = useParams()
  const libros = datosLibros
  //Buscar el libro
  let libro = undefined
  
  libro = libros.find((libroAbuscar) => libroAbuscar.id == id)

  if(libro === undefined){
    return(
      <><Header /> <NotFound /> <Footer/></>
    )
        
  }else{
    return <>
           <Header />
            <div className="libroIndividual">
              <h3> {libro.name}</h3>
              <p>Autor: {libro.autor}</p>
              <p>Genero: {libro.Genero}</p>
              <p>Precio: {libro.precio}</p>

              <button onClick = {() => añadirAlCarrito(id)}>Añadir al Carrito</button>

              <button onClick = {() => navigate("/components/inicio")}> Volver al inicio</button>
            </div>
            
            
            
            <Footer />

            </>
          
  }
  
}
