import styled from "styled-components";

const StyledProjectSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 5rem 2rem;
`;

const ProjectSection = () => {
  return (
    <>
    <h3>PROJETOS</h3>
    <StyledProjectSection>
      
    </StyledProjectSection>
    </>
  );
};

export default ProjectSection;
