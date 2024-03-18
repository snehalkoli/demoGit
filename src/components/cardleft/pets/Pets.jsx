import React from 'react'

const Pets = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
            <div style={{fontSize: "14px", fontWeight: "bold", margin: "0px 0px 0px 26px"}}>
              Do you have pets
            </div>
            <div></div>
            <div
              style={{
                justifyContent: "center",
                borderRadius: "8px",
                width: "33%",
                display: "flex",
                height: "26px",
                border: "1px solid gray",
                marginRight: "10px",
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>Yes</span>
                <span>
                  <img src="/src/images/arrow.png" alt="" />
                </span>
              </span>
            </div>
          </div>
  )
}

export default Pets