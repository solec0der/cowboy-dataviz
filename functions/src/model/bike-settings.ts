export interface BikeSettings {
  defaultRideMode: string;
  smartLock: string;
  ledBrightness: number;
  maxSpeed: number;
  autoLock: number;
  autoUnlock: boolean;
  brakeLightSensitivity: number;
  theftAlerts: boolean;
  crashDetection: boolean;
  manualUnlock: number;
}

export const fromJson = (json: any): BikeSettings => {
  return {
    defaultRideMode: json.default_ride_mode,
    smartLock: json.smart_lock,
    ledBrightness: json.led_brightness,
    maxSpeed: json.max_speed,
    autoLock: json.auto_lock,
    autoUnlock: json.auto_unlock,
    brakeLightSensitivity: json.brake_light_sensitivity,
    theftAlerts: json.theft_alerts,
    crashDetection: json.crash_detection,
    manualUnlock: json.manual_unlock,
  };
};
