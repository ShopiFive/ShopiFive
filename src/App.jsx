import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@shopify/polaris/build/esm/styles.css";

import MobileNav from "./components/MobileNav/MobileNav";
import HomePage from "./pages/HomePage";
import MyPlanPage from "./pages/MyPlanPage";

function App() {
  return (
    <BrowserRouter>
      <MobileNav />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/myplan" element={<MyPlanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
