import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.$grande ? '290px' : '100px'};
    height: ${(props) => props.$grande ? '76px' : '50px'};
    font-size: ${(props) => props.$grande ? '24px' : '15px'};
    font-weight: 700;
    border: none;
    border-radius: 8px;
    background-color: #7DFC71;
    color: #1E1E1E;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    
    a {
        text-decoration: none;
        color: #1E1E1E;
    }

    &:hover {
        background-color: #74e970;
        transform: scale(1.03)
    }

    &:active {
        transform: scale(1)
    }
`

export default StyledButton;