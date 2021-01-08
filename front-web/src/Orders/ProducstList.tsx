import ProductCard from "./ProductCard";
import { Prodcut } from "./types";

type Props = {
    products: Prodcut[];
}

function ProductsList({ products }: Props) {
    return(        
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (<ProductCard key={product.id} product={product}/>))}
            </div>
        </div>
    )
}

export default ProductsList;