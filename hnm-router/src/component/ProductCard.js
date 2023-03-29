import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='item-card'>
        <img className='item-img' src={item?.img} />
        <div>Conscious choice</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>신제품</div>
    </div>
  )
}

export default ProductCard