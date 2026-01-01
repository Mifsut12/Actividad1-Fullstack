import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Inicio } from "./inicio"


export const CargarInicio = () => {
  //Funcion que carga la página de inicio en 5 segundos.
  const Navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      Navigate("/components/inicio")
      
    }, 5000)
  },[])

}



export const Landing = () => {
    return(<><p className="mensaje">Bienvenido a relatos de papel.</p>
    <CargarInicio />
    </>)
    
}