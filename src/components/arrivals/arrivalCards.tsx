import { Paper } from "@mui/material";
import { useMemo } from "react";

interface ArrivalCardsProps {
  platform: string;
  destination: string;
  duetime: string;
}

export default function ArrivalCards(props: ArrivalCardsProps) {
  const {  platform, destination, duetime } = props;

  const time = useMemo(() => {
    const date = new Date(duetime);
    const localTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return localTime || duetime;
  }, [duetime]);

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
            padding:'10px'

          }}
          className="arrivals-card"
        >
          <span className="arrivals-line-item"> {platform}</span>
          <span className="arrivals-line-item"><span>&#9200;</span> {time}</span>
          <span className="arrivals-line-item"><span>&#128205;</span> {destination}</span>
        </Paper>
      </div>
    </div>
  );
}
