"use client";
import styles from "./page.module.css";
import { useStoreCommuns } from "./utils/store";

import ModalAllUser from "./components/modalComponents/modalAllUser/page";
import ModalTo from "./components/modalComponents/modalTo/page";
import ModalViewUtils from "./components/modalComponents/modalViewUtils/page";

export default function Home() {
  const {
    utilsSelected,
    toggleUtilsSelected,
    perfilSelected,
    togglePerfilSelected,
  } = useStoreCommuns();
  
  return (
    <div className={styles.containerMain}>
      {/* <ModalAllUser /> */}
      {/* <ModalTo/> */}
      <ModalViewUtils/>
      <main className={styles.main}>
        <div className={styles.topArea}>
          <div className={styles.perfilArea}>
            <div
              className={styles.circle}
              style={{
                color: "#1A5FD5",
                backgroundColor: !perfilSelected ? "#1b262d" : "black",
              }}
              onMouseEnter={() => togglePerfilSelected(true)}
              onMouseLeave={() => togglePerfilSelected(false)}
            >
              {!perfilSelected ? (
                "D"
              ) : (
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#1A5FD5" }}
                >
                  edit
                </span>
              )}
            </div>
            <span
              className="material-symbols-outlined"
              style={{ color: "#747C84", cursor: "pointer" }}
            >
              expand_more
            </span>
          </div>
          <div className={styles.utilsArea}>
            <div className={styles.containerSelector}>
              <div
                className={styles.detailsSelector}
                style={{
                  width: !utilsSelected ? "90px" : "40px",
                  left: !utilsSelected ? "10px" : "113px",
                }}
              />
              <div
                className={styles.containerSelectorItem}
                style={{ width: "90px" }}
                onClick={() => toggleUtilsSelected(false)}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "15px" }}
                >
                  podcasts
                </span>
                <div
                  style={{
                    fontSize: "12px",
                    font: "sans-serif",
                    width: "60px",
                  }}
                >
                  Broadcast
                </div>
              </div>
              <div
                className={styles.containerSelectorItem}
                style={{ width: "40px" }}
                onClick={() => toggleUtilsSelected(true)}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "15px" }}
                >
                  person
                </span>
                <div style={{ fontSize: "12px", font: "sans-serif" }}>To</div>
              </div>
            </div>
            <span
              className="material-symbols-outlined"
              style={{ color: "#828282", cursor: "pointer" }}
            >
              group
            </span>
          </div>
        </div>
        <div className={styles.bottomArea}>
          <textarea placeholder="Type somethig..." />
          <span
            className="material-symbols-outlined"
            style={{ color: "white", fontSize: " 50px", cursor: "pointer" }}
          >
            send
          </span>
        </div>
      </main>
    </div>
  );
}
