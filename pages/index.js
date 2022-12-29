
import { useState } from "react";
import { CREATE_FOLDER_ENDPOINT } from "../config";
import { getValidFormData } from "../helpers";

async function postData(data) {
  const response = await fetch(CREATE_FOLDER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response;
}

export default function IndexPage() {

  const [formData, setFormData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = getValidFormData(event.target.elements)
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
            <textarea name="comment" id="form-comment" placeholder="Comment"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div >
  )
}
