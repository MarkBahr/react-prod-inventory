// import React, { useState } from "react";

import { Checkbox } from "./ui/checkbox";
import Product from "../models/product";
import { Table } from "./ui/table";
import { TableHeader } from "./ui/table";
import { TableBody } from "./ui/table";
import { TableRow } from "./ui/table";
import { TableCell } from "./ui/table";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
// import { TableCaption } from "./ui/table";

interface Product {
  id: string;
  productName: string;
  price: string;
  category: string;
  description: string;
}

interface MyProductProps {}
// props in an object with items, which is an array of strings
// A functional comopnent, we can use generics, React.FC is a type, says this is a functional component
// WE plug in a value. explicitly set the type inside <{}>
const Products: React.FC<{ items: Product[] }> = (props) => {
  return (
    // <ul>
    //   {props.items.map((item) => (
    //     <li key={item.id}>{item.productName}</li>
    //   ))}
    // </ul>
    <div>
      <Search>Search</Search>
      <Table>
        <TableHeader>
          <TableRow>
            <th>Select</th>
            <th>Date</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.items.map((item) => (
            <TableRow key={item.id}>
              <Checkbox className="check"></Checkbox>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{`$${item.price}`}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.description}</TableCell>
              <Button className="edit-btn">Edit</Button>
              <Button className="btn">Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
