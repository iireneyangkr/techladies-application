import styled from "styled-components"

export const Navbar = styled.div`
    background-color: #f7f6f3;
    width: 100%;
    overflow: hidden;
`;

export const Navitem = styled.div`
    a {
        font-weight: ${props => props.match ? "bold" : "normal"};
        color: #333333;
        padding: 25px 25px;
        float: left;
        width: auto;
        border: none;
        display: block;
        outline: 0;
        font-size: 20pt;
        text-decoration: none;
    }
`

export const Title = styled.div`
    font-size: 18pt;
    font-weight: bold;
    margin-bottom: 10px;
    background-color: white;
    width: fit-content;
`

export const Content = styled.div`
    padding: 25px 25px;
    font-size: 16pt;
`

export const Highlight = styled.div`
    padding: 10px 0px 0px 0px;
    color: black;
`