import { useEffect, useState, forwardRef } from 'react';
import Link from 'next/link'
import Card from '@components/Card/Card';
import CardContent from '@components/CardContent/CardContent';
import axios, {AxiosResponse} from 'axios';

const HomePage = () => {
  const [productList,setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    axios.get<TProduct[]>('/api/avo')
      .then(({data} : AxiosResponse) => setProductList(data.data))
      .catch(console.log);
    return () => {

    }
  }, []);

  type Props = {
    onClick: () => void, 
    value: string,
    href: string;
  }
  
  type RefType= any

  const CustonLink = forwardRef<RefType, Props>(({ onClick, href, children }, ref) => {
    return (
      <a className='w-full md:max-w-full' href={href} onClick={onClick} ref={ref}>
        {children}
      </a>
    )
  });
  
  return (
    <div>
      <div className="text-3xl font-bold underline">Platzi and Next.js!</div>
      <CardContent>
        {productList.map(product => 
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <CustonLink>
              <Card 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image}
                taste={product.attributes.taste}
              />
            </CustonLink>
          </Link>
        )}
      </CardContent>
    </div>
  )
}

export default HomePage
