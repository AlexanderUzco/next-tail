import {useState,useEffect} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import axios, {AxiosResponse} from 'axios';

const DynamicProductContent = dynamic(() => import('@components/ProductContent/ProductContent'),{
  loading: () => <p>Loading</p>
})
const ProductPage = () => {
  const { query } = useRouter();
  const [product,setProduct] = useState<TProduct>();

  useEffect(() => {
    if(query.id){
      axios.get<TProduct>(`/api/avo/${query.id}`)
        .then(({data} : AxiosResponse) => setProduct(data))
        .catch(console.log);
    };

    return () => {
      
    };
  }, [query && query.id])

  return (
    <section>
      <Link href={'/'}>
        <a>Back</a>
      </Link>
      <DynamicProductContent 
        
      />
    </section>
  )
}

export default ProductPage
