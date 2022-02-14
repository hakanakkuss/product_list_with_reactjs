import React, { useState } from "react";

function Category({
  category,
  isRemove,
  categories,
  setCategories,
  products,
  setProducts,
}) {
  let [productCounter, setProductCounter] = useState(0);

  const handleRemove = (event) => {
    const newCategories = categories.filter(
      (category) => category.id != event.target.id
    );
    products.forEach((p) => {
      if (p.category_id == event.target.id) p.category_id = null;
    });
    setCategories(newCategories);
    setProducts([...products]);
  };

  const addProduct = (event) => {
    const categoryId = event.target.id;
    products.forEach((product) => {
      if (product.is_selected && product.category_id == null) {
        product.is_selected = false;
        product.category_id = parseInt(categoryId);
      }
    });
    setProducts([...products]);
  };

  const selectedProducts = products.filter((p) => {
    return p.is_selected === true && p.category_id == null;
  });
  const currentProducts = products.filter((p) => p.category_id == category.id);

  const onChange = (event) => {
    const isChecked = event.target.checked;
    products.forEach((product) => {
      if (product.id == event.target.id) {
        if (isChecked) {
          product.is_selected = true;
          setProductCounter((productCounter += 1));
        } else {
          product.is_selected = false;
          setProductCounter((productCounter -= 1));
        }
      }
    });

    //setProducts([...products]);
  };

  const removeProductsFromCategory = (event) => {
    products.forEach((product) => {
      if (
        product.category_id == event.target.id &&
        product.is_selected == true
      ) {
        product.category_id = null;
        product.is_selected = false;
        setProductCounter(0);
      }
    });
    setProducts([...products]);
  };

  return (
    <div className="categoryCard">
      <h5>
        {category.category_name} {category.id}
      </h5>

      {currentProducts.length > 0 ? (
        currentProducts.map((p) => {
          return (
            <div key={p.id}>
              <input
                type="checkbox"
                id={p.id}
                onChange={(event) => onChange(event)}
              />
              {p.product_name}
            </div>
          );
        })
      ) : (
        <div className="text">
          <p>Select products to add here.</p>
        </div>
      )}

      {selectedProducts.length > 0 && selectedProducts.category_id == null ? (
        <button
          className="add-products-btn"
          id={category.id}
          onClick={(e) => {
            addProduct(e);
          }}
        >
          Add Products
        </button>
      ) : (
        <button className="add-products-btn-disabled" disabled="true">
          Add Products
        </button>
      )}
      {productCounter > 0 ? (
        <button
          className="add-products-btn"
          id={category.id}
          onClick={(event) => removeProductsFromCategory(event)}
        >
          Remove Products
        </button>
      ) : (
        <button
          className="add-products-btn-disabled"
          id={category.id}
          disabled="true"
        >
          Remove Products
        </button>
      )}
      {isRemove ? (
        <button
          id={category.id}
          className="remove-category-btn"
          onClick={(e) => {
            handleRemove(e);
          }}
        >
          Remove Category
        </button>
      ) : (
        <button disabled="true" className="remove-category-btn-disabled">
          Remove Category
        </button>
      )}
    </div>
  );
}

export default Category;
