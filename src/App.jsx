import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { Footer, Navbar } from "./components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();
  const [ShowMenuphone, setShowMenuphone] = useState(false);
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <Navbar
        ShowMenuphone={ShowMenuphone}
        setShowMenuphone={setShowMenuphone}
      />
      <main className={`content-wrapper ${ShowMenuphone ? "navbar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home ShowMenuphone={ShowMenuphone} />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
