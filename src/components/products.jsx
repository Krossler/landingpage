import React from 'react'
import './styles/products.css'
import Navbar from './navbar'
import { Link } from 'react-router-dom'


const Productos = () => {
  return (
    <section className='products_container'>
      <Navbar/>
      <h1 className='products_tittle'>Productos</h1>
      <section className='productpack_container'>
        <h2>
        Ofrecemos una selección exclusiva de productos diseñados para realzar tanto tu hogar como tu estilo personal. Desde soluciones de iluminación que aportan calidez y elegancia, hasta sahumerios que llenan tu espacio de aromas relajantes. Además, nuestras pequeñas decoraciones añaden un toque único a cada rincón, mientras que los accesorios estéticos personales completan tu look con estilo y distinción.
        </h2>
          <div className='products_container2'>
            <Link to="/lamparasblancas" className='btn_style luz'><strong className='btn_style_text'>Iluminación</strong></Link>
            <Link to="/lamparascoloridas" className='btn_style salmerios'><strong className='btn_style_text'>Salmerios</strong></Link>
            <Link to="/lamparascoloridas" className='btn_style decorativos'><strong className='btn_style_text'>Decoración</strong></Link>
            <Link to="/lamparascoloridas" className='btn_style accesorios'><strong className='btn_style_text'>Accesorios</strong></Link>
          </div>
      </section>
     </section>
  )
}

export default Productos