import React from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BoatType = () => {
    const boatTypes = [
        "Motorboat",
        "RIB",
        "Houseboat",
        "Gulet",
        "Yacht",
        "Sailboat",
        "Catamaran",
        "Jet Ski",
        "Boat without license",
      ];
  return (
    <div>
          <div className="flex justify-between">
            <div className="text-base font-bold ml-6">Boat Type</div>
            <div>
              <KeyboardArrowUpIcon />
            </div>
          </div>
          <ul>
            {boatTypes.map((boatType) => (
              <li className="flex items-center ml-6 gap-2" key={boatType}>
                <input type="checkbox" className="text-gray-300" />
                {boatType}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default BoatType