import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import ResetCss from "@/components/ResetCss";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
