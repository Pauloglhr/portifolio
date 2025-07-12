import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import ResetCss from "@/components/ResetCss";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <Navbar />
        <ReactLenis root>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </ReactLenis>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
