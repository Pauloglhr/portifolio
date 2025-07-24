import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 7vh;
`

const Footer = () => {
    return(
        <StyledFooter>
            <span>© 2025 Paulo Torres</span>
            <span>Construído com React e Styled-Components.</span>
        </StyledFooter>        
    )
};

export default Footer;