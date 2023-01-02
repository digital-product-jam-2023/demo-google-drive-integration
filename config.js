export const GOOGLE_CREDENTIALS = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};
export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file"
];
export const GOOGLE_DRIVE_DIRECTORY = process.env.GOOGLE_DRIVE_DIRECTORY;
export const FORM_VALID_FIELDS = ["name", "city", "email", "comment", "file"];
export const CREATE_FOLDER_ENDPOINT = "/api/create-folder/";
export const LIST_FOLDER_ENDPOINT = "/api/list/";
