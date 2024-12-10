import { useEffect, useState } from "react";
import styles from "./makerequest.module.css";
const url = "http://localhost:5000/api/request";
export default function MakeRequest() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const formData = {
    message: message,
  };

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
          setMessage("");
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }

  return (
    <div className={styles.make}>
      <h3>Book Request && Response</h3>

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
                placeholder="Enter Request..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
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
