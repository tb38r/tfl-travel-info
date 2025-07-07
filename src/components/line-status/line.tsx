import { Paper } from "@mui/material";

export default function Line(props: any) {
  const { line, status } = props;
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
        boxShadow: "0 2px 4px red",
        borderColor: "red 5px",
        paddingX: '10px',
        backgroundColor: '#E1EBEE'
      }}
      elevation={1}
    >
      <span style={{fontWeight: '700'}}>{line}</span>
      <span>{status}</span>
    </Paper>
  );
}
