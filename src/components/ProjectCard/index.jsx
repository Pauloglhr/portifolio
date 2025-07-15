import styled from "styled-components";

const StyledCard = styled.a`
  background-image: ${(props) => `url(${props.$imagem})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: ${(props) => (props.$wide ? "40vh" : "60vh")};
  width: ${(props) => (props.$wide ? "30vw" : "20vw")};
  min-width: 30vw;
  cursor: pointer;
  &:hover {
    span {
      display: block;
      position: fixed;
      height: 100%;
      top: 50%;
      left: 50%;
    }
  }

  span {
    display: none;
  }
`;

const ProjectCard = ({ imagem, wide = false, titulo }) => {
  return (
    <StyledCard>
    
    </StyledCard>
  );
};

export default ProjectCard;
