import React from 'react'
import { CarouselComponent } from '@/components/CarouselComponent'
import Layout from '@/components/layout'

export default function Index  ()  {
  return (
    <div>
        <CarouselComponent></CarouselComponent>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    )
}