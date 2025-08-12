import TimelineEntry from "@/components/TimelineEntry";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const StyledAboutPage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 900px;
  padding: 8rem 2rem; 
`;

const Section = styled.section`
  h3 {
    font-size: clamp(2.5rem, 4vw, 3rem);
    margin-bottom: 2.5rem;
    color: #ccc;
    text-align: center;
  }

  .intro-text {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    line-height: 1.7;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
  }
`;

const experienceData = [
  {
    title: "Estagiário - ORGUEL",
    date: "2025 - Atual",
    status: "Administrativo",
    description: "Estagiário de Planejamento e Controle da Manutenção."
  },
  {
    title: "Jovem Aprendiz - ORGUEL",
    date: "2023 - 2025",
    status: "Administrativo",
    description: "Execução de atividades administrativas como elaboração de relatórios e controlo de planilhas. Desenvolvi automações para processos internos com as ferramentas da Power Platform, diminuindo erros manuais e contribuindo para uma melhor gestão."
  },
  {
    title: "Aspirante-a-oficial R2 - CPOR",
    date: "2022 - 2023",
    status: "Período de formação",
    description: "Durante a minha formação no CPOR-R, executei tarefas de gestão de recursos e planeamento estratégico, contribuindo para o desenvolvimento de disciplina, responsabilidade, liderança, trabalho em equipa e cumprimento de metas sob pressão."
  }
];

const educationData = [
  {
    title: "Engenharia da Computação - UniAmérica Descomplica",
    date: "2023 - 2027",
    status: "Cursando"
  },
  {
    title: "Alura - Cursos Online de Tecnologia",
    date: "2024 - Atual",
    status: "Cursando",
    description: "Realização de diversos cursos de tecnologia, aprimorando o meu conhecimento obtido na graduação com foco em desenvolvimento Front-End com React."
  }
];

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const main = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('section');
    sections.forEach(section => {
      const heading = section.querySelector('h3');
      const content = section.querySelectorAll('p, .details, h4');

      const splitHeading = new SplitType(heading, { types: 'words' });

      gsap.from(splitHeading.words, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', 
          toggleActions: 'play none none none'
        }
      });

      gsap.from(content, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, { scope: main });

  return (
    <main ref={main}>
      <StyledAboutPage>
        <Section>
          <h3>PAULO TORRES</h3>
          <p className="intro-text">
            Olá! Meu nome é Paulo Torres, um desenvolvedor Front-End apaixonado por
            transformar ideias complexas em experiências digitais intuitivas e
            belas. A minha jornada na tecnologia é movida pela curiosidade e pela crença
            de que códigos podem resolver problemas reais e facilitar a vida das pessoas.
          </p>
        </Section>

        <Section>
          <h3>EXPERIÊNCIA</h3>
          {experienceData.map(item => (
            <TimelineEntry key={item.title} title={item.title} date={item.date} status={item.status}>
              {item.description}
            </TimelineEntry>
          ))}
        </Section>

        <Section>
          <h3>EDUCAÇÃO</h3>
          {educationData.map(item => (
            <TimelineEntry key={item.title} title={item.title} date={item.date} status={item.status}>
              {item.description}
            </TimelineEntry>
          ))}
        </Section>
      </StyledAboutPage>
    </main>
  );
};

export default About;