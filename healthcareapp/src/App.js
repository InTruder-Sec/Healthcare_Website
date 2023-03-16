import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Gallery from './pages/gallery';
import Blog from './pages/blog';
import Testimonials from './pages/testimonials';
import Services from './pages/services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={< Gallery/>} />
          <Route path='/blog' element={< Blog/>} />
          <Route path='/testimonials' element={< Testimonials/>} />
          <Route path='/services' element={< Services/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
