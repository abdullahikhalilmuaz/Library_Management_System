import styles from "./updatebook.module.css";

export default function Readbook({ onCancel }) {
  return (
    <>
      <form action="">
        <h2>Read Book</h2>
        <div className={styles.forms}>
          <div>
            <input type="number" placeholder="Book id" required />
          </div>
          <div>
            <input
              type="submit"
              value="Read Book"
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
