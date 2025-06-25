import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarEstilizado = styled.nav`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  padding: 25px 0;
  /* position: fixed;
  top: 0;
  left: 0; */

  div {
    display: flex;
    gap: 2rem;
  }

  div>Link {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <NavbarEstilizado>
      <Link to={"/"}>LOGO</Link>
      <div>
        <Link to={"/"}>INÍCIO</Link>
        <Link to={"/"}>SOBRE MIM</Link>
      </div>
    </NavbarEstilizado>
  );
};

export default Navbar;
