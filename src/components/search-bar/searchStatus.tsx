import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchStatus() {
  const handleStatusSearch = (e: React.ChangeEvent<any>) => {
    console.log(e.target.value);
  };
  return (
    
    <TextField
      sx={{
        width: "99%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
        backgroundColor: '#E1EBEE'
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        },
      }}
      placeholder="Search for a station..."
      onChange={handleStatusSearch}
    />
  );
}
