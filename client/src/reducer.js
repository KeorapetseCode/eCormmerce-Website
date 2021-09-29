//import React from "react";

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
//	console.log(action);
	switch(action.type){
		//if action.type is "ADD_TO_BASKET"
		case "ADD_TO_BASKET":
			return{
				...state,
				basket: [...state.basket, action.item]
			};

		default:
			return state;
	}
};

export default reducer;