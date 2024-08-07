export interface BikePosition {
  type: string;
  latitude: number;
  longitude: number;
  elevation: number | null;
  source: string;
  received_at: string; // ISO 8601 date string
  created_at: string; // ISO 8601 date string
  address: string;
  id: number;
  adjusted_accuracy: string;
  accuracy: number;
}

export const fromJson = (json: any): BikePosition => {
  return {
    type: json.type,
    latitude: json.latitude,
    longitude: json.longitude,
    elevation: json.elevation,
    source: json.source,
    received_at: json.received_at,
    created_at: json.created_at,
    address: json.address,
    id: json.id,
    adjusted_accuracy: json.adjusted_accuracy,
    accuracy: json.accuracy,
  };
};
