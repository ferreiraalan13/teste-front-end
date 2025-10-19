import { Banner } from "./components/Banner/Banner";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { Header } from "./components/Header/Header";
import { NaveguePorMarcas } from "./components/NaveguePorMarcas/NaveguePorMarcas";
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
      <NaveguePorMarcas />
      <RelatedProducts showCategories={false} />
    </>
  );
}

export default App;
