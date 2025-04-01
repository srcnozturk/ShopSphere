import { Box, Container, Typography, Grid, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Biz Kimiz?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            ShopSphere olarak, modern e-ticaret deneyimini yeniden tanımlıyoruz.
            Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla, alışverişin
            geleceğini şekillendiriyoruz.
          </Typography>
        </motion.div>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Ekibimiz
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    color="primary"
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 2 }}
                  >
                    {member.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Vision & Mission */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'primary.main',
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Vizyonumuz
                </Typography>
                <Typography>
                  E-ticaret dünyasında öncü ve yenilikçi çözümler sunarak,
                  müşterilerimize en iyi alışveriş deneyimini yaşatmak.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'secondary.main',
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  Misyonumuz
                </Typography>
                <Typography>
                  Güvenilir, hızlı ve kullanıcı dostu bir platform sunarak,
                  müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const team = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CEO & Kurucu',
    description:
      '10+ yıllık e-ticaret deneyimi ile ShopSphere\'in kurucu ortağı.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Ayşe Demir',
    role: 'Teknik Direktör',
    description:
      'Full-stack geliştirme uzmanı ve teknoloji stratejisti.',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Mehmet Kaya',
    role: 'Ürün Müdürü',
    description:
      'Kullanıcı deneyimi ve ürün geliştirme konusunda uzman.',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

export default AboutPage;