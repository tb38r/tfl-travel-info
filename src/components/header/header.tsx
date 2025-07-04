import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px  blue",
        backgroundColor: "blue",
        maxHeight: "7em",
        fontSize: "44px",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center'
      }}
    >
      TubeTracker
    </Box>
  );
}
