import React from "react";
import PropTypes from "prop-types"

const Input = ({register, label, name, type, error, required, disabled}) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-slate-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name, { required, disabled })}
        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-300"
      />
      <p>{error}</p>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
}

Input.defaultProps = {
  type: "text",
}

export default Input