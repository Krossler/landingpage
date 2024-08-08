import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section onClick={toggleMenu} className="navbar_container_wrapper" >
    <nav  className="navbar_container">
        <h2 className="navbar_list_logo">ganga in</h2>
        <button onClick={toggleMenu} className="btn_menu">↓</button>
        <ul className={`navbar_list ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={toggleMenu} className="navbar_list_item">Inicio</Link></li>
            <li><Link to="/empresa" onClick={toggleMenu} className="navbar_list_item">Empresa</Link></li>
            <li><Link to="/productos" onClick={toggleMenu} className="navbar_list_item">Productos</Link></li>
            <li><Link to="/products" onClick={toggleMenu} className="navbar_list_item">Logística</Link></li>
            <li><Link to="/products" onClick={toggleMenu} className="navbar_list_item">Lista De Precios</Link></li>
            <li><Link to="/products" onClick={toggleMenu} className="navbar_list_item">Tienda Oficial</Link></li>
            <li><Link to="/products" onClick={toggleMenu} className="navbar_list_item btn">CONTACTANOS</Link></li>
        </ul>
    </nav>
    </section>
  )
}

export default Navbar