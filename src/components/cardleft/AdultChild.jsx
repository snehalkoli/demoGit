import React from 'react'

const AdultChild = ({NoOf,Ages,Value}) => {
  return (
    <div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: "10px",
                marginTop:'10px'
              }}
            >
              <div style={{fontSize: "14px", fontWeight: "bold", margin: "0px 0px 0px 26px"}}>
                {NoOf}
              </div>
              <div style={{fontSize: "14px", marginLeft: "26px", color: "gray"}}>
                {Ages}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "5px",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7.5" stroke="#B3B3B3" />
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  alignment-baseline="middle"
                  font-size="10"
                  fill="#B3B3B3"
                >
                  -
                </text>
              </svg>
              <span>{Value}</span>
              <svg
                width="16"
                className="pt-[1px]"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="7.5" stroke="#B3B3B3" />
                <text
                  x="8"
                  y="8"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="10"
                  fill="#B3B3B3"
                >
                  +
                </text>
              </svg>
            </div>
          </div>
          <div
            style={{
              background: "rgba(234, 236, 240, 1)",
              width: "93%",
              height: "2px",
              marginLeft: "13px",
              marginTop: "15px",
            }}
          ></div>

          
        </div>
  )
}

export default AdultChild