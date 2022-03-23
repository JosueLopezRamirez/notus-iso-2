import React from "react";

export const FormWrapper = ({ onSubmit, children, buttonText = "Guardar" }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="w-full">{children}</div>
      <button
        className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};
