import { TextField, Container, IconButton } from "@mui/material";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircleOutlined";

export default function JourneyPlanner() {
  const handleJourneySearch = () => {
    console.log("clicked");
  };

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height:'100%',
        textAlign: 'left',
        padding: '0.5rem'
      }}
    >
      <span style={{ color: "black", fontWeight: "500" }}>Journey Planner</span>
      <PlannerInput placeholder="From station" />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <IconButton onClick={handleJourneySearch}>
          {" "}
          <SwapVerticalCircleIcon
            fontSize="large"
            sx={{ color: "lightblue", cursor: "pointer" }}
          />
        </IconButton>
      </div>
      <PlannerInput placeholder="To station" />
    </Container>
  );
}

function PlannerInput(props: any) {
  const { placeholder } = props;

  return (
    <TextField
      sx={{
        width: "98%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          backgroundColor: 'white',
          height: '2.5rem'

        },
      }}
      placeholder={placeholder}
    />
  );
}
