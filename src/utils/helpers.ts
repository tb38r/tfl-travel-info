export const formatTime = (time: string) => {
  const date = new Date(time);
  const localTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return localTime || time;
};
