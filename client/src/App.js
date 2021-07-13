import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register"><h1>Register</h1></Route> 
      </Switch>
    </div>
  );
}

export default App;
