"use client";
import styles from "./page.module.css";
import { useStoreCommuns } from "./utils/store";

export default function Home() {
  const { utilsSelected, toggleUtilsSelected } = useStoreCommuns();
  return (
    <div className={styles.containerMain}>
      <main className={styles.main}>
        <div className={styles.topArea}>
          <div className={styles.perfilArea}>
            <div className={styles.circle} />
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
              style={{ color: "#828282" }}
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
