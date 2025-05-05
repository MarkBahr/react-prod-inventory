import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
// import { Form } from "./ui/form";
import "../index.css";

// React.FC for functional component
const CreateProduct: React.FC<{
  onCreateProduct: (
    productName: string,
    price: string,
    category: string,
    description: string
  ) => void;
}> = (props) => {
  // Create a reference with default value of null for each field, which are specified in each input element below
  const productNameInputRef = useRef<HTMLInputElement>(null);
  const productPriceInputRef = useRef<HTMLInputElement>(null);
  const productCategoryInputRef = useRef<HTMLInputElement>(null);
  const productDescriptionInputRef = useRef<HTMLInputElement>(null);
  // React.FormEvent is for form submission
  const submitHandler = (event: React.FormEvent) => {
    // prevent auto-completion
    event.preventDefault();

    // refs have the current property that holds the actual value, ? for string or undefined, ! for when you're certain no nulls
    const inputProduct = productNameInputRef.current!.value;
    const inputPrice = productPriceInputRef.current!.value;
    const inputCategory = productCategoryInputRef.current!.value;
    const inputDescription = productDescriptionInputRef.current!.value;

    if (inputProduct.trim().length === 0) {
      return; // Exit the function early if data is null or undefined
    }
    if (inputPrice.trim().length === 0) {
      return; // Exit the function early if data is null or undefined
    }
    if (inputCategory.trim().length === 0) {
      return; // Exit the function early if data is null or undefined
    }
    if (inputDescription.trim().length === 0) {
      return; // Exit the function early if data is null or undefined
    }

    props.onCreateProduct(
      inputProduct,
      inputPrice,
      inputCategory,
      inputDescription
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Label htmlFor="product">Product</Label>
        <Input type="text" id="product" ref={productNameInputRef} />
        <Label htmlFor="price">Price</Label>
        <Input type="text" id="price" ref={productPriceInputRef} />
        <Label htmlFor="category">Category</Label>
        <select name="category" ref={productCategoryInputRef}>
          <option value="Materials">Materials</option>
          <option value="Tools">Tools</option>
          <option value="Hardware">Hardware</option>
          <option value="Accessories">Accessories</option>
        </select>
        {/* <Input type="text" id="category" ref={productCategoryInputRef} /> */}
        <Label htmlFor="description">Description</Label>
        <Input type="text" id="description" ref={productDescriptionInputRef} />
        <Button className="create">Create</Button>
      </form>
    </div>
  );
};

export default CreateProduct;

/*
  id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
*/
