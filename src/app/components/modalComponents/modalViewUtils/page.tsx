"use client";
import styles from "./page.module.css";

export default function ModalViewUtils() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.details} />
      <div className={styles.containerText}>
        <div className={styles.text}>
          <h5>SocketID</h5>
          <span
            className="material-symbols-outlined"
            style={{ color: "white", fontSize: "17px", cursor: 'pointer' }}
          >
            wifi
          </span>
        </div>
        <div className={styles.text}>
          <h5>Actions</h5>
          <span className="material-symbols-outlined"  style={{ color: "white", fontSize: "17px", cursor: 'pointer' }}>flash_on</span>
        </div>
      </div>
    </div>
  );
}
