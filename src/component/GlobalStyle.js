import { createGlobalStyle } from "styled-components";
import bgimage from "../images/bgimage.jpg"

export const GlobalStyle = createGlobalStyle`
body{
    background: url(${bgimage}) center no-repeat;
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font family: 'New Tegomin', Serif;
}
`;