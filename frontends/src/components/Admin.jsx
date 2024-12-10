import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "./admin.module.css";
import Side from "./Side";
import Createbook from "./Createbook";
import Readbook from "./Readbook";
import Updatebook from "./Updatebook";
import Deletebook from "./Deletebook";
import { useNavigate } from "react-router-dom";
import Users from "./Users";
import Lendings from "./Lendings";
import RequestPage from "./RequestPage";
import About from "./About";
// import ContactUs from "./ContactUs";
import Ebook from "./Ebook";

const url = "http://localhost:5000/api/libBooks";

export default function Admin() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showComponent, setShowComponent] = useState("");
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  function handleUpdate(book) {
    setSelectedBook(book);
    setShowComponent("update");
  }

  function handleDelete() {
    setShowComponent("delete");
  }

  function handleCreate() {
    setShowComponent("create");
  }

  function handleRead() {
    setShowComponent("read");
  }

  function handleCancel() {
    setShowComponent("");
  }

  return (
    <div>
      <Header setSearch={setSearch} />
      <div className={styles.container}>
        <Side className={styles.side} setShowComponent={setShowComponent} />
        {showComponent === "users" ? (
          <Users />
        ) : showComponent === "lendings" ? (
          <Lendings />
        ) : showComponent === "request" ? (
          <RequestPage />
        ) : showComponent === "about" ? (
          <About />
        ) : showComponent === "ebook" ? (
          <Ebook />
        ) : (
          <div className={styles.main}>
            <div className={styles.header}>
              <h3>Books</h3>
              <div className={styles.navigateBooks}>
                <button onClick={handleCreate}>Create</button>
                <button onClick={handleRead}>Read</button>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
            {showComponent === "update" ? (
              <Updatebook book={selectedBook} onCancel={handleCancel} />
            ) : showComponent === "delete" ? (
              <Deletebook onCancel={handleCancel} />
            ) : showComponent === "create" ? (
              <Createbook onCancel={handleCancel} />
            ) : showComponent === "read" ? (
              <Readbook onCancel={handleCancel} />
            ) : (
              <div className={styles.tablecontent}>
                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Bookname</th>
                      <th>Author</th>
                      <th>Genre</th>
                      <th>Pages</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <thead>
                    {data
                      .filter((user) => {
                        if (
                          search.toLocaleLowerCase() === "" ||
                          search.toUpperCase() === ""
                        ) {
                          return user;
                        } else {
                          return (
                            user.bookname
                              .toLocaleLowerCase()
                              .includes(search) ||
                            user.bookname.toUpperCase().includes(search)
                          );
                        }
                      })
                      .map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.bookname}</td>
                          <td>{user.Author}</td>
                          <td>{user.genre}</td>
                          <td>{user.pages}</td>
                          <td>{user.availability}</td>
                        </tr>
                      ))}
                  </thead>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
