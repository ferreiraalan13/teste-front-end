import { useState, type JSX } from "react";
import styles from "./CategoryList.module.scss";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiBeerStein, PiDressLight, PiHandHeart } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { TbTreadmill } from "react-icons/tb";

type Category = {
  id: number;
  name: string;
  icon: JSX.Element;
};

export function CategoryList() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const categories: Category[] = [
    { id: 1, name: "Tecnologia", icon: <HiOutlineDesktopComputer size={40} /> },
    {
      id: 2,
      name: "Supermercado",
      icon: <HiOutlineBuildingStorefront size={40} />,
    },
    {
      id: 3,
      name: "Bebidas",
      icon: <PiBeerStein size={40} />,
    },
    { id: 4, name: "Ferramentas", icon: <VscTools size={40} /> },
    { id: 5, name: "Saúde", icon: <PiHandHeart size={40} /> },
    { id: 6, name: "Esportes e Fitness", icon: <TbTreadmill size={40} /> },
    { id: 7, name: "Moda", icon: <PiDressLight size={40} /> },
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
