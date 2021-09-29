import "./styles/BasketList.css";

function BasketList({price, name, image, uid}) {
	return (
		<div className="basketItem">
			<div className="basketItem__info">
				<p>{name}</p>
				<p className='basketItem__price'>
						<small>R</small>
						<strong>{price}</strong>
				</p>
			</div>
			<img
				src={image}
				alt={'basket item display here'}
			/>
			<button>Remove Item</button>
		</div>
	)
}

export default BasketList;