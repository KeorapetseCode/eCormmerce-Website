import "./styles/BasketItem.css";
import { useStateValue } from './StateProvider';


function BasketItem({price, name, image, uid}) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET"
		})
	};

	return (
		<div className="basketItem">
			<div className="basketItem__info">				
				<p>{name}</p>
				<p className='basketItem__price'>
						<small>R</small>
						<strong>{price}</strong>
				</p>
			</div>
			<img className="basketItem__image"
				src={image}
				alt={'basket item display here'}
			/>
			<button onClick={removeFromBasket}>Remove Item</button>
		</div>
	)
}

export default BasketItem;