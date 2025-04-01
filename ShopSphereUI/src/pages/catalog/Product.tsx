import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../model/IProduct";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";

interface Props{
    product: IProduct
}

export default function Product({product}: Props) {
    return (
      <Card>
        <CardMedia sx={{height:160, backgroundSize:"contain"}} image={`https://localhost:7150/images/${product.imageUrl}`} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" color="text.secondary">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary">{(product.price/100).toFixed(2)} ₺</Typography>
        </CardContent>
        <CardActions >
          <Button variant="outlined" size="small" startIcon={<AddShoppingCart />} color="success">Add to Cart</Button>
          <Button component={Link} to={`/catalog/${product.id}`}  variant="outlined" size="small" startIcon={<SearchIcon />}>View</Button>
        </CardActions>
      </Card>      
    );
  }