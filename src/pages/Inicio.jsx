import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import StyledContainer from "@/components/StyledContainer";

const Inicio = () => {
  return (
    <>
      <HeroSection />
      <StyledContainer>
        <ProjectsSection />
        <ContactSection />
      </StyledContainer>
    </>
  );
};

export default Inicio;
