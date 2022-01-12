import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle dropdown-button" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div className="dropdown-content">
            <li className="greeting">Welcome, {user.username}!</li>
            {/* <li className="list-link">User Profile</li> */}
            <li>
              <button id="logout-button" onClick={logout}>Log Out</button>
            </li>
          </div>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
