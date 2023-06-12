import { ProductSummary } from "../../types";

type ProductsProps = {
    products: ProductSummary[];
};

export default function Product({products}){
    return(
        <div>
            {products.map((product) => {
                <p key={product.id}>
                    {JSON.stringify(product)}
                </p>
            })}
        </div>
    )
}