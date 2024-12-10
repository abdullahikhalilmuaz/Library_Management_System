import { useState } from "react";
import styles from "./updatebook.module.css";
export default function Createbook() {
  const url = "http://localhost:5000/api/usercredentials";

  const [id, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = {
    id: id,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
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
          window.alert(
            data.firstname + data.lastname + "has successfully been added"
          );
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create User</h2>
        <div className={styles.forms}>
          <div>
            <input
              type="number"
              placeholder="Student Id"
              required
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Create User"
              style={{ width: "45%", borderRadius: "5px", cursor: "pointer" }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
