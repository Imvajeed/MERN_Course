import React, { useEffect, useState } from 'react'
import HomeCards from '../components/HomeCards'
import { useDispatch } from 'react-redux'
import store from '../store/EkartStore'
import { GetAllProducts } from '../store/ProductsSlice'

function Home() {
  const [products,setProducts] = useState(store.getState().products.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(products.length<=0){
      dispatch(GetAllProducts());
    }
  },[products])

  store.subscribe(()=>{
    setProducts(store.getState().products.products)
  })

  return (
    <>
      <header className='bg-blue-300 h-100 flex justify-center items-center lg:text-3xl font-bold'>
        <h1 >WelCome To E-Kart</h1>
      </header>
      <div className='flex flex-wrap justify-center items-center'>
        {
          products.map((ele,index)=>(
            <HomeCards product={ele} />
          ))
        }
        
      </div>
    </>
  )
}

export default Home