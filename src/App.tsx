import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/nav";
import Shop from './pages/Shop';
import Contact from './pages/Contact';
function App() {

  return (
    <>
     <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
