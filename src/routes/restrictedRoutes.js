import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { selAuthorization} from './../redux/phonebook/selectors'


const PublickRoute = ({
  component: Component,
  isAuthorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={
      isAuthorized && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...routeProps} />
      )
    }
  />
);

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={
      isAuthorized ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
    isAuthorized: selAuthorization(state)
})


// export default connect(mapStateToProps)(PublickRoute, PrivateRoute)
// export default connect(mapStateToProps)(PrivateRoute)
connect(mapStateToProps)(PrivateRoute)
connect(mapStateToProps)(PublickRoute)
export { PrivateRoute, PublickRoute };
