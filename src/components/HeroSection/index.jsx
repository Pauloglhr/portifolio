import styled from "styled-components";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const StyledHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1, span {
    overflow: hidden;
  }
  
  h1 {
    font-size: 12rem;
    margin: 0;
  }

  span {
    font-size: 2rem;
    line-height: 1.7rem;
  }
`;

const HeroSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      const title = new SplitType("h1", { types: "chars" });
      const subtitle = new SplitType("span", { types: "chars" });

      const tl = gsap.timeline({ delay: 0.5 }); // Reduzi o delay inicial

      tl.from(title.chars, {
          y: 500,
          opacity: 0,
          rotationZ: 15,
          duration: 1,
          ease: "power4.out",
          stagger: 0.05,
        })
        .from(subtitle.chars, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.03,
        },
        "-=0.8" // Controla o início da segunda animação em relação à primeira
      );
    },
    { scope: container }
  );

  return (
    <StyledHeroSection ref={container}>
      <h1>PAULO TORRES</h1>
      <span>WEB DEVELOPER</span>
    </StyledHeroSection>
  );
};

export default HeroSection;