import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route path="/"> Home </Route>
        <Route path="/Header"> Home </Route>
      </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
