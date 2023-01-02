
import { useState } from "react";
import { CREATE_FOLDER_ENDPOINT } from "../config";
import { getValidFormData } from "../helpers";

async function postData(data) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  const response = await fetch(CREATE_FOLDER_ENDPOINT, {
    method: "POST",
    // Note we removed the content type headers
    // We are not longer sending JSON
    // We are sending multipart form data
    // Which is the default for a POST request
    body: formData
  })
  return response;
}

export default function IndexPage() {

  const [formData, setFormData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = getValidFormData(event.target.elements);
    // TODO: DO we want to verify file types, or, size, before we allow upload?
    // if (file.size > someSize)
    // if (file.type === someType)
    setFormData(formData);
    postData(formData);
  }

  return (
    <div className="row">
      <div className="item">
        <div className="content">
          Complete this information below to create a folder with assets on Google Drive
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input name="name" id="form-name" placeholder="Name" required />
            <input name="city" id="form-city" placeholder="City" required />
            <input name="email" id="form-email" type="email" placeholder="Email" required />
            <input name="file" id="form-file" type="file" placeholder="File" />
            <textarea name="comment" id="form-comment" placeholder="Comment"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div >
  )
}
