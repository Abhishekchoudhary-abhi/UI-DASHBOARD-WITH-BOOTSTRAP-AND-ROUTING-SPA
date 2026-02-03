import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

export const products = [
  { 
    id: 1, 
    name: 'Wireless Headphones', 
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    image: 'https://placehold.co/600x400?text=Headphones'
  },
  { 
    id: 2, 
    name: 'Smart Watch', 
    price: 199.50,
    description: 'Track your fitness and notifications on the go.',
    image: 'https://placehold.co/600x400?text=Smart+Watch'
  },
  { 
    id: 3, 
    name: 'Gaming Mouse', 
    price: 49.99,
    description: 'Ergonomic gaming mouse with RGB lighting.',
    image: 'https://placehold.co/600x400?text=Gaming+Mouse'
  },
  { 
    id: 4, 
    name: 'Mechanical Keyboard', 
    price: 129.00,
    description: 'Tactile switches for the best typing experience.',
    image: 'https://placehold.co/600x400?text=Keyboard'
  },
];

const Products = () => {
  return (
    <div>
      <h1 className="mb-4">Our Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">${product.price.toFixed(2)}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/products/${product.id}`} className="mt-auto">
                  <Button variant="primary" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
