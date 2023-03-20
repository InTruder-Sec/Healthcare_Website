import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import Videos from "./pages/Videos";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { HamburgerOpen } from "./components/NavBar/Hamburger";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HamburgerOpen />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
