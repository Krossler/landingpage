import React from 'react'
import "./styles/product.css"
import { Link, Outlet } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className="product_card">
      <a target="blank" href={props.url} ><img className="product_img" src={props.img} width={210} alt="lampara" loading="lazy"/></a>
      <div className="product_info_container">
        <h1 className="productinfo_title">{props.name} {props.size}cm</h1>
        <strong className="product_description">{props.description} </strong>
        
      </div>
      <div className="product_button_container">
      <Link className="product_button" to={{ pathname: `${props.id}` }} state={{
            size: props.size,
            name: props.name,
            description: props.description,
            price: props.price,
            url: props.url
          }} >Detalles</Link>
          <a className="product_button secondary" target="blank" href={props.url}>Comprar</a>
      </div>
      <Outlet/>
    </div>
  )
}

export default React.memo(Product);