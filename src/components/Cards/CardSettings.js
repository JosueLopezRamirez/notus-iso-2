import React, { useState } from "react";
import { Section } from "components/Section";
import { useForm } from "react-hook-form";
import { FormWrapper } from "components/Form/FormWrapper";
import CardHeader from "./CardHeader";
import Card from "./Card";
import CardBody from "./CardBody";

const formFields = [
  {
    title: "Informacion paciente",
    fields: [
      {
        name: "name",
        type: "select",
        size: "middle",
        label: "Nombre",
        placeholder: 'Selecciona al paciente',
        required: true,
      },
      {
        name: "lastname",
        type: "text",
        size: "middle",
        label: "Apellido",
        disabled:true,
      },
      {
        name: "fecha_nacimiento",
        type: "date",
        size: "middle",
        label: "Fecha de nacimiento",
        disabled:true,
      },
    ],
    separator: true,
  },
  {
    title: "Informacion de examen",
    fields: [
      {
        name: "examen",
        type: "select",
        size: "middle",
        label: "Examen",
        required: true,
      },
      {
        name: "doctor",
        type: "select",
        size: "middle",
        label: "Doctores",
        required: true,
      },
    ],
    separator: true,
  },
  {
    title: "Detalle del examen",
    fields: [
      {
        name: "aboutme",
        type: "textarea",
        label: "Atributo",
        required: true,
      },
    ],
  },
  {
    title: "Resultado",
    fields: [
      {
        name: "resultado",
        type: "textarea",
        label: "Resultado",
        required: true,
        disabled: true
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
      <CardHeader title="Examen" />
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
