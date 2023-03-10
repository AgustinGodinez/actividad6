import React, { useState, useEffect } from 'react'
import Layout from '@/components/layout'
import apiClient from '@/apiClient'
import { CarouselCard } from '@/components/CarouselCard'

export default function Index() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    //Recuperar los datos del Api
    apiClient.get('/products')
      .then(response => {
        // console.log(response.data)
        setProducts(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])


  return (
    <div>
      <CarouselCard products={products} ></CarouselCard>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}