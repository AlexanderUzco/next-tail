import Image from "next/image";

type CustomImageProps = {
    src: string;
    alt: string;
    className: string;
    quality?: number;
}

const CustomImage = ({src,alt,className,quality}: CustomImageProps) => {
    return(
        <div className={`overflow-hidden relative ${className}`}>
            <Image
                //loader={myLoader}
                src={src}
                alt={alt}
                layout="fill" 
                objectFit="cover"
                quality={quality ? quality : 10}
            />
        </div>
    )
}

export default CustomImage;