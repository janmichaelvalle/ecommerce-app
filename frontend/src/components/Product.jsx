import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

/* Passing of product prop explanation 
1) In HomeScreen.jsx, the Product component is indeed rendered with the product prop passed to it as <Product product={product} />. This means that each Product component receives an individual product object as a prop named product.

2) In Product.jsx, the Product component uses object destructuring to extract the product prop from the props object passed to the component. The line const Product = ({ product }) => { ... } extracts the product prop from the props object.
*/
