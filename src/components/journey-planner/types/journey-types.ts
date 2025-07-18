//export type JourneyResult = Journey[];

export type JourneyResult ={
  journeys : Journey[];
  lines : []
}

export interface Journey {
  startDateTime: string;
  arrivalDateTime: string;
  duration: number;
  alternativeRoute: boolean;
  legs: Leg[];
  routeOptions: RouteOption[];
  mode: Identifier;
  disruptions: Disruption[];
}

export interface Leg {
  duration: number;
  instruction: Instruction;
  obstacles: Obstacle[];
  departureTime: string;
  arrivalTime: string;
  departurePoint: StopPoint;
  arrivalPoint: StopPoint;
  path: Path;
}

export interface Instruction {
  summary: string;
  detailed: string;
  steps: any[];
}

export interface Obstacle {
  type: string;
  incline: string;
  stopId: number;
  position: string;
}

export interface StopPoint {
  naptanId: string;
  platformName: string;
  icsCode: string;
  individualStopId: string;
  commonName: string;
  placeType: string;
  additionalProperties: any[];
  lat: number;
  lon: number;
}

export interface Path {
  lineString: string;
  stopPoints: Identifier[];
  elevation: any[];
}

export interface Identifier {
  id: string;
  name: string;
  uri: string;
  type: string;
  routeType: string;
  status: string;
  crowding?: any;
  motType?: string;
  network?: string;
}

export interface RouteOption {
  name: string;
  directions: string[];
  lineIdentifier: Identifier;
  direction: string;
}

export interface Disruption {
  category: string;
  type: string;
  categoryDescription: string;
  description: string;
  summary: string;
  additionalInfo: string;
  created: string;
  lastUpdate: string;
}
