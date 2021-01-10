import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Prodcut } from "./types";

type Props = {
    products: Prodcut[];
    selectedProducts: Prodcut[];
    onSelectProduct: (product: Prodcut) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
    return(        
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;