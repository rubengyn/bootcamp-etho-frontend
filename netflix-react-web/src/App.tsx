import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Login from './screens/login/login.screen'
import {LoginPath} from './screens/login/login.types'

function App() {
  return (
    <div>
      <Routes>
        <Route path={LoginPath} element={ <Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;