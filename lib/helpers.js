import React from "react";

const defaultStyles = {
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
};

// Adds default CSS styles to components.
export const withDefaultStyles = Component => ({
  style = {},
  children,
  ...props
}) => {
  return (
    <Component {...props} style={{ ...defaultStyles, ...style }}>
      {children}
    </Component>
  );
};
