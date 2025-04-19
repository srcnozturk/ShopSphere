import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

export default function LoginPage() {
    function handleSubmit(){}

    return (
      <Container maxWidth="xs">
        <Paper 
          sx={{
            marginTop: 8,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }} 
          elevation={3}
        >
            <Avatar 
              sx={{
                bgcolor: 'secondary.main',
          
              }}
            >
                <LockOutlined />
            </Avatar>
            <Typography 
              component="h1" 
              variant="h5" 
              sx={{ mb: 3 }}
            >
              Giriş Yap
            </Typography>
            <Box 
              component="form" 
              onSubmit={handleSubmit} 
              noValidate 
              sx={{ 
                width: '100%',
                '& .MuiTextField-root': {
                  mb: 2
                }
              }}
            >
                <TextField 
                  label="Kullanıcı Adı" 
                  fullWidth 
                  required 
                  autoFocus 
                  size="small"
                />
                <TextField 
                  label="Şifre" 
                  type="password" 
                  fullWidth 
                  required 
                  size="small"
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    mt: 2,
                    mb: 1,
                    py: 1.5
                  }}
                >
                  Giriş Yap
                </Button>
            </Box>
        </Paper>
      </Container>
    );
}