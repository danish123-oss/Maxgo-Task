import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import fetchPropertyListings from "../api/propertyListings";
import _ from "lodash";
const DataTable = () => {
  const [listings, setListings] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(listings);

  useEffect(() => {
    fetchPropertyListings().then((data) => setListings(data));
  }, []);
  useEffect(() => {
    setFilteredData(
      listings.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, listings]);
  const handleSort = (property) => {
    const sortedData = _.orderBy(filteredData, [property]);
    setFilteredData(sortedData);
  };
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
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Search by Name"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: 20, marginTop: 50 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={listings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ marginBottom: 20, marginTop: 50 }}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell onClick={() => handleSort("title")}>Title</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Beds</TableCell>
              <TableCell>Bath</TableCell>
              <TableCell>Covered Area (sqft)</TableCell>
              <TableCell>Property Type</TableCell>
              <TableCell>Commercial</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((listing) => (
                <TableRow
                  key={listing.id}
                  hover
                  onClick={() => handleClick(listing.id)}
                >
                  <TableCell>
                    <img
                      src={listing.imageUrl}
                      alt="Property"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell>{listing.title}</TableCell>
                  <TableCell>{listing.address}</TableCell>
                  <TableCell>{listing.beds}</TableCell>
                  <TableCell>{listing.bath}</TableCell>
                  <TableCell>{listing.coveredAreaSQFT}</TableCell>
                  <TableCell>{listing.propertyType}</TableCell>
                  <TableCell>{listing.isCommercial ? "Yes" : "No"}</TableCell>
                  <TableCell>{listing.price}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
