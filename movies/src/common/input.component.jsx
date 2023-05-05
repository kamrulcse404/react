import React from "react";

const Input = ({ label,type, id, name, value, onChange, errors }) => {
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
      <div>
        {errors[name] && <div className="alert alert-danger">{ errors[name] }</div>}
      </div>
    </>
  );
};

export default Input;
