import styled from "styled-components";

const StyledAboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0c0c0c;
`;

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <h2>Sobre mim!</h2>
      </StyledAboutSection>
    </>
  );
};

export default About;
