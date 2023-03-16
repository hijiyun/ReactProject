import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from "react-bootstrap";

const ProductAllPage = () => {
  const [productList, setproductList] = useState([]); 
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setproductList(data);
  }
  useEffect(() => {
    getProducts()
  },[])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((items) => (
            <Col md={3} sm={12} key={items.id}>
              <ProductCard item={ items} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
}

export default ProductAllPage