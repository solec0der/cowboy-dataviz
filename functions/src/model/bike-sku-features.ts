import { SpeedModes, fromJson as speedModesFromJson } from './bike-speed-modes';

export interface BikeSkuFeatures {
  batteryAutonomy: number;
  availableSkuConversion: string | null;
  displayedSpeeds: SpeedModes;
  availableSpeeds: SpeedModes;
  throttleOffVoltage: number;
  batteryLeds: number;
  modbusDevices: number[];
  defaultBlePasskey: string;
  hasWirelessCharger: boolean;
}

export const fromJson = (json: any): BikeSkuFeatures => {
  return {
    batteryAutonomy: json.battery_autonomy,
    availableSkuConversion: json.available_sku_conversion,
    displayedSpeeds: speedModesFromJson(json.displayed_speeds),
    availableSpeeds: speedModesFromJson(json.available_speeds),
    throttleOffVoltage: json.throttle_off_voltage,
    batteryLeds: json.battery_leds,
    modbusDevices: json.modbus_devices,
    defaultBlePasskey: json.default_ble_passkey,
    hasWirelessCharger: json.has_wireless_charger,
  };
};
