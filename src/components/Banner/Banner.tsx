import banner from "../../assets/banner.jpg";
import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.banner} src={banner} alt="banner" />
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>
          Venha conhecer nossas <br />
          promoções
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.offText}>50% Off</span> nos produtos
        </p>
        <button className={styles.button}>Ver produto</button>
      </div>
    </div>
  );
}
