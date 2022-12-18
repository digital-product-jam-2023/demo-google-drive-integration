import { google } from 'googleapis';
import { GOOGLE_CREDENTIALS, GOOGLE_SCOPES } from './config';

const auth = new google.auth.GoogleAuth({
  credentials: GOOGLE_CREDENTIALS,
  scopes: GOOGLE_SCOPES
});

const authClient = await auth.getClient();

export const client = google.drive({
  version: 'v3',
  auth: authClient
});
