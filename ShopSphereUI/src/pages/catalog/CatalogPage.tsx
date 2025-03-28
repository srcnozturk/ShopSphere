import { useState, useEffect } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";

export default function CatalogPage() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const[loading,setLoading] =useState(true);

     useEffect(() => {
    fetch("https://localhost:7150/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .finally(() => setLoading(false));
     }, []);
    if(loading) return <CircularProgress />;

  return (
   <ProductList products={products} />
  );
}