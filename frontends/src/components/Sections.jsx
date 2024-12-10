import { useState } from "react";
import styles from "./sections.module.css";
import Circulation from "./Circulation";
import Acquisition from "./Acquisition";
import Periodics from "./Periodics";
import Dictionary from "./Dictionary";
export default function Sections() {
  const [show, setShow] = useState("");
  const navs = document.getElementById("navs");
  function handleScrollLeft() {
    navs.scrollLeft = navs.scrollLeft - 100;
  }
  function handleScrollRight() {
    navs.scrollLeft = navs.scrollLeft + 100;
  }

  function handleCirculation() {
    setShow("circulation");
  }
  function handleDictionary() {
    setShow("dictionary");
  }
  function handlePeriodics() {
    setShow("periodics");
  }
  function handleAcquisition() {
    setShow("acquisition");
  }
  return (
    <div>
      <div className={styles.header}>
        <button onClick={handleScrollLeft}>&laquo;</button>
        <div className={styles.navs} id="navs">
          <div className={styles.items} onClick={handleCirculation}>
            Circulation
          </div>
          <div className={styles.items} onClick={handleDictionary}>
            Dictionary
          </div>
          <div className={styles.items} onClick={handlePeriodics}>
            Periodics
          </div>
          <div className={styles.items} onClick={handleAcquisition}>
            Acquisition
          </div>
        </div>
        <button onClick={handleScrollRight}>&raquo;</button>
      </div>
      {show === "circulation" ? (
        <Circulation />
      ) : show === "acquisition" ? (
        <Acquisition />
      ) : show === "periodics" ? (
        <Periodics />
      ) : show === "dictionary" ? (
        <Dictionary />
      ) : (
        <div className={styles.main}></div>
      )}
    </div>
  );
}
