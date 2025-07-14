import { useParams } from "react-router-dom";
import { StopPoints } from "../search-bar/stop-points/stops";
import { CircularProgress, Button, ThemeProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Arrivals from "./arrivals";
import ArrivalCards from "./arrivalCards";
import { ButtonsTheme } from "./arrivalsTheme";

import "./arrivals.css";

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
  const [allData, setAllData] = useState<ArrivalsResponse>([]);
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
          setAllData(data);
          setLoading(false);
        } catch (err) {
          setLoading(false);

          console.error("Arrivals fetch failed:", err);
        }
      })();
    }
  }, [isInValid, tubestop]);

  const availableLines = useMemo(
    () => [
      ...new Set(
        allData.map(function (arrivalsArr) {
          return arrivalsArr.lineName;
        })
      ),
    ],
    [allData]
  );

  const handleSelectedLine = (line: string) => {
    console.log(line);
  };

  console.log(availableLines);

  return !loading && !isInValid ? (
    <div className="arrivals-container">
      <div className="arrivals-title">{tubestop} Arrivals</div>
      <div className="arrivals-buttons">
        {availableLines.map((line) => (
          <ThemeProvider theme={ButtonsTheme}>
            <Button
              key={line}
              variant="contained"
              sx={{ backgroundColor: `${line}.main`, cursor: "pointer" }}
              onClick={() => handleSelectedLine(line)}
            >
              {line}
            </Button>
          </ThemeProvider>
        ))}
      </div>
      <div style={{ color: "black" }}>
        <ArrivalCards
          line={allData[0]?.lineName}
          platform={allData[0]?.platformName}
          destination={allData[0]?.towards}
          duetime={allData[0]?.expectedArrival}
        />
      </div>
    </div>
  ) : (
    <CircularProgress
      color="secondary"
      sx={{
        size: {
          sm: "2.5rem",
          md: "5rem",
        },
      }}
    />
  );
}
