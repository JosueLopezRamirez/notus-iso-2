import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ register, label, name, type, error, required, disabled }) => {
  return (
    <div className="relative w-full">
      <label
        className="block uppercase text-slate-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <textarea
        type={type}
        {...register(name, { required, disabled })}
        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-300"
        defaultValue=""
        rows="4"
        cols={30}
      ></textarea>
      <p>{error}</p>
    </div>
  );
};

TextArea.propTypes = {
  type: PropTypes.string,
};

TextArea.defaultProps = {
  type: "textarea",
};

export default TextArea;
