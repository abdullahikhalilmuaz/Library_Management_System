import styles from "./Profile.module.css";
import Profleheader from "./Profileheader";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <Profleheader />
      <div className={styles.main}>
        <i>
          <b>Note:</b>This is optional, you can edit this section but it is only
          for you, the admin already have your details!
        </i>
      </div>
    </div>
  );
}
