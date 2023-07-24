import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Bio from "./Pages/Bio/Bio";
import ContactTop from "./Components/ContactTop";
import BackToTopButton from "./Components/BackToTopButton";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ContactTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio />}></Route>
      </Routes>
      <BackToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
