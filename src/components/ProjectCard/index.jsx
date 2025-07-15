import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 1px solid #333; */
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;
  width: 300px;

  &:hover {
    transform: scale(1.03);
    h3 {
      display: block;
      position: fixed;
      top: 50%;
      left: 50%;
    }
  }

  img {
    max-height: 500px;
    width: 300px;
  }

  h3 {
    display: none;
  }
`;

const ProjectCard = ({ imagem, titulo }) => {
  return (
    <StyledCard>
      <Link to="/About">
        <img src={imagem} />
        <h3>{titulo}</h3>
      </Link>
    </StyledCard>
  );
};

export default ProjectCard;
