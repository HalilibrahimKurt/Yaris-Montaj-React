import React, { useEffect } from "react";
//import { Header, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
export default function ProductList() {
  useEffect(() => {
    let productService = new ProductService();
    productService.getToken();
    productService.getData();
  });

  return <div></div>;
}
