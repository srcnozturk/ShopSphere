import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import { v4 as uuidv4 } from 'uuid';
import ButtonUsage from "./ButtonUsage";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://localhost:7150/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);
 


function addProduct(){
  setProducts([...products, 
    { 
      id : uuidv4(),
      name: "product4",
      price: 4000,
      isActive: true,
      stock: 100 
    }])
  }

  return (
    <>
   <Header products={products}/>
   <ProductList products={products} addProduct={addProduct}/>
   <ButtonUsage />
    </>
 
  )
}







export default App



