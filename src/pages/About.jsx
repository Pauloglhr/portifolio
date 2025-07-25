import styled from "styled-components";

const StyledAboutPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0c0c0c;
`;

const About = () => {
  return (
    <>
      <StyledAboutPage>
        <h2>Sobre mim!</h2>
      </StyledAboutPage>
    </>
  );
};

export default About;
