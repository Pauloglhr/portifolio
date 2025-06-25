import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import ResetCss from "@/components/ResetCss";
import StyledContainer from "./components/StyledContainer";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <StyledContainer>
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
        </StyledContainer>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
