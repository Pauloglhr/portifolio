import styled from "styled-components";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import projetos from "@/json/projetos.json";

import imgProjeto1 from "@/assets/projetoImage/1/imagem.png";
const projectImages = {
  "pesquisa-engajamento.png": imgProjeto1,
};

const StyledPostContainer = styled.article`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 3rem auto;
  }
`;
const MainImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  margin-bottom: 3rem;
  object-fit: fill;
`;

// Contêiner da galeria de imagens (Imagens 2 e 3)
const ImageGalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite quebrar a linha */
  gap: 1.5rem;
  margin: 3rem 0;
`;

// Imagem individual da galeria
const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  
  flex: 1 1 calc(50% - 0.75rem);

  /* RESPONSIVIDADE: Em telas menores, cada imagem ocupa 100% */
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const MarkdownContainer = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.5rem;

  h1, h2, h3 {
    text-align: left;
  }
  
  h3 {
    margin-top: 2.5rem;
    border-bottom: 2px solid #444;
    padding-bottom: 0.5rem;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.5rem;
    
    &::before {
      content: '»';
      position: absolute;
      left: 0;
      color: #4a90e2;
    }
  }

  blockquote {
    border-left: 4px solid #4a90e2;
    background-color: #1c1c1c;
    padding: 1rem 1.5rem;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
  }
`;

const Projeto = () => {
  const { id } = useParams();
  const projetoAtual = projetos.find((p) => p.id === Number(id));

  if (!projetoAtual) {
    return <div>Projeto não encontrado!</div>;
  }

  return (
    <StyledPostContainer>
      <MainImage 
        src={projectImages[projetoAtual.imagem]}
        alt={projetoAtual.mainImage.alt} 
      />

      <MarkdownContainer>
        <h1>{projetoAtual.titulo}</h1>
        <Markdown>{projetoAtual.texto}</Markdown>
      </MarkdownContainer>
    </StyledPostContainer>
  );
};

export default Projeto;