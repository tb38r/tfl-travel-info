import { Paper } from "@mui/material";
import { useMemo } from "react";
import { formatTime } from "../../utils/helpers";

interface ArrivalCardsProps {
  platform: string;
  destination: string;
  duetime: string;
}

export default function ArrivalCards(props: ArrivalCardsProps) {
  const { platform, destination, duetime } = props;

  const time = useMemo(
    () => formatTime(duetime),

    [duetime]
  );

  return (
    <div>
      <div>
        <Paper
          sx={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "fit-content",
            padding: "10px",
          }}
          className="arrivals-card"
        >
          <span className="arrivals-line-item"> {platform}</span>
          <span className="arrivals-line-item">
            <span>&#9200;</span> {time}
          </span>
          <span className="arrivals-line-item">
            <span>&#128205;</span> {destination}
          </span>
        </Paper>
      </div>
    </div>
  );
}
