import { useState, type JSX } from "react";
import {
  FaLaptop,
  FaShoppingCart,
  FaWineBottle,
  FaTools,
  FaHeartbeat,
  FaDumbbell,
  FaTshirt,
} from "react-icons/fa";
import styles from "./CategoryList.module.scss";

type Category = {
  id: number;
  name: string;
  icon: JSX.Element;
};

export function CategoryList() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 1, name: "Tecnologia", icon: <FaLaptop /> },
    { id: 2, name: "Supermercado", icon: <FaShoppingCart /> },
    { id: 3, name: "Bebidas", icon: <FaWineBottle /> },
    { id: 4, name: "Ferramentas", icon: <FaTools /> },
    { id: 5, name: "Saúde", icon: <FaHeartbeat /> },
    { id: 6, name: "Esportes e Fitness", icon: <FaDumbbell /> },
    { id: 7, name: "Moda", icon: <FaTshirt /> },
  ];

  return (
    <section className={styles.container}>
      {categories.map((category, index) => (
        <div key={index} className={styles.cardDiv}>
          <div
            key={category.id}
            className={`${styles.card} ${
              activeId === category.id ? styles.active : ""
            }`}
            onClick={() => setActiveId(category.id)}
          >
            <div className={styles.iconWrapper}>{category.icon}</div>
          </div>
          <span
            className={`${styles.name} ${
              activeId === category.id ? styles.active : ""
            }`}
          >
            {category.name}
          </span>
        </div>
      ))}
    </section>
  );
}
