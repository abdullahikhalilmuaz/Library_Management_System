import { useEffect, useState } from "react";
import styles from "./ebooks.module.css";
import EbookUpload from "./EbookUpload";
const url = "http://localhost:5000/api/ebooks";

export default function Ebook() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showUpload, setShowUpload] = useState("");

  function handleFileUpload() {
    setShowUpload("ebookupload");
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className={styles.header}>
        <h3>Ebooks</h3>
        <input
          type="search"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleFileUpload}>+</button>
      </div>
      {showUpload === "ebookupload" ? (
        <EbookUpload />
      ) : (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Pages</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((ebook) => {
                  if (search.toLocaleUpperCase() === "") {
                    return ebook;
                  } else {
                    return ebook.bookName
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase());
                  }
                })
                .map((ebook) => (
                  <tr>
                    <td>{ebook.id}</td>
                    <td>{ebook.bookName}</td>
                    <td>{ebook.pages}</td>
                   
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
