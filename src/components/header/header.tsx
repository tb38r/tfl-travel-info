import { Box, Typography } from "@mui/material";
import Logo from "../../assets/tflLogo.svg";

export default function Header() {


  return (
    <Box
      sx={{
        p: 3,
        background: "linear-gradient(135deg, #0019A8 0%, #1976D2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
        },
      }}
    >
      <div
        className="logo"
        style={{ height: "90px", zIndex: 1 }}
      >
        <img
          src={Logo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontWeight: 800,
          fontSize: "3.2rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          zIndex: 1,
          position: "relative",
        }}
      >
        TUBE TRACKER
      </Typography>
    </Box>
  );
}
