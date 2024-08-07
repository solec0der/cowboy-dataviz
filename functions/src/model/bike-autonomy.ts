export interface BikeAutonomy {
  calibrated: boolean;
  rideMode: string;
  fullBatteryRange: number;
}

export const fromJson = (json: any): BikeAutonomy => {
  return {
    calibrated: json.calibrated,
    rideMode: json.ride_mode,
    fullBatteryRange: json.full_battery_range,
  };
};
