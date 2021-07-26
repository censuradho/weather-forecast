export interface PositionStackData {
  latitude: number,
  longitude: number,
  confidence: number,
  county: string,
  locality: string,
  label: string,
  continent: string,
}

export interface PositionStack {
  data: PositionStackData[]
}