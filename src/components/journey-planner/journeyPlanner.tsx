import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import { Container, IconButton } from "@mui/material";
import { useCallback, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search-bar/search";
import { StopPoints } from "../search-bar/stop-points/stops";
import GoButton from "./goButton";

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
      errorMsg: `Error : ${action.destination}`,
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

  const [toggleState, setToggleStates] = useState(journeyPlannerObj);

  const navigate = useNavigate();

  const handleFromDestination = (dest: string) => {
    dispatch({ type: "from", destination: dest });
  };

  const handleToDestination = (dest: string) => {
    dispatch({ type: "to", destination: dest });
  };

  const handleSubmit = () => {
    if (!journeyPlannerState.from || !journeyPlannerState.to) {
      return;
    }

    if (journeyPlannerState.from === journeyPlannerState.to) {
      dispatch({
        type: "error",
        destination: "Cannot navigate to & from the same destination",
      });
    } else {
      navigate(
        `/journey/${journeyPlannerState.from}/${journeyPlannerState.to}`
      );
    }
  };

  const handleToggle = useCallback(() => {
    setToggleStates((prev) => ({
      ...prev,
      from: journeyPlannerState.to,
      to: journeyPlannerState.from,
    }));
  }, [journeyPlannerState.from, journeyPlannerState.to]);

  console.log('togstates', toggleState)

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

      <Search placeholder="Start" updateStation={handleFromDestination} />
      <div
        className="destination-toggle-container"
      >
        <IconButton>
          <SwapVertRoundedIcon
            fontSize="large"
            sx={{ color: "rgb(101, 118, 233)", cursor: "pointer" }}
            onClick={() => handleToggle()}
          />
        </IconButton>
      </div>

      <Search placeholder="End" updateStation={handleToDestination} />
      {journeyPlannerState.error && (
        <span style={{ color: "red" }} className="journey-error">
          {journeyPlannerState.errorMsg}
        </span>
      )}
      <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
        <div className="go-button-container" onClick={() => handleSubmit()}>
          <GoButton />
        </div>
      </div>
    </Container>
  );
}

/*
     <IconButton>
          {" "}
          <SwapVerticalCircleIcon
            fontSize="large"
            sx={{ color: "lightblue", cursor: "pointer" }}
            onClick={() => handleSubmit()}
          />
        </IconButton>

*/
