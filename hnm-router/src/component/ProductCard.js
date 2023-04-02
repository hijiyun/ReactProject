import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/Product/${item.id}`);
  }
  return (
    <div className='item-card' onClick={showDetail}>
        <img className='item-img' src={item?.img} alt="item.img"/>
        <div>{item?.choice}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>신제품</div>
    </div>
  )
}

export default ProductCard
