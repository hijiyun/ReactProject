    import React from 'react'

    const ProductCard = (item) => {
    return (
      <div>
        <img className='products-card-img' src="{item?.img}" alt="card" />
        <div>Conscious choice</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>신제품</div>
      </div>
    );
    }

    export default ProductCard