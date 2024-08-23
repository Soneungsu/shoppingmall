import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

export const ProuductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/
Soneungsu/shoppingmall/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => {
            return (
              <Col lg={3}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
