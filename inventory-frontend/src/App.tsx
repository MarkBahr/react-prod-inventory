import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Procucts from "./components/Products";
import "./App.css";
import { Button } from "./components/ui/button";
import Products from "./components/Products";
import Product from "./models/product";

function App() {
  const products = [
    new Product(
      "Screw Driver",
      10.99,
      "Tools",
      "Phillips, rubber handle for grip & shock protection"
    ),
    new Product(
      "Multimeter",
      54.99,
      "Tools",
      "Klein, electrician's choice, reads voltage, amps, ohms"
    ),
  ];
  return (
    <div>
      <Button>ShadCN Button</Button>
      <Products items={products} />
    </div>
  );
}

export default App;
