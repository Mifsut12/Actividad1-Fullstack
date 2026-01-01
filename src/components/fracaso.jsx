import { Header } from "./header";
import { VolverAlInicio } from "./volverAlInicio";

export const Fracaso = () => {
    return(<>
    <Header />
    <p className="mensaje">Error en la operación </p>
    <VolverAlInicio />
    <Footer />
    </>)
    
}