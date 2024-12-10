import React, { useState } from "react";
import styles from "./headerone.module.css";

export default function Home({ setNav, nav }) {
  function hanldeNav() {
    setNav(!nav);
  }

  return (
    <div className={styles.header}>
      <div className={styles.menu} onClick={hanldeNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.logo}>HUK POLY LIBRARY</div>
    </div>
  );
}