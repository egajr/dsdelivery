import { Prodcut } from './types';

type Props = {
    product: Prodcut;
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(price);
}

function ProductCard({ product }: Props) {
    return(        
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price">{formatPrice(product.price)}</h3>
            <div className="order-card-description">Descrição</div>
            <p>
                {product.description}
            </p>
        </div>
    )
}

export default ProductCard;