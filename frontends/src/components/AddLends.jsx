import { useEffect, useState } from "react";
import styles from "./AddLends.module.css";
const url = "http://localhost:5000/api/lends";

export default function AddLends() {
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const formData = {
    id: id,
    firstname: firstname,
    lastname: lastname,
    email: email,
  };
  function handleSubmit(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    window.alert("Student added successfully!");
    setId("");
    setFirstname("");
    setLastname("");
    setEmail("");
  }

  return (
    <div className={styles.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Student Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="+" />
      </form>
    </div>
  );
}
