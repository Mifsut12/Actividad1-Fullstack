import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Libros } from "./libros";
import  datosLibros  from "../datos/datos";



export const Inicio =  () => {

    
    const libros = datosLibros.slice(0, datosLibros.length -2)
    
    
    return(
        <>
            <Header />
            <div className = "Inicio">
                <p>Los más populares del momento</p>
                <div className = "div-div">
                    {libros.map((libro,index) => (
                        <Libros
                            key = {index}
                            id = {index}
                            name = {libro.name}
                            autor = {libro. autor}
                        />
                    )
                    )}
                </div>
            </div>

            <Footer />
        </>
       
    )
}