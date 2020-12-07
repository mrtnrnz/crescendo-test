import React, { memo } from "react";
import { connect } from "react-redux";

import * as productActions from "../actions/productActions";
import ProductListComponent from "../components/ProductListComponent/ProductListComponent";

import "./ProductsContainer.css";

const ProductsContainer = props => {

  React.useEffect(() => {
    props.getAllRecipesHandler();
    props.getAllSpecialRecipesHandler();
  }, []);

  return(
    props.products !== "" && props.products.length > 0
    ?
    props.products.map((value, index) => {
      return(
        <div className="product-list-row" key={index}>
          <ProductListComponent>
            <h1 className="recipe-title-style">
              {value.title}
            </h1>
            <p className="recipe-description-style">
              {value.description}
            </p>
            <p className="recipe-description-style">
              Servings: {value.servings}
            </p>
            <p className="recipe-description-style">
              Cooking Time: {value.cookTime} minutes
            </p>
            <h2 className="content-style-02">
              Ingredients:
            </h2>
            {value.ingredients.map((items, id) => {
              return(
                <p className="recipe-description-style" key={id}>
                  {items.amount} {items.measurement} {items.name}
                </p>
              );
            })}
            <h2 className="content-style-02">
              Special offers:
            </h2>
            {
              props.specialProducts !== "" && props.specialProducts.length > 0
              &&
              props.specialProducts.map((item, uid) => {
                let ingredient = "";
                value.ingredients.map((v, i) => {
                  if(item.ingredientId === v.uuid) {
                    ingredient = (
                      <p className="content-style-02" key={uid}>
                        {item.title} {item.type} {item.text}
                      </p>
                    );
                  }
                });
                return ingredient;
              })
            }
            <h2 className="content-style-02">
              Procedures:
            </h2>
            {
              value.directions.map((item, ind) => {
                return(
                  <p className="recipe-description-style" key={ind}>
                    {item.instructions}
                  </p>
                );
              })
            }
          </ProductListComponent>
        </div>
      );
    })
    :
    ""
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    specialProducts: state.products.specialProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRecipesHandler: () => dispatch(productActions.getAllRecipesHandler()),
    getAllSpecialRecipesHandler: () => dispatch(productActions.getAllSpecialRecipesHandler()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ProductsContainer));