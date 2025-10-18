import banner from "../../assets/banner.png";
import styles from "./Banner.module.scss";

export function Banner() {
  return <img className={styles.banner} src={banner} alt="banner" />;
}
