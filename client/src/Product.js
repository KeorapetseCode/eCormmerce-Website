import "./styles/Product.css";
import { useStateValue } from './StateProvider.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


function Product({price, image, name, uid}) {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		//add item into the data layer
		//dispatch calls reducer.
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				price: price,
				image: image,
				name: name,
				uid: uid
			}
		});
	};
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{name}</p>
				<p className='product__price'>
					<small>R</small>
					<strong>{price}</strong>
				</p>
			</div>

			<TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} >
				<TransformComponent>
					<img className='product__image'
						src={image}
						alt={'item display here'}
					/>
				</TransformComponent>
			</TransformWrapper>
		
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	)
}

export default Product;