import { useState } from "react";
import "../App.css";
import "../style.css";
import Product from "./components/Product";
import Category from "./components/Category";
import Review from "./components/Review";

function App() {
  const [categories, setCategories] = useState([
    { id: 1, category_name: "Category" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, product_name: "Product 1", is_selected: false, category_id: null },
    { id: 2, product_name: "Product 2", is_selected: false, category_id: null },
    { id: 3, product_name: "Product 3", is_selected: false, category_id: null },
    { id: 4, product_name: "Product 4", is_selected: false, category_id: null },
    { id: 5, product_name: "Product 5", is_selected: false, category_id: null },
    { id: 6, product_name: "Product 6", is_selected: false, category_id: null },
    { id: 7, product_name: "Product 7", is_selected: false, category_id: null },
    { id: 8, product_name: "Product 8", is_selected: false, category_id: null },
    { id: 9, product_name: "Product 9", is_selected: false, category_id: null },
    {
      id: 10,
      product_name: "Product 10",
      is_selected: false,
      category_id: null,
    },
  ]);

  const AddCategory = () => {
    const createCategory = () => {
      const lastCategory = categories[categories.length - 1];
      const newCategory = {
        id: lastCategory.id + 1,
        category_name: "Category",
      };
      setCategories([...categories, newCategory]);
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
  };

  return (
    <div className="App">
      <Product products={products} setProducts={setProducts} />

      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            category={category}
            isRemove={categories.length > 1 ? true : false}
            categories={categories}
            setCategories={setCategories}
            products={products}
            setProducts={setProducts}
          />
        );
      })}

      <AddCategory categories={categories} />
      <Review categories={categories} products={products} />
    </div>
  );
}

export default App;
