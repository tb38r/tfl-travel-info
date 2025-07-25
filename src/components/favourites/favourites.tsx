import { useLocaLStore } from "../hooks/useLocalStore";
import { Container } from "@mui/material";
import FavouriteItem from "./favourite-item";
import "./favourites.css";

interface Items {
  from: string;
  to: string;
  id: string;
}

export default function Favourites() {
  const [favourites, _] = useLocaLStore();

  const favToJSON = favourites ? JSON.parse(favourites) : [];
  console.log("fav to j", favToJSON);

  return (
    favourites && (
        <div className="favourites-component">

      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          textAlign: "left",
          padding: "0.5rem",
        }}
      >
          <div className="fav-title-container">
            <div className="favourites-title">Favourites</div>
         
          </div>
        <div className="favourites-container">
          {favToJSON.map((item: Items) => {
            return <FavouriteItem from={item.from} to={item.to} key={item.id}/>;
          })}

        </div>
      </Container>
      </div>
    )
  );
}
