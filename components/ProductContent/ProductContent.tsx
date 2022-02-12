import CustomImage from "@components/CustomImage/CustomImage";
import ProductDescription from "./ProductDescription";

const ProductContent = (product: TProduct) => {
    return(
        <div>
            {product.price}
        </div>
    )
}

export default ProductContent;