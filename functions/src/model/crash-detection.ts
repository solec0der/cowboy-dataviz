import { CrashContact, fromJson as crashContactFromJson } from './crash-contact';

export interface CrashDetection {
  maxContacts: number;
  contacts: CrashContact[];
}

export const fromJson = (json: any): CrashDetection => {
  return {
    maxContacts: json.max_contacts,
    contacts: json.contacts.map(crashContactFromJson),
  };
};
