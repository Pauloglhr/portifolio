import styled from "styled-components";
import foto from "@/assets/foto-ghibli.png";
import StyledButton from "../Button";
import { Link } from "react-router-dom";

const StyledSection = styled.section``;

const HeroSection = () => {
  return (
    <StyledSection>
      <div>
        <h1>
          PAULO TORRES <br />
          <span>WEB DEVELOPMENT</span>
        </h1>
        <StyledButton $grande>
          <a
            href={`/assets/documents/curriculo.pdf`}
            download={`curriculo_paulo-torres.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </StyledButton>
      </div>
      <img
        src={foto}
        alt="Foto de Paulo, desenvolvedor web com a imagem no estilo ghibli."
      />
    </StyledSection>
  );
};

export default HeroSection;
