import React from "react";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout(){
	return(
		<div className='checkout'>
			<div className='checkout__left'>
				<div className='basket__list'>

					{/*List of all Items in the basket*/}
				</div>
			</div>
			<h2 className='checkout__title'>Your Basket</h2>


			<div className='checkout__right'>
				<Subtotal />
			</div>

		</div>
	)
}

export default Checkout;