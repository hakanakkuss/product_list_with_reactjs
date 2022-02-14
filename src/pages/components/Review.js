import React from "react";

function Review({ categories, products }) {
  const availableProducts = products.filter((p) => p.category_id === null);

  return (
    <div className="reviewCard">
      <h5>Review</h5>
      <form className="p">
        <p>Available Products: {availableProducts.length}</p>
        <p>Categories: {categories.length}</p>
        {categories.map((category) => {
          return (
            <p key={category.id}>
              {category.category_name} {category.id}:{" "}
              {products.filter((p) => p.category_id == category.id).length +
                " products"}
            </p>
          );
        })}
      </form>
    </div>
  );
}

export default Review;
