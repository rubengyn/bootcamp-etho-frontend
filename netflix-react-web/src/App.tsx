import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Login from './screens/login/login.screen'
import { LoginPath } from './screens/login/login.types'
import { GlobalStyle } from './themes/main/global-style';
import theme from "./themes/main/theme"
import { Provider } from 'react-redux';
import store from './store/store/store';
import { HomePath } from './screens/home/home.types'
import UserGuard from './components/rotes/user-guard/user-guard.component';
import Home from './screens/home/home.screen';

function App() {

  const navigate = useNavigate()

  useEffect(
    () => {
      navigate(HomePath)
    }, []
  )
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
          <Route path={HomePath} element={<UserGuard><Home /></UserGuard>} />

        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;