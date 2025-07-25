import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./favourites.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface FavItemProps {
  from: string;
  to: string;
  itemID: string;
}

export default function FavouriteItem(props: FavItemProps) {
  const { from, to } = props;
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/journey/${from}/${to}`);
  }, []);

  return (
    <div className="fav-line-item" onClick={handleNavigate}>
      <span> {from?.replace(" Underground Station", "") || from} </span>
      <ArrowRightAltIcon />
      <span> {to?.replace(" Underground Station", "") || to}</span>
    </div>
  );
}
