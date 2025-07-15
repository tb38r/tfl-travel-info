import { useParams } from "react-router-dom";
import { StopPoints } from "../search-bar/stop-points/stops";
import { CircularProgress, Button, ThemeProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
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
  const [lineSelected, setLineSelected] = useState("");
  const [selectedButton, setSelectedButton] = useState(999);

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

  const handleSelectedLine = (line: string, index: number) => {
    setSelectedButton(index);
    setLineSelected(line);
  };

  return !loading && !isInValid ? (
    <div className="arrivals-container">
      <div className="arrivals-title">{tubestop} Arrivals</div>
      <div className="arrivals-buttons">
        {availableLines.map((line, index) => (
          <ThemeProvider theme={ButtonsTheme} key={line}>
            <Button
              key={line}
              variant={selectedButton === index ? "contained" : "outlined"}
              sx={{ backgroundColor: `${line}.main`, cursor: "pointer" }}
              onClick={() => handleSelectedLine(line, index)}
            >
              {line}
            </Button>
          </ThemeProvider>
        ))}
      </div>

      {lineSelected && (
        <div className="arrival-cards-container">
          {allData
            ?.filter((line) => {
              return line.lineName === lineSelected;
            })
            .slice()
            .sort((a, b) => {
              const dateA = new Date(a.expectedArrival);
              const dateB = new Date(b.expectedArrival);

              if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                return 0;
              }

              return dateA.getTime() - dateB.getTime();
            })
            ?.map((line, index) => (
              <ArrivalCards
                key={index}
                platform={line?.platformName}
                destination={line?.towards}
                duetime={line?.expectedArrival}
              />
            ))}
        </div>
      )}
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
