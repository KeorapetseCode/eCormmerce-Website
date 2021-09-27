import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
//import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
//import { Checkbox } from "@material-ui/core";

function Subtotal(){
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) =>(
					<>
						<p>
							Subtotal (0 items): <strong>0</strong>
						</p>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"R"}
			/>
			<button>Place Orders</button>
		</div>
	)
}


export default Subtotal;