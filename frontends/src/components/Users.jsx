import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import styles from "./user.module.css";
import { useEffect, useState } from "react";
const url = "http://localhost:5000/api/usercredentials";

export default function Users() {
  const [showComponent, setShowComponent] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  function handleCreate() {
    setShowComponent("create");
  }
  function handleRead() {
    setShowComponent("users");
  }

  function handleUpdate() {
    setShowComponent("update");
  }
  function handleDelete() {
    setShowComponent("delete");
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Users</h3>
        <div className={styles.navigateButtons}>
          <button onClick={handleCreate}>Create</button>
          <button onClick={handleRead}>Read</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: "10px 30px",
              boxSizing: "border-box",
              width: "45%",
              margin: "0px 0px 10px 10px",
              borderRadius: "20px",
              outline: 'none',
              border: "none",
              boxShadow: "0px 0px 4px rgb(150,0,150)",
            }}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </div>
      </div>
      {showComponent === "create" ? (
        <CreateUser />
      ) : showComponent === "read" ? (
        <Users />
      ) : showComponent === "update" ? (
        <UpdateUser />
      ) : showComponent === "delete" ? (
        <DeleteUser />
      ) : (
        <div className={styles.studentstable}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>

            {data
              .filter((user) => {
                if (userSearch.toLocaleUpperCase() === "") {
                  return user;
                } else {
                  return user.firstname
                    .toLocaleLowerCase()
                    .includes(userSearch.toLocaleLowerCase());
                }
              })
              .map((user) => (
                <tbody key={user.id}>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
}
