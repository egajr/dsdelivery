import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProducstList';
import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import './styles.css';
import { OrderLocationData, Prodcut } from './types';

function Orders() {
  const [products, setProducts] = useState<Prodcut[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
  )
}

export default Orders;