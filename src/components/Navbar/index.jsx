import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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
    padding: 0 10px;
    color: #a1a1a1;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLinkClick = (e, to) => {
    e.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

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
      <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
        {"<"}PT/{">"}
      </Link>
      <div>
        <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
          Inicio
        </Link>
        <Link to="/About" onClick={(e) => handleLinkClick(e, "/About")}>
          Sobre Mim
        </Link>
      </div>
    </NavbarEstilizado>
  );
};

export default Navbar;