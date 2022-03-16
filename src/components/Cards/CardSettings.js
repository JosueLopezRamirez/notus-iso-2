import { Section } from "components/Section";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components

const userSectionfields = [
  {
    name: "username",
    type: "text",
    size: "middle",
    label: "Username",
    required: true,
  },
  {
    name: "email",
    type: "text",
    size: "middle",
    label: "Email address",
    required: true,
  },
  {
    name: "name",
    type: "text",
    size: "middle",
    label: "First Name",
    required: true,
  },
  {
    name: "lastname",
    type: "text",
    size: "middle",
    label: "Last Name",
    required: true,
  },
];

const contactSectionfields = [
  {
    name: "address",
    type: "text",
    label: "Address",
    required: true,
  },
  {
    name: "city",
    type: "text",
    size: "small",
    label: "City",
    required: true,
  },
  {
    name: "country",
    type: "text",
    size: "small",
    label: "country",
    required: true,
  },
  {
    name: "postalCode",
    type: "text",
    size: "small",
    label: "Postal code",
    required: true,
  },
];

export default function CardSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("data", data);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-4">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">My account</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Section
              title="User Information"
              fields={userSectionfields}
              register={register}
              errors={errors}
              separator
            />
            <Section
              title="CONTACT INFORMATION"
              fields={contactSectionfields}
              register={register}
              errors={errors}
              separator
            />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
