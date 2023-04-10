import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Product";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import images from "./constants/images";

function App() {
  return (
    <div
      className="App w-full bg-no-repeat bg-fixed bg-center"
      style={{
        backgroundImage: `url("${images.bg}")`,
      }}
    >
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
