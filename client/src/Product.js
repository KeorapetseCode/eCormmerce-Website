import React from 'react';

import "./styles/Product.css";
//import one_prod from './img/GodBlessMyHustle/Brown Cap.jpg'


function Product({prod_title, prod_image, prod_price, prod_quantity}) {
	return (
		<div className="product">
			<div className="product__info">
				<p className="product_title">{prod_title}</p>
				<p className="product_price">
					<small>{prod_price}</small>
				</p>
				<p className="product_quantity">{prod_quantity}</p>

				<img className="prod_image"
					src={prod_image} alt={"item goes here"}
				/>

				<button>Place Order</button>
					</div>
		</div>
	)
}

export default Product;