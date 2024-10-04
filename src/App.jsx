import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Services, Contact, Images } from "./pages/index";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
