import { TextField, Autocomplete } from "@mui/material";
import { useMemo, useState } from "react";
import { StopPoints } from "./stop-points/stops";

interface searchProps {
  updateStation: (v: string) => void;
  placeholder: string;
}

export default function Search({ updateStation, placeholder }: searchProps) {
  const inputValues = useMemo(() => Object.keys(StopPoints), [StopPoints]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      disablePortal
      options={inputValues}
      autoComplete
      autoHighlight
      clearOnBlur
      openOnFocus={false}
      open={open}
      onOpen={(event) => {
       
        if (inputValue.length > 0 || event.type === "keydown") {
          setOpen(true);
        }
      }}
      onClose={() => setOpen(false)}

      onInputChange={(event, newInputValue) => {
        event.stopPropagation()
        setInputValue(newInputValue);
        if (newInputValue.length > 0) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }}
      onChange={(_, newValue) => {
        if (newValue) {
          updateStation(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              backgroundColor: "white",
              height: "2.5rem",
            },
          }}
          placeholder={`${placeholder}`}
        />
      )}
    />
  );
}
