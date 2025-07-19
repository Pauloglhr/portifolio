import { useTransitionNavigate } from "@/contexts/NavigationContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };

  return (
    <StyledProjectSection>
      <h3>PROJETOS</h3>
      <div className="container-flex">
        <ul>
          <li>
            <Link
              to="/projetos/pesquisa-engajamento"
              onClick={(e) =>
                handleLinkClick(e, "/projetos/pesquisa-engajamento")
              }
            >
              Projeto 1
            </Link>
          </li>
        </ul>
      </div>
    </StyledProjectSection>
  );
};

export default ProjectSection;
