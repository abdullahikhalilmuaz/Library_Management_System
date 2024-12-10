import React from "react";
import styles from "./header.module.css";
export default function Home({ setSearch }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>HULK POLY LIBRARY</div>
      <input
        type="text"
        placeholder="Search book..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
