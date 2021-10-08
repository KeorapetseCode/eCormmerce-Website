import "./styles/Product.css";
import { useStateValue } from './StateProvider.js';

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
			<img
				src={image}
				alt={'item display here'}
			/>
			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	)
}

export default Product;