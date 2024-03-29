import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Alert, Col, Container, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(false); // eslint-disable-next-line
  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/hijiyun/hnm-server/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail(); // eslint-disable-next-line
  }, []);
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  if (loading || product == null) return <h1 className='loading'>Loading</h1>;
  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row className="product-all">
          <Col className="product-img">
            <img src={product?.img} alt="img" />
          </Col>
          <Col className="product-content">
            <div>{product.title}</div>
            <div>₩ {product.price}</div>
            <div className="product-choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle
                variant="outline-dark"
                id="dropdown-basic">
                {selectedSize ? selectedSize : "사이즈 선택"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item
                      key={item}
                      onClick={() => handleSizeSelect(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button id="product-btn" variant="dark">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail