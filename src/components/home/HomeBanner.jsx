import React from "react";
import {TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

function HomeBanner() {
  const bannerStyle = {
    backgroundImage:
      'url("https://s3-alpha-sig.figma.com/img/0c22/6ce0/279ad47fee1f48dcd8b4e2fc07723731?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pl0-x9YOwq8lmcG4bZxd6BBkd9bJOjq1sQ~vpGMrYHB24M~C4NuE14L0Rm5tl8-NAJ6R97BEj8SbkZqcC32XPMcJAZ2YLuHuW4gCyU~JVHDl7JXvr-Ur0UxNsn~gSKMYJKOyAx7982RAD~cHUxd-Rp~ec~G2V3naJ1JK7KHlSOXLLvH~SekmV7IQ13BubvVAQbJj9m6FS9HoRsRQKT6coFhQXSN97HfHrmjlDi6eFNMn~tTUto4KCIsESq9VxO8DFadBav9-BVy989VcOMbISJvWnQdVVEf9vinDX1QWmfin-0W6pPYLd~cchOWvbZgJPJJ4fBKZnOC5hiN4ebct1Q__")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-cover bg-center w-50 text-center h-70 p-12 text-white " style={bannerStyle}>
      <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
        <h1 className="font-bold text-5xl">TO Rent a Boat Never Easy Before</h1>

        <div className="font-bold text-sm">Select your preferences as per your convenience</div>
      </div>
      <div className="flex bg-white text-black rounded-full justify-around h-1/2">
        <div className="flex flex-col">
          <label className="font-bold">Place to departure</label>
          <TextField
            placeholder="place to departure"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              style: {
                border: "none",
              },
              notchedOutline: {
                border: "none",
              },
              endAdornment: (
                <div className="border-solid border-black w-12 h-12 p-4 flex items-center justify-center rounded-full bg-gray-300">
                  <GpsFixedIcon className="text-blue-500" />
                </div>
              ),
            }}
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Select date</p>
          <TextField
            placeholder="place to departure"
            variant="standard"
            className="h-12"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Time</p>
          <TextField
            placeholder="place to departure"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <div className="w-16 h-16 p-4 flex items-center justify-center rounded-full bg-blue-500">
                  <SearchIcon style={{fontSize: 30, color: "white"}} />
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
