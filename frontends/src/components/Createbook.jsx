import { useEffect, useState } from "react";
import styles from "./updatebook.module.css";
export default function Createbook() {
  const url = "http://localhost:5000/api/libBooks";
  const [id, setId] = useState("");
  const [bookname, setBookname] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookPages, setBookPages] = useState("");
  const formData = {
    id: id,
    bookname: bookname,
    genre: bookGenre,
    Author: bookAuthor,
    pages: bookPages,
    available: "available",
  };
  function handleSubmit(e) {
    e.preventDefault();
    function fetchData() {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          window.alert(data.bookname, "has successfully been added");
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className={styles.forms}>
          <div>
            <input
              type="number"
              placeholder="Book id"
              required
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Book Name"
              required
              onChange={(e) => setBookname(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Book Author"
              required
              onChange={(e) => setBookAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Book Genre"
              required
              onChange={(e) => setBookGenre(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Book Pages"
              required
              onChange={(e) => setBookPages(e.target.value)}
            />
            <input
              type="submit"
              value="Add Book"
              style={{ width: "45%", borderRadius: "5px", cursor: "pointer" }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
