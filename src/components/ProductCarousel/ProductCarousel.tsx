import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./ProductCarousel.module.scss";
import { ProductModal } from "../ProductModal/ProductModal";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface Props {
  products: Product[];
}

export function ProductCarousel({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;

    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <section className={styles.carouselContainer}>
        <button
          className={`${styles.navButton} ${styles.left} ${
            !canScrollLeft ? styles.disabled : ""
          }`}
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
        >
          <FaChevronLeft />
        </button>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={scrollRef}>
            {products.map((product, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={product.photo}
                  alt={product.productName}
                  className={styles.image}
                />
                <p className={styles.desc}>{product.descriptionShort}</p>
                <div className={styles.info}>
                  {/* <h3 className={styles.name}>{product.productName}</h3> */}
                  <p className={styles.price}>{formatPrice(product.price)}</p>
                  <p className={styles.desc}>
                    ou 2x de {formatPrice(product.price / 2)}
                  </p>
                  <p className={styles.freeShipping}>Frete grátis</p>

                  <button
                    className={styles.buyButton}
                    onClick={() => setSelectedProduct(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.right} ${
            !canScrollRight ? styles.disabled : ""
          }`}
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
        >
          <FaChevronRight />
        </button>
      </section>
    </>
  );
}
