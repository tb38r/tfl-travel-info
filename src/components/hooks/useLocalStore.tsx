import { useSyncExternalStore } from "react";
import { type FavouriteKeys } from "../journey-planner/types/journey-types";

type Journey = string | null;
type JourneyObject = {
  [key: string]: string;
};

const SAVED_JOURNEYS_KEY = "savedJourneys";

const getJourneysFromLocalStorage = () => {
  return localStorage.getItem(SAVED_JOURNEYS_KEY);
};


const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener("journeys-updated", callback);
  return () => {
    window.removeEventListener("journeys-updated", callback);
  };
};

const useLocaLStore = (): [
  Journey,
  (val: JourneyObject) => void,
  (from: string, to: string) => void,
] => {
  const journeys = useSyncExternalStore(subscribe, getJourneysFromLocalStorage);
  const entries = getJourneysFromLocalStorage();

  const addNewEntry = (entry: JourneyObject) => {
    if (entries) {
      let journeyArr = JSON.parse(entries);
      if (journeyArr.length < 3) {
        let newJourneyArr = [entry, ...journeyArr];
        const arrToString = JSON.stringify(newJourneyArr);
        localStorage.setItem(SAVED_JOURNEYS_KEY, arrToString);
      } else {
        journeyArr = [entry, ...journeyArr.slice(0, -1)];
        let newJourneyArr = JSON.stringify(journeyArr);
        localStorage.setItem(SAVED_JOURNEYS_KEY, newJourneyArr);
      }
      window.dispatchEvent(new Event("journeys-updated")); 
    } else {
      const entryToString = JSON.stringify([entry]);
      localStorage.setItem(SAVED_JOURNEYS_KEY, entryToString);
      window.dispatchEvent(new Event("journeys-updated")); 
    }
  };

  const removeFromStorage = (from: string, to: string) => {
    if (entries) {
      let journeyArr = JSON.parse(entries);

      let updatedEntry = journeyArr.filter((entry: FavouriteKeys) => {
        return !(entry.from === from && entry.to === to);
      });
      const updatedToString = JSON.stringify(updatedEntry);
      localStorage.setItem(SAVED_JOURNEYS_KEY, updatedToString);
      window.dispatchEvent(new Event("journeys-updated"));
    }
  };

  return [journeys, addNewEntry, removeFromStorage];
};

export { useLocaLStore, type JourneyObject };
