export enum TubeLine {
  Bakerloo = "Bakerloo",
  Central = "Central",
  Circle = "Circle",
  District = "District",
  HammersmithCity = "Hammersmith & City",
  Jubilee = "Jubilee",
  Metropolitan = "Metropolitan",
  Northern = "Northern",
  Piccadilly = "Piccadilly",
  Victoria = "Victoria",
  WaterlooCity = "Waterloo & City",
}

export const TubeLineNameMap: Record<string, TubeLine> = {
  Bakerloo: TubeLine.Bakerloo,
  Central: TubeLine.Central,
  Circle: TubeLine.Circle,
  District: TubeLine.District,
  "Hammersmith & City": TubeLine.HammersmithCity,
  Jubilee: TubeLine.Jubilee,
  Metropolitan: TubeLine.Metropolitan,
  Northern: TubeLine.Northern,
  Piccadilly: TubeLine.Piccadilly,
  Victoria: TubeLine.Victoria,
  "Waterloo & City": TubeLine.WaterlooCity,
};

export const TubeLineColors: Record<TubeLine, string> = {
  [TubeLine.Bakerloo]: "rgb(178, 99, 0)",
  [TubeLine.Central]: "rgb(220, 36, 31)",
  [TubeLine.Circle]: "rgb(255, 200, 10)",
  [TubeLine.District]: "rgb(0, 125, 50)",
  [TubeLine.HammersmithCity]: "rgb(245, 137, 166)",
  [TubeLine.Jubilee]: "rgb(131, 141, 147)",
  [TubeLine.Metropolitan]: "rgb(155, 0, 88)",
  [TubeLine.Northern]: "rgb(0, 0, 0)",
  [TubeLine.Piccadilly]: "rgb(0, 25, 168)",
  [TubeLine.Victoria]: "rgb(3, 155, 229)",
  [TubeLine.WaterlooCity]: "rgb(118, 208, 189)",
};

export enum StatusColor {
  Green = "#4CAF50", // Good Service, No Issues
  Yellow = "#FFC107", // Minor Delays, Reduced Service, Info
  Orange = "#FF9800", // Part Closure, Planned Closure, Change of Frequency
  Red = "#F44336", // Severe Delays, Suspended, Closed
  Blue = "#2196F3", // Special Service, Bus Service
  Grey = "#9E9E9E", // Misc (Exit Only, No Step Free Access, etc)
}

export const SeverityColorMap: Record<number, StatusColor> = {
  0: StatusColor.Blue, // Special Service
  1: StatusColor.Red, // Closed
  2: StatusColor.Red, // Suspended
  3: StatusColor.Red, // Part Suspended
  4: StatusColor.Orange, // Planned Closure
  5: StatusColor.Orange, // Part Closure
  6: StatusColor.Red, // Severe Delays
  7: StatusColor.Yellow, // Reduced Service
  8: StatusColor.Blue, // Bus Service
  9: StatusColor.Yellow, // Minor Delays
  10: StatusColor.Green, // Good Service
  11: StatusColor.Orange, // Part Closed
  12: StatusColor.Grey, // Exit Only
  13: StatusColor.Grey, // No Step Free Access
  14: StatusColor.Orange, // Change of frequency
  15: StatusColor.Red, // Diverted
  16: StatusColor.Red, // Not Running
  17: StatusColor.Yellow, // Issues Reported
  18: StatusColor.Green, // No Issues
  19: StatusColor.Yellow, // Information
};
