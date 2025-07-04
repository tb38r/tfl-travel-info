import { TextField , Container, IconButton, Typography} from "@mui/material";
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircleOutlined';

export default function JourneyPlanner() {
    const handleJourneySearch= ()=>{
        console.log("clicked")

    }

  return (

    <Container  disableGutters sx={{alignItems: 'center'}}>
   <span style={{color: 'grey', fontWeight: '900'}} >Journey Planner</span>
    <PlannerInput placeholder="From station"/>
   <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}><IconButton onClick={handleJourneySearch}> <SwapVerticalCircleIcon fontSize="large" sx={{color:"lightblue", cursor:'pointer'}} /></IconButton></div>
    <PlannerInput placeholder="To station"/>
    </Container>
    
  )
}



function PlannerInput (props: any){
    const {placeholder} = props

    return(
        <TextField
        sx={{
          width: "99%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
          backgroundColor: '#E1EBEE'
        }}
        
        placeholder={placeholder}
      />
    )
}