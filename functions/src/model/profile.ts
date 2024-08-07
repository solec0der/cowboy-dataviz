import { AvatarUrls, fromJson as avatarUrlsFromJson } from './avatar-urls';
import { CrashDetection, fromJson as crashDetectionFromJson } from './crash-detection';
import { UserSettings, fromJson as userSettingsFromJson } from './user-settings';

export interface Profile {
  lastName: string;
  inAppShopEnabled: boolean;
  avatars: AvatarUrls;
  nickname: string;
  uuid: string;
  stravaAuthorized: boolean;
  availableLanguages: string[];
  syncAppleHealth: boolean;
  role: string;
  avatarUrl: string;
  instagramUsername: string;
  facebookUsername: string | null;
  instagramProfileUrl: string;
  uid: string;
  countryCode: string;
  coverUrl: string;
  createdAt: string; // ISO 8601 date string
  settings: UserSettings;
  updatedAt: string; // ISO 8601 date string
  investorNumber: number | null;
  syncStrava: boolean;
  socialFeatures: boolean;
  biography: string | null;
  firstBikeAssignedAt: string; // ISO 8601 date string
  email: string;
  firstName: string;
  facebookProfileUrl: string | null;
  syncGoogleFit: boolean;
  id: number;
  totalCo2Saved: number;
  intercomToken: string;
  crashDetection: CrashDetection;
  provider: string;
  emergencyPhoneNumber: string;
  phoneNumber: string;
  profileLink: string;
}

export const fromJson = (profileData: any): Profile => {
  return {
    lastName: profileData.last_name,
    inAppShopEnabled: profileData.in_app_shop_enabled,
    avatars: avatarUrlsFromJson(profileData.avatars),
    nickname: profileData.nickname,
    uuid: profileData.uuid,
    stravaAuthorized: profileData.strava_authorized,
    availableLanguages: profileData.available_languages,
    syncAppleHealth: profileData.sync_apple_health,
    role: profileData.role,
    avatarUrl: profileData.avatar_url,
    instagramUsername: profileData.instagram_username,
    facebookUsername: profileData.facebook_username,
    instagramProfileUrl: profileData.instagram_profile_url,
    uid: profileData.uid,
    countryCode: profileData.country_code,
    coverUrl: profileData.cover_url,
    createdAt: profileData.created_at,
    settings: userSettingsFromJson(profileData.settings),
    updatedAt: profileData.updated_at,
    investorNumber: profileData.investor_number,
    syncStrava: profileData.sync_strava,
    socialFeatures: profileData.social_features,
    biography: profileData.biography,
    firstBikeAssignedAt: profileData.first_bike_assigned_at,
    email: profileData.email,
    firstName: profileData.first_name,
    facebookProfileUrl: profileData.facebook_profile_url,
    syncGoogleFit: profileData.sync_google_fit,
    id: profileData.id,
    totalCo2Saved: profileData.total_co2_saved,
    intercomToken: profileData.intercom_token,
    crashDetection: crashDetectionFromJson(profileData.crash_detection),
    provider: profileData.provider,
    emergencyPhoneNumber: profileData.emergency_phone_number,
    phoneNumber: profileData.phone_number,
    profileLink: profileData.profile_link,
  };
};

// humanEfficiencyFactor: number;
// totalDuration: number; // Assume this is in seconds
// total_distance: number; // Total distance in kilometers

// availablePlans: any[];
// activeSubscriptions: any[];
// subscription: any | null; // Assuming null or a specific type

// referral_program: ReferralProgram;
