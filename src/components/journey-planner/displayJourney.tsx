import { useParams } from "react-router-dom";
// import { StopPoints } from "../search-bar/stop-points/stops";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { UndergroundStations } from "./types/undergroundStops";
import type {
  JourneyResult,
  Journey,
  Leg,
  Instruction,
  Obstacle,
  StopPoint,
  RouteOption,
} from "./types/journey-types";

export default function DisplayJourney() {
  const { from, to } = useParams();
  const [isInValid, setIsInValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState<JourneyResult>([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (
      from &&
      from in UndergroundStations &&
      to &&
      to in UndergroundStations
    ) {
      console.log("is valid!");
      setIsInValid(false);
    } else {
      setIsInValid(true);
      setLoading(false);
      setError(true);
      setErrorMsg(`Unable to route from ${from} to ${to}`);
    }
  }, [from, to]);

  useEffect(() => {
    setLoading(true);
    if (!isInValid) {
      const fromDest =
        UndergroundStations[from as keyof typeof UndergroundStations];
      const toDest =
        UndergroundStations[to as keyof typeof UndergroundStations];

      (async () => {
        try {
          const response = await fetch(
            `https://api.tfl.gov.uk/journey/journeyresults/${fromDest}/to/${toDest}?app_key=${apiKey}&mode=tube`
          );

          if (!response.ok) {
            setLoading(false);
            setError(true);
            setErrorMsg(`Unable to retrieve data for ${from} to ${to}`);
            return;
          }
          const data = await response.json();
          setLoading(false);
          setData(data);
        } catch (err) {
          setLoading(false);
          setError(true);

          let message = `An unexpected error occurred`;

          if (err instanceof Error) {
            message = `Unable to retrieve data for ${from} to ${to} \n ${err.message}`;
          }
          setErrorMsg(message);
          console.error("Failed to retrieve journey:", err);
        }
      })();
    }
    setLoading(false);
  }, [isInValid, from, to]);
  console.log("data from Journey", data);
  
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      {error && <div style={{ color: "red" }}>{errorMsg}</div>}
      <div className="demo" style={{ color: "black" }}>
        {from}
        <br />
        {to}
      </div>
    </>
  );
}
