import React from 'react'
import Navbar from './navbar'
import './styles/enterprise.css'

const Enterprise = () => {
  return (
    <section className='enterprise_container'>
      <Navbar/>
        <div className='enterprise_about'>
          <h1 className='enterprise_tittle'>Gangain</h1>
          <h2 className='enterprise_h2'>Más de 20 años de experiencia en el rubro</h2>
          
          <h3>Quien somos</h3>
          <div className='pdiv'>
            <p>Más de 20 años importando artículos de distintas regiones y culturas del mundo, llevando belleza y armonía a nuestros clientes.</p>
          </div>

          <h3>Nuestra mision</h3>
          <div className='pdiv'>
            <p>En Gangain, nuestra misión es transformar cada espacio en un hogar lleno de luz y estilo. Nos especializamos en la reventa de productos de decoración, con un enfoque particular en soluciones de iluminación que destacan por su diseño y calidad.</p>
            <p>Creemos que la iluminación adecuada no solo embellece, sino que también crea ambientes acogedores y funcionales, donde cada detalle refleja la personalidad y el gusto de quienes lo habitan</p>
            <p>Nos comprometemos a ofrecer productos que inspiren, aportando calidez y elegancia a cada rincón de su hogar.</p>
          </div>
        </div>

        <div className='enterprise_img_container'>
          <figure><img className='enterprise_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='enterprise_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='enterprise_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='enterprise_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
        </div>
      </section>
  )
}

export default Enterprise