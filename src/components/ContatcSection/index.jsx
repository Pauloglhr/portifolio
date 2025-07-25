import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const StyledContactSection = styled.section`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  text-align: center;
  align-items: center;
  max-width: 900px;

  .conteudo {
    max-width: 800px;
    h3 {
      text-align: center;
      font-size: clamp(2.5rem, 4vw, 4rem);
      margin-bottom: 2rem;
      color: #ccc;
    }
    p {
    margin: 0.5rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 650px;
    line-height: 1.6;
  }
  }

  .social {
    display: flex;
    gap: 3rem;
  }

  .social-icon {
    transition: transform 0.4s ease, filter 0.4s ease;
    &:hover {
      transform: scale(1.5);
    }
  }

  .mailTo {
    background-color: #4a90e2;
    cursor: pointer;
    border: none;
    padding: 1.3rem;
    border-radius: 12px;
    transition: ease 0.2s;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background-color: #376ca8;
    }
  }
`;

const ContactSection = () => {
  return (
    <StyledContactSection>
      <div className="conteudo">
        <h3>Vamos conversar?</h3>
        <p>
          Estou disponível para novas oportunidades e colaborações. <br />
          Adoraria ouvir sobre o seu projeto ou discutir como posso agregar à
          sua equipe!
        </p>
      </div>
      <div className="social">
        <a href="https://github.com/Pauloglhr" target="_blank">
          <FaGithub size={"3em"} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dev-torres" target="_blank">
          <FaLinkedin size={"3em"} className="social-icon" />
        </a>
      </div>
      <a href="mailto:dev.paulotorres@gmail.com" className="mailTo">Enviar Mensagem</a>
    </StyledContactSection>
  );
};

export default ContactSection;
