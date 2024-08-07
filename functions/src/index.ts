import { onSchedule, ScheduledEvent } from 'firebase-functions/v2/scheduler';
import admin from 'firebase-admin';
import axios from 'axios';
import * as logger from 'firebase-functions/logger';

admin.initializeApp();
const firestore = admin.firestore();

const COWBOY_API_BASE_URL = 'https://app-api.cowboy.bike';
const SIGN_IN_URL = COWBOY_API_BASE_URL + '/auth/sign_in';
const USERS_ME_URL = COWBOY_API_BASE_URL + '/users/me';

const getAuthContext = async (
  cowboyEmail: string,
  cowboyPassword: string
): Promise<AuthContext> => {
  logger.info('cowboy-email=' + cowboyEmail);
  logger.info('cowboy-password=' + cowboyPassword);
  const response = await axios.post(SIGN_IN_URL, {
    email: cowboyEmail,
    password: cowboyPassword,
  });

  return {
    accessToken: response.headers['access-token'],
    client: response.headers['client'],
    uid: response.headers['uid'],
    expiry: response.headers['expiry'],
  };
};

const getRequestHeaders = async (
  cowboyEmail: string,
  cowboyPassword: string
): Promise<Record<string, string>> => {
  const authContext = await getAuthContext(cowboyEmail, cowboyPassword);
  return {
    'Access-Token': authContext.accessToken,
    'X-Cowboy-App-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    Client: authContext.client,
    'Client-Type': 'Android-App',
    Uid: authContext.uid,
  };
};

export const fetchData = onSchedule(
  { schedule: '0 * * * *', secrets: ['COWBOY_EMAIL', 'COWBOY_PASSWORD'] },
  async (event: ScheduledEvent) => {
    const cowboyEmail = process.env.COWBOY_EMAIL || '';
    const cowboyPassword = process.env.COWBOY_PASSWORD || '';

    const headers = await getRequestHeaders(cowboyEmail, cowboyPassword);

    const profileResponse = await axios.get(USERS_ME_URL, {
      headers,
    });

    const profileData = profileResponse.data;
    await firestore.collection('profileReadings').add(profileData);
  }
);

interface AuthContext {
  accessToken: string;
  client: string;
  uid: string;
  expiry: number;
}
