import { TextField, Autocomplete } from "@mui/material";
import { useMemo, useState } from "react";
import { StopPoints } from "./types/stops";

export default function SearchStatus() {
  const [searchValue, setSearchValue] = useState("");

  console.log("checkchange", searchValue);

  const inputValues = useMemo(() => Object.keys(StopPoints), [StopPoints]);

  return (
    <Autocomplete
      disablePortal
      options={inputValues}
      autoComplete={true}
      autoHighlight
      onInputChange={(_, newValue: string) => {
        setSearchValue(newValue);
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
