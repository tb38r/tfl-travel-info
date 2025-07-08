import { Paper } from "@mui/material";
import Dot from "./dot";

export default function Line(props: any) {
  const { line, status, color, statusColor } = props;
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        height: "3rem",
        alignItems:'center',
        color: "black",
        borderRadius: "0.5em",
        borderLeft: `0.3rem solid ${color}`, 
        paddingX: '10px',
        backgroundColor: '#E1EBEE'
      }}
    >
      <span style={{fontWeight: '600'}}>{line}</span>
      <Dot status= {status} color={statusColor}/>
    </Paper>
  );
}
