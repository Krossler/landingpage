import React from 'react'
import Navbar from './navbar'
import './styles/logistica.css'

const Logistica = () => {
  return (
    <section className='logistica_container'>
      <Navbar/>
        <div className='logistica_about'>
          <h1 className='logistica_tittle'>Logística</h1>
          <h2 className='logistica_h2'>Nuestra Logística de Envíos</h2>


          <h3>Flex</h3>
          <div className='pdiv'>
            <p>Para quienes residen en Capital Federal y Gran Buenos Aires, contamos con nuestro servicio "Flex", que garantiza la entrega el mismo día de la compra.</p>
          </div>
          <h3>Correos</h3>
          <div className='pdiv'>
            <p>Utilizamos el sistema de envíos de Mercado Libre para llegar a cada rincón de Argentina, asegurando que tus productos lleguen de manera segura y eficiente.</p>
          </div>
          <h3>Retiro en persona</h3>
          <div className='pdiv'>
            <p>Si vives cerca, puedes ahorrar en costos de envío retirando tu compra directamente en nuestro depósito o coordinando una entrega en el lugar que prefieras.</p>
          </div>
          <h3>FULL</h3>
          <div className='pdiv'>
            <p>Queremos destacar nuestro servicio "FULL". Una vez por semana, despachamos cientos de productos al depósito central de Mercado Libre. Ellos se encargan de toda la logística de envíos, garantizando una entrega rápida y confiable en cualquier punto del país. Este servicio es ideal para quienes buscan la mayor rapidez y eficiencia en la recepción de sus productos.</p>
          </div>
        </div>

        <div className='logistica_img_container'>
          <figure><img className='logistica_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='logistica_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='logistica_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
          <figure><img className='logistica_img' src="./pantalla.jpg" width={400} alt="img1" /></figure>
        </div>
      </section>
  )
}

export default Logistica