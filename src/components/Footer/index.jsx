import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 7vh;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
`

const Footer = () => {
    return(
        <StyledFooter>
            <span>Construído com React e Styled-Components.</span>
            <span>© 2025 Paulo Torres</span>
        </StyledFooter>        
    )
};

export default Footer;