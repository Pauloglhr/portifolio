import styled from "styled-components";
import imgBackground from "@/assets/projetoImage/1/imagem2.png";
import imgBackground2 from "@/assets/projetoImage/1/imagem.png";
import imgBackground3 from "@/assets/projetoImage/1/imagem3.png";
import { FaGithub } from "react-icons/fa";

const StyledProjectArticle = styled.article`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }

  div > a {
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background-color: white;
      left: 0;
      bottom: -10px;
      transition: 0.3s;
    }
    &:hover {
      color: white;
    }
    &:hover:after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    position: relative;
    letter-spacing: 0.5px;
    font-weight: bolder;
    color: #b8b8b8;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 3rem;
    object-fit: cover;
  }

  .conteudo {
    width: 80%;
    margin: 0 auto;

    color: #e0e0e0;
    line-height: 1.8;
    font-size: 1.3rem;

    h1,
    h2,
    h3 {
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
        content: "»";
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

    .imgsContainer {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin: 3rem 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover;

        flex: 1 1 calc(50% - 0.75rem);

        @media (max-width: 768px) {
          flex-basis: 100%;
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit: cover;

        flex: 1 1 calc(50% - 0.75rem);

        @media (max-width: 768px) {
          flex-basis: 100%;
        }
      }
    }
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const PesquisaEngajamento = () => {
  return (
    <StyledProjectArticle>
      <img
        src={imgBackground}
        alt="Imagem com o texto: Chegou a pesquisa de engajamento. E um botão verde com o texto: Responder"
      />

      <div className="conteudo">
        <h1>PESQUISA DE ENGAJAMENTO</h1>
        <span>
          Uma aplicação web full-stack funcional, projetada para coletar e
          armazenar respostas de usuários de forma intuitiva e eficiente.
        </span>

        <p>
          Este projeto nasceu do desafio de construir uma plataforma de pesquisa
          do zero. O objetivo foi criar uma experiência de usuário limpa, onde a
          navegação entre as perguntas fosse fluida e as respostas fossem
          persistidas de forma segura através de uma API RESTful conectada a um
          banco de dados MySQL.
        </p>

        <h3>Tecnologias e Ferramentas</h3>
        <blockquote>
          <ul>
            <li>
              <strong>Front-End:</strong> React.js, Context API + Hooks, React
              Router, Styled Components e Axios.
            </li>
            <li>
              <strong>Back-End:</strong> API RESTful com Node.js, Express.js,
              MySQL2, CORS e Dotenv para segurança.
            </li>
            <li>
              <strong>Banco de Dados:</strong> MySQL.
            </li>
            <li>
              <strong>Infraestrutura e Deploy:</strong> Vite e Vercel (para o
              front-end).
            </li>
          </ul>
        </blockquote>

        <div className="imgsContainer">
          <img src={imgBackground2} alt="Screenshot da tela de perguntas" />
          <img src={imgBackground3} alt="Screenshot da tela de resultados" />
        </div>

        <h3>Desafios e Aprendizados</h3>
        <p>
          O principal objetivo deste projeto foi solidificar meus conhecimentos
          em toda a pilha de desenvolvimento, enfrentando desafios práticos do
          dia a dia de um desenvolvedor full-stack.
        </p>
        <p>
          <strong>Construção da API RESTful:</strong> Um dos principais marcos
          foi desenvolver o back-end com Express. Pela primeira vez, implementei
          a comunicação entre front-end e back-end, estruturando a API com uma
          arquitetura organizada em controllers e infraestrutura, o que foi
          fundamental para entender o fluxo de dados de ponta a ponta.
        </p>
        <p>
          <strong>Gerenciamento de Estado no Front-End:</strong> Para garantir
          um código limpo e de fácil manutenção, a gestão do estado da aplicação
          (como a pergunta atual e as respostas do usuário) era crucial. A
          solução foi centralizar essa lógica utilizando a **Context API** em
          conjunto com um **hook personalizado (`useApiContext`)**, isolando as
          requisições e o estado do restante da aplicação.
        </p>
        <p>
          <strong>Segurança e Boas Práticas:</strong> Ao final do projeto,
          encarei o desafio de preparar a aplicação para um ambiente real.
          Pesquisei e implementei o uso de **variáveis de ambiente (`.env`)**
          com a biblioteca `dotenv` para proteger dados sensíveis, como as
          credenciais do banco de dados, garantindo que nenhuma informação
          secreta fosse exposta no controle de versão (Git).
        </p>

        <div className="link">
          <a
            href="https://github.com/Pauloglhr/pesquisa-engajamento"
            target="_blank"
          >
            Repositório no github »
          </a>
        </div>
      </div>
    </StyledProjectArticle>
  );
};

export default PesquisaEngajamento;
