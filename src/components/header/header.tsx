import { Box, Typography } from "@mui/material";
import Logo from "../../assets/tflLogo.svg";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="header-container">
      <Box
        onClick={handleHome}
        sx={{
          p: 3,
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "6rem",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#1976D2",
            fontWeight: 800,
            fontSize: { xs: "1.3rem", sm: "1.8rem", lg: "2rem" },
            letterSpacing: "0.08em",
            textAlign: "center",
            position: "relative",
            cursor: "pointer",
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
          tubetracker
        </Typography>
        <div className="logo" onClick={handleHome}>
          <img
            src={Logo}
            style={{
              width: "90%",
              height: "90%",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>
      </Box>
    </div>
  );
}
