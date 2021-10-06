import React, { createContext, useContext, useReducer } from "react";

//Prepare dataLayer
export const BasketContext = createContext();
//export const FranchiseContext = createContext();

//Wrap app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
	<BasketContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</BasketContext.Provider>
);

//Pull information from dataLayer
export const useBasketValue = () => useContext(BasketContext);