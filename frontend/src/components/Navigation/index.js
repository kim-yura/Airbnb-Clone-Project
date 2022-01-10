import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
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
        <SignupFormModal />
        {/* <NavLink to="/signup" className="navlinks">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <ul className="navbar-top">
      <li className="navbar-left">
        <NavLink exact to="/">
          <img src="../../logo_rectangle.png" alt="SpareBnB logo"/>
        </NavLink>
      </li>
      <li className="navbar-right">
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
