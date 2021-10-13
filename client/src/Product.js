import "./styles/Product.css";
import { useStateValue } from './StateProvider.js';
import { Link } from 'react-router-dom';
import React from 'react';
//import ii from "Rabbit Gang/Rabbit Gang Cover.jpg";
//import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
//import {}

function Product(props) {
	const [state, dispatch] = useStateValue();
/*
	const [viewFullScreenImg, setviewFullScreenImg] = useState(null);
	const [loadFullScreenView, fullScreenViewStatus] = useState(false);

	const getFullScreenView = (imgToView) => {

		setviewFullScreenImg(imgToView);
		fullScreenViewStatus(true);
	}
*/
	const addToBasket = () => {
		//add item into the data layer
		//dispatch calls reducer.
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				price: props.price,
				image: props.image,
				name: props.name,
				uid: props.uid
			}
		});
	};

	
	return (
		<>
		<div className='product'>
			<div className='product__info'>
				<p>{props.name}</p>
				<p className='product__price'>
					<small>R</small>
					<strong>{props.price}</strong>
				</p>
			</div>
				<Link to='' onClick={() => props.fullViewFunc(props.image)}>
				<img className='product__image' 
					src={props.image}
					alt={'product display here'}
				/>
				</Link>
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
		</>
	)
}

export default Product;