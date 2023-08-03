import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from "@mui/material";
import fetchListingDetails from "../api/listingDetails";

const ListingDetail = () => {
  const { id } = useParams();
  const [listingDetails, setListingDetails] = useState(null);

  useEffect(() => {
    fetchListingDetails(id).then((data) => setListingDetails(data));
  }, [id]);

  if (!listingDetails) {
    return <div>Loading...</div>;
  }

  const {
    imageUrl,
    title,
    address,
    beds,
    bath,
    coveredAreaSQFT,
    propertyType,
    isCommercial,
    price,
    description,
  } = listingDetails;

  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia component="img" image={imageUrl} alt="Property" height="400" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Beds: {beds}, Bath: {bath}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Covered Area (sqft): {coveredAreaSQFT}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Property Type: {propertyType}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Commercial: {isCommercial ? "Yes" : "No"}
        </Typography>
        <Typography variant="h6">Price: {price}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ListingDetail;
