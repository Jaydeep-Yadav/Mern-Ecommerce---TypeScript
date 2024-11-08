import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Search from "./pages/search";
import Cart from "./pages/cart";

const App = () => {
  return (
    <BrowserRouter>
      {/* Header */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
