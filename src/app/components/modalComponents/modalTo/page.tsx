"use client";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useStoreCommuns } from "@/app/utils/store";

export default function ModalTo() {
  const refPersonInside = useRef(null);
 const {toggleUtilsSelected} = useStoreCommuns()

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        refPersonInside.current &&
        !refPersonInside.current.contains(event.target)
      ) {
        toggleUtilsSelected(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.containerMain} ref={refPersonInside }>
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
