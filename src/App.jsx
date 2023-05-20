import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@shopify/polaris/build/esm/styles.css";

import MobileNav from "./components/MobileNav/MobileNav";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MobileNav />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
