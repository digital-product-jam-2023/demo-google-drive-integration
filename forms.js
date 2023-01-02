import formidable from "formidable";

export async function multiPartFormParser(req) {
  return new Promise(async (resolve, reject) => {

    const form = formidable({
      maxFiles: 1, // TODO: set this as desired
      maxFileSize: 1024 * 1024 * 5, // TODO: set this as desired, this is 5mb
    });

    form.parse(req, function (err, fields, files) {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};
