import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './Navigation.module.css';
import route from '../../../routes';

export default function Navigation() {
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
      <NavLink
        to={route.register}
        className={style.navLink}
        activeClassName={style.navLink__active}
      >
        Registration
      </NavLink>
      {/* <NavLink
        to={route.login}
        className={style.navLink}
        activeClassName={style.navLink__active}
      >
        Login
      </NavLink> */}
    </nav>
  );
}
