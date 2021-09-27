import React, { createContext, useContext, userContext, useReducer } from "react";

//Prepare dataLayer
export const StateContext = createContext();

//Wrap app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//Pull information from dataLayer
export const useStateValue = () => useContext(StateContext);