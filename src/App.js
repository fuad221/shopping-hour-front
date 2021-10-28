
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Card from './components/Card'


function App() {
  return (

    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>    <Home />      </Route>
        <Route path="/card">      <Card />      </Route>
      </div>

    </BrowserRouter>
  );
}

export default App;
