// import React, { useState } from "react";

import { Checkbox } from "./ui/checkbox";
import Product from "../models/product";
import { Table } from "./ui/table";
import { TableHeader } from "./ui/table";
import { TableBody } from "./ui/table";
import { TableRow } from "./ui/table";
import { TableCell } from "./ui/table";
import { Button } from "./ui/button";
// import { TableCaption } from "./ui/table";

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
      <search>
        <form className="float-left" action="./search/">
          <label>Find a Product</label>
          <input type="search" id="product" name="q" />
          <button type="submit">Search</button>
        </form>
      </search>
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
              <TableCell>
                <Button className="edit-btn">Edit</Button>
              </TableCell>
              <TableCell>
                <Button className="btn">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
