import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Nav = styled.nav`
  height: 10vh;
  background-color: #001724;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const Notes = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
  row-gap: 20px;
  margin: 20px;

  a {
    color: #001724;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
  }
`;