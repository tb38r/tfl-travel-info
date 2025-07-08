import { Box, Typography } from "@mui/material";
import Logo from '../../assets/tflLogo.svg'

export default function Header() {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "white",
        maxHeight: "7em",
        fontSize: "44px",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textTransform:'uppercase',
      }}
    >
      <div className="logo" style={{height:'60px', width:'60px'}}><img src={Logo}/></div>
      <Typography style={{color:"rgb(0, 25, 168)"}}  variant="h3" >TUBE TRACKER</Typography>

 </Box>
  );
}
