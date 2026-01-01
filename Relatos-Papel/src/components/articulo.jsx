import { useContext } from "react"
import {  useNavigate } from "react-router-dom"
import { CarritoContext } from "../context/CarritoContext"



export const Articulo = ({id,nombre, precio}) => {
    let { carrito }   = useContext(CarritoContext)
    const navigate = useNavigate()

    //Función para borrar un artículo del carrito
    function borrar(id){
        //Importar el carrito
        
        
        //Buscar el artículo por el id 
        let articulo = carrito.find((articuloAbuscar) => articuloAbuscar.id == id)

        if(articulo == undefined){
             navigate("/components/fracaso")
        }else{
            if(carrito.length == 1){
                carrito.pop();
            }else{
                //Buscar indice del articulo
                let index = carrito.indexOf(articulo)
                carrito.splice(index,1)
                
            }
            navigate("/components/exito")
        }
    }
    return(
        <div className = "articulo">
            <h3>{nombre}</h3>
            <p>Precio: {precio}</p>
            <button onClick = {() => borrar(id)}>Borrar del carrito</button>    
        </div>
    )
}