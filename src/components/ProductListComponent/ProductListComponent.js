import React from "react";

import "./ProductListComponent.css";

const ProductListComponent = props => {
  return(
    <div className="product-list-container">
      {props.children}
    </div>
  );
};

export default ProductListComponent;