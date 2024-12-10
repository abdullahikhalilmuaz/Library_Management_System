import { useEffect, useState } from "react";
const url = "http://localhost:5000/api/ebooks";
import styles from "./StudentEbook.module.css";
export default function StudentsEbook() {
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
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((book) => {
                  if (search.toLocaleUpperCase() === "") {
                    return book;
                  } else {
                    return book.bookName
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase());
                  }
                })
                .map((ebook) => (
                  <tr>
                    <td>{ebook.id}</td>
                    <td>{ebook.bookName}</td>
                    <td>{ebook.pages}</td>
                    <td>
                      <a
                        href={`http://localhost:5000/api/download/${ebook.fileName}`}
                        target="_self"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
