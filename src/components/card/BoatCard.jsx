import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const ImageCard = styled(Card)(({theme}) => ({
  width: 300,
  margin: "10px",
}));

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 3 columns with equal width
  gap: "20px", // spacing between cards
  justifyContent: "center",
});

const data = [
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle1.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle2.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle3.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle4.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle5.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle6.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle7.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle8.png",
  },
  {
    title: "Another Yacht charter",
    address: "1234 Main St. Anytown, USA 12345",
    details: "Pets allowed | Boat Type",
    price: "$200 Per Hour",
    src: "/src/images/Rectangle9.png",
  },
  // Add more data as needed
];

function BoatCard() {
  return (
    <>
   
    <GridContainer>
      {data.map((item, index) => (
        <div key={index} style={{width:'100%',border:'1px solid gray',borderRadius:'2px',marginTop:'10px'}}>
          {/* <CardContent> */}
            <div className="flex justify-end relative top-9 right-4">
              <FavoriteBorderRoundedIcon />
            </div>
            <img src={item.src} alt={item.title} className="w-full h-52" />
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <div className="flex items-center">
              <LocationOnRoundedIcon className="text-gray-500 mr-1" />
              <Typography variant="body2" component="div">
                {item.address}
              </Typography>
            </div>
            <Typography variant="body2" component="div">
              {item.details}
            </Typography>
            <Typography variant="body2" component="div">
              {item.price}
            </Typography>
          {/* </CardContent> */}
        </div>
      ))}
    </GridContainer>
    </>
  );
}

export default BoatCard;
