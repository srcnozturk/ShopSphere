import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

function App() {

  
  return (
    <>
    <CssBaseline /> {/* Bu bir JSX yorumudur */}
   <Header />
   <Container>
   <Outlet />
   </Container>
    </>
  )
}

export default App



