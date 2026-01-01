
import { Footer } from "./footer";
import { Header } from "./header";
import { VolverAlInicio } from "./volverAlInicio";

export const NotFound = () => {
    return(<>
    <Header />
    <p class = "mensaje">No se ha encontrado lo que estabas buscando</p>
    <VolverAlInicio />
    <Footer />
    </>)
}