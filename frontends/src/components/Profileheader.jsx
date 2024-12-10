import styles from "./profileheader.module.css";
export default function Profleheader() {
  return (
    <div className={styles.header}>
      <div>Profile</div>
      <div className={styles.profilename}>User Name</div>
      <div className={styles.nav}>
        <button>+</button>
      </div>
    </div>
  );
}
