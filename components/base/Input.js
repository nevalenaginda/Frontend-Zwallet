import React from "react";
import propTypes from "prop-types";

function Input(props) {
  const className = ["form-control "];
  className.push(props.className);
  return (
    <>
      <input
        type={props.type}
        className={className.join(" ")}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <style jsx>{`
        input:focus {
          border-color: blue !important;
          box-shadow: none !important;
          outline: 0 none !important;
        }
      `}</style>
    </>
  );
}

Input.propTypes = {
  type: propTypes.string,
  className: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
};

export default Input;
