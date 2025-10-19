import {
  FaLock,
  FaTruck,
  FaCreditCard,
  FaRegUserCircle,
  FaRegHeart,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { TbCrown } from "react-icons/tb";

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
      <div className={styles.mainContainer}>
        <div className={styles.mainBar}>
          <img className={styles.logo} src={logo} alt="Logo" />

          <div className={styles.searchContainer}>
            <input type="text" placeholder="O que você está buscando?" />
            <button>
              <IoSearch size={24} fill="#929291" />
            </button>
          </div>

          <div className={styles.iconGroup}>
            <HiMiniArrowUturnLeft className={styles.icon} />
            <FaRegHeart className={styles.icon} />
            <FaRegUserCircle className={styles.icon} />
            <FiShoppingCart className={styles.icon} />
          </div>
        </div>
      </div>

      {/* Linha inferior - categorias */}
      <div className={styles.mainContainer}>
        <div className={styles.categoriesBar}>
          <span>Todas Categorias</span>
          <span>Supermercado</span>
          <span>Livros</span>
          <span>Moda</span>
          <span>Lançamentos</span>
          <span>Ofertas do Dia</span>
          <span className={styles.subscription}>
            <TbCrown size={25} />
            Assinatura
          </span>
        </div>
      </div>
    </header>
  );
}
