import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'
import './styles/home.css'

const Home = () => {
  return (
    <section className='home_wallpaper'>
      <Navbar/>
        <div className='home_about'>
          <h1 className='home__title'>La mejor iluminacion para tu hogar</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta, error autem</p>
          <Link to="/productos" className='home_button'>Comprar</Link>
        </div>
      </section>
  )
}

export default Home