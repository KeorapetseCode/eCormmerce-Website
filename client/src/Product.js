import React from 'react';
import "./styles/Product.css";

function Product({price, image, name}) {

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{name}</p>
				<p className='product__price'>
					<small>R</small>
					<strong>{price}</strong>
				</p>
			</div>
			<img
				src={image}
				alt={'item display here'}
			/>
			<button>Add To Cart</button>
		</div>
	)
}

export default Product;