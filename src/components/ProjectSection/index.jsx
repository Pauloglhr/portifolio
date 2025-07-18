import styled from "styled-components";
import ProjectCard from "../ProjectCard";

const StyledProjectSection = styled.section`
  min-height: 100vh;
  padding: 25px 80px;
  h3 {
    text-align: center;
    font-size: 4rem;
  }

  .container-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    padding: 1rem;
    align-items: center;
  }
`;

const ProjectSection = () => {
  return (
    <StyledProjectSection>
      <h3>PROJETOS</h3>
      <div className="container-flex">
        <ProjectCard></ProjectCard>
      </div>
    </StyledProjectSection>
  );
};

export default ProjectSection;
