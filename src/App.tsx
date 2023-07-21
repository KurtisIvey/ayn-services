import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import History from "./Pages/History/History";
import ContactTop from "./Components/ContactTop";

function App() {
  return (
    <BrowserRouter>
      <ContactTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
