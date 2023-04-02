import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <div>

    </div>
  );
}

export default ProductDetail