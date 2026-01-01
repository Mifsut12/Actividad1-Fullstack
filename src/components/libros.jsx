import { Link } from "react-router-dom"




export const Libros = ({id,name, autor}) => {
    return(
        <div className = "libro">
            <h3>{name}</h3>
            <p>Autor: {autor}</p>
            <Link to = {`/components/libro/${id}`}>
                <button>
                    <p>Consultar libro</p>
                </button>
            </Link>  
        </div>
    )
}