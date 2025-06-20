import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarEstilizado = styled.nav`
    
`

const Navbar = () => {
    return (
        <NavbarEstilizado>
            <Link to={"/"}>Início</Link>
            <div>
                <Link to={"/"}>Portifólio</Link>
                <Link to={"/"}>Sobre Mim</Link>
                <Link to={"/"}>Contato</Link>
            </div>
        </NavbarEstilizado>
    )
}

export default Navbar;