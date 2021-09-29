import React from "react";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";
import BasketList from "./BasketList";

import { useStateValue } from "./StateProvider";
//import { getBasketList } from "./reducer";

function Checkout(){
	const [{ basket }, dispatch] = useStateValue();

	const getBasketList = (basket) => {
		let totalItems = basket?.length;
		
		if (totalItems > 0){	
			return(
				<div className="checkout__">Basket Is YYY {totalItems}
					
					{basket.map((oneItem) => (
						<BasketList
							name={oneItem.name}
							image={oneItem.image}
							uid={oneItem.uid}
							price={oneItem.price}
						/>
					))}
					
					{/*<div className="checkout__basketListItem">
						<div className="checkout__basketListItemInfo">
							<p>{}</p>
						</div>
					</div>*/}
				
				</div>
			)
		}
	}

	return(
		<div className='checkout'>
			<div className='checkout__left'>
			</div>
			
			<div className='basket__list'>
				{!basket?.length ? <div>There is nothing on the basket</div>
				:(
					<div>There is something
						{getBasketList(basket)}
					</div>
				)}
			</div>

			<h2 className='checkout__title'>Your Basket</h2>
			<div className='checkout__right'>
				<Subtotal />
			</div>

		</div>
	)
}

export default Checkout;