import { BikeAutonomy, fromJson as bikeAutonomyFromJson } from './bike-autonomy';
import { BikeModel, fromJson as bikeModelFromJson } from './bike-model';
import { BikeSettings, fromJson as bikeSettingsFromJson } from './bike-settings';
import { BikeSku, fromJson as bikeSkuFromJson } from './bike-sku';
import { BikePosition, fromJson as bikePositionFromJson } from './bike-position';
import { InsuranceConditions, fromJson as insuranceConditionsFromJson } from './insurance-conditions';

export interface BikeInfo {
  id: number;
  passkey: string;
  hasCowboyConnect: boolean;
  nickname: string;
  macAddress: string;
  settings: BikeSettings;
  sku: BikeSku;
  activatedAt: string;
  crashed: boolean;
  stolen: boolean;
  tripSharing: boolean;
  autonomies: BikeAutonomy[];
  insuranceConditions: InsuranceConditions;
  availableFeatures: Map<string, string>;
  model: BikeModel;
  seenAt: string;
  lastCrashStartedAt: string;
  firmwareVersion: string;
  serialNumber: string;
  skuCode: string;
  lastRideMode: string;
  totalDistance: number;
  totalDuration: number;
  batteryStateOfCharge: number;
  autonomy: number;
  position: BikePosition;
}

export const fromJson = (json: any): BikeInfo => {
  return {
    id: json.id,
    passkey: json.passkey,
    hasCowboyConnect: json.has_cowboy_connect,
    nickname: json.nickname,
    macAddress: json.mac_address,
    settings: bikeSettingsFromJson(json.settings),
    sku: bikeSkuFromJson(json.sku),
    activatedAt: json.activated_at,
    crashed: json.crashed,
    stolen: json.stolen,
    tripSharing: json.trip_sharing,
    autonomies: json.autonomies.map(bikeAutonomyFromJson),
    insuranceConditions: insuranceConditionsFromJson(json.insurance_conditions),
    availableFeatures: json.available_features,
    model: bikeModelFromJson(json.model),
    seenAt: json.seen_at,
    lastCrashStartedAt: json.last_crash_started_at,
    firmwareVersion: json.firmware_version,
    serialNumber: json.serial_number,
    skuCode: json.sku_code,
    lastRideMode: json.last_ride_mode,
    totalDistance: json.total_distance,
    totalDuration: json.total_duration,
    batteryStateOfCharge: json.battery_state_of_charge,
    autonomy: json.autonomy,
    position: bikePositionFromJson(json.position),
  };
};
