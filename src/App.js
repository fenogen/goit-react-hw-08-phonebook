import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import route from './routes';

import AppBar from './components/AppBar/AppBar';

import Phonebook from './components/Phonebook/Phonebook';

import './App.css';

const HomePage = lazy(() =>
  import('./pages/Home/HomePage.js' /*webpackChunkName: "HomePage"*/),
);
const LoginPage = lazy(() =>
  import('./pages/Login/LoginPage' /*webpackChunkName: "LoginPage"*/),
);
const RegisterPage = lazy(() =>
  import('./pages/Register/RegisterPage' /*webpackChunkName: "RegisterPage"*/),
);
const ContactsPage = lazy(() =>
  import('./pages/Contacts/ContactsPage' /*webpackChunkName: "ContactsPage"*/),
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Suspense
          fallback={
            // <Loader
            //   type="BallTriangle"
            //   color="#00BFFF"
            //   height={150}
            //   width={150}
            //   style={{
            //     marginLeft: '50%',
            //     transform: 'translate(-50px)',
            //     marginTop: '15%',
            //   }}
            //   // timeout={3000} //3 secs
            // />
            <h1>Loading...</h1>
          }
        >
          <AppBar />
          <Switch>
            <Route exact path={route.home} component={HomePage} />
            <Route exact path={route.login} component={LoginPage} />
            <Route path={route.register} component={RegisterPage} />
            <Route path={route.contacts} component={ContactsPage} />
          </Switch>
        </Suspense>
        <div className="App">
          <Phonebook />
        </div>
      </div>
    );
  }
}

export default App;
