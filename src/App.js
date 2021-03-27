import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import route from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';
import PublickRoute from './routes/PublickRoute';
// import { PrivateRoute, PublickRoute }  from './routes/restrictedRoutes'

import AppBar from './components/AppBar/AppBar';

import Phonebook from './components/Phonebook/Phonebook';
import { getAllContacts, addContact, getCurrentUser } from './redux/phonebook/operations';

import './App.css';
import { connect } from 'react-redux';

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
  
  componentDidMount() {
    this.props.disGetAllContacts();
    this.props.disGetCurentUser();
  }

  render() {
  // this.props.disGetAllContacts()
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
            {/* <Route exact path={route.home} component={HomePage} /> */}
            <PublickRoute
              exact
              path={route.home}
              component={HomePage}
              redirectTo={route.contacts}
              restricted
            />
            <PublickRoute
              path={route.register}
              component={RegisterPage}
              redirectTo={route.contacts}
              restricted
            />
            <PublickRoute
              path={route.login}
              component={LoginPage}
              redirectTo={route.contacts}
              restricted
            />
            {/* <Route exact path={route.login} component={LoginPage} />
            <Route path={route.register} component={RegisterPage} /> */}
            {/* <Route path={route.contacts} component={ContactsPage} /> */}
            <PrivateRoute
              path={route.contacts}
              component={ContactsPage}
              redirectTo={route.home} 
              />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  disGetAllContacts: () => dispatch(getAllContacts()),
  disGetCurentUser: () => dispatch(getCurrentUser()),
});


export default connect(null, mapDispatchToProps)(App);
