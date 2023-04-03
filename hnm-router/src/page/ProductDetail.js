import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="이미지 사진" />
        </Col>

        <Col className="product-content">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail