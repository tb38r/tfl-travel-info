import { Paper } from "@mui/material";
import { useMemo } from "react";

interface ArrivalCardsProps {
  line: string;
  platform: string;
  destination: string;
  duetime: string;
}

export default function ArrivalCards(props: ArrivalCardsProps) {
  const { line, platform, destination, duetime } = props;
  //const [time, setTime] = useState("")

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
            border: "red",
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "fit-content",
          }}
          className="arrivals-card"
        >
          <span>{line}</span>
          <span>{time}</span>
          <span>{destination}</span>
          <span>{platform}</span>
        </Paper>
      </div>
    </div>
  );
}
