import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className="navlinks">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className="navbar-top">
      <li className="navbar-left">
        <NavLink exact to="/">
          <img src="../../logo_rectangle.png" />
        </NavLink>
      </li>
      <li className="navbar-right">
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
