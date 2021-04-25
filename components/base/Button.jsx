import React from "react";
import propTypes from "prop-types";

function Button(props) {
  return (
    <>
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </>
  );
}
Button.propTypes = {
  className: propTypes.string,
  type: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
};
export default Button;
