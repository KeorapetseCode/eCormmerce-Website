import React from 'react';

import "./styles/Product.css";
//import one_prod from './img/GodBlessMyHustle/Brown Cap.jpg'


function Product(props) {
	//console.log(props.src);
	return (
		<div className="product">
			<div className="product__info">
			
				<img className="prod_image"
					src={props.src}
					alt={"item goes here"}
				/>
				<div className="order_btn">
				<button>Place Order</button>
				</div>
				
			</div>
		</div>
	)
}

export default Product;