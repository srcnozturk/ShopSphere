import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";
import requests from "../../api/requests";
import { useState } from "react";

interface Props{
    product: IProduct
}

export default function Product({product}: Props) {

  const [loading, setLoading] = useState(false);

  function handleAddItem(productId: string) 
  {
    setLoading(true);

    requests.Cart.addItem(productId)
      .then(cart => console.log(cart))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }

    return (
      <Card>
        <CardMedia sx={{height:160, backgroundSize:"contain"}} image={`https://localhost:7150/images/${product.imageUrl}`} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="text.secondary">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary">{(product.price/100).toFixed(2)} ₺</Typography>
        </CardContent>
        <CardActions >
          <Button variant="outlined" size="small" startIcon={<AddShoppingCart />} color="success" onClick={()=> handleAddItem(product.id)}>Sepete Ekle</Button>
          <Button component={Link} to={`/catalog/${product.id}`}  variant="outlined" size="small" startIcon={<SearchIcon />}>Detay</Button>
        </CardActions>
      </Card>      
    );
  }