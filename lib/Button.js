import PropTypes from "prop-types";
import React from "react";

function Button({ type, children, ...rest }) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
  type: "submit"
};

export default Button;
