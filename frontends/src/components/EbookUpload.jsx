import { useState } from "react";
import styles from "./EbookUpload.module.css";

const url = "http://localhost:5000/api/upload";

export default function EbookUpload() {
  const [id, setId] = useState("");
  const [bookName, setBookName] = useState("");
  const [pages, setPages] = useState("");
  const [file, setFile] = useState(null);

  function handleSub(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("bookName", bookName);
    formData.append("pages", pages);
    formData.append("file", file);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert("Soft Copy Uploaded Successfully!");
        
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSub}>
        <label>
          <input
            type="number"
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Book Name"
            onChange={(e) => setBookName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="Pages"
            onChange={(e) => setPages(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <label>
          <input type="submit" value="+" name="file" />
        </label>
        <br />
        <br />
      </form>
    </div>
  );
}
