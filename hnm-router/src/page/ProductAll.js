import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Col, Container, Row, Alert} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [qurry, setQurry] = useSearchParams();
  let [error, setError] = useState("");
  const getProducts = async()=>{
    try{
    let searchQuerry = qurry.get('q') || "";
    console.log("쿼리값은? ", searchQuerry)
    let url = `https://my-json-server.typicode.com/hijiyun/hnm-server/products?q=${searchQuerry}`;
    let response = await fetch(url)
    let data = await response.json()
    if(data.length < 1){
      if(searchQuerry !== ""){
        setError(`${searchQuerry}와 일치하는 상품이 없습니다. `)
      }else{
        throw new Error("결과가 없습니다.")
      }
    }
    setProductList(data);
  } catch (err) {
    setError(err.message)
  }
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