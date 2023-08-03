import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TablePagination,
  Toolbar,
  AppBar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import fetchPropertyListings from "../api/propertyListings";

const CardView = () => {
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    fetchPropertyListings().then((data) => setListings(data));
  }, []);

  const history = useNavigate();

  const handleClick = (id) => {
    history(`/detail/${id}`);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <React.Fragment>
      <AppBar style={{ marginTop: 50 }} position="static">
        <Toolbar>
          <Typography variant="h6">Card View</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <TablePagination
            style={{ marginTop: 50 }}
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={listings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {listings
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((listing) => (
            <Grid item key={listing.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                onClick={() => handleClick(listing.id)}
                style={{ cursor: "pointer" }}
              >
                <CardContent>
                  <img
                    src={listing.imageUrl}
                    alt="Property"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="h5" component="h2">
                    {listing.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {listing.address}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Beds: {listing.beds}, Bath: {listing.bath}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Covered Area (sqft): {listing.coveredAreaSQFT}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Property Type: {listing.propertyType}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Commercial: {listing.isCommercial ? "Yes" : "No"}
                  </Typography>
                  <Typography variant="h6">Price: {listing.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};

export default CardView;
