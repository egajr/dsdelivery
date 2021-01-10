import { formatPrice } from './helpers';
import { Prodcut } from './types';

type Props = {
    product: Prodcut;
    onSelectProduct: (product: Prodcut) => void;
    isSelected: boolean;
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return(        
        <div
            className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product)}
        >
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