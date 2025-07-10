import { TextField, Autocomplete } from "@mui/material";
import { useMemo } from "react";
import { StopPoints } from "./types/stops";

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
      onInputChange={(_, newValue: string) => {
        updateStation(newValue);
      }}
      // slotProps={{
      //   listbox: { sx: { maxHeight: { s: "10px", lg: "50px" } } },
      // }}

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
