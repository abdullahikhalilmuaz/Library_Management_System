import styles from "./updatebook.module.css";

export default function DeleteUser({ onCancel }) {
  return (
    <>
      <form action="">
        <h2>Add Book</h2>
        <div className={styles.forms}>
          <div>
            <input type="number" placeholder="Student Id" required />
            <input type="text" placeholder="First Name" required />
          </div>
          <div>
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" placeholder="Password" required />
            <input
              type="submit"
              value="Delete User"
              style={{
                width: "45%",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={onCancel}
            />
          </div>
        </div>
      </form>
    </>
  );
}
