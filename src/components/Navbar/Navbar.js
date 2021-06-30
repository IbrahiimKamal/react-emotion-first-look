/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';

import { navbar } from './Navbar.styles';

const Navbar = () => {
  return (
    <nav css={navbar}>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active-link"
            className="links"
            href="#"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="active-link"
            to="/about"
            className="links"
            href="#"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
