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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempore, ipsam impedit expedita, quis voluptatum iste magni eum ut accusantium ullam, atque consectetur eligendi harum quam maiores ex nesciunt deserunt?</p>
          </div>

          <h3>Nuestra mision</h3>
          <div className='pdiv'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe possimus veritatis recusandae modi rem aliquam minima dolor sunt obcaecati sapiente a, consectetur commodi molestiae nam, reprehenderit illo harum aliquid? Quas!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, non earum? Nemo voluptatum error amet nesciunt possimus ipsum quia iure nihil! Sit voluptas dignissimos, vero maiores rem esse iste distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolore repudiandae ex velit vel rem beatae natus? Quasi architecto dolor omnis quisquam ex ad autem voluptatem, cum alias a vel!</p>
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