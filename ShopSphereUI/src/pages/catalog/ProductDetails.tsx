import { CircularProgress, Divider, Grid2, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";
import requests from "../../api/requests";
import NotFound from "../../errors/NotFound";
import { LoadingButton } from "@mui/lab";
import { AddShoppingCart } from "@mui/icons-material";
import { toast } from "react-toastify";
import { currentTRY } from "../../utils/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCart } from "../cart/cartSlice";

export default function ProductDetailsPage() {
    const {cart} = useAppSelector(state => state.cart);
    const dispatch=useAppDispatch();
    const {id} = useParams();
    const [product, setProduct] =useState<IProduct | null>(null);
    const [loading,setLoading] =useState(true);
    const [isAdded, setIsAdded] = useState(false);


    const item = cart?.cartItems.find(i => i.productId == product?.id);
    useEffect(() => {
        id && requests.Catalog.details(id!)
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    },[id]);

    function handleAddItem(id: string) {
        setIsAdded(true);

        requests.Cart.addItem(id)
            .then(cart => {
                dispatch(setCart(cart));
                toast.success("Sepetinize eklendi.");
            })
            .catch(error => console.log(error))
            .finally(() => setIsAdded(false));
    }

    if(loading) return <CircularProgress />;

    if(!product) return <NotFound />;

    return (
       <Grid2 container spacing={6}> 
       <Grid2 size={{xl:3,lg:4,md:5,sm:6,xs:12}}><img src={`http://localhost:5097/images/${product.imageUrl}`} style={{width:"100%"}}/></Grid2>
       <Grid2 size={{xl:9,lg:8,md:7,sm:6,xs:12}}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb:2}} />
        <Typography variant="h4" color="secondary">{currentTRY.format(product.price)} ₺</Typography>
        <TableContainer>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Ürün Adı</TableCell>
                    <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Açıklama</TableCell>
                    <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Stok Miktarı</TableCell>
                    <TableCell>{product.stock}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <Stack direction="row" spacing={2} sx={{mt: 3}} alignItems="center">
                    <LoadingButton 
                        variant="outlined" 
                        loadingPosition="start"
                        startIcon={<AddShoppingCart />}
                        loading={isAdded}
                        onClick={() => handleAddItem(product.id)}>
                        Sepete Ekle
                    </LoadingButton>

                    {
                        item?.quantity! > 0 && (
                            <Typography variant="body2">Sepetinize {item?.quantity} adet eklendi</Typography>
                        )
                    }
                </Stack>
        </Grid2>
       </Grid2>
    )
}