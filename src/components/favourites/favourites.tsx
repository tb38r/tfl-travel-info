import { useLocaLStore } from "../hooks/useLocalStore";
import { Container } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./favourites.css";
import { CallMerge } from "@mui/icons-material";

export default function Favourites() {
  const [favourites, _] = useLocaLStore();

  const favToJSON = favourites ? JSON.parse(favourites) : [];
  console.log('fav to j', favToJSON)


  return (
    favourites && (
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
        <div className="favourites-container">
          <div className="fav-title-container">
            <div className="favourites-title">Favourites</div>
            <span style={{ color: "#9932CC" }}>
              <BookmarkIcon />
            </span>
          </div>

          <div className="favorites-items">{favourites}</div>
        </div>
      </Container>
    )
  );
}
