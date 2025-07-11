import { useCallback, useState, useEffect } from "react";
import Search from "../search-bar/search";
import { StopPoints } from "../search-bar/stop-points/stops";
import { useNavigate } from "react-router-dom";

export default function Arrivals() {
  const [station, setStation] = useState("");
  const navigate = useNavigate();

  const updateStation = useCallback((station: string) => {
    setStation(station);
  }, []);

  useEffect(() => {
    if (station in StopPoints) {
      navigate(`/arrivals/${station}`);
    }

  }, [station]);

  return <Search updateStation={updateStation} />;
}

// const arrivalObj = {
//   destination: "",
//   error: false,
//   errorMsg: "",
// };

// function reducer(state: object, action: string) {
//   if (!(action in StopPoints)) {
//     return {
//       destination: action,
//       error: true,
//       errorMsg: `Invalid station -  ${action} `,
//     };
//   }

//   return {
//     destination: action,
//     error: false,
//     errorMsg: "",
//   };
// }
// const [arrivalState, dispatch] = useReducer(reducer, arrivalObj);
