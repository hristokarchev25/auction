import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import BidHistory from './components/BidHistory/BidHistory';
import Error from './components/Error/Error';
/* import ErrorTwo from './components/ErrorTwo/ErrorTwo'; */

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/create" component={Create}/>
        <Route path="/bidsHistory" component={BidHistory}/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
