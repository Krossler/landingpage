import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/productDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {size, name, description, price} = location.state;

  const handleClose = () => {
    navigate(-1); 
  };
  
  return (
    <div className="modal_overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className='close_button_container'>
            <h1>Detalhes do Produto</h1>
            <button className="close_button" onClick={handleClose}>x</button>
        </div>
        <div>
            <p>Name: {name}</p>
            <p>Tamaño: {size}cm</p>
            <p>{description}</p>
            
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;