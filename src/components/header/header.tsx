import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "rgb(0, 25, 168)",
        maxHeight: "7em",
        fontSize: "44px",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
        fontFamily:'Johnston Sans',
        textTransform:'uppercase'
      }}
    >
      Tube Tracker
    </Box>
  );
}
