import React from "react";
import { Box,Card, CardContent, CardActions, Container, Grid, Paper, Button, Stack, Rating } from "@mui/material";
import banner from "../../assets/Banner.png";
import promo from "../../assets/promo.png";
import product from '../../assets/Product.png'
import { Facebook, FavoriteBorderOutlined, Instagram, Star, Twitter } from "@mui/icons-material";
import { ImageCard } from "../../components/items/ImageCard";
import { Text } from '../../components/items/Text'
import { bannerImgStyle, component1, component2, component3, iconStyle, items, productImgStyle, promoImgStyle } from "./inicio.elements";

export const Inicio = () => {
    return (
        <Box>
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <Box sx={{ position: "relative" }}>
                <ImageCard img={banner} alt="banner" config={bannerImgStyle}/>
                <ImageCard img={promo} alt="promo" config={promoImgStyle} />
                </Box>
            </Grid>
            </Grid>

            <Container maxWidth="xl" sx={{my:6}}>
            <Grid container spacing={{xs: 0, sm: 3, md: 4, lg: 5}}>
                {
                items.map((item) =>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item} sx={{position: "relative"}}>
                    <Stack spacing={0.5} alignItems={"flex-end"} sx={{position: "absolute", top: { xs: "8%", sm: "12%", md:"16%"}, right: {xs: -9, sm: -13}, zIndex: 1000}}>
                    <Stack direction="row" justifyContent={"space-between"} sx={component1}>
                        <FavoriteBorderOutlined sx={{ width: "14px", height: "14px", color: "#ff8e8e"}} />
                        <Text caption>22</Text>
                    </Stack>
                    <Box sx={component2}>
                        <Text caption color="#fff">-30%</Text>
                    </Box>
                    </Stack>
                    <Card variant="outlined" sx={{my:2, borderRadius:3, bgcolor: "#f9f9f9", border: "1px solid #E1E1E1"}}>
                    <Paper variant="outlined" sx={{borderRadius:3, border: "1px solid #E1E1E1"}}>
                        <ImageCard img={product} alt="product" config={productImgStyle} />
                        <CardContent sx={{px: 3}}>
                        <Stack direction="row" maxWidth={"100%"} justifyContent={"space-between"}>
                            <Box>
                            <Text title gutterBottom textAlign="left">Citrate Mag</Text>
                            <Text subtitle paragraph textAlign="left">240 Capsulas | 800 Mg</Text>
                            </Box>
                            <Box>
                            <Text title gutterBottom textAlign="right">$273.00</Text>
                            <Text subtitle paragraph textAlign="right"><del>$134.00</del></Text>
                            </Box>
                        </Stack>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small" emptyIcon={<Star style={{ color: "#D9D9D9"  }} fontSize="inherit"/>} />
                        </CardContent>
                    </Paper>
                    <CardActions sx={{px: 3, py: 2}}>
                        <Stack direction="row" width={"100%"} justifyContent={"space-between"}>
                        <Box>
                            <Text action textAlign="center">COMPARTE</Text>
                            <Stack direction="row" spacing={0.3} width={"100%"} justifyContent={"space-around"}>
                            <Facebook  sx={iconStyle} />
                            <Twitter   sx={iconStyle} />
                            <Instagram sx={iconStyle} />
                            </Stack>
                        </Box>
                        <Button sx={component3}>
                            <Text caption>Agregar</Text>
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
}
