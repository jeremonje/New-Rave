import { useEffect, useState } from "react";
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products'

const useGetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
		getData();
		}, []);
		
		const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
		console.log(response);
		};
    return products;
}


export default useGetProducts;