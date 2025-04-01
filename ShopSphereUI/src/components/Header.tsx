import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button,  IconButton,  Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router";

const links = [
  { title: "Anasayfa", to: "/" },
  { title: "Ürünler", to: "/catalog" },
  { title: "Hakkımızda", to: "/about" },
  { title: "İletişim", to: "/contact" },
]

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "text.primary"
  },
  "&.active": {
    color: "warning.main"
  }
}

export default function Header(props:any) {
    return (
      <AppBar position="static" sx={{mb:4}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <Box sx={{display:"flex", alignItems:"center"}}> 
              <Typography variant="h6" sx={{mr:1}}>ShopSphere</Typography>
            <Stack direction="row">
              { links.map(link => 
              <Button key={link.to} component={NavLink} sx={navStyles} to={link.to}>{link.title}</Button>  
           ) }
           </Stack>
           </Box>

           <Box sx={{display:"flex", alignItems:"center"}}> 
            <IconButton size="large" edge="start" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
                </Badge>
            </IconButton>
           </Box>
        </Toolbar>
</AppBar>);
  }