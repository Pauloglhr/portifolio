import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import ResetCss from "@/components/ResetCss";
import About from "./pages/About";
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
              <Route path="/" element={<Inicio />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </ReactLenis>
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
