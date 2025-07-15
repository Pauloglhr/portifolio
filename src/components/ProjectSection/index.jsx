import { useTransitionNavigate } from "@/contexts/NavigationContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imagem1 from "@/assets/imagem.png";

const StyledProjectSection = styled.section`
  min-height: 100vh;
  padding: 25px 80px;
  h3 {
    text-align: center;
    font-size: 4rem;
  }

  .card {
    padding: 1.5rem;
    border-radius: 8px;
    color: white;
    transition: ease 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  .container-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    padding: 1rem;
    align-items: center;
  }
  .container-flex .card {
    height: 400px;
    width: 300px;
    background-color: #4a90e2;
    background-image: url(${imagem1});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .container-flex .card-wide {
    height: 250px;
    width: 500px;
    background-color: #7ed321;
    background-image: url(${imagem1});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ProjectSection = () => {
  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };
  return (
    <StyledProjectSection>
      <h3>PROJETOS</h3>
      <div className="container-flex">
        <Link to="/About" onClick={(e) => handleLinkClick(e, "/About")}>
          <div className="card"><span>Projeto1</span></div>
        </Link>
        <Link to="/About" onClick={(e) => handleLinkClick(e, "/About")}>
          <div className="card card-wide"><span>Projeto2</span></div>
        </Link>
      </div>
    </StyledProjectSection>
  );
};

export default ProjectSection;
