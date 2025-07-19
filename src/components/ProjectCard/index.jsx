import { useTransitionNavigate } from "@/contexts/NavigationContext";
import { Link } from "react-router-dom";
import projetos from "@/json/projetos.json";
import styled from "styled-components";

import imgProjeto1 from "@/assets/projetoImage/1/imagem.png";

const projectImages = {
  "pesquisa-engajamento.png": imgProjeto1,
};

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
`;

const CardItem = styled.div`
  border-radius: 6px;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  background-image: url(${(props) => props.bgImage});

  height: ${(props) => (props.type === "tall" ? "400px" : "250px")};
  width: ${(props) => (props.type === "tall" ? "300px" : "500px")};
`;

const ProjectCard = () => {
  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };

  return (
    <StyledCardContainer>
      {projetos.map((projeto, index) => {
        return (
          <Link
            key={projeto.id}
            to={`/Projeto/${projeto.id}`}
            onClick={(e) => handleLinkClick(e, `/Projeto/${projeto.id}`)}
            style={{ textDecoration: "none" }}
          >
            <CardItem
              bgImage={projectImages[projeto.imagem]}
              type={projeto.styleCard}
            >
              <span>{projeto.titulo}</span>
            </CardItem>
          </Link>
        );
      })}
    </StyledCardContainer>
  );
};

export default ProjectCard;
