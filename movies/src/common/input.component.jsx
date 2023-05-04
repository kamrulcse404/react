import React from "react";

const Input = ({ label,type, id, name, value, onChange }) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
