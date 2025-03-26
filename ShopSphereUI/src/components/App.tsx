import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import { v4 as uuidv4 } from 'uuid';
import ButtonUsage from "./ButtonUsage";
import { Container, CssBaseline } from "@mui/material";

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
    <CssBaseline /> {/* Bu bir JSX yorumudur */}
   <Header products={products}/>
   <Container>
   <ProductList products={products} addProduct={addProduct}/>
   <ButtonUsage />

   </Container>
  
    </>
 
  )
}







export default App



