import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailpage = () => {
  const { id } = useParams();
  console.log("ppp", id);
  return (
    <div>
      <h1>Show all product detail { id }</h1>
    </div>
  )
}

export default ProductDetailpage