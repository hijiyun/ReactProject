    import React from 'react'

    const ProductCard = (items) => {
    return (
      <div>
        <img src="{items?.img}" alt="card" />
        <div>Conscious choice</div>
        <div>{items?.title}</div>
        <div>₩{items?.price}</div>
        <div>신제품</div>
      </div>
    );
    }

    export default ProductCard