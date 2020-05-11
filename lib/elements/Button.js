import PropTypes from "prop-types";
import React from "react";
import { clsx } from "../helpers";

function Button({
  type,
  className,
  primary,
  success,
  warning,
  danger,
  outlined,
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      {...rest}
      className={clsx("control", "button", className, {
        "is-primary": primary,
        "is-success": success,
        "is-warning": warning,
        "is-danger": danger,
        "is-filled": (primary || success || warning || danger) && !outlined,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  filled: PropTypes.bool,
  outlined: PropTypes.bool,
};

Button.defaultProps = {
  type: "submit",
  primary: false,
  success: false,
  warning: false,
  danger: false,
  filled: false,
  outlined: false,
};

export default Button;
