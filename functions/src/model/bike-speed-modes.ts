export interface SpeedModes {
  offroad: number | null;
  default: number;
}

export const fromJson = (json: any): SpeedModes => {
  return {
    offroad: json.offroad,
    default: json.default,
  };
};
