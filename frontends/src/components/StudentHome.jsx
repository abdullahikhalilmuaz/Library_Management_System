import styles from "./studenthome.module.css";
export default function StudentHome() {
  function handlenav() {
    
  }
  return (
    <div className={styles.main}>
      <h1 onClick={handlenav}>Welcome! to home component</h1>
    </div>
  );
}
