export interface InsuranceConditions {
  passed: boolean;
  startsAt: string; // ISO 8601 date string
  minTripDistance: number;
}

export const fromJson = (json: any): InsuranceConditions => {
  return {
    passed: json.passed,
    startsAt: json.starts_at,
    minTripDistance: json.min_trip_distance,
  };
};
