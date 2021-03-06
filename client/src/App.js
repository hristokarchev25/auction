import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Auth from "./hoc/auth";
import Create from './components/Create/Create';
import Error from './components/Error/Error';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Details from './components/DetailsPage/Details';
import About from './components/About/About';
import Profile from './components/Profile/Profile';

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
              <Route path="/" exact component={Auth(Home, null)} />
              <Route path="/login" component={Auth(Login, false)} />
              <Route path="/register" component={Auth(Register, false)} />
              <Route path="/create" component={Auth(Create, true)} />
              <Route path="/profile" component={Auth(Profile, true)} />
              <Route path="/about" component={Auth(About, false)} />   
              <Route path="/details/product/:productId" component={Auth(Details, true)} />
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
