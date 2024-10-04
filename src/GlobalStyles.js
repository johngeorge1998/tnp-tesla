import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

   * {
    font-family: 'Montserrat', sans-serif; /* Change to Montserrat or any other preferred font */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   ::-webkit-scrollbar {
    width: 2px; 
    background-color: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b3b3b3; 
    border-radius: 10px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888888; 
  }
`;

export default GlobalStyle;
