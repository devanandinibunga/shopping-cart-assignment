import "./App.css";
import { Header } from "./components/header/header";
import { ProductList } from "./components/product-list/product-list";
import { CartProvider } from "./context-provider/context";

function App() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  );
}

export default App;
