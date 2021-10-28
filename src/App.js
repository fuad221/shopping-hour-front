import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import Card from './components/Card'


function App() {
  return (
    <BrowserRouter>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/header"> <Header /> </Route>
          <Route path="/card"> <Card /> </Route>
        </Switch>
      </Router>



    </BrowserRouter>
  );
}

export default App;
