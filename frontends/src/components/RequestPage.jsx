import { useState, useEffect } from "react";
import styles from "./request.module.css";
const url = "http://localhost:5000/api/request";
export default function RequestPage() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const formData = {
    title: title,
    message: message,
  };
  // function fetchMessage() {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .then((error) => {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    async function fetchMessage() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchMessage();
  }, []);

  function handleForm(e) {
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
          window.alert("Request has been successfully submitted!");
          setTitle("");
          setMessage("");
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }
  return (
    <div className={styles.request}>
      <div className={styles.container}>
        <div className={styles.req}>
          <div className={styles.contain}></div>
          <div className={styles.form}>
            <form
              action="http://localhost:5000/api/request"
              method="GET"
              onSubmit={handleForm}
            >
              <input
                type="text"
                value={title}
                placeholder="Enter Title..."
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={message}
                placeholder="Enter Request..."
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className={styles.res}>
          <div>
            {" "}
            <ul>
              {data.map((message) => (
                <li key={message.id}>
                  {message.title}{" "}
                  <ul>
                    <li>{message.message}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
