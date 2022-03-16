import Input from "components/Input";
import React from "react";

const sizes = {
  middle: "6/12",
  small: "2/6"
};

export const Section = ({ title, fields, separator, register, errors }) => {
  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <Input
            label={field.label}
            register={register}
            name={field.name}
            required={field.required}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <>
      <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
        {title}
      </h6>
      <div className="flex flex-wrap">
        {fields.map((field) => (
          <div className={`w-${field.size ? sizes[field.size] : "full"} px-4`}>
            <div className="relative w-full mb-3">{renderField(field)}</div>
          </div>
        ))}
      </div>
      {separator && <hr className="mt-6 border-b-1 border-slate-300" />}
    </>
  );
};
