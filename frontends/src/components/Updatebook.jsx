import styles from "./updatebook.module.css";

export default function Createbook({ onCancel }) {
  return (
    <>
      <form action="">
        <h2>Add Book</h2>
        <div className={styles.forms}>
          <div>
            <input type="number" placeholder="Book id" required />
            <input type="text" placeholder="Book Name" required />
          </div>
          <div>
            <input type="text" placeholder="Book Author" required />
            <input type="text" placeholder="Book Genre" required />
          </div>
          <div>
            <input type="number" placeholder="Book Pages" required />
            <input
              type="submit"
              value="Add Book"
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