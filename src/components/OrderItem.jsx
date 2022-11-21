import React from 'react';
import Appcontext from '../context/App.context';
import '../styles/OrderItem.css';
import close from '../assets/icons/icon_close.png'


const OrderItem = (props) => {

	const { product, indexValue } = props
	const { removeFromCart } = React.useContext(Appcontext)

	const handleRemove = (index) => {
		removeFromCart(index)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img 
				src={close} 
				alt="close" 
				onClick={() => handleRemove(indexValue )}
			/>
		</div>
	);

}

export default OrderItem;