import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://localhost:7150/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);
 

  return (
    <>
    <CssBaseline /> {/* Bu bir JSX yorumudur */}
   <Header products={products}/>
   <Container>
   <Outlet />
   </Container>
    </>
  )
}

export default App



