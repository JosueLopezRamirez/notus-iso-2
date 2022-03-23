import React, { useEffect, useState } from "react";
import { Section } from "components/Section";
import { useForm } from "react-hook-form";
import { FormWrapper } from "components/Form/FormWrapper";
import CardHeader from "./CardHeader";
import Card from "./Card";
import CardBody from "./CardBody";
// components

const formFields = [
  {
    title: "User Information",
    fields: [
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
    ],
    separator: true,
  },
  {
    title: "CONTACT INFORMATION",
    fields: [
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
        type: "select",
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
    ],
    separator: true,
  },
  {
    title: "About Me",
    fields: [
      {
        name: "aboutme",
        type: "textarea",
        label: "About me",
        required: true,
      },
    ],
  },
];

export default function CardSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [dropdownOptions] = useState({
    country: [{ label: "Nicaragua", value: "Nicaragua" }],
  });

  const onSubmit = (data) => console.log("data", data);
  return (
    <>
      <Card>
        <CardHeader title="Mi Cuenta" />
        <CardBody>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Section
              register={register}
              formFields={formFields}
              control={control}
              errors={errors}
              dropdownOptions={dropdownOptions}
            />
          </FormWrapper>
        </CardBody>
      </Card>
    </>
  );
}
