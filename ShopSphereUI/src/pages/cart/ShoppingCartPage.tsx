
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody,  IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useCartContext } from "../../context/CartContext";

export default function ShoppingCartPage() 
{

    const { cart } =useCartContext();

    if(!cart) return <h1>Sepet Boş</h1>;
    
    return ( <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Fiyat</TableCell>
              <TableCell align="right">Adet</TableCell>
              <TableCell align="right">Toplam Fiyat</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.cartItems.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={`http://localhost:5097/images/${item.imageUrl}`}style={{width:50}}/>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.price} ₺</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price * item.quantity} ₺</TableCell>
                <TableCell align="right">
                    <IconButton color="error"><Delete/></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
}