import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail=(id)=>{
    navigate(`/Product/${id}`);
  }
  return (
    <div className="item-card" onClick={()=>showDetail(item.id)}>
      <img className="item-img" src={item?.img} alt="item.img" />
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new ? "신제품" : ""}</div>
    </div>
  );
}

export default ProductCard
