import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import About from "./pages/About";
import ResetCss from "@/components/ResetCss";
import Navbar from "./components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { NavigationProvider } from "./contexts/NavigationContext";
import PesquisaEngajamento from "./pages/projetos/PesquisaEngajamento";
import Footer from "./components/Footer";

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
              <Route path="/projetos/pesquisa-engajamento" element={<PesquisaEngajamento />}/>
            </Routes>
          </ReactLenis>
          <Footer />
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
