import { useParams } from "react-router-dom";
import { StopPoints } from "../search-bar/stop-points/stops";

export default function DisplayJourney() {
  const { from, to } = useParams();
  console.log(from, to);
  return <></>;
}
