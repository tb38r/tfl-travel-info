import { Paper } from "@mui/material";

interface ArrivalCardsProps {
  line: string;
  platform: string;
  destination: string;
  duetime: string;
}
/*
const datetime = "2025-07-09T11:25:25Z";
const date = new Date(datetime);
const localTime = date.toLocaleTimeString('en-GB', { 
  hour: '2-digit', 
  minute: '2-digit' 
});


*/
export default function ArrivalCards(props: ArrivalCardsProps) {
  const { line, platform, destination, duetime } = props;

  return (
    <Paper
      sx={{
        border: "red",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span>{line}</span>
      <span>{duetime}</span>
      <span>{destination}</span>
      <span>{platform}</span>
    </Paper>
  );
}
