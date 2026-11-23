import styles from "./ModuleCards.module.css";

function ModuleCards() {
  return (
    <div className={styles.container}>
      <h2>CSS Modules Cards</h2>

      <div className={styles.grid}>
        <div className={styles.card}>HTML</div>
        <div className={styles.card}>CSS</div>
        <div className={styles.card}>React</div>
      </div>
    </div>
  );
}

export default ModuleCards;