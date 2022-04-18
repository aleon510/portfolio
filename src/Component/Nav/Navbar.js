import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class='navbar container'>
        <a href='#' class='logo'>
          LOGO
        </a>
        <input type='checkbox' id='toggler' />
        <label for='toggler'>
          <i class='ri-menu-line'></i>
        </label>
        <div class='menu'>
          <ul class='list'>
            <li>
              <a href='#' class='link'>
                Home
              </a>
            </li>
            <li>
              <a href='#' class='link'>
                About
              </a>
            </li>
            <li>
              <a href='#' class='link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
