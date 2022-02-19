import CustomImage from "@components/CustomImage/CustomImage";
import ProductDescription from "./ProductDescription";

const ProductContent = ({product}: {
    product: TProduct
}) => {
    console.log(product);

    const MiniCardInfo = ({children}: any) => {
        return(
            <div className="
                flex
                flex-col
                bg-zinc-100
                rounded
                p-4
                h-min
                justify-start
                m-1
            ">
                {children}
            </div>
        )
    }
    return(
        <div className='
            p-4
            lg:flex
            lg:justify-between
        '>
            <div className="
                w-full
                flex
                justify-center
                items-center
                p-5
            ">
                <CustomImage
                    src={product.image}
                    alt={product.name}
                    className='
                        h-72
                        rounded
                        w-96
                    '
                    quality={50}
                />
            </div>

            <div className="
                flex
                flex-col
                h-full
                my-2
                
                lg:w-1/3
                lg:mx-2 
                lg:my-0"
            >
                <MiniCardInfo>
                    <h1 className='truncate font-bold text-xl text-gray-700'>{product.name}</h1>
                    <p className="mt-3 text-2xl text-gray-700">{product.price} $</p>
                    <p className="text-sm">IVA incluido</p>
                </MiniCardInfo>
                <MiniCardInfo>
                    <h1 className='truncate font-bold text-lg text-gray-700'>Description</h1>
                    <p className="my-3 text-lg text-gray-700">{product.attributes.description} $</p>
                    <p className="truncate font-bold text-lg text-gray-700">Shape</p>
                    <p className="text-lg text-gray-700">{product.attributes.shape}</p>
                    <p className="truncate font-bold text-lg text-gray-700">Hardiness</p>
                    <p className="text-lg text-gray-700">{product.attributes.hardiness}</p>
                    <p className="truncate font-bold text-lg text-gray-700">Taste</p>
                    <p className="text-lg text-gray-700">{product.attributes.taste}</p>
                </MiniCardInfo>
            </div>
        </div>
    )
}

export default ProductContent;