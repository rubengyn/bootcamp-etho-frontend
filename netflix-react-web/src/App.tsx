import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Login from './screens/login/login.screen'
import { LoginPath } from './screens/login/login.types'
import { GlobalStyle } from './themes/main/global-style';
import theme from "./themes/main/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path={LoginPath} element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;