import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "@shopify/polaris/build/esm/styles.css";

import MobileNav from "./components/MobileNav/MobileNav";
import HomePage from "./pages/HomePage";
import MyPlanPage from "./pages/MyPlanPage";
import BusinessPlanQ3 from "./pages/BusinessPlanQ3";
import MissionStatementPage from "./pages/MissionStatementPage";
import VisionStatementPage from "./pages/VisionStatementPage";
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <BrowserRouter>
      <MobileNav />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/myplan" element={<MyPlanPage />} />
        <Route path="/home/q3" element={<BusinessPlanQ3 />} />
        <Route path="/home/mission" element={<MissionStatementPage />} />
        <Route path="/home/vision" element={<VisionStatementPage />} />
        <Route path="/home/newplan" element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
