export interface UserSettings {
  temperatureUnits: string;
  referralProgram: boolean;
  distanceUnits: string;
  weightUnits: string;
}

export const fromJson = (json: any): UserSettings => {
  return {
    temperatureUnits: json.temperature_units,
    referralProgram: json.referral_program,
    distanceUnits: json.distance_units,
    weightUnits: json.weight_units,
  };
};
