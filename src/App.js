import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Components/Home"
import Card from './Components/Card'


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
