"use client";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useStoreModal } from "@/app/utils/store";

export default function ModalAllUser() {
  const refPersonInside = useRef(null);
  const { toggleModalAllUser } = useStoreModal();

  const users = [];
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        refPersonInside.current &&
        !refPersonInside.current.contains(event.target)
      ) {
        toggleModalAllUser(false);
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
      {users.length === 0 ? <h6>Online user</h6> : ""}
    </div>
  );
}
