import { Box, Typography } from "@mui/material";
import Logo from "../../assets/tflLogo.svg";
import { useEffect, useState } from "react";

interface LineData{
  stopPoints : any
}

export default function Header() {

  const [lines, setLines] = useState<LineData |null>(null)
  const [hasData, setHasData] = useState(false)
  const [stops, setStops] = useState<Record<string, string>>({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.tfl.gov.uk/StopPoint/Mode/tube"
        );
        if (!response.ok) {
          console.error("Error fetching line data", response);
          return;
        }
        const data = await response.json();
        setLines(data);
        setHasData(true)
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    })();
  }, []);

  useEffect(()=>{

    const newStops: Record<string, string> = {};

    lines?.stopPoints.forEach((stop:any) => {
      if (stop?.commonName && stop?.naptanId && stop?.naptanId.slice(0,3)=="940") {
        newStops[stop.commonName] = stop.naptanId;
      }
    });
    
    setStops(newStops);
    
  }, [hasData])


  console.log("map", lines)
  console.log("stops", stops)

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
        style={{ height: "70px", width: "70px", zIndex: 1 }}
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
