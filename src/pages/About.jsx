import styled from "styled-components";

const StyledAboutPage = styled.section`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  max-width: 900px;
`;

const StyledContentContainer = styled.div``;

const About = () => {
  return (
    <>
      <StyledAboutPage>
        <div className="sobre-container">
          <h2>PAULO TORRES</h2>
          <p>
            {" "}
            Olá! Sou Paulo Guilherme, um desenvolvedor Front-End apaixonado por
            transformar ideias complexas em experiências digitais intuitivas e
            belas.
          </p>
          <p>
            Minha jornada na tecnologia é movida pela curiosidade e pela crença
            de que códigos, podem resolver quaisquer problemas reais e facilitar
            a vida das pessoas.
          </p>
          <p>
            Dediquei meu tempo a aprender as bases de JavaScript, React e SQL,
            desenvolvendo uma base sólida para começar a construir.
          </p>
          <p>
            Estou ansioso para encontrar uma equipe onde eu possa não apenas
            aplicar meu conhecimento, mas principalmente aprender com
            profissionais experientes e contribuir com toda a minha energia e
            dedicação.
          </p>
        </div>
        <div className="experiencia-container">
          <h3>EXPERIÊNCIA</h3>
          <StyledContentContainer>
            <h4>Aspirante-a-oficial R2 - CPOR</h4>
            <span className="content-data">2022 - 2023</span>
            <span className="content-situacao">Período de formação</span>
            <p>
              Durante minha formação no CPOR-R, executei tarefas de gestão de
              recursos e planejamento estratégico, contribuindo para o
              desenvolvimento de disciplina, responsabilidade, liderança,
              trabalho em equipe e cumprimento de metas sob pressão.
            </p>
          </StyledContentContainer>
          <StyledContentContainer>
            <h4>Jovem Aprendiz - ORGUEL</h4>
            <span className="content-data">2023 - Atual</span>
            <span className="content-situacao">Administrativo</span>
            <p>
              Execução de atividades administrativas como elaboração de
              relatórios e controle de planilhas. Desenvolvi automações para
              processos internos com as ferramentas da Power Plataform,
              diminuindo erros manuais, e contribuindo para uma melhor gestão.
            </p>
          </StyledContentContainer>
        </div>
        <div className="educacao-container">
          <h3>EDUCAÇÃO</h3>
          <StyledContentContainer>
            <h4>Engenharia da computação - Uniámerica Descomplica</h4>
            <span className="content-data">2023 - 2027</span>
            <span className="content-situacao">Cursando</span>
          </StyledContentContainer>
          <StyledContentContainer>
            <h4>Alura</h4>
            <span className="content-data">2024 - Atual </span>
            <span className="content-situacao">Cursando</span>
            <p>
              {" "}
              Realização de diversos cursos de tecnologia, aprimorando o meu
              conhecimento obtido na graduação.
            </p>
          </StyledContentContainer>
        </div>
      </StyledAboutPage>
    </>
  );
};

export default About;
