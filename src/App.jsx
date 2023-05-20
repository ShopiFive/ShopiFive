import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@shopify/polaris/build/esm/styles.css";

import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
