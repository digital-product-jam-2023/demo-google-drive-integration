import { createFolder, createSheetInFolder, uploadAssetsToFolder, writeDataToSheet } from "../../drive";
import { multiPartFormParser } from "../../forms";

// this is how we create route-specific config for next
// by default, next parses request body objects as JSON
// that makes sense for most APIs
// but not for handling multipart form data
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { fields, files } = await multiPartFormParser(req);

  const { name, city, email, comment } = fields;
  // TODO: you should probably check if a folder already exists before
  // creating a new one.

  const folderId = await createFolder(name);
  const sheetId = await createSheetInFolder(folderId, name);
  const wroteData = await writeDataToSheet(sheetId, {name, city});
  const attachedAssetsUpload = await uploadAssetsToFolder(folderId, files);
  res.send(folderId);
}
