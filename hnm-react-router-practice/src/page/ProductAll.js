import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../action/productAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const error = useSelector((state) => state.product.error);

  const [searchParams, setSearchParams] = useState({
    page: query.get("page") || 1,
    name: query.get("name") || "",
  });
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  // useEffect(() => {}, []);
  useEffect(() => {
    dispatch(productActions.getProductList({ ...searchParams }));
  }, [query]);
  useEffect(() => {
    if (error && error !== "") {
      toast.error(error, { theme: "colored" });
    }
  }, [error]);
  return (
    <Container>
      {error ? (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        >
          {error}
        </ToastContainer>
      ) : (
        <Row>
          {productList.length > 0 &&
            productList.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
