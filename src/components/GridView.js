import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import React from "react";
import CardView from "./CardView";
import HeroSection from "./HeroSection";
import { Container } from "@mui/system";
import TableSort from "./TableSort";

export default function GridView() {
  return (
    <React.Fragment>
      <HeroSection />
      <Container>
        <AppBar style={{ marginTop: 50 }} position="static">
          <Toolbar>
            <Typography variant="h6">Property Listings</Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TableSort />
          </Grid>
          <Grid item xs={12}>
            <CardView />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
