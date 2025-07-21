import ErrorPage from "../../assets/404-w.png";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function FourZeroFour() {
  const navigate = useNavigate();

  return (
    <Tooltip title="Return Home" placement="bottom">
      <img
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        src={ErrorPage}
        width={"95%"}
        height={"95%"}
        alt="Return Home Icon"
      />
    </Tooltip>
  );
}
