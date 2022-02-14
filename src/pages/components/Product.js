import React from "react";

function Product({ products, setProducts }) {
  const onChange = (event) => {
    const isChecked = event.target.checked;

    products.forEach((product) => {
      if (product.id == event.target.id && product.category_id == null) {
        if (isChecked) product.is_selected = true;
        else product.is_selected = false;
      }
    });
    setProducts([...products]);
  };

  return (
    <div className="availableProductsCard">
      <h5>Available Products</h5>
      {products.map((p) =>
        p.category_id == null ? (
          <div key={p.id}>
            <input
              type="checkbox"
              id={p.id}
              onChange={(event) => onChange(event)}
            />
            {p.product_name}
          </div>
        ) : null
      )}
    </div>
  );
}

export default Product;
