import { Container, IconButton } from "@mui/material";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircleOutlined";
import Search from "../search-bar/search";
import { StopPoints } from "../search-bar/stop-points/stops";
import { useReducer } from "react";

type Action =
  | { type: "from"; destination: string }
  | { type: "to"; destination: string }
  | {
      type: "error";
      destination: string;
    };

interface State {
  from: string;
  to: string;
  error: boolean;
  errorMsg: string;
}

const journeyPlannerObj: State = {
  from: "",
  to: "",
  error: false,
  errorMsg: "",
};

function reducer(state: State, action: Action): State {
  if (!(action.destination in StopPoints)) {
    return {
      ...state,
      error: true,
      errorMsg: `Invalid station : ${action.destination}`,
    };
  }

  switch (action.type) {
    case "error": {
      return {
        ...state,
        error: true,
        errorMsg: action.destination,
      };
    }
    case "from":
      return {
        ...state,
        from: action.destination,
        error: false,
        errorMsg: "",
      };
    case "to":
      return {
        ...state,
        to: action.destination,
        error: false,
        errorMsg: "",
      };
    default:
      return state;
  }
}

export default function JourneyPlanner() {
  const [journeyPlannerState, dispatch] = useReducer(
    reducer,
    journeyPlannerObj
  );

  const handleFromDestination = (dest: string) => {
    dispatch({ type: "from", destination: dest });
  };

  const handleToDestination = (dest: string) => {
    dispatch({ type: "to", destination: dest });
  };

  const handleSubmit = () => {
    if (!journeyPlannerState.to || !journeyPlannerState.from) {
      return;
    }

    if (journeyPlannerState.to === journeyPlannerState.from) {
      dispatch({
        type: "error",
        destination: "Cannot navigate to & from the same destination",
      });
    } else {
      console.log(journeyPlannerState.from, journeyPlannerState.to);
    }
  };

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
        textAlign: "left",
        padding: "0.5rem",
      }}
    >
      <span style={{ color: "black", fontWeight: "500" }}>Journey Planner</span>

      <Search
        placeholder="From station"
        updateStation={handleFromDestination}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <IconButton>
          {" "}
          <SwapVerticalCircleIcon
            fontSize="large"
            sx={{ color: "lightblue", cursor: "pointer" }}
            onClick={() => handleSubmit()}
          />
        </IconButton>
      </div>
      <Search placeholder="To station" updateStation={handleToDestination} />
      {journeyPlannerState.error && (
        <span style={{ color: "red" }} className="journey-error">
          {journeyPlannerState.errorMsg}
        </span>
      )}
    </Container>
  );
}

// function PlannerInput(props: any) {
//   const { placeholder } = props;

//   return (
//     <TextField
//       sx={{
//         width: "98%",
//         "& .MuiOutlinedInput-root": {
//           borderRadius: "10px",
//           backgroundColor: 'white',
//           height: '2.5rem'

//         },
//       }}
//       placeholder={placeholder}
//     />
//   );
// }
