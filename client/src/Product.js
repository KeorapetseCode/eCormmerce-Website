import React from 'react';
import "./styles/Product.css";

function Product({price, image, name}) {
	//console.log(props.src);
	return (
		<div className="product">
			<div className="product__info">
				<p>{name}</p>
				<p className='product_price'>
					<small>R</small>
					<strong>{price}</strong>
				</p>
				<img
					src={image}
					alt={"item display here"}
				/>
				<button>Place Order</button>
			</div>
		</div>
	)
}

export default Product;