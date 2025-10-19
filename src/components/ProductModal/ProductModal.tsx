import { useState, useEffect, type MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Fechar com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Fechar ao clicar fora do modal
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.left}>
          <img
            src={product.photo}
            alt={product.productName}
            className={styles.image}
          />
        </div>

        <div className={styles.right}>
          <h2 className={styles.name}>{product.productName}</h2>
          <p className={styles.price}>{formatPrice(product.price)}</p>

          <div className={styles.secondGroup}>
            <p className={styles.description}>{product.descriptionShort}</p>
            <p className={styles.moreDetails}>
              Veja mais detalhes do produto &gt;
            </p>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantitySelector}>
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button className={styles.buyButton}>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
