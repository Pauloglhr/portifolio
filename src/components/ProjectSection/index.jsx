import { useTransitionNavigate } from "@/contexts/NavigationContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgProjeto1 from "@/assets/projetoImage/1/imagem.png";

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

    a {
      text-decoration: none;
    }

  }
`;

const StyledCard = styled.div`
figcaption {
  display: none;
 }

figure {
  &:hover {
    figcaption {
      display: block;
      position: fixed;
      left: 50%;
      top: 50%;
    }
  }
} 

`

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
        <Link
          to="/projetos/pesquisa-engajamento"
          onClick={(e) => handleLinkClick(e, "/projetos/pesquisa-engajamento")}
        >
          <StyledCard>
            <figure>
              <img src={bgProjeto1} alt="" />
              <figcaption>Pesquisa de engajamento.</figcaption>
            </figure>
          </StyledCard>
        </Link>
      </div>
    </StyledProjectSection>
  );
};

export default ProjectSection;
