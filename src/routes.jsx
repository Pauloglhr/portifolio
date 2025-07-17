import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import Projeto from "./pages/Projeto";
import About from "./pages/About";
import ResetCss from "@/components/ResetCss";
import Navbar from "./components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { NavigationProvider } from "./contexts/NavigationContext";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <NavigationProvider>
          <Navbar />
          <ReactLenis root>
            <Routes>
              <Route index element={<Inicio />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projeto/:id" element={<Projeto />} />
            </Routes>
          </ReactLenis>
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
