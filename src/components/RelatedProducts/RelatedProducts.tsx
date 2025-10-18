import { useState } from "react";
import styles from "./RelatedProducts.module.scss";

export function RelatedProducts() {
  const [active, setActive] = useState("CELULAR");

  const categories = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.line}></div>
        <h2 className={styles.textTitle}>Produtos relacionados</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.categories}>
        {categories.map((cat) => (
          <div
            key={cat}
            className={`${styles.category} ${
              active === cat ? styles.active : ""
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
