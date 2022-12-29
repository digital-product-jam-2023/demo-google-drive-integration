import { createFolder, createSheetInFolder, writeDataToSheet } from "../../drive";

export default async function handler(req, res) {
  const { name, city, email, comment } = req.body;
  // TODO: you should probably check if a folder already exists before
  // creating a new one.

  const folderId = await createFolder(name);
  const sheetId = await createSheetInFolder(folderId, name);
  const wroteData = await writeDataToSheet(sheetId, {name, city});
  //const attachedAssetsUpload = await uploadAssetsToFolder(folderId);
  res.send(folderId);
}
