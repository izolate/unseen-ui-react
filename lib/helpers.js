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

function toVal(mix) {
  var k,
    y,
    str = "";
  if (mix) {
    if (typeof mix === "object") {
      if (!!mix.push) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k] && (y = toVal(mix[k]))) {
            str && (str += " ");
            str += y;
          }
        }
      } else {
        for (k in mix) {
          if (mix[k] && (y = toVal(k))) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else if (typeof mix !== "boolean" && !mix.call) {
      str && (str += " ");
      str += mix;
    }
  }
  return str;
}

/*
 * clsx (modified)
 * https://github.com/lukeed/clsx
 */
export const clsx = (...args) => {
  var i = 0,
    x,
    str = "";
  while (i < args.length) {
    if ((x = toVal(args[i++]))) {
      str && (str += " ");
      str += x;
    }
  }
  return str;
};
