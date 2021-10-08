import { createContext, useContext, useReducer } from "react";
 
export const FranchiseContext = createContext();

export const FranchiseFilterStateProvider = ({ franfilterReducer, filterInitialState, children }) => (
	<FranchiseContext.Provider value={useReducer(franfilterReducer, filterInitialState)}>
		{children}
	</FranchiseContext.Provider>
);

export const useFilterValue = () => useContext(FranchiseContext);