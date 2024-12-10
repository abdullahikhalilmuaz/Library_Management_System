import { useEffect, useState } from "react";
import styles from "./book.module.css";
import Picked from "./Picked";
const url = "http://localhost:5000/api/libBooks";
export default function Book() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [showComponent, setShowComponent] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  function handlePick() {
    setShowComponent("picked");
  }
  return (
    <div className={styles.book}>
      <h3>Available Books</h3>
      <input
        className={styles.search}
        type="text"
        placeholder="Search book..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {showComponent === "picked" ? (
        <Picked />
      ) : (
        <div className={styles.books}>
          {data
            .filter((user) => {
              if (search.toLocaleLowerCase() === "") {
                return user;
              } else {
                return user.bookname
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase());
              }
            })
            .map((book) => (
              <div className={styles.bookcontainer} key={book.id}>
                <div className={styles.image}></div>
                <div className={styles.details}>
                  <table>
                    <thead>
                      <tr>
                        <th>Book Name:</th>
                        <td>{book.bookname}</td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th>Author"</th>
                        <td>{book.Author}</td>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th>Pages:</th>
                        <td>{book.pages}</td>
                      </tr>
                    </thead>
                  </table>
                  <button onClick={handlePick}>Pick</button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
