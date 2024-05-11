"use client";
import styles from "./page.module.css";

export default function ModalAllUser() {
  const users = [];

  return (
    <div className={styles.containerMain}>
      <div className={styles.details}/>      
      {users.length === 0 ? <h6>Online user</h6> : ""}
    </div>
  );
}
