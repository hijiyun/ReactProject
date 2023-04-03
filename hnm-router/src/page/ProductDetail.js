import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Col, Container, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/hijiyun/hnm-server/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <Container>
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row className="product-all">
          <Col className="product-img">
            <img src={product?.img} alt="이미지 사진" />
          </Col>

          <Col className="product-content">
            <h3>{product?.title}</h3>
            <h5>₩{product?.price}</h5>
            <div className="product-choice">
              {product?.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{ item }</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>

            <Button id="product-btn" variant="dark">
              추가
            </Button>
          </Col>
        </Row>
      )}
      ;
    </Container>
  );
};

export default ProductDetail