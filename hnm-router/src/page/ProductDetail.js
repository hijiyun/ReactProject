import React from 'react'
import { Navigate } from 'react-router-dom'

const ProductDetail = ({authenticate}) => {
  return (
    authenticate === true?<ProductDetail /> : <Navigate to="/login"/>
  )
}

export default ProductDetail