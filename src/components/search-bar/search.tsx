import { TextField, Autocomplete } from "@mui/material";
import { useMemo } from "react";
import { StopPoints } from "./stop-points/stops";

interface searchProps {
  updateStation: (v: string) => void;
}

export default function Search({ updateStation }: searchProps) {
  const inputValues = useMemo(() => Object.keys(StopPoints), [StopPoints]);

  return (
    <Autocomplete
      disablePortal
      options={inputValues}
      autoComplete={true}
      autoHighlight
      clearOnBlur
      onInputChange={(_, newValue: string) => {
        updateStation(newValue);
      }}
  
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "#E1EBEE",
              height: "2.5rem",
            },
          }}
          placeholder="Get Station Arrivals"
        />
      )}
    />
  );
}
