import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.css';
import close from '../assets/icons/icon_close.png'

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;