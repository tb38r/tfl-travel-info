import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { LinearProgress, Tooltip, styled, tooltipClasses } from "@mui/material";
import type { TooltipProps } from "@mui/material";
import { UndergroundStations } from "./types/undergroundStops";
import type { JourneyResult } from "./types/journey-types";
import { formatTime } from "../../utils/helpers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./styles/journey-planner.css";
import { useLocaLStore, type JourneyObject } from "../hooks/useLocalStore";

export default function DisplayJourney() {
  const { from, to } = useParams();
  const [isInValid, setIsInValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState<JourneyResult>();
  const [_, saveJourney] = useLocaLStore();

  const apiKey = import.meta.env.VITE_API_KEY;

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#1976D2",
      boxShadow: theme.shadows[1],
      fontSize: 13,
    },
  }));

  useEffect(() => {
    setData(undefined);

    if (
      from &&
      from in UndergroundStations &&
      to &&
      to in UndergroundStations
    ) {
      setError(false);
      setIsInValid(false);
      setLoading(true);
    } else {
      setIsInValid(true);
      setLoading(false);
      setError(true);
      setErrorMsg(`Unable to route from ${from} to ${to}`);
    }
  }, [from, to]);

  useEffect(() => {
    if (!isInValid) {
      setLoading(true);

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
          setData(data);
          setLoading(false);
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
  }, [isInValid, from, to, apiKey]);

  const SaveToLocalStorage = useCallback(() => {
    let id = Math.random().toString(36).substring(2, 6);

    const journeyToSave: JourneyObject = {
      [`from`]: `${from}`,
      [`to`]: `${to}`,
      [`id`]: id,
    };
    saveJourney(journeyToSave);
  }, [from, to]);

  console.log("data from Journey", data);

  return (
    <>
      <div className="display-journeys">
        {loading && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {
              <span style={{ color: "black" }}>
                Getting your routes from {from} to {to}
              </span>
            }
            <br />
            <span></span>
            <LinearProgress
              color="secondary"
              sx={{ width: "100%", display: "block" }}
            />
          </div>
        )}
        {error && <div style={{ color: "red" }}>Error: {errorMsg}</div>}

        <>
          {data && (
            <div className="title-container">
              <div className="journey-title">Journey results</div>
              <div className="journey-subtitle">
                {from?.replace(" Underground Station", "") || from} {"to"}{" "}
                {to?.replace(" Underground Station", "") || to}
                <span
                  onClick={() => SaveToLocalStorage()}
                  style={{ cursor: "pointer" }}
                >
                  <LightTooltip
                    title="Save Journey"
                    placement="left"
                    style={{ color: "#C71585" }}
                  >
                    <FavoriteIcon />
                  </LightTooltip>
                </span>
              </div>
            </div>
          )}
          {data &&
            data?.journeys?.map((journey, index) => (
              <div key={index} className="journey-leg-card">
                <>
                  {journey.legs.map((leg, index) => (
                    <div key={index} className="leg-row-item">
                      <span>{leg.instruction.summary} </span>
                      <span className="leg-item-duration">
                        {" "}
                        {formatTime(leg.departureTime)}
                      </span>
                    </div>
                  ))}
                </>
                <div className="leg-row-item">
                  <span>Travel Time</span>
                  <span className="leg-item-duration">
                    {" "}
                    {journey.duration}mins
                  </span>
                </div>
              </div>
            ))}
        </>
      </div>
    </>
  );
}
