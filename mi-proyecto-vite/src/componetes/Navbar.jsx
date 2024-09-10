
import { Link } from "react-router-dom";
import "../Hoja de estilos/navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/usuarios">Ver usuarios</Link></li>
        <li><Link to="/usuarios/es">Ver usuario por país</Link></li>
      </ul>
    </nav>
  );
};
