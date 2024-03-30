import React from "react";
import { Box,Card, CardMedia, CardContent, CardActions, Container, Grid, Paper, Button, Stack, Typography, Rating } from "@mui/material";
import banner from "../assets/Banner.png";
import promo from "../assets/promo.png";
import product from '../assets/Product.png'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

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
      <br/>
      <br/>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {
            numbers.map((number) =>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={number}>
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
              <Card variant="outlined" sx={{my:2, borderRadius:3, bgcolor: "#f9f9f9"}}>
                <Paper variant="outlined" sx={{borderRadius:3}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={product}
                    // sx={{ height: 300, objectFit: "contain" }}
                  />
                  <CardContent sx={{px: 3}}>
                    <Stack direction="row" maxWidth={"100%"} justifyContent={"space-between"}>
                      <Box>
                        <Typography gutterBottom textAlignt="left" fontWeight={700} fontSize={16} color={"#22212c"}>Citrate Mag</Typography>
                        <Typography textAlignt="left" fontWeight={400} fontSize={16} color={"22212c"}>240 Capsulas | 800 Mg</Typography>
                      </Box>
                      <Box>
                        <Typography gutterBottom textAlign="right" fontWeight={700} fontSize={16} color={"#22212c"}>$273.00</Typography>
                        <Typography textAlign="right" fontWeight={400} fontSize={16} color={"22212c"}><del>$134.00</del></Typography>
                      </Box>
                    </Stack>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" />
                  </CardContent>
                </Paper>
                <CardActions>
                  <Stack direction="row" width={"100%"} justifyContent={"space-between"}>
                    <Box>
                      <Typography variant="caption" gutterBottom>COMPARTE</Typography>
                      <Stack direction="row" spacing={0.3}>
                        <Facebook fontSize="small"/>
                        <Twitter fontSize="small"/>
                        <Instagram fontSize="small"/>
                      </Stack>
                    </Box>
                    <Button sx={{textTransform: "capitalize", px: "22px", py: 1, border: "1px solid #eda836", borderRadius: "20px", bgcolor: "#fff", color: "#22212c", width: "90px", height: "31px"}}>Agregar</Button>
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