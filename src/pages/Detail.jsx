import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProuductDetil = async () => {
    const url = `https://my-json-server.typicode.com/
Soneungsu/shoppingmall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProuductDetil();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="사진" width="500px" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
