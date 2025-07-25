import styled from "styled-components";
import foto from "@/assets/image/eu.jpeg";
import { Link } from "react-router-dom";
import { useTransitionNavigate } from "@/contexts/NavigationContext";

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

const StyledAboutSection = styled.section`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  align-items: center;
  max-width: 900px;
  padding: 2rem;

  h3 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    margin-bottom: 2rem;
    color: #ccc;
  }

  h4 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    margin-bottom: 1rem;
    color: #ccc;
  }

  p {
    margin: 0.5rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 650px;
    line-height: 1.6;
  }

  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      max-width: 350px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }
  }

  .tecnologias {
    padding: 2rem 0;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
      justify-content: center;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .tecnologia-icon {
      transition: transform 0.2s ease, filter 0.2s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.15);
        filter: brightness(1.2);
      }
    }
  }

  .ver-mais-btn {
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

const technologies = [
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: RiJavascriptFill },
  { name: "React", Icon: FaReact },
  { name: "Git", Icon: FaGitAlt },
  { name: "SQL", Icon: TbSql },
];

const AboutSection = () => {
  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };

  return (
    <StyledAboutSection>
      <h3>Quem sou eu?</h3>
      <div className="conteudo">
        <img
          src={foto}
          alt="Minha foto, utilizando um óculos preto, e com uma camisa preta, ao fundo há um restaurante com sombrinhas decorativas penduradas"
        />
        <h4>Olá, me chamo Paulo!</h4>
        <p>
          Sou um estudante de tecnologia que busca resolver problemas através de
          código, com foco em criar experiências web intuitivas e performáticas.
        </p>
        <p>
          Quer saber um pouco mais da minha história? Clica no botão aqui
          embaixo! 😉
        </p>
      </div>

      <div className="tecnologias">
        <ul>
          {technologies.map(({ name, Icon }) => (
            <li key={name} title={name}>
              <Icon size={"3em"} className="tecnologia-icon" />
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={"/About"}
        onClick={(e) => handleLinkClick(e, "/About")}
        className="ver-mais-btn"
      >
        Ver mais
      </Link>
    </StyledAboutSection>
  );
};

export default AboutSection;
