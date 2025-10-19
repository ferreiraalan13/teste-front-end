import {
  FaLock,
  FaTruck,
  FaCreditCard,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Linha superior */}
      <div className={styles.topBar}>
        <div className={styles.infoItem}>
          <FaLock />
          <span>
            Compra <span className={styles.colorText}>100% segura</span>
          </span>
        </div>
        <div className={styles.infoItem}>
          <FaTruck />
          <span>
            <span className={styles.colorText}>Frete grátis</span> acima de R$
            200
          </span>
        </div>
        <div className={styles.infoItem}>
          <FaCreditCard />
          <span>
            {" "}
            <span className={styles.colorText}>Parcele</span> suas compras
          </span>
        </div>
      </div>

      {/* Linha intermediária */}
      <div className={styles.mainBar}>
        <img className={styles.logo} src={logo} alt="Logo" />

        <div className={styles.searchContainer}>
          <input type="text" placeholder="O que você está buscando?" />
          <button>
            <IoSearch size={24} fill="#929291" />
          </button>
        </div>

        <div className={styles.iconGroup}>
          <FaArrowLeft className={styles.icon} />
          <FaHeart className={styles.icon} />
          <FaShoppingCart className={styles.icon} />
          <FaUser className={styles.icon} />
        </div>
      </div>

      {/* Linha inferior - categorias */}
      <div className={styles.categoriesBar}>
        <span>Todas Categorias</span>
        <span>Supermercado</span>
        <span>Livros</span>
        <span>Moda</span>
        <span>Lançamentos</span>
        <span>Ofertas do Dia</span>
        <span className={styles.subscription}>
          <FaStar />
          Assinatura
        </span>
      </div>
    </header>
  );
}
