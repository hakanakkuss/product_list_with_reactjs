import React from "react";

function AddCategoryButton({ categories }) {
  const createCategory = () => {
    const lastCategory = categories[categories.length - 1];
    categories.push({
      id: lastCategory.id + 1,
      category_name: "Category",
    });
    console.log(categories);
  };

  return (
    <div>
      <button
        className="addCategoryButton"
        type="button"
        onClick={createCategory}
      >
        Add Category
      </button>
    </div>
  );
}

export default AddCategoryButton;
