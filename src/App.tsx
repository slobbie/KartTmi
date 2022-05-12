import React from 'react';
import Nav from './layout/nav';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home';

function App() {
  return (
    <section>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;

const Section = styled.section``;

const GlobalStyle = createGlobalStyle`
menu, ol, ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-family: 'Droid Sans', 'Droid Serif';
  line-height: 1;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* min-height: 100vh; */
 
}
a{
  text-decoration: none;
  color: inherit;
} 
`;
