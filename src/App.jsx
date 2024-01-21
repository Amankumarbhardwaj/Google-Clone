import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'; 
import SearchPage from './pages/SearchPage.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
 

  return  (
   
    <div className="App">
          <BrowserRouter>
      <Switch>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
       
      </Switch>
    </BrowserRouter>
    
    </div>
  )
}

export default App
