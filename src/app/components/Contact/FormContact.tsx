"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Field, FieldInputProps, FormikErrors, FormikProps } from "formik";
import { Formik, Form, FormikHelpers } from "formik";
import { object, string } from "yup";

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  model: string;
  year: string;
  chasis: string;
  message: string;
}
const CustomInput = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}) => {
  return (
    <Input
      classNames={{
        label: "max-lg:!text-white",
      }}
      {...field}
      {...props}
    />
  );
};

const CustomTextarea = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}) => {
  return (
    <Textarea
      classNames={{
        label: "max-lg:!text-white",
      }}
      {...field}
      {...props}
    />
  );
};

const contactSchema = object({
  name: string().required().min(3),
  phone: string().required().min(3),
  email: string().email().required(),
  model: string().required().min(2),
  year: string().required().min(4),
  chasis: string().optional().min(3),
  message: string().required().min(10),
});

const FormContact = () => {
  const initialValues: ContactFormValues = {
    name: "",
    phone: "",
    email: "",
    model: "",
    year: "",
    chasis: "",
    message: "",
  };

  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const { name, phone, email, model, year, chasis, message } = values;
      fetch(process.env.NEXT_PUBLIC_URL_FORMCARRY as string, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: name,
          email,
          telefono: phone,
          modeloIveco: model,
          anio: year,
          chasis,
          mensaje: message,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.code === 200) {
            alert("¡Consulta enviada!");
            actions.resetForm();
          } else {
            // other error from formcarry
            alert("Hubo un error al enviar la consulta. Por favor, comuniquese al mail Jereleopatagoniasrl@gmail.com");
          }
        });
    } catch (error) {
      console.log(error)
      alert("Hubo un error al enviar la consulta. Por favor, comuniquese al mail Jereleopatagoniasrl@gmail.com");
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      enableReinitialize
      validateOnChange={false}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ errors, isSubmitting, setValues, values }) => (
        <Form className="flex flex-col flex-1 gap-4 items-start z-10 px-4 md:px-6 py-7 md:py-9 text-texto max-lg:bg-texto/30">
          <h3 className="text-xl 2xl:text-2xl font-semibold max-lg:text-white">
            Haga su consulta
          </h3>
          <div className="flex items-center gap-2 mt-2 w-full max-md:flex-wrap">
            <Field
              id="name"
              tabIndex={1}
              component={CustomInput}
              label="Nombre y apellido | Empresa"
              isInvalid={errors.name}
              errorMessage={errors.name && "Campo requerido"}
              labelPlacement="outside"
              name="name"
              placeholder="Ingrese acá el nombre"
            />
            <Field
              id="phone"
              tabIndex={2}
              component={CustomInput}
              label="Teléfono"
              isInvalid={errors.phone}
              errorMessage={errors.phone && "Campo requerido"}
              labelPlacement="outside"
              name="phone"
              placeholder="Ingrese teléfono"
            />
          </div>
          <Field
            id="email"
            tabIndex={3}
            component={CustomInput}
            label="Correo Electrónico"
            isInvalid={errors.email}
            errorMessage={errors.email && "Campo requerido"}
            labelPlacement="outside"
            name="email"
            placeholder="ejemplo@ejemplo.com"
          />
          <div className="flex items-center max-md:gap-4 gap-2 w-full max-md:flex-wrap">
            <Field
              id="model"
              tabIndex={4}
              component={CustomInput}
              label="Modelo del Camión (Iveco)"
              isInvalid={errors.model}
              errorMessage={errors.model && "Campo requerido"}
              labelPlacement="outside"
              name="model"
              placeholder="Ingrese acá el modelo"
            />
            <Field
              id="year"
              tabIndex={5}
              component={CustomInput}
              label="Año"
              className="w-2/5 md:w-1/2"
              isInvalid={errors.year}
              errorMessage={errors.year && "Campo requerido"}
              labelPlacement="outside"
              name="year"
              placeholder="Ingrese año"
            />
            <Field
              id="chasis"
              tabIndex={6}
              component={CustomInput}
              label="Chasis (opcional)"
              isInvalid={errors.chasis}
              className="max-md:flex-1 md:w-4/5"
              labelPlacement="outside"
              name="chasis"
              placeholder="Número de chasis"
            />
          </div>
          <Field
            id="message"
            tabIndex={7}
            component={CustomTextarea}
            label="Escriba su consulta"
            isInvalid={errors.message}
            labelPlacement="outside"
            name="message"
            placeholder="Déjenos su consulta"
          />
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
            className="bg-primario text-white rounded-md font-semibold py-4 px-6 items-center"
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
