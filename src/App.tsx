import { Banner } from "./components/Banner/Banner";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NaveguePorMarcas } from "./components/NaveguePorMarcas/NaveguePorMarcas";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Parceiros } from "./components/Parceiros/Parceiros";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoryList />
      <RelatedProducts />
      <Parceiros />

      <RelatedProducts showCategories={false} />
      <Parceiros />
      <NaveguePorMarcas />
      <RelatedProducts showCategories={false} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
