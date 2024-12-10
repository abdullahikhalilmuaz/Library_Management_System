import styles from "./updatebook.module.css";

export default function Deletebook({ onCancel }) {
  return (
    <>
      <form action="">
        <h2>Delete Book</h2>
        <div className={styles.forms}>
          <div>
            <input type="number" placeholder="Book id" />
            <input type="text" placeholder="Book Name" />
          </div>
          <div>
            <input type="text" placeholder="Book Author" />
            <input type="text" placeholder="Book Genre" />
          </div>
          <div>
            <input type="number" placeholder="Book Pages" />
            <input
              type="submit"
              value="Delete Book"
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