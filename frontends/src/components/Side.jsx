import styles from "./side.module.css";
export default function Side({ setShowComponent }) {
  function handleUser() {
    setShowComponent("users");
  }

  function handleHome() {
    setShowComponent("home");
  }

  function handleLendings() {
    setShowComponent("lendings");
  }

  function handleRequest() {
    setShowComponent("request");
  }
  function handleAbout() {
    setShowComponent("about");
  }
  function handleEbooks() {
    setShowComponent("ebook");
  }

  return (
    <div className={styles.side} style={{ background: "white" }}>
      <ul>
        <li onClick={handleHome}>Home</li>
        <li onClick={handleHome}>Books</li>
        <li onClick={handleUser}>Users</li>
        <li onClick={handleLendings}>Lendings</li>
        <li onClick={handleRequest}>Requests</li>
        <li onClick={handleEbooks}>Ebooks</li>
        <li onClick={handleAbout}>About</li>
      </ul>
    </div>
  );
}
