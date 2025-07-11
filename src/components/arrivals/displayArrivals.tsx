import { useParams } from "react-router-dom";
import { StopPoints } from "../search-bar/stop-points/stops";
import { useEffect, useState } from "react";
import Arrivals from "./arrivals";
import ArrivalCards from "./arrivalCards";

interface Arrivals {
  id: string;
  stationName: string;
  lineId: string;
  lineName: string;
  platformName: string;
  timeToStation: number;
  currentLocation: string;
  towards: string;
  expectedArrival: string;
}

type ArrivalsResponse = Arrivals[];

export default function DisplayArrivals() {
  const { tubestop } = useParams();
  const [isInValid, setIsInValid] = useState(true);
  const [data, setData] = useState<ArrivalsResponse>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tubestop && tubestop in StopPoints) {
      setIsInValid(false);
    } else {
      setIsInValid(true);
    }
  }, [tubestop]);

  useEffect(() => {
    setLoading(true);

    if (!isInValid) {
      const naptanID = StopPoints[tubestop as keyof typeof StopPoints];

      (async () => {
        try {
          const response = await fetch(
            `https://api.tfl.gov.uk/StopPoint/${naptanID}/arrivals`
          );
          if (!response.ok) {
            console.error("Error fetching arrivals data", response);
            return;
          }
          const data = await response.json();
          console.log(data);
          setData(data);
          setLoading(false);
        } catch (err) {
          setLoading(false);

          console.error("Arrivals fetch failed:", err);
        }
      })();
    }
  }, [isInValid, tubestop]);

  return !loading && !isInValid ? (
    <div style={{ color: "black" }}>
        <ArrivalCards line ={data[0]?.lineName} platform ={data[0]?.platformName} destination={data[0]?.towards} duetime={data[0]?.expectedArrival} />
    </div>
  ) : (
    <div style={{color:"black"}}>error or loading</div>
  );
}
