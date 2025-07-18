import { useTransitionNavigate } from "@/contexts/NavigationContext";
import { Link } from "react-router-dom";
import projeto from "@/json/projetos.json";
import styled from "styled-components";
import imagem1 from "@/assets/imagem.png";

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  align-items: center;

  .card {
    padding: 1.5rem;
    border-radius: 8px;
    color: white;
    transition: ease 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  .card {
    height: 400px;
    width: 300px;
    background-color: #4a90e2;
    background-image: url(${imagem1});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-wide {
    height: 250px;
    width: 500px;
    background-color: #7ed321;
    background-image: url(${imagem1});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ProjectCard = () => {
  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };
  return (
    <StyledCard>
      {projeto.map((projeto) => {
        return (
          <Link
            to={`/Projeto/${projeto.id}`}
            onClick={(e) => handleLinkClick(e, `/Projeto/${projeto.id}`)}
          >
            <div className="card card-wide">
              <span>Projeto1</span>
            </div>
          </Link>
        );
      })}
    </StyledCard>
  );
};

export default ProjectCard;
