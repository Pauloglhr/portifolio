import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import ResetCss from "@/components/ResetCss";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
