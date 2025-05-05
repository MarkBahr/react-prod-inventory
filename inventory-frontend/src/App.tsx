import { useState } from "react";
import "./App.css";
// import { Button } from "./components/ui/button";
import Products from "./components/Products";
import Product from "./models/product";
import CreateProduct from "./components/AddProduct";

function App() {
  // THis state will manage an array of products
  const [products, setProducts] = useState<Product[]>([]);

  const addProductHandler = (
    productName: string,
    price: string,
    category: string,
    description: string
  ) => {
    const newProduct = new Product(productName, price, category, description);

    setProducts((previousProducts) => {
      return previousProducts.concat(newProduct);
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Electric Supply Inventory</h1>
      <CreateProduct onCreateProduct={addProductHandler} />
      <Products items={products} />
    </div>
  );
}

export default App;
