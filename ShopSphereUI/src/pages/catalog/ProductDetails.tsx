import { CircularProgress, Divider, Grid2, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";
import requests from "../../api/requests";
import NotFound from "../../errors/NotFound";

export default function ProductDetailsPage() {

    const {id} = useParams();
    const [product, setProduct] =useState<IProduct | null>(null);
    const[loading,setLoading] =useState(true);

    useEffect(() => {
        id && requests.Catalog.details(id!)
        .then(data => setProduct(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    },[id]);

    if(loading) return <CircularProgress />;

    if(!product) return <NotFound />;

    return (
       <Grid2 container spacing={6}> 
       <Grid2 size={{xl:3,lg:4,md:5,sm:6,xs:12}}><img src={`https://localhost:7150/images/${product.imageUrl}`} style={{width:"100%"}}/></Grid2>
       <Grid2 size={{xl:9,lg:8,md:7,sm:6,xs:12}}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb:2}} />
        <Typography variant="h4" color="secondary">{(product.price/100).toFixed(2)} ₺</Typography>
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
        </Grid2>
       </Grid2>
    )
}