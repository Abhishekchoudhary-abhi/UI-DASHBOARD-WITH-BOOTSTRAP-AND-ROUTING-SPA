import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import { products } from './Products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded className="shadow" />
        </Col>
        <Col md={6}>
          <h1 className="display-4">{product.name}</h1>
          <h2 className="text-primary my-3">${product.price.toFixed(2)}</h2>
          <p className="lead">{product.description}</p>
          <div className="d-grid gap-2">
            <Button variant="success" size="lg">Add to Cart</Button>
            <Link to="/products" className="btn btn-outline-secondary">Back to Products</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
