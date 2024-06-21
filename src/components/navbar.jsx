import { Link } from "react-router-dom"
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <section className="navbar_container_wrapper" >
    <nav className="navbar_container">
        <h2 className="navbar_list_logo">ganga in</h2>
        <ul className="navbar_list">
            <li><Link to="/" className="navbar_list_item">Inicio</Link></li>
            <li><Link to="/products" className="navbar_list_item">Productos</Link></li>
            <li className="navbar_list_item">Nosotros</li>
            <li className="navbar_list_item">Mercado Libre</li>
        </ul>
    </nav>
    </section>
  )
}

export default Navbar