import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.css';
import Appcontext from '../context/App.context';
import arrow from '../assets/icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(Appcontext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
			<div className="seccion-scroll">
					{
						state.cart.map((product,index) => (
							<OrderItem 
								indexValue={index}
								key={index}
								product={product} 
							/>
						) )
					}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;