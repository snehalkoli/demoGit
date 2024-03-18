import React from "react";
// import Header from "./Header";
import MyForm from "./MyForm";
import Header from "./Header";

const Yanchity = () => {
  const yanchityLinks = [
    { label: "Register as Owner", url: "#regiowner" },
    { label: "Register as Broker", url: "#regibroker" },
    { label: "Login", url: "#login" },
    { label: "Registration", url: "#registration" },
    { label: "Contact Us", url: "#contact", className: "contactUs" }
  ];

  return (
    <div>
      <Header links={yanchityLinks} />
      <div style={{position: "relative"}}>
        <img
          className="h-[668px] w-full"
          src="https://s3-alpha-sig.figma.com/img/0c22/6ce0/279ad47fee1f48dcd8b4e2fc07723731?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pl0-x9YOwq8lmcG4bZxd6BBkd9bJOjq1sQ~vpGMrYHB24M~C4NuE14L0Rm5tl8-NAJ6R97BEj8SbkZqcC32XPMcJAZ2YLuHuW4gCyU~JVHDl7JXvr-Ur0UxNsn~gSKMYJKOyAx7982RAD~cHUxd-Rp~ec~G2V3naJ1JK7KHlSOXLLvH~SekmV7IQ13BubvVAQbJj9m6FS9HoRsRQKT6coFhQXSN97HfHrmjlDi6eFNMn~tTUto4KCIsESq9VxO8DFadBav9-BVy989VcOMbISJvWnQdVVEf9vinDX1QWmfin-0W6pPYLd~cchOWvbZgJPJJ4fBKZnOC5hiN4ebct1Q__"
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            bottom: "0px",
          }}
        >
          <MyForm />
        </div>
      </div>
    </div>
  );
};

export default Yanchity;
