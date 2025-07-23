import { useSyncExternalStore } from "react";

type Journey = string | null;
type JourneyObject = {
  [key: string]: string;
};

const SAVED_JOURNEYS_KEY = "savedJourneys";

const getJourneysFromLocalStorage = () => {
  return localStorage.getItem(SAVED_JOURNEYS_KEY);
};

const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};

const useLocaLStore = (): [Journey, (val: JourneyObject) => void] => {
  const journeys = useSyncExternalStore(subscribe, getJourneysFromLocalStorage);

  const addNewEntry = (entry: JourneyObject) => {
    const entries = getJourneysFromLocalStorage();
    if (entries) {
      let journeyArr = JSON.parse(entries);
      if (journeyArr.length < 3) {
        let newJourneyArr = [entry,...journeyArr];
        const arrToString = JSON.stringify(newJourneyArr);
        localStorage.setItem(SAVED_JOURNEYS_KEY, arrToString);
      } else {
        journeyArr = [entry, ...journeyArr.slice(0,-1)];
        let newJourneyArr = JSON.stringify(journeyArr);
        localStorage.setItem(SAVED_JOURNEYS_KEY, newJourneyArr);
      }
      window.dispatchEvent(new Event("storage"));
    } else {
      const entryToString = JSON.stringify([entry]);
      localStorage.setItem(SAVED_JOURNEYS_KEY, entryToString);
      window.dispatchEvent(new Event("storage"));
    }
  };

  return [journeys, addNewEntry];
};

export { useLocaLStore, type JourneyObject };
