import { Header } from "./header";
import { VolverAlInicio } from "./volverAlInicio";
import { Footer } from "./footer";

export const Exito = () => {
    return(<>
    <Header />
    <p className = "mensaje">Operación realizada.</p>
    <VolverAlInicio />
    <Footer />
    </>)
    
}