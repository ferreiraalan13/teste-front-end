import { Banner } from "./components/Banner/Banner";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { Header } from "./components/Header/Header";
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
    </>
  );
}

export default App;
