import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Component from './components/Component';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
           <Component></Component>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
