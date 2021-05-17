import {BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from './Pages/Layout';

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/" component={Layout}  />
    </Switch>
    </BrowserRouter>
 
  );
}

export default App;
