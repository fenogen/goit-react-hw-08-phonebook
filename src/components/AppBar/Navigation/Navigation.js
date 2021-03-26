import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { selAuthorization } from '../../../redux/phonebook/selectors';

import style from './Navigation.module.css';
import route from '../../../routes/routes';

function Navigation({ isAuthorized }) {
  return (
    <nav className={style.flexbox}>
      <NavLink
        exact
        to={route.home}
        className={style.navLink}
        activeClassName={style.navLink__active}
      >
        Home
      </NavLink>
      {!isAuthorized && (
        <div>
          <NavLink
            to={route.register}
            className={style.navLink}
            activeClassName={style.navLink__active}
          >
            Registration
          </NavLink>
          <NavLink
            to={route.login}
            className={style.navLink}
            activeClassName={style.navLink__active}
          >
            Login
          </NavLink>
        </div>
      )}
      {isAuthorized && (
        <div>
          <NavLink
            to={route.login}
            className={style.navLink}
            activeClassName={style.navLink__active}
          >
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuthorized: selAuthorization(state),
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Navigation);
