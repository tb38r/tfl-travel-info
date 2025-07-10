import Search from "../search-bar/search";
import { useCallback, useState } from "react";

export default function Arrivals() {
  const [station, setStation] = useState("");

  console.log("station from arrivals", station)
  const updateStation = useCallback((station: string) => {
    setStation(station);
  }, []);



  return <Search updateStation ={updateStation}/>;
}
