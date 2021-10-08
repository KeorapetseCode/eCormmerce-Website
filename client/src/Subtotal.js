import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
//import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
//import { Checkbox } from "@material-ui/core";
import { useStateValue } from './StateProvider.js';
import { getBasketTotal } from "./reducer";

function Subtotal(){
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) =>(
					<>
						<p>
							Subtotal ({basket?.length} items) : <strong>{value}</strong>
						</p>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"R"}
			/>
			<button>Place Orders</button>
		</div>
	)
}


export default Subtotal;