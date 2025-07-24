import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import bgProjeto1 from "@/assets/projetoImage/1/imagem.png";
import { useTransitionNavigate } from "@/contexts/NavigationContext";

const StyledProjectSection = styled.section`
  min-height: 60vh;
  h3 {
    text-align: center;
    font-size: clamp(2.5rem, 4vw, 4rem);
    margin-bottom: 2rem;
    color: #ccc;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;

const CardWrapper = styled.div`
  text-decoration: none;
  display: block;
`;

const StyledCard = styled.figure`
  position: relative;
  margin: 0;
  max-width: 500px;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 100%;
    display: block;
    transition: transform 0.4s ease, filter 0.4s ease;
    filter: saturate(0);
  }

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 5; 
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05); 
    filter: saturate(1);
  }

  &:hover::after {
    opacity: 1;
  }
`;

const AnimatedFigcaption = styled.figcaption`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 800;
  color: #ccc;
  text-align: center;
  z-index: 10;
  opacity: 0;
  pointer-events: none;

  .line {
    overflow: hidden;
    padding: 0.1em 0;
  }

  .word-span {
    display: inline-block;
  }
`;

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const captionRef = useRef(null);
  const tl = useRef();

  useGSAP(
    () => {
      const text = new SplitType(captionRef.current, { types: "lines,words" });

      text.words.forEach((word) => {
        const wrapper = document.createElement("div");
        wrapper.className = "line";
        word.parentNode.insertBefore(wrapper, word);
        wrapper.appendChild(word);
        word.classList.add("word-span");
      });

      tl.current = gsap
        .timeline({ paused: true })
        .to(captionRef.current, { opacity: 1, duration: 0.1 })
        .from(text.words, {
          y: "110%",
          opacity: 0,
          rotationZ: 8,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.1,
        });
    },
    { scope: cardRef }
  );

  const handleMouseEnter = () => {
    tl.current.play();
  };

  const handleMouseLeave = () => {
    tl.current.reverse();
  };

  return (
    <CardWrapper
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCard>
        <img src={project.image} alt={project.alt} />
        <AnimatedFigcaption ref={captionRef}>
          {project.title.split(" ").map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </AnimatedFigcaption>
      </StyledCard>
    </CardWrapper>
  );
};

const ProjectSection = () => {
  const projetos = [
    {
      id: 1,
      title: "PESQUISA ENGAJAMENTO",
      image: bgProjeto1,
      alt: "Preview do projeto Pesquisa de Engajamento",
      link: "/projetos/pesquisa-engajamento",
    },
  ];

  const { navigateWithTransition } = useTransitionNavigate();

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    navigateWithTransition(to);
  };

  return (
    <StyledProjectSection>
      <h3>PROJETOS</h3>
      <ProjectsContainer>
        {projetos.map((projeto) => (
          <Link
            key={projeto.id}
            to={projeto.link}
            onClick={(e) => handleLinkClick(e, projeto.link)}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard project={projeto} />
          </Link>
        ))}
      </ProjectsContainer>
    </StyledProjectSection>
  );
};

export default ProjectSection;
