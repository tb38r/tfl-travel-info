import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import './favourites.css'

interface FavItemProps {
  from: string;
  to: string;
}

export default function FavouriteItem(props: FavItemProps) {
  const { from, to } = props;

  return (
    <div className="fav-line-item">
      {from}
      <ArrowRightAltIcon />
      {to}
    </div>
  );
}
