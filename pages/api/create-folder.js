import { GOOGLE_DRIVE_DIRECTORY } from "../../config";
import { client } from "../../drive";

export default async function handler(req, res) {
  const { name } = req.query;
  const response = await client.files.create({
    resource: {
      parents: [GOOGLE_DRIVE_DIRECTORY],
      name,
      mimeType: 'application/vnd.google-apps.folder',
    },
  })
  res.send(response.data)
}
