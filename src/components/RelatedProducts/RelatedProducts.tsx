import { useState } from "react";
import styles from "./RelatedProducts.module.scss";
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";
import { useRequestProductData } from "../../services/hooks/useRequestProductData";

interface Props {
  showCategories?: boolean;
}

export function RelatedProducts({ showCategories = true }: Props) {
  const [active, setActive] = useState("CELULAR");

  const categories = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  const productsData = useRequestProductData();

  // const products = [
  //   {
  //     productName: "Iphone 11 PRO MAX BRANCO 1",
  //     descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
  //     photo:
  //       "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
  //     price: 15000,
  //   },
  //   {
  //     productName: "IPHONE 13 MINI 1",
  //     descriptionShort: "IPHONE 13 MINI 1",
  //     photo:
  //       "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
  //     price: 9000,
  //   },
  // ];

  return (
    <section className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.line}></div>
        <h2 className={styles.textTitle}>Produtos relacionados</h2>
        <div className={styles.line}></div>
      </div>
      {showCategories ? (
        <div className={styles.cardMainCategories}>
          <div className={styles.categories}>
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`${styles.category} ${
                  active === cat ? styles.active : ""
                }`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Ver todos</p>
      )}
      {productsData.data?.products && (
        <ProductCarousel products={productsData.data.products} />
      )}
    </section>
  );
}
