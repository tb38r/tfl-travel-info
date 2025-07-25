import { type FavouriteKeys } from "../components/journey-planner/types/journey-types";

export const formatTime = (time: string) => {
  const date = new Date(time);
  const localTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return localTime || time;
};

export const IsFavourite = (
  from: string | undefined,
  to: string | undefined,
  favourites: string | null
): boolean => {
  if (!from || !to || !favourites) return false;

  const favsToArr = JSON.parse(favourites);
  return favsToArr.some(
    (favItem: FavouriteKeys) => favItem.from === from && favItem.to === to
  );
};
