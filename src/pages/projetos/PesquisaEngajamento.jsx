import styled from "styled-components";
import imgBackground from "@/assets/projetoImage/1/imagem2.png";
import imgBackground2 from "@/assets/projetoImage/1/imagem.png";
import imgBackground3 from "@/assets/projetoImage/1/imagem3.png";

const StyledProjectArticle = styled.article`
  max-width: 900px;
  margin: 4rem auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;

  /* Media query para telas menores (ex: celulares) */
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }

  img {
    width: 100%; /* Ocupa 100% da largura do contêiner */
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
          Um formulário de perguntas construído para coletar opiniões e
          aprimorar meus conhecimentos em React.
        </span>
        <p>
          Este projeto é uma aplicação web de uma plataforma de perguntas que
          desenvolvi para aplicar meus conhecimentos em desenvolvimento
          front-end e resolver um problema proposto por um amigo. O objetivo
          principal era criar uma experiência de usuário limpa e funcional, onde
          fosse possível responder as questões de forma intuitiva.
        </p>
        <h3>
          Para dar vida a este projeto, utilizei as seguintes tecnologias e
          ferramentas:{" "}
        </h3>
        <blockquote>
          <ul>
            <li>Front-End: React.js, HTML5, CSS3, React Router;</li>
            <li>Ferramentas de Build/Deploy: Vite, Vercel.</li>
          </ul>
        </blockquote>
        <p>
          O principal desafio que me propus foi criar uma plataforma de
          perguntas e respostas do zero para entender e aplicar o conceito de
          SPA (Single Page Application).{" "}
        </p>
        <div className="imgsContainer">
          <img src={imgBackground2} alt="" />
          <img src={imgBackground3} alt="" />
        </div>
        <p>
          O objetivo central deste projeto era aprofundar meus conhecimentos em
          React, com um foco especial em dois pilares: a criação de rotas
          dinâmicas com React Router e o desenvolvimento de uma aplicação
          escalável e de fácil manutenção, seguindo as melhores práticas do
          mercado.
        </p>
        <p>
          Durante o desenvolvimento, um dos desafios mais interessantes foi
          criar um sistema de "quiz" dinâmico, onde as perguntas mudam na mesma
          tela sem a necessidade de recarregar a página, proporcionando uma
          experiência fluida ao usuário.
        </p>
        <blockquote>
          <p>
            O Problema: Como gerenciar a exibição sequencial das perguntas,
            permitindo que o usuário avance ou retorne, mantendo a performance
            da aplicação?
          </p>
        </blockquote>
        <blockquote>
          <p>
            A Solução: Para resolver este desafio, utilizei o gerenciamento de
            estado local do React através do hook useState. Criei um estado para
            armazenar o índice da página atual (ex: const [idPaginaAtual,
            setIdPaginaAtuall] = useState(0)).
          </p>
          <p>
            A cada resposta registrada, a função de callback simplesmente
            incrementa ou decrementa esse índice, fazendo com que o React
            renderize eficientemente apenas a nova pergunta correspondente, o
            que otimiza a performance e a experiência do usuário.
          </p>
        </blockquote>
      </div>
    </StyledProjectArticle>
  );
};

export default PesquisaEngajamento;
