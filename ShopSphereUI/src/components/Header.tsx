import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function Header(props:any) {
    return (
      <AppBar position="static" sx={{mb:4}}>
        <Toolbar>
          <Container>
           <Typography variant="h6">ShopSphere</Typography>
          </Container>
        </Toolbar>
</AppBar>);
  }