//import React from "react";

import BasketItem from "./BasketItem";

//When we start the basket is empty, hence the word initial. This our global variable basket.
export const initialState = {
	basket: [],
};

//Calculating the subtotal amount and displaying it in subtotal.js
/*
reduce()[not reducer] is a vanila js function that does the given function execution
to each array value.
*/
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	//console.log(action);
	switch(action.type){
		//if action.type is "ADD_TO_BASKET"
		case "ADD_TO_BASKET":
			return{
				...state,
				basket: [...state.basket, action.item]
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.uid === action.uid
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			}
			else{
				console.warn(
					`Cannot remove product (id: ${action.uid}) because it
					is not in the basket`
				)
			}
			return {
				...state,
				basket: newBasket
			}
		default:
			return state;
	}
};

export default reducer;