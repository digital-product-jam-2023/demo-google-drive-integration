import { GOOGLE_DRIVE_DIRECTORY } from "../../config";
import { client } from "../../drive";

export default async function handler(req, res) {
  const response = await client.files.list({
    parents: [GOOGLE_DRIVE_DIRECTORY],
    fields: "nextPageToken, files(id, name)",
  })
  res.send(response.data)
}
