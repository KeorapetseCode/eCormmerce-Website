import React from "react";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";

import { useBasketValue } from "./StateProvider";
//import { getBasketList } from "./reducer";

function Checkout(){
	const [{ basket }] = useBasketValue();

	const getBasketItemsList = (basket) => {
		let totalItems = basket?.length;
		
		if (totalItems > 0){
			return(
				<div className="checkout__">
					{basket.map((oneItem) => (
						<BasketItem
							name={oneItem.name}
							image={oneItem.image}
							uid={oneItem.uid}
							price={oneItem.price}
						/>
					))}
				</div>
			)
		}
	}

	return(
		<div className='checkout'>
			<div className='checkout__left'>
				<div className='basket__list'>
					{!basket?.length ? (
					<h2 className='checkout__titleCard'>No Items In Your Basket</h2>)
					:(
						<div>
							<h2 className='checkout__titleCard'>Your Basket</h2>
							{getBasketItemsList(basket)}
						</div>
					)}
				</div>
			</div>

			<div className='checkout__right'>
				<Subtotal />
			</div>

		</div>
	)
}

export default Checkout;