import CustomImage from '@components/CustomImage/CustomImage';

type CardProps = {
    id: string;
    name: string;
    price: number;
    image: string;
    taste: string;
};

const Card = ({id,name,price,image,taste}: CardProps) => {
    return(
        <div className="
            flex 
            justify-center 
            w-full
            rounded
            shadow

            sm:flex-col
            sm:rounder-none
            sm:shadow-none
        ">
            <CustomImage
                src={image}
                alt={name}
                className='
                    w-1/2 

                    sm:w-full
                    sm:h-60
                    sm:rounded
                    sm:shadow
                '
                quality={50}
            />
            <div className='
                flex
                flex-col
                justify-center
                relative 
                p-3    
                bg-zinc-100
                w-1/2

                sm:w-auto
                sm:shadow-lg 
                sm:-mt-4
                sm:mx-2
                sm:rounded-lg
            '>
                <h1 className='truncate font-bold text-xl text-gray-700'>{name}</h1>
                <p className='text-gray-400 truncate'>{taste}</p>
                <p className='text-gray-600'>{price}$</p>
            </div>
        </div>
    )
}

export default Card;