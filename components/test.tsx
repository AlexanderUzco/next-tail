import { useEffect, useState } from 'react';
import Link from 'next/link'

const buttons: any[] = [
  {id: 1, name: 'Button 1'},
  {id: 2, name: 'Button 2'},
  {id: 3, name: 'Button 3'},
];

const typesAlerts = [
  {id:1, name: 'Alert', style:'alert'},
  {id:2, name: 'Alert Danger', style:'alert alert-danger'},
  {id:3, name: 'Alert Warning', style:'alert alert-warning'},
  {id:4, name: 'Alert Info', style:'alert alert-info'}
];

const Test = () => {
  const [productList,setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
      .then(res => res.json())
      .then(({data,length}) =>setProductList(data))
      .catch(console.log);
    return () => {

    }
  }, []);
  
  return (
    <div>
      <div className="text-3xl font-bold underline">Platzi and Next.js!</div>
      <div className='
        flex 
        flex-col 
        w-full
        px-4
        
        md:flex-row
      '>
        {buttons.map(button =>
          <button className='
          font-bold 
          text-blue-400
          w-full
          m-2 
          bg-white
          p-3 
          rounded
          shadow-sm
          border
          border-blue-400

          md:w-1/3
          hover:bg-blue-400
          hover:text-white
          hover:border-transparent
        '>{button.name}</button>  
        )}
      </div>
      {typesAlerts.map(alert => 
        <div key={alert.id} className='flex flex-col w-full px-4'>
          <p className='text-xl my-3 font-bold underline'>{alert.name}</p>
          <div className='
            flex 
            flex-col 
            w-full
            
            md:flex-row
          '>
            {buttons.map(button =>
              <div className={`${alert.style} w-full md:w-1/3`}>{button.name}</div>
            )}
          </div>
        </div>
      )}

      {productList.map(product => 
        <Link href={`/product/${product.id}`}>
          <div>{product.name}</div>  
        </Link>
      )}
    </div>
  )
}

export default Test
