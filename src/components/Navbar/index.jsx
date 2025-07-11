import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarEstilizado = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 80px;
  div {
    display: flex;
    gap: 2rem;
    margin-right: 160px;
  }

  a {
    text-decoration: none;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        webkitBackdropFilter: "blur(0px)", 
      },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=150",
          scrub: 1,
        },
      }
    );
  }, []);
  return (
    <NavbarEstilizado>
      <Link to={"/"}>{'<'}PT/{'>'}</Link>
      <div>
        <Link to={"/"}>INÍCIO</Link>
        <Link to={"/About"}>SOBRE MIM</Link>
      </div>
    </NavbarEstilizado>
  );
};

export default Navbar;
