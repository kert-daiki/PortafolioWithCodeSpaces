/**
 * Header Component
 *
 * Sample of a single responsibility component
 */

import React from "react";
import PropTypes from "prop-types";

const Header = ({ tittle }) => {
  return <h1>Educator React Codespaces JS Template</h1>;
};

Header.propTypes = {
  tittle: PropTypes.string,
};

export default Header;
