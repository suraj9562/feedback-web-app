import React from "react";
import PropTypes from "prop-types";

function Header({ text, styleProp }) {
  return (
    <>
      <header
        style={{
          color: styleProp.color,
          backgroundColor: styleProp.backgroundColor,
        }}
      >
        <div className="container">
          <h2> {text} </h2>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
