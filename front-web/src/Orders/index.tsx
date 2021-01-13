import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import ProductsList from './ProducstList';
import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import './styles.css';
import { OrderLocationData, Prodcut } from './types';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';

function Orders() {
  const [products, setProducts] = useState<Prodcut[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Prodcut[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => {
        toast.warning('Erro ao listar produto.');
      })
  }, []);

  const handleSelectProduct = (product: Prodcut) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product)

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    saveOrder(payload).then((response) => {
      if (totalPrice === 0) {
        toast.warning('Selecione um produto.')
      }
      else if (payload.address == null){
        toast.warning('Digite o endereço de entrega.')
      }
      else
      {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);       
      }

    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  )
}

export default Orders;