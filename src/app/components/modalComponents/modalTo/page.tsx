"use client";
import styles from "./page.module.css";

export default function ModalTo() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.details} />
      <h3>Socket id</h3>
      <div className={styles.containerInput} tabindex="0">
        <input placeholder="Target Socket id" />
        <div className={styles.containerIcon}>
          {" "}
          <span
            className="material-symbols-outlined"
            style={{ color: "#3b3c3e", fontSize: "20px" }}
          >
            content_paste
          </span>
        </div>
      </div>
    </div>
  );
}
