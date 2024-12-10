import Book from "./Book";
import MakeRequest from "./MakeRequest";
import About from "./About";
import styles from "./sider.module.css";
import Profile from "./Profile";
import StudentHome from "./StudentHome";
import StudentsEbook from "./StudentsEbook";
import Sections from "./Sections";

export default function Sider({ showComponent, setShowComponent, nav }) {
  return (
    <div className={styles.main}>
      <div
        className={`${styles.side} ${nav ? styles.active : ""}`}
        style={{ backgroundColor: "white" }}
      >
        <ul>
          <li onClick={() => setShowComponent("home")}>Home</li>
          <li onClick={() => setShowComponent("book")}>Books</li>
          <li onClick={() => setShowComponent("request")}>My Requests</li>
          <li onClick={() => setShowComponent("sections")}>Sections</li>
          <li onClick={() => setShowComponent("ebooks")}>Ebooks</li>
          <li onClick={() => setShowComponent("about")}>About</li>
          <li onClick={() => setShowComponent("profile")}>Profile</li>
        </ul>
      </div>
      {showComponent === "home" ? (
        <StudentHome />
      ) : showComponent === "book" ? (
        <Book />
      ) : showComponent === "request" ? (
        <MakeRequest />
      ) : showComponent === "about" ? (
        <About />
      ) : showComponent === "profile" ? (
        <Profile />
      ) : showComponent === "ebooks" ? (
        <StudentsEbook />
      ) : showComponent === "sections" ? (
        <Sections />
      ) : (
        <StudentHome />
      )}
    </div>
  );
}
