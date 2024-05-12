"use client";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useStoreModal } from "@/app/utils/store";


export default function ModalViewUtils() {
  const refPersonInside = useRef(null);
  const { toggleModalViewUtils } = useStoreModal();

  
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        refPersonInside.current &&
        !refPersonInside.current.contains(event.target)
      ) {
        toggleModalViewUtils(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.containerMain} ref={refPersonInside}>
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
