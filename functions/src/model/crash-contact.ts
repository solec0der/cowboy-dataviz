export interface CrashContact {
  phoneNumber: string;
  clientLanguage: string;
  fullName: string;
  id: number;
}

export const fromJson = (json: any): CrashContact => {
  return {
    phoneNumber: json.phone_number,
    clientLanguage: json.client_language,
    fullName: json.full_name,
    id: json.id,
  };
};
