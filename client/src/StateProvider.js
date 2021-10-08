import React, { createContext, useContext, useReducer } from "react";

//Prepare dataLayer
export const ContextVar = createContext();
//export const FranchiseContext = createContext();

//Wrap app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
	<ContextVar.Provider value={useReducer(reducer, initialState)}>
		{children}
	</ContextVar.Provider>
);

//Pull information from dataLayer
export const useStateValue = () => useContext(ContextVar);