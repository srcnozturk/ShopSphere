import { TableCell, TableRow } from "@mui/material";
import { currentTRY } from "../../utils/formatCurrency";
import { useAppSelector } from "../../hooks/hooks";

export default function CartSummary(){
const {cart} = useAppSelector(state => state.cart); // Using Redux store to get the cart state
const subTotal = cart?.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) ?? 0;
const tax = subTotal * 0.2; 
const total = subTotal + tax;

    return (
        <>
        <TableRow>
            <TableCell align="right" colSpan={5}>Ara Toplam</TableCell>
            <TableCell align="right">{currentTRY.format(subTotal)}</TableCell>
        </TableRow>
        <TableRow>
        <TableCell align="right" colSpan={5}>Vergi (%20)</TableCell>
        <TableCell align="right">{currentTRY.format(tax)}</TableCell>
         </TableRow>
    <TableRow>
    <TableCell align="right" colSpan={5}>Toplam</TableCell>
    <TableCell align="right">{currentTRY.format(total)}</TableCell>
    </TableRow>
    </>
    );
}