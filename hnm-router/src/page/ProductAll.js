import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Col, Container, Row, Alert} from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import {productAction} from "../redux/actions/productAction"
import { useDispatch , useSelector} from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch()  
  const productList = useSelector((state) => state.productList)
  const [qurry, setQurry] = useSearchParams();
  let [error, setError] = useState("");
  const getProducts = async()=>{
    let searchQuerry = qurry.get('q') || "";
    console.log("쿼리값은? ", searchQuerry)
    dispatch(productAction.getProducts({searchQuerry, setQurry, setError}))
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