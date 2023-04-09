import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Col, Container, Row, Alert} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import {productAction} from "../redux/actions/productAction"

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [qurry, setQurry] = useSearchParams();
  let [error, setError] = useState("");
  const getProducts = async()=>{
};
  useEffect(()=>{
    getProducts()
  },[qurry])
  return (
    <div>
      <Container className='container'>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
          <Row>
            {productList.length > 0 &&
              productList.map((menu)=>(
            <Col lg={3} sm={12} key={menu.id}> 
              <ProductCard item={menu}/> 
            </Col>
            ))}
          </Row>
      )}
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll