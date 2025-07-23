import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./favourites.css";

interface FavItemProps {
  from: string;
  to: string;
}

export default function FavouriteItem(props: FavItemProps) {
  const { from, to } = props;

  return (
    <div className="fav-line-item">
     <span> {from?.replace(" Underground Station", "") || from} </span>
      <ArrowRightAltIcon />
      <span> {to?.replace(" Underground Station", "") || to}</span>
    </div>
  );
}
