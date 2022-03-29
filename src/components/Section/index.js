import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import Input from "components/Input";
import TextArea from "components/Input/TextArea";

const sizes = {
  middle: "50%",
  small: "33.33%",
  verySmall: "25%",
};

const customStyles = {
  control: () => ({ height: 44, display: "flex" }),
};

export const Section = ({
  register,
  formFields,
  control,
  errors,
  dropdownOptions,
}) => {
  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <Input
            label={field.label}
            register={register}
            name={field.name}
            required={field.required}
            disabled={field.disabled}
            error={errors[field.name]?.message}
          />
        );
      case "textarea":
        return (
          <TextArea
            label={field.label}
            register={register}
            name={field.name}
            required={field.required}
            disabled={field.disabled}
            error={errors[field.name]?.message}
          />
        );
      case "select":
        const placeholder = field.placeholder;
        return (
          <>
            <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
              {field.label}
            </label>
            <Controller
              name={field.name}
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    placeholder={placeholder}
                    className="border-0 h-[44px] placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    options={dropdownOptions[field.name]}
                    styles={customStyles}
                  />
                );
              }}
            />
            <ErrorMessage errors={errors} name={field.name} />
          </>
        );
      case "date":
        const disabled = field.disabled;
        return (
          <>
            <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
              {field.label}
            </label>
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <ReactDatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    disabled={disabled}
                    className="border-0 h-[44px] placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-300"
                  />
                );
              }}
            />
            <ErrorMessage errors={errors} name={field.name} />
          </>
        );
      default:
        return <></>;
    }
  };

  const renderForm = () => {
    return formFields.map(({ title, fields, separator }) => (
      <>
        <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
          {title}
        </h6>
        <div className="flex flex-wrap">
          {fields.map((field) => (
            <div
              className="pr-4"
              style={{ width: field.size ? sizes[field.size] : "100%" }}
            >
              <div className="relative w-full mb-3">{renderField(field)}</div>
            </div>
          ))}
        </div>
        {separator && <hr className="mt-3 border-b-1 border-slate-300" />}
      </>
    ));
  };

  return renderForm();
};
