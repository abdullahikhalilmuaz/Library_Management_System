import { useEffect, useState } from "react";
import styles from "./lendings.module.css";
import AddLends from "./AddLends";
const url = "http://localhost:5000/api/lends";
export default function Lendings() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [showComponent, setShowComponent] = useState("");
  function handleAdd() {
    setShowComponent("addlend");
  }

  function handleReturn(e) {
    e.preventDefault();
  }

  useEffect(() => {
    async function handleFetch() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    handleFetch();
  }, []);
  return (
    <div className={styles.lendings}>
      <h3>Lendings!</h3>
      <div>
        <div className={styles.header}>
          <button onClick={handleAdd}>+</button>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className={styles.search}
          />
        </div>
        {showComponent === "addlend" ? (
          <AddLends />
        ) : (
          <div className={styles.lendsDetailsTable}>
            <table>
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>

                </tr>
              </thead>
              <tbody>
                {data
                  .filter((user) => {
                    if (search.toLowerCase() === "") {
                      return user;
                    } else {
                      return user.firstname.toLowerCase().includes(search);
                    }
                  })
                  .map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastnake}</td>
                      <td>{user.email}</td>
            
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
