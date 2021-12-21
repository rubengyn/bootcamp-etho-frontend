import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Login from './screens/login/login.screen'
import { LoginPath } from './screens/login/login.types'
import theme from "./themes/main/theme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={LoginPath} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;