import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import BidHistory from './components/BidHistory/BidHistory';
import Error from './components/Error/Error';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Details from './components/DetailsPage/Details';

function App() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <>
      {Loading === true ?
        (
          <div className="app">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/create" component={Create} />
              <Route path="/bidsHistory" component={BidHistory} />
              <Route path="/details/product/:productId" component={Details} />
              <Route component={Error} />
            </Switch>
          </div>
        ) : (
          <LoadingScreen />
        )}
    </>

  );
}

export default App;
