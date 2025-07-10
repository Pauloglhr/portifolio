import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    });

    navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    }) 
  })
  return (
    <NavbarEstilizado>
      <Link to={"/"}>LOGO</Link>
      <div>
        <Link to={"/"}>INÍCIO</Link>
        <Link to={"/About"}>SOBRE MIM</Link>
      </div>
    </NavbarEstilizado>
  );
};

export default Navbar;
