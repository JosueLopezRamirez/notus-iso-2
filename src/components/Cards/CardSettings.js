import React, { useState } from "react";
import { Section } from "components/Section";
import { useForm } from "react-hook-form";
import { FormWrapper } from "components/Form/FormWrapper";
import CardHeader from "./CardHeader";
import Card from "./Card";
import CardBody from "./CardBody";

const formFields = [
  {
    title: "Informacion personal",
    fields: [
      {
        name: "username",
        type: "text",
        size: "middle",
        label: "Nombre de usuario",
        required: true,
      },
      {
        name: "email",
        type: "text",
        size: "middle",
        label: "Correo electronico",
        required: true,
      },
      {
        name: "name",
        type: "text",
        size: "middle",
        label: "Nombre",
        required: true,
      },
      {
        name: "lastname",
        type: "text",
        size: "middle",
        label: "Apellido",
        required: true,
      },
    ],
    separator: true,
  },
  {
    title: "Informacion de Contacto",
    fields: [
      {
        name: "address",
        type: "text",
        size: "middle",
        label: "Direccion",
        required: true,
      },
      {
        name: "city",
        type: "text",
        size: "middle",
        label: "Ciudad",
        required: true,
      },
      {
        name: "country",
        type: "select",
        size: "small",
        label: "Pais",
        required: true,
      },
      {
        name: "postalCode",
        type: "text",
        size: "small",
        label: "Codigo postal",
        required: true,
      },
      {
        name: "createdAt",
        type: "date",
        size: "small",
        label: "Fecha de creacion",
        required: true,
      },
    ],
    separator: true,
  },
  {
    title: "Informacion Adicional",
    fields: [
      {
        name: "aboutme",
        type: "textarea",
        label: "Acerca de",
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
  );
}
