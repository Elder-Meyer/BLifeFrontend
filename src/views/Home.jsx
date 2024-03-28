import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import banner from "../assets/Banner.png";
import promo from "../assets/promo.png";

export const Home = () => {
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
    </Box>
  );
};
