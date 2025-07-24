import { Box, Typography } from "@mui/material";
import Logo from "../../assets/tflLogo.svg";
import { useNavigate } from "react-router-dom";
import './header.css'

export default function Header() {
const navigate = useNavigate()

  const handleHome = () =>{
    navigate("/")
  }

  return (
    <Box
    onClick={handleHome}
      sx={{
        p: 3,
        background: "linear-gradient(135deg, #0019A8 0%, #1976D2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        height: '3.5rem',
        position: "relative",
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
          fontSize: {xs:"1.4rem", sm:"2.4rem", lg:"2.6rem"},
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          zIndex: 1,
          position: "relative",
          cursor: "pointer",
       
        }}
      >
        TUBE TRACKER
      </Typography>
    </Box>
  );
}
