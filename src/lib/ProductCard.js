import React from 'react';

const ProductCard = ({sold, title, img, brand, size, price, handleChange, text}) => {

  return (
    <div>
      <div className="content">
        <div style={{display: sold === true ? 'none' : 'block' }} className="content-overlay"></div>
        <img src={img} alt={title} />
        <div style={{display: sold === true ? 'block' : 'none' }} className="text-overlay">SOLD</div>
        </div>
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>{size}</p>
        <p>£{price}</p>
      </div>
  )
}
export default ProductCard
