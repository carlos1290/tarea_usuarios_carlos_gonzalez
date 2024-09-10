import { Link } from "react-router-dom"
import  "../Hoja de estilos/navbar.css";
export const Navbar = () =>{
 return(
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="usuarios">usuarios</Link></li>
            <li><Link to="usuarios/pais">usuarios por pais</Link></li>
            

        </ul>
    </div>
 );   
}