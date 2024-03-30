import React from "react";
import { Box,Card, CardMedia, CardContent, CardActions, Chip, Container, Grid, Paper, Button, Stack, Typography, Rating } from "@mui/material";
import banner from "../assets/Banner.png";
import promo from "../assets/promo.png";
import product from '../assets/Product.png'
import { Facebook, FavoriteBorderOutlined, Instagram, Star, Twitter } from "@mui/icons-material";

export const Home = () => {
  const numbers = [1, 2, 3, 4];  
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={banner}
              alt="banner"
              sx={{ 
                height: {xs: "50vh", sm:"80vh"},
                objectPosition: "50% 50%"
              }}
            />
            <Box
              component="img"
              src={promo}
              alt="promo"
              sx={{
                width: { xs: 200, sm: 300, md: 400, lg: 450, xl: 550},
                position: "absolute",
                zIndex: 100,
                right: {xs: -60, sm: -110, md: -120, lg: -120, xl: -100},
                top: {xs: "30%", sm:"50%"},
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0px 0px 0px #222)"
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Container maxWidth="xl" sx={{my:6}}>
        <Grid container spacing={{xs: 0, sm: 3, md: 4, lg: 5}}>
          {
            numbers.map((number) =>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={number} sx={{position: "relative"}}>
              {/* <Paper variant="outlined" sx={{m:2, borderRadius: 3, bgcolor: "#f9f9f9"}}>
                <Paper variant="outlined" sx={{ borderRadius: 3 }}>
                  <Box>
                    <CardMedia
                      component="img"
                      image={product}
                    />
                  </Box>
                  <Stack direction={"row"} justifyContent={"space-around"}>
                    <Box>
                      <Typography variant="h6">Citrate Mag</Typography>
                      <Typography variant="body1">240 Capsulas | 800Mg</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">$273.00</Typography>
                      <Typography variant="body1">$134.00</Typography>
                    </Box>
                  </Stack>
                </Paper>
                <Stack direction={"row"} justifyContent={"space-around"}>
                  <Box>
                    <Typography variant="body1" color="initial">comparte</Typography>
                    <Facebook/> <Twitter/> <Instagram/>
                  </Box>
                  <Button>agregar</Button>
                </Stack>
              </Paper> */}
              <Stack spacing={0.5} alignItems={"flex-end"} sx={{position: "absolute", top: { xs: "8%", sm: "12%", md:"16%"}, right: {xs: -9, sm: -13}, zIndex: 1000}}>
                <Stack direction="row" justifyContent={"space-between"} sx={{width: "62px", height: "31px", borderRadius: "20px", border: "1px solid #e1e1e1", px: "12px", py: 1, bgcolor: "#fff" }}>
                  <FavoriteBorderOutlined sx={{ width: "14px", height: "14px", color: "#ff8e8e"}} />
                  <Typography fontWeight={700} fontSize={12} lineHeight={"14.88px"} letterSpacing={"-2%"} color={"#22212c"}>22</Typography>
                </Stack>
                <Box sx={{ width: "53px", height: "31px", borderRadius: "20px", border: "1px solid #e1e1e1", px: "12px", py: 1, bgcolor: "#ff8e8e", color: "#fff",  fontWeight: 700, fontSize: "12px", lineHeight: "14.88px", letterSpacing: "-2%" }}>
                  -30%
                </Box>
              </Stack>
              <Card variant="outlined" sx={{my:2, borderRadius:3, bgcolor: "#f9f9f9", border: "1px solid #E1E1E1"}}>
                <Paper variant="outlined" sx={{borderRadius:3, border: "1px solid #E1E1E1"}}>
                  <CardMedia
                    component="img"
                    image={product}
                    sx={{ height: 304, objectFit: "contain", mt: 2 }}
                  />
                  <CardContent sx={{px: 3}}>
                    <Stack direction="row" maxWidth={"100%"} justifyContent={"space-between"}>
                      <Box>
                        <Typography gutterBottom textAlign="left" fontWeight={700} fontSize={16} lineHeight={"19.84px"} letterSpacing={"-2%"} color={"#22212c"}>Citrate Mag</Typography>
                        <Typography paragraph textAlign="left" fontWeight={400} fontSize={13} lineHeight={"12.4px"} letterSpacing={"-2%"} color={"22212c"}>240 Capsulas | 800 Mg</Typography>
                      </Box>
                      <Box>
                        <Typography gutterBottom textAlign="right" fontWeight={700} fontSize={16} lineHeight={"19.84px"} letterSpacing={"-2%"} color={"#22212c"}>$273.00</Typography>
                        <Typography paragraph textAlign="right" fontWeight={400} fontSize={13} lineHeight={"12.4px"} letterSpacing={"-2%"} color={"22212c"}><del>$134.00</del></Typography>
                      </Box>
                    </Stack>
                    <Rating name="half-rating-read" 
                      defaultValue={3.5} 
                      precision={0.5} 
                      readOnly size="small"
                      emptyIcon={<Star style={{ color: "#D9D9D9"  }} fontSize="inherit" />}
                    />
                  </CardContent>
                </Paper>
                <CardActions sx={{px: 3, py: 2}}>
                  <Stack direction="row" width={"100%"} justifyContent={"space-between"}>
                    <Box>
                      <Typography fontWeight={400} fontSize={11} lineHeight={"12.4px"} letterSpacing={"-2%"}>COMPARTE</Typography>
                      <Stack direction="row" spacing={0.3} width={"100%"} justifyContent={"space-around"}>
                        <Facebook sx={{width: "15px", height: "15px"}} />
                        <Twitter sx={{width: "15px", height: "15px"}} />
                        <Instagram sx={{width: "15px", height: "15px"}} />
                      </Stack>
                    </Box>
                    <Button sx={{width: "90px", height: "31px", borderRadius: "20px", border: "1px solid #eda836", px: "22px", py: 1, textTransform: "capitalize",  bgcolor: "#fff", color: "#22212c", fontWeight: 700, fontSize: 12, lineHeight: "14.88px", letterSpacing: "-2%", '&:hover' : {bgcolor: "#eda836"}}}>
                      Agregar
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
            )
          }
        </Grid>
      </Container>
    </Box>
  );
};