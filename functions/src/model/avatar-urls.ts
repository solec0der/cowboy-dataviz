export interface AvatarUrls {
  small: string;
  medium: string;
  large: string;
}

export const fromJson = (json: any): AvatarUrls => {
  return {
    small: json.small,
    medium: json.medium,
    large: json.large,
  };
};
