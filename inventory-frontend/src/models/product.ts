class Product {
  id: string;
  productName: string;
  price: string;
  category: string;
  description: string;

  constructor(
    productName: string,
    price: string,
    category: string,
    description: string
  ) {
    this.id = new Date().toISOString().split("T")[0];
    this.productName = productName;
    this.price = price;
    this.category = category;
    this.description = description;
  }
}

export default Product;
