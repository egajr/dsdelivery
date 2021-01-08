import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProducstList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Prodcut } from './types';

function Orders() {
  const [products, setProducts] = useState<Prodcut[]>([]);

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  )
}

export default Orders;