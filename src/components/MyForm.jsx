import React, {useState} from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Typography,
  Grid,
  Container,
  InputLabel,
  InputAdornment,
} from "@mui/material";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [city, setCity] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {name, email, selectedDate, city});
  };

  return (
    <Container
      maxWidth="sm"
      div
      className="rounded-lg border-2  bg-white"
      style={{height: "34em", width: "28em",display:'flex',flexDirection:'column',gap:'10px'}}
    >
      <Typography
        variant="h4"
        gutterBottom
        // className="font-poppins text-lg font-bold leading-38 tracking-normal text-left pb-2"
        style={{fontSize: "1.5rem", fontWeight: "bold",marginTop:'30px', paddingBottom: "10px"}}
      >
        The best solution for your yachtify
      </Typography>

      <Typography
        variant="h7"
        gutterBottom
        className="font-poppins text-26 font-450 leading-38 tracking-normal text-left"
      >
        Book your ideal boat on Yachtify with ease and set sail on an unforgettable voyage with just
        one click.
      </Typography>

      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel style={{fontWeight: "bold", fontSize: "13px"}}>
              Place of departure
            </InputLabel>

            <TextField
              placeholder="Spain"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              // className="rounded-lg w-30"
              className="rounded-lg w-96 h-12"
              style={{borderRadius: "12px", width: "25em", height: "3rem"}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{fontWeight: "bold", fontSize: "13px"}}>Time</InputLabel>

            <TextField
              placeholder="Select Time"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonthRoundedIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{fontWeight: "bold", fontSize: "13px"}}>Date</InputLabel>

            <TextField
              placeholder="15 february 2024"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg focus:outline-none w-56">
              Search
            </button>
          </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default MyForm;
