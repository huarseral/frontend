import BCancel from "../components/BCancel"
import Bok from "../components/Bok"
import Cabecera from "../components/Cabecera"
import NavBar from "../components/Navbar"
import Rows from "../layout/Rows"

const Inicio=()=>{

    return <>
        <Cabecera />
        <NavBar />
        
        <Rows>

        <Bok />
        <BCancel />

        </Rows>

        
  </>

}

export default Inicio;